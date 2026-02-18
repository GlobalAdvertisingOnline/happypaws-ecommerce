import { z } from "zod/v4";

export const clickSchema = z.object({
  pageType: z.string().default("checkoutPage"),
});

export const leadSchema = z.object({
  sessionId: z.string().min(1),
  email: z.email(),
  phone: z.string().min(7),
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  address1: z.string().min(1),
  address2: z.string().optional().default(""),
  city: z.string().min(1),
  state: z.string().min(2).max(2),
  zip: z.string().regex(/^\d{5}(-\d{4})?$/),
  country: z.string().default("US"),
  // Optional separate shipping address (when billing ≠ shipping)
  billShipSame: z.string().optional(),
  shipFirstName: z.string().optional(),
  shipLastName: z.string().optional(),
  shipAddress1: z.string().optional(),
  shipAddress2: z.string().optional().default(""),
  shipCity: z.string().optional(),
  shipState: z.string().optional(),
  shipZip: z.string().optional(),
  shipCountry: z.string().optional(),
});

export const orderSchema = z.object({
  sessionId: z.string().min(1),
  email: z.email(),
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  cardNumber: z.string().min(13).max(16),
  cardExpiryDate: z.string().regex(/^\d{2}\/\d{2}$/),
  cvv: z.string().min(3).max(4),
  billShipSame: z.string().optional().default("1"),
  shippingCents: z.number().int().min(0).optional().default(0),
  products: z.array(
    z.object({
      id: z.string(),
      qty: z.number().int().min(1).max(10),
      price: z.number().int().min(1),
      index: z.number().int().min(1).max(5),
    })
  ).min(1).max(5),
});

export const confirmSchema = z.object({
  orderId: z.string().min(1),
});

export const webhookSchema = z.object({
  orderId: z.string().optional(),
  orderStatus: z.string().optional(),
});
