import type { Metadata } from "next";
import { Suspense } from "react";
import { ALL_PRODUCTS } from "@/data/products";
import { ProductGrid } from "@/components/shop/ProductGrid";

export const metadata: Metadata = {
  title: "Shop All Products",
  description:
    "Browse our premium pet accessories collection. Collars, beds, toys, grooming tools, apparel, and more for dogs and cats. Free shipping on orders over $75.",
};

export default function ShopPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-teal via-brand-teal-dark to-slate-900 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center md:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Shop Our Collection
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-teal-100">
            Premium accessories for dogs and cats. Quality materials,
            thoughtful design, delivered to your door.
          </p>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <Suspense>
            <ProductGrid products={ALL_PRODUCTS} />
          </Suspense>
        </div>
      </section>
    </>
  );
}
