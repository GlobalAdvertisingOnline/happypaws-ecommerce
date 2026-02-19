"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, X } from "lucide-react";
import { ALL_PRODUCTS } from "@/data/products";
import type { Product } from "@/lib/types/product";

function formatPrice(cents: number): string {
  return `$${(cents / 100).toFixed(2)}`;
}

function searchProducts(query: string): Product[] {
  if (!query || query.length < 2) return [];
  const q = query.toLowerCase();
  return ALL_PRODUCTS.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.shortDescription.toLowerCase().includes(q)
  ).slice(0, 8);
}

export function SearchDialog({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const results = searchProducts(query);

  useEffect(() => {
    if (open) {
      setQuery("");
      // Small delay to ensure the dialog is rendered before focusing
      const t = setTimeout(() => inputRef.current?.focus(), 50);
      return () => clearTimeout(t);
    }
  }, [open]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (open) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
      return () => {
        document.removeEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "";
      };
    }
  }, [open, handleKeyDown]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-start justify-center bg-black/50 backdrop-blur-sm pt-[10vh]"
      onClick={onClose}
    >
      <div
        className="mx-4 w-full max-w-lg rounded-2xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search input */}
        <div className="flex items-center gap-3 border-b border-slate-100 px-4 py-3">
          <Search className="h-5 w-5 shrink-0 text-slate-400" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products..."
            className="flex-1 bg-transparent text-base text-slate-900 outline-none placeholder:text-slate-400"
          />
          <button
            onClick={onClose}
            className="shrink-0 rounded-lg p-1 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600"
            aria-label="Close search"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Results */}
        <div className="max-h-[60vh] overflow-y-auto">
          {query.length < 2 ? (
            <p className="px-4 py-8 text-center text-sm text-slate-400">
              Type at least 2 characters to search
            </p>
          ) : results.length === 0 ? (
            <p className="px-4 py-8 text-center text-sm text-slate-400">
              No products found for &ldquo;{query}&rdquo;
            </p>
          ) : (
            <ul>
              {results.map((product) => (
                <li key={product.slug}>
                  <Link
                    href={`/products/${product.slug}`}
                    onClick={onClose}
                    className="flex items-center gap-3 px-4 py-3 transition-colors hover:bg-slate-50"
                  >
                    <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg bg-slate-100">
                      <Image
                        src={product.images[0].src}
                        alt={product.images[0].alt}
                        fill
                        className="object-cover"
                        sizes="48px"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-medium text-slate-900">
                        {product.name}
                      </p>
                      <p className="text-xs text-slate-500">
                        {product.category}
                      </p>
                    </div>
                    <span className="shrink-0 text-sm font-semibold text-slate-900">
                      {formatPrice(product.variants[0].price)}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Keyboard hint */}
        <div className="border-t border-slate-100 px-4 py-2">
          <p className="text-xs text-slate-400 text-center">
            Press <kbd className="rounded border border-slate-200 bg-slate-50 px-1.5 py-0.5 text-[10px] font-medium text-slate-500">ESC</kbd> to close
          </p>
        </div>
      </div>
    </div>
  );
}
