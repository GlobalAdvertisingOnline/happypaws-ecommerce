"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Product, ProductCategory } from "@/lib/types/product";
import { ProductCard } from "./ProductCard";
import { CategoryFilter } from "./CategoryFilter";
import { getAllCategories } from "@/data/products";

const PAGE_SIZE = 12;

export function ProductGrid({ products }: { products: Product[] }) {
  const searchParams = useSearchParams();
  const [selected, setSelected] = useState<ProductCategory | "All">("All");
  const [visible, setVisible] = useState(PAGE_SIZE);
  const categories = getAllCategories();

  useEffect(() => {
    const cat = searchParams.get("category");
    if (cat && categories.includes(cat as ProductCategory)) {
      setSelected(cat as ProductCategory);
    }
  }, [searchParams, categories]);

  const filtered =
    selected === "All"
      ? products
      : products.filter((p) => p.category === selected);

  // Reset visible count when category changes
  useEffect(() => {
    setVisible(PAGE_SIZE);
  }, [selected]);

  const shown = filtered.slice(0, visible);
  const hasMore = visible < filtered.length;

  return (
    <div>
      <div className="mb-8">
        <CategoryFilter
          categories={categories}
          selected={selected}
          onSelect={setSelected}
        />
      </div>

      {filtered.length === 0 ? (
        <p className="py-12 text-center text-slate-500">
          No products found in this category.
        </p>
      ) : (
        <>
          <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
            {shown.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>

          {hasMore && (
            <div className="mt-10 text-center">
              <button
                onClick={() => setVisible((v) => v + PAGE_SIZE)}
                className="inline-flex items-center justify-center rounded-lg border-2 border-slate-200 bg-white px-8 py-3 text-base font-semibold text-slate-700 transition-all hover:border-brand-teal hover:text-brand-teal"
              >
                Load More ({filtered.length - visible} remaining)
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
