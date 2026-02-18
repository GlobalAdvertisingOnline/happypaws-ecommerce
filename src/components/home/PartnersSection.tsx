"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

function VisaIcon() {
  return (
    <svg viewBox="0 0 80 50" className="h-8 w-auto" aria-label="Visa">
      <rect width="80" height="50" rx="6" fill="#1A1F71" />
      <text x="40" y="31" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold" fontFamily="Arial, sans-serif" fontStyle="italic">
        VISA
      </text>
      <rect x="0" y="42" width="80" height="8" rx="0 0 6 6" fill="#F7B600" />
    </svg>
  );
}

function MastercardIcon() {
  return (
    <svg viewBox="0 0 80 50" className="h-8 w-auto" aria-label="Mastercard">
      <rect width="80" height="50" rx="6" fill="#252525" />
      <circle cx="32" cy="25" r="14" fill="#EB001B" />
      <circle cx="48" cy="25" r="14" fill="#F79E1B" />
      <path d="M40 14.36a14 14 0 0 1 0 21.28 14 14 0 0 1 0-21.28z" fill="#FF5F00" />
    </svg>
  );
}

function AmexIcon() {
  return (
    <svg viewBox="0 0 80 50" className="h-8 w-auto" aria-label="American Express">
      <rect width="80" height="50" rx="6" fill="#006FCF" />
      <text x="40" y="24" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold" fontFamily="Arial, sans-serif">
        AMERICAN
      </text>
      <text x="40" y="36" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold" fontFamily="Arial, sans-serif">
        EXPRESS
      </text>
    </svg>
  );
}

function DiscoverIcon() {
  return (
    <svg viewBox="0 0 80 50" className="h-8 w-auto" aria-label="Discover">
      <rect width="80" height="50" rx="6" fill="#F5F7FA" stroke="#E2E8F0" strokeWidth="1" />
      <circle cx="52" cy="25" r="12" fill="#F48120" />
      <text x="12" y="31" fill="#1A1F36" fontSize="11" fontWeight="bold" fontFamily="Arial, sans-serif">
        DISCOVER
      </text>
    </svg>
  );
}

function USPSBadge() {
  return (
    <svg viewBox="0 0 90 50" className="h-9 w-auto" aria-label="USPS">
      <rect width="90" height="50" rx="6" fill="#333366" />
      <rect x="0" y="38" width="90" height="12" rx="0" fill="#FFFFFF" />
      <rect x="0" y="38" width="90" height="4" fill="#CC0000" />
      <text x="45" y="28" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold" fontFamily="Arial, sans-serif" letterSpacing="2">
        USPS
      </text>
    </svg>
  );
}

function UPSBadge() {
  return (
    <svg viewBox="0 0 90 50" className="h-9 w-auto" aria-label="UPS">
      <rect width="90" height="50" rx="6" fill="#351C15" />
      <path d="M45 6 L62 14 L62 32 Q62 42 45 46 Q28 42 28 32 L28 14 Z" fill="#FFB500" />
      <text x="45" y="34" textAnchor="middle" fill="#351C15" fontSize="14" fontWeight="bold" fontFamily="Arial, sans-serif">
        UPS
      </text>
    </svg>
  );
}

function FedExBadge() {
  return (
    <svg viewBox="0 0 90 50" className="h-9 w-auto" aria-label="FedEx">
      <rect width="90" height="50" rx="6" fill="#4D148C" />
      <text x="16" y="33" fill="white" fontSize="18" fontWeight="bold" fontFamily="Arial, sans-serif">
        Fed
      </text>
      <text x="52" y="33" fill="#FF6600" fontSize="18" fontWeight="bold" fontFamily="Arial, sans-serif">
        Ex
      </text>
    </svg>
  );
}

function DHLBadge() {
  return (
    <svg viewBox="0 0 90 50" className="h-9 w-auto" aria-label="DHL">
      <rect width="90" height="50" rx="6" fill="#FFCC00" />
      <rect x="8" y="18" width="74" height="18" rx="2" fill="#D40511" />
      <text x="45" y="32" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold" fontFamily="Arial, sans-serif" letterSpacing="3">
        DHL
      </text>
    </svg>
  );
}

export function PartnersSection() {
  const paymentRef = useScrollReveal<HTMLDivElement>();
  const shippingRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className="border-t border-slate-100 bg-slate-50 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        {/* Payment Methods */}
        <div ref={paymentRef} className="scroll-reveal text-center">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
            Accepted Payment Methods
          </h3>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:gap-6">
            <VisaIcon />
            <MastercardIcon />
            <AmexIcon />
            <DiscoverIcon />
          </div>
        </div>

        {/* Shipping Partners */}
        <div ref={shippingRef} className="scroll-reveal mt-12 text-center">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
            Trusted Shipping Partners
          </h3>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:gap-6">
            <USPSBadge />
            <UPSBadge />
            <FedExBadge />
            <DHLBadge />
          </div>
        </div>
      </div>
    </section>
  );
}
