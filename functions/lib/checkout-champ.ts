interface Env {
  CHECKOUT_CHAMP_LOGIN_ID: string;
  CHECKOUT_CHAMP_PASSWORD: string;
  CHECKOUT_CHAMP_CAMPAIGN_ID: string;
  WEBHOOK_SECRET: string;
}

const CC_API_BASE = "https://api.checkoutchamp.com";

interface CCResponse {
  result: string;
  message?: unknown;
  [key: string]: unknown;
}

/** Extract a string field from CC response message (which can be string or object) */
export function extractField(message: unknown, field: string): string | undefined {
  if (typeof message === "object" && message !== null) {
    const val = (message as Record<string, unknown>)[field];
    return typeof val === "string" ? val : undefined;
  }
  if (typeof message === "string") return message;
  return undefined;
}

/** Convert CC message to a human-readable error string */
export function extractErrorMessage(message: unknown, fallback: string): string {
  if (typeof message === "string") return message;
  if (typeof message === "object" && message !== null) {
    // CC returns field-level errors as { fieldName: "error description" }
    const entries = Object.entries(message as Record<string, unknown>);
    if (entries.length > 0) {
      return entries.map(([k, v]) => `${k}: ${v}`).join("; ");
    }
  }
  return fallback;
}

export async function callCheckoutChamp(
  env: Env,
  endpoint: string,
  params: Record<string, string>
): Promise<CCResponse> {
  const normalizedEndpoint = endpoint.endsWith("/") ? endpoint : endpoint + "/";
  const url = new URL(normalizedEndpoint, CC_API_BASE);

  // Auth + all params sent as POST body to keep card data and credentials
  // out of URLs (PCI DSS: sensitive data must not appear in query strings).
  const allParams: Record<string, string> = {
    loginId: env.CHECKOUT_CHAMP_LOGIN_ID,
    password: env.CHECKOUT_CHAMP_PASSWORD,
    ...params,
  };

  const body = new URLSearchParams(allParams);

  let response: Response;
  try {
    response = await fetch(url.toString(), {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: body.toString(),
    });
  } catch {
    // Network errors may contain the full URL with credentials - never propagate
    throw new Error("Unable to reach payment processor. Please try again.");
  }

  if (!response.ok) {
    throw new Error(`CC API error: ${response.status} ${response.statusText}`);
  }

  return response.json() as Promise<CCResponse>;
}

export function jsonResponse(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store",
      "X-Content-Type-Options": "nosniff",
    },
  });
}

export function errorResponse(message: string, status = 400): Response {
  return jsonResponse({ result: "ERROR", message }, status);
}

/** Handle caught errors, returning proper status for validation vs internal errors */
export function handleError(err: unknown): Response {
  // Zod validation errors → 400
  if (err instanceof Error && err.constructor.name === "ZodError") {
    return errorResponse("Invalid request data. Please check your input.", 400);
  }
  // Malformed JSON body → 400
  if (err instanceof SyntaxError) {
    return errorResponse("Invalid JSON in request body.", 400);
  }
  // For known safe error messages (from our own code), pass through.
  // For unknown errors, use generic message to avoid leaking internals.
  const msg = err instanceof Error ? err.message : "";
  const isSafeMessage = msg.startsWith("CC API error:") || msg.startsWith("Unable to reach");
  return errorResponse(
    isSafeMessage ? msg : "Internal error",
    500
  );
}

export type { Env };
