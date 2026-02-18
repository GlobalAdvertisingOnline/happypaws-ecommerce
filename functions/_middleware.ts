export const onRequest: PagesFunction = async (context) => {
  const response = await context.next();

  // Security headers on all API responses
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set("Cache-Control", "no-store");
  response.headers.set(
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload"
  );
  response.headers.set(
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=(), payment=(self)"
  );

  // CORS
  const origin = context.request.headers.get("Origin") || "";
  const allowedOrigins = [
    "https://happypaws.shop",
    "https://www.happypaws.shop",
    "https://happypaws-ecommerce.pages.dev",
    "http://localhost:3000",
    "http://localhost:8788",
  ];

  if (allowedOrigins.includes(origin)) {
    response.headers.set("Access-Control-Allow-Origin", origin);
    response.headers.set("Access-Control-Allow-Methods", "POST, OPTIONS");
    response.headers.set("Access-Control-Allow-Headers", "Content-Type");
  }

  // Handle preflight
  if (context.request.method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers: response.headers,
    });
  }

  return response;
};
