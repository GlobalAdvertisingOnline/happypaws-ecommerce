"use client";

import Link from "next/link";
import { CartItem } from "@/lib/types/product";
import { formatPrice } from "@/components/product/PriceDisplay";
import { SHIPPING } from "@/lib/constants";

interface ReviewStepProps {
  contactEmail: string;
  contactPhone: string;
  shippingName: string;
  shippingAddress: string;
  billingName?: string;
  billingAddress?: string;
  cardLast4: string;
  items: CartItem[];
  subtotal: number;
  termsAccepted: boolean;
  onTermsAcceptedChange: (checked: boolean) => void;
  onBack: () => void;
  onPlaceOrder: () => void;
  isSubmitting: boolean;
  error: string | null;
}

export function ReviewStep({
  contactEmail,
  contactPhone,
  shippingName,
  shippingAddress,
  billingName,
  billingAddress,
  cardLast4,
  items,
  subtotal,
  termsAccepted,
  onTermsAcceptedChange,
  onBack,
  onPlaceOrder,
  isSubmitting,
  error,
}: ReviewStepProps) {
  const shippingCost = subtotal >= SHIPPING.freeThreshold ? 0 : SHIPPING.flatRate;
  const total = subtotal + shippingCost;

  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-xl font-bold text-slate-900">Review Your Order</h2>

      {/* Contact */}
      <div className="rounded-lg border border-slate-100 p-4">
        <h3 className="mb-2 text-sm font-semibold text-slate-700">Contact</h3>
        <p className="text-sm text-slate-600">{contactEmail}</p>
        <p className="text-sm text-slate-600">{contactPhone}</p>
      </div>

      {/* Shipping */}
      <div className="rounded-lg border border-slate-100 p-4">
        <h3 className="mb-2 text-sm font-semibold text-slate-700">Ship To</h3>
        <p className="text-sm text-slate-600">{shippingName}</p>
        <p className="text-sm text-slate-600">{shippingAddress}</p>
      </div>

      {/* Billing (only when different from shipping) */}
      {billingName && billingAddress && (
        <div className="rounded-lg border border-slate-100 p-4">
          <h3 className="mb-2 text-sm font-semibold text-slate-700">Bill To</h3>
          <p className="text-sm text-slate-600">{billingName}</p>
          <p className="text-sm text-slate-600">{billingAddress}</p>
        </div>
      )}

      {/* Payment */}
      <div className="rounded-lg border border-slate-100 p-4">
        <h3 className="mb-2 text-sm font-semibold text-slate-700">Payment</h3>
        <p className="text-sm text-slate-600">Card ending in {cardLast4}</p>
      </div>

      {/* Items */}
      <div className="rounded-lg border border-slate-100 p-4">
        <h3 className="mb-3 text-sm font-semibold text-slate-700">Items ({items.length})</h3>
        <div className="flex flex-col gap-2">
          {items.map((item) => (
            <div key={item.variantId} className="flex justify-between text-sm">
              <span className="text-slate-600">
                {item.name} ({item.variantName}) &times; {item.quantity}
              </span>
              <span className="font-medium text-slate-900">
                {formatPrice(item.price * item.quantity)}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-3 border-t border-slate-100 pt-3">
          <div className="flex justify-between text-sm">
            <span className="text-slate-600">Subtotal</span>
            <span className="font-medium">{formatPrice(subtotal)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-slate-600">Shipping</span>
            <span className="font-medium">
              {shippingCost === 0 ? (
                <span className="text-brand-teal">FREE</span>
              ) : (
                formatPrice(shippingCost)
              )}
            </span>
          </div>
          <div className="mt-2 flex justify-between text-base font-bold text-slate-900">
            <span>Total</span>
            <span>{formatPrice(total)}</span>
          </div>
        </div>
      </div>

      {/* Terms of Sale */}
      <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 space-y-3">
        <p className="text-xs text-slate-600">
          Your purchase will appear on your statement as <strong>&quot;HAPPYPAWS&quot;</strong> or{" "}
          <strong>&quot;HAPPYPAWS*8443082059&quot;</strong>.
        </p>
        <div className="text-xs text-slate-500 space-y-1">
          <p>
            All prices are in USD. Orders are subject to availability. Returns accepted within 30 days per our{" "}
            <Link href="/refund-policy" className="underline hover:text-brand-teal">Refund Policy</Link>.
          </p>
        </div>
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={termsAccepted}
            onChange={(e) => onTermsAcceptedChange(e.target.checked)}
            className="mt-0.5 h-4 w-4 rounded border-slate-300 text-brand-teal focus:ring-brand-teal"
          />
          <span className="text-sm text-slate-700">
            I agree to the{" "}
            <Link href="/terms-of-service" className="font-medium underline hover:text-brand-teal">Terms of Service</Link>,{" "}
            <Link href="/privacy-policy" className="font-medium underline hover:text-brand-teal">Privacy Policy</Link>, and{" "}
            <Link href="/refund-policy" className="font-medium underline hover:text-brand-teal">Refund Policy</Link>.
          </span>
        </label>
      </div>

      {/* Error */}
      {error && (
        <div className="rounded-lg border border-brand-red/20 bg-red-50 p-4" role="alert">
          <p className="text-sm font-medium text-brand-red">{error}</p>
        </div>
      )}

      {/* Actions */}
      <div className="flex gap-3">
        <button
          onClick={onBack}
          disabled={isSubmitting}
          className="rounded-xl border border-slate-200 px-6 py-3.5 text-sm font-semibold text-slate-700 transition-all hover:bg-slate-50 disabled:opacity-50"
        >
          Back
        </button>
        <button
          onClick={onPlaceOrder}
          disabled={isSubmitting || !termsAccepted}
          className="btn-shine flex-1 rounded-xl bg-brand-teal px-6 py-4 text-base font-semibold text-white transition-all hover:bg-brand-teal-dark hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Processing..." : "Place Order"}
        </button>
      </div>
    </div>
  );
}
