import type { Product } from "@/lib/types/product";

export const stainlessSteelComb: Product = {
  slug: "stainless-steel-comb",
  name: "Stainless Steel Comb",
  shortDescription: "Dual-width stainless steel comb with fine and coarse teeth for all coat types.",
  description: `<p>Single-piece stainless steel comb with two tooth densities. Fine teeth detect tangles and fleas while coarse teeth work through thick coats. Rounded tooth tips prevent skin irritation.</p>`,
  category: "Grooming",
  type: "physical",
  images: [
    { src: "https://pub-e6ac2cc030e3466a91ba67cb97aa6813.r2.dev/happypaws/products/stainless-steel-comb.webp", alt: "Stainless Steel Comb" }
  ],
  variants: [
    {
      id: "variant-214",
      name: "Stainless Steel Comb",
      sku: "HP-044",
      price: 1195,
      compareAtPrice: 2390,
      inStock: true,
    }
  ],
  features: [
    "Solid stainless steel construction",
    "Dual tooth widths",
    "Rounded tooth tips",
    "Length: 7.5 inches",
    "Wipe clean with cloth"
  ],
  rating: 4.6,
  reviewCount: 423,
  isFeatured: false,
  isNew: false,
  shippingInfo: "Ships within 1-3 business days. Free shipping on orders over $75.",

  seo: {
    title: "Stainless Steel Comb | HappyPaws",
    description: "Dual-width stainless steel comb with fine and coarse teeth for all coat types.",
  },
  checkoutChampProductId: "214",
};
