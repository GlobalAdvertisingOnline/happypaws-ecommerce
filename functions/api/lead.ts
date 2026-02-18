import { callCheckoutChamp, jsonResponse, errorResponse, extractErrorMessage, handleError, type Env } from "../lib/checkout-champ";
import { leadSchema } from "../lib/validation";

interface CFContext {
  request: Request;
  env: Env;
}

export const onRequestPost: PagesFunction<Env> = async (context: CFContext) => {
  try {
    const body = await context.request.json();
    const parsed = leadSchema.parse(body);

    const ccParams: Record<string, string> = {
      campaignId: context.env.CHECKOUT_CHAMP_CAMPAIGN_ID,
      sessionId: parsed.sessionId,
      emailAddress: parsed.email,
      phoneNumber: parsed.phone,
      firstName: parsed.firstName,
      lastName: parsed.lastName,
      address1: parsed.address1,
      address2: parsed.address2 || "",
      city: parsed.city,
      state: parsed.state,
      postalCode: parsed.zip,
      country: parsed.country,
      ipAddress: context.request.headers.get("CF-Connecting-IP") || "0.0.0.0",
    };

    // Add separate shipping address when billing ≠ shipping
    if (parsed.billShipSame === "0") {
      ccParams.billShipSame = "0";
      if (parsed.shipFirstName) ccParams.shipFirstName = parsed.shipFirstName;
      if (parsed.shipLastName) ccParams.shipLastName = parsed.shipLastName;
      if (parsed.shipAddress1) ccParams.shipAddress1 = parsed.shipAddress1;
      if (parsed.shipAddress2) ccParams.shipAddress2 = parsed.shipAddress2;
      if (parsed.shipCity) ccParams.shipCity = parsed.shipCity;
      if (parsed.shipState) ccParams.shipState = parsed.shipState;
      if (parsed.shipZip) ccParams.shipPostalCode = parsed.shipZip;
      if (parsed.shipCountry) ccParams.shipCountry = parsed.shipCountry;
    }

    const result = await callCheckoutChamp(context.env, "/leads/import", ccParams);

    if (result.result !== "SUCCESS") {
      return errorResponse(extractErrorMessage(result.message, "Failed to submit lead"), 502);
    }

    return jsonResponse({
      result: "SUCCESS",
    });
  } catch (err) {
    return handleError(err);
  }
};
