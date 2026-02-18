import { callCheckoutChamp, jsonResponse, errorResponse, extractField, extractErrorMessage, handleError, type Env } from "../lib/checkout-champ";
import { clickSchema } from "../lib/validation";

interface CFContext {
  request: Request;
  env: Env;
}

export const onRequestPost: PagesFunction<Env> = async (context: CFContext) => {
  try {
    const body = await context.request.json();
    const parsed = clickSchema.parse(body);

    const result = await callCheckoutChamp(context.env, "/landers/clicks/import", {
      campaignId: context.env.CHECKOUT_CHAMP_CAMPAIGN_ID,
      pageType: parsed.pageType,
      requestUri: context.request.headers.get("Referer") || "https://happypaws.shop/checkout",
      ipAddress: context.request.headers.get("CF-Connecting-IP") || "0.0.0.0",
    });

    if (result.result !== "SUCCESS") {
      return errorResponse(extractErrorMessage(result.message, "Failed to create session"), 502);
    }

    // CC returns sessionId inside message object or as string
    const sessionId = extractField(result.message, "sessionId");

    return jsonResponse({
      sessionId,
      result: "SUCCESS",
    });
  } catch (err) {
    return handleError(err);
  }
};
