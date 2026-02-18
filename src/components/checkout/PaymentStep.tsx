"use client";

import { CreditCard, Lock } from "lucide-react";

interface PaymentData {
  cardNumber: string;
  cardExpiry: string;
  cardCvv: string;
  billingName: string;
  billingSameAsShipping: boolean;
  billingFirstName: string;
  billingLastName: string;
  billingAddress1: string;
  billingAddress2: string;
  billingCity: string;
  billingState: string;
  billingZip: string;
  billingCountry: string;
}

interface PaymentStepProps {
  data: PaymentData;
  onChange: (data: PaymentData) => void;
  errors: Record<string, string>;
  onNext: () => void;
  onBack: () => void;
}

const US_STATES = [
  "AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA",
  "KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ",
  "NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT",
  "VA","WA","WV","WI","WY","DC",
];

function formatCardNumber(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 16);
  return digits.replace(/(\d{4})(?=\d)/g, "$1 ");
}

function formatExpiry(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 4);
  if (digits.length > 2) {
    return `${digits.slice(0, 2)}/${digits.slice(2)}`;
  }
  return digits;
}

export function PaymentStep({
  data,
  onChange,
  errors,
  onNext,
  onBack,
}: PaymentStepProps) {
  const inputClass = (err?: string) =>
    `rounded-lg border px-4 py-3 text-sm text-slate-900 transition-colors focus:border-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-teal/20 ${
      err ? "border-brand-red" : "border-slate-200"
    }`;

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-slate-900">Payment Details</h2>
        <div className="flex items-center gap-1.5 text-brand-teal">
          <Lock className="h-4 w-4" />
          <span className="text-xs font-medium">Secure & Encrypted</span>
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="billingName" className="text-sm font-medium text-slate-700">
          Name on Card <span className="text-brand-red">*</span>
        </label>
        <input
          id="billingName"
          type="text"
          autoComplete="cc-name"
          value={data.billingName}
          onChange={(e) => onChange({ ...data, billingName: e.target.value })}
          className={inputClass(errors.billingName)}
          placeholder="John Smith"
        />
        {errors.billingName && (
          <p className="text-xs text-brand-red" role="alert">{errors.billingName}</p>
        )}
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="cardNumber" className="text-sm font-medium text-slate-700">
          Card Number <span className="text-brand-red">*</span>
        </label>
        <div className="relative">
          <input
            id="cardNumber"
            type="text"
            inputMode="numeric"
            autoComplete="cc-number"
            data-lpignore="true"
            data-1p-ignore
            value={data.cardNumber}
            onChange={(e) =>
              onChange({ ...data, cardNumber: formatCardNumber(e.target.value) })
            }
            className={`w-full ${inputClass(errors.cardNumber)} pr-12 pl-4`}
            placeholder="1234 5678 9012 3456"
            maxLength={19}
          />
          <CreditCard className="absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-300" />
        </div>
        {errors.cardNumber && (
          <p className="text-xs text-brand-red" role="alert">{errors.cardNumber}</p>
        )}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="cardExpiry" className="text-sm font-medium text-slate-700">
            Expiry Date <span className="text-brand-red">*</span>
          </label>
          <input
            id="cardExpiry"
            type="text"
            inputMode="numeric"
            autoComplete="cc-exp"
            value={data.cardExpiry}
            onChange={(e) =>
              onChange({ ...data, cardExpiry: formatExpiry(e.target.value) })
            }
            className={inputClass(errors.cardExpiry)}
            placeholder="MM/YY"
            maxLength={5}
          />
          {errors.cardExpiry && (
            <p className="text-xs text-brand-red" role="alert">{errors.cardExpiry}</p>
          )}
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="cardCvv" className="text-sm font-medium text-slate-700">
            CVV <span className="text-brand-red">*</span>
          </label>
          <input
            id="cardCvv"
            type="text"
            inputMode="numeric"
            autoComplete="off"
            data-lpignore="true"
            data-1p-ignore
            value={data.cardCvv}
            onChange={(e) =>
              onChange({
                ...data,
                cardCvv: e.target.value.replace(/\D/g, "").slice(0, 4),
              })
            }
            className={inputClass(errors.cardCvv)}
            placeholder="123"
            maxLength={4}
          />
          {errors.cardCvv && (
            <p className="text-xs text-brand-red" role="alert">{errors.cardCvv}</p>
          )}
        </div>
      </div>

      <label className="flex items-center gap-3 cursor-pointer">
        <input
          type="checkbox"
          checked={data.billingSameAsShipping}
          onChange={(e) =>
            onChange({ ...data, billingSameAsShipping: e.target.checked })
          }
          className="h-4 w-4 rounded border-slate-300 text-brand-teal focus:ring-brand-teal"
        />
        <span className="text-sm text-slate-600">
          Billing address same as shipping
        </span>
      </label>

      {!data.billingSameAsShipping && (
        <div className="flex flex-col gap-4 rounded-lg border border-slate-100 bg-slate-50/50 p-4">
          <h3 className="text-sm font-semibold text-slate-700">Billing Address</h3>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="billingFirstName" className="text-sm font-medium text-slate-700">
                First Name <span className="text-brand-red">*</span>
              </label>
              <input
                id="billingFirstName"
                type="text"
                autoComplete="billing given-name"
                value={data.billingFirstName}
                onChange={(e) => onChange({ ...data, billingFirstName: e.target.value })}
                className={inputClass(errors.billingFirstName)}
              />
              {errors.billingFirstName && (
                <p className="text-xs text-brand-red" role="alert">{errors.billingFirstName}</p>
              )}
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="billingLastName" className="text-sm font-medium text-slate-700">
                Last Name <span className="text-brand-red">*</span>
              </label>
              <input
                id="billingLastName"
                type="text"
                autoComplete="billing family-name"
                value={data.billingLastName}
                onChange={(e) => onChange({ ...data, billingLastName: e.target.value })}
                className={inputClass(errors.billingLastName)}
              />
              {errors.billingLastName && (
                <p className="text-xs text-brand-red" role="alert">{errors.billingLastName}</p>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="billingAddress1" className="text-sm font-medium text-slate-700">
              Address <span className="text-brand-red">*</span>
            </label>
            <input
              id="billingAddress1"
              type="text"
              autoComplete="billing address-line1"
              value={data.billingAddress1}
              onChange={(e) => onChange({ ...data, billingAddress1: e.target.value })}
              className={inputClass(errors.billingAddress1)}
              placeholder="123 Main St"
            />
            {errors.billingAddress1 && (
              <p className="text-xs text-brand-red" role="alert">{errors.billingAddress1}</p>
            )}
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="billingAddress2" className="text-sm font-medium text-slate-700">
              Apartment, Suite, etc.
            </label>
            <input
              id="billingAddress2"
              type="text"
              autoComplete="billing address-line2"
              value={data.billingAddress2}
              onChange={(e) => onChange({ ...data, billingAddress2: e.target.value })}
              className={inputClass()}
              placeholder="Apt 4B"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="billingCity" className="text-sm font-medium text-slate-700">
                City <span className="text-brand-red">*</span>
              </label>
              <input
                id="billingCity"
                type="text"
                autoComplete="billing address-level2"
                value={data.billingCity}
                onChange={(e) => onChange({ ...data, billingCity: e.target.value })}
                className={inputClass(errors.billingCity)}
              />
              {errors.billingCity && (
                <p className="text-xs text-brand-red" role="alert">{errors.billingCity}</p>
              )}
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="billingState" className="text-sm font-medium text-slate-700">
                State <span className="text-brand-red">*</span>
              </label>
              <select
                id="billingState"
                autoComplete="billing address-level1"
                value={data.billingState}
                onChange={(e) => onChange({ ...data, billingState: e.target.value })}
                className={inputClass(errors.billingState)}
              >
                <option value="">Select</option>
                {US_STATES.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
              {errors.billingState && (
                <p className="text-xs text-brand-red" role="alert">{errors.billingState}</p>
              )}
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="billingZip" className="text-sm font-medium text-slate-700">
                ZIP Code <span className="text-brand-red">*</span>
              </label>
              <input
                id="billingZip"
                type="text"
                autoComplete="billing postal-code"
                value={data.billingZip}
                onChange={(e) => onChange({ ...data, billingZip: e.target.value })}
                className={inputClass(errors.billingZip)}
                placeholder="12345"
              />
              {errors.billingZip && (
                <p className="text-xs text-brand-red" role="alert">{errors.billingZip}</p>
              )}
            </div>
          </div>
        </div>
      )}

      <div className="flex gap-3">
        <button
          onClick={onBack}
          className="rounded-xl border border-slate-200 px-6 py-3.5 text-sm font-semibold text-slate-700 transition-all hover:bg-slate-50"
        >
          Back
        </button>
        <button
          onClick={onNext}
          className="flex-1 rounded-xl bg-brand-teal px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-brand-teal-dark hover:shadow-md"
        >
          Review Order
        </button>
      </div>
    </div>
  );
}
