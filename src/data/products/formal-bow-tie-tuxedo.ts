import type { Product } from "@/lib/types/product";

export const formalBowTieTuxedo: Product = {
  slug: "formal-bow-tie-tuxedo",
  name: "Formal Bow Tie Tuxedo",
  shortDescription: "Polyester tuxedo-style shirt front with attached bow tie for special occasions.",
  description: `<p>Formal bib-style garment featuring a polyester tuxedo front with attached fabric bow tie. Elastic straps wrap around front legs for secure fit. Gives the appearance of formal attire.</p>`,
  category: "Apparel",
  type: "physical",
  images: [
    { src: "https://pub-e6ac2cc030e3466a91ba67cb97aa6813.r2.dev/happypaws/products/formal-bow-tie-tuxedo.webp", alt: "Formal Bow Tie Tuxedo" }
  ],
  variants: [
    {
      id: "variant-227",
      name: "Formal Bow Tie Tuxedo",
      sku: "HP-057",
      price: 2196,
      compareAtPrice: 4392,
      inStock: true,
    }
  ],
  features: [
    "Polyester tuxedo fabric",
    "Attached fabric bow tie",
    "Elastic leg straps",
    "Easy on-off design",
    "Spot clean only"
  ],
  rating: 4.5,
  reviewCount: 189,
  isFeatured: false,
  isNew: false,
  shippingInfo: "Ships within 1-3 business days. Free shipping on orders over $75.",

  seo: {
    title: "Formal Bow Tie Tuxedo | HappyPaws",
    description: "Polyester tuxedo-style shirt front with attached bow tie for special occasions.",
  },
  checkoutChampProductId: "227",
};
