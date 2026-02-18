import { callCheckoutChamp, jsonResponse, extractField, extractErrorMessage, handleError, type Env } from "../lib/checkout-champ";
import { orderSchema } from "../lib/validation";

interface CFContext {
  request: Request;
  env: Env;
}

export const onRequestPost: PagesFunction<Env> = async (context: CFContext) => {
  try {
    const body = await context.request.json();
    const parsed = orderSchema.parse(body);

    // Build product params (CC expects product1, product1Qty, product1Price, etc.)
    const productParams: Record<string, string> = {};
    for (const product of parsed.products) {
      const idx = product.index;
      productParams[`product${idx}_id`] = product.id;
      productParams[`product${idx}_qty`] = String(product.qty);
      productParams[`product${idx}_price`] = (product.price / 100).toFixed(2);
    }

    // Add shipping to first product if applicable
    if (parsed.shippingCents && parsed.shippingCents > 0) {
      productParams[`product1_shipPrice`] = (parsed.shippingCents / 100).toFixed(2);
    }

    // SECURITY: Card data is validated but NEVER logged or stored.
    // It is forwarded directly to Checkout Champ and immediately discarded.
    const result = await callCheckoutChamp(context.env, "/order/import", {
      campaignId: context.env.CHECKOUT_CHAMP_CAMPAIGN_ID,
      sessionId: parsed.sessionId,
      emailAddress: parsed.email,
      firstName: parsed.firstName,
      lastName: parsed.lastName,
      paySource: "CREDITCARD",
      billShipSame: parsed.billShipSame,
      cardNumber: parsed.cardNumber,
      cardExpiryDate: parsed.cardExpiryDate,
      CVV: parsed.cvv,
      ipAddress: context.request.headers.get("CF-Connecting-IP") || "0.0.0.0",
      ...productParams,
    });

    if (result.result !== "SUCCESS") {
      return jsonResponse(
        {
          result: "ERROR",
          message: extractErrorMessage(
            result.message,
            "Payment declined. Please check your card details or try another card."
          ),
          errorCode: result.errorCode || null,
        },
        422
      );
    }

    // CC returns orderId inside message object or as string
    const orderId = extractField(result.message, "orderId");

    return jsonResponse({
      result: "SUCCESS",
      orderId,
    });
  } catch (err) {
    return handleError(err);
  }
};
