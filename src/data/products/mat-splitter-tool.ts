import type { Product } from "@/lib/types/product";

export const matSplitterTool: Product = {
  slug: "mat-splitter-tool",
  name: "Mat Splitter Tool",
  shortDescription: "Stainless steel mat splitter with multiple blades for breaking up tangled fur.",
  description: `<p>Heavy-duty mat breaker featuring multiple stainless steel cutting blades set in an ergonomic handle. Blades cut through mats without pulling. Safety guard protects skin.</p>`,
  category: "Grooming",
  type: "physical",
  images: [
    { src: "https://pub-e6ac2cc030e3466a91ba67cb97aa6813.r2.dev/happypaws/products/mat-splitter-tool.webp", alt: "Mat Splitter Tool" }
  ],
  variants: [
    {
      id: "variant-237",
      name: "Mat Splitter Tool",
      sku: "HP-048",
      price: 1695,
      compareAtPrice: 3390,
      inStock: true,
    }
  ],
  features: [
    "Stainless steel blades",
    "Ergonomic handle grip",
    "Built-in safety guard",
    "Length: 6 inches",
    "Clean blades after use"
  ],
  rating: 4.6,
  reviewCount: 189,
  isFeatured: false,
  isNew: false,
  shippingInfo: "Ships within 1-3 business days. Free shipping on orders over $75.",

  seo: {
    title: "Mat Splitter Tool | HappyPaws",
    description: "Stainless steel mat splitter with multiple blades for breaking up tangled fur.",
  },
  checkoutChampProductId: "237",
};
