import type { Product } from "@/lib/types/product";

export const tacticalDogCollar: Product = {
  slug: "tactical-dog-collar",
  name: "Tactical Dog Collar",
  shortDescription: "Heavy-duty nylon collar with metal buckle and control handle for working dogs.",
  description: `<p>Military-grade nylon webbing with reinforced metal cobra buckle. Features an integrated grab handle for quick control. MOLLE-compatible webbing allows attachment of accessories.</p>`,
  category: "Collars",
  type: "physical",
  images: [
    { src: "https://pub-e6ac2cc030e3466a91ba67cb97aa6813.r2.dev/happypaws/products/tactical-dog-collar.webp", alt: "Tactical Dog Collar" }
  ],
  variants: [
    {
      id: "variant-180",
      name: "Tactical Dog Collar",
      sku: "HP-010",
      price: 4795,
      compareAtPrice: 9590,
      inStock: true,
    }
  ],
  features: [
    "1000D nylon construction",
    "Metal cobra-style buckle",
    "Built-in control handle",
    "Adjustable 14-24 inches",
    "Width: 1.5 inches"
  ],
  rating: 4.9,
  reviewCount: 678,
  isFeatured: true,
  isNew: false,
  shippingInfo: "Ships within 1-3 business days. Free shipping on orders over $75.",

  seo: {
    title: "Tactical Dog Collar | HappyPaws",
    description: "Heavy-duty nylon collar with metal buckle and control handle for working dogs.",
  },
  checkoutChampProductId: "180",
};
