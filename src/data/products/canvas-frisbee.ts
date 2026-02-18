import type { Product } from "@/lib/types/product";

export const canvasFrisbee: Product = {
  slug: "canvas-frisbee",
  name: "Canvas Frisbee",
  shortDescription: "Soft canvas flying disc with reinforced edges for safe outdoor catching.",
  description: `<p>Flexible canvas disc with a reinforced nylon edge binding. Soft construction prevents injury during catching. Folds flat for easy transport in bags or pockets.</p>`,
  category: "Toys",
  type: "physical",
  images: [
    { src: "https://pub-e6ac2cc030e3466a91ba67cb97aa6813.r2.dev/happypaws/products/canvas-frisbee.webp", alt: "Canvas Frisbee" }
  ],
  variants: [
    {
      id: "variant-189",
      name: "Canvas Frisbee",
      sku: "HP-019",
      price: 1595,
      compareAtPrice: 3190,
      inStock: true,
    }
  ],
  features: [
    "Canvas with nylon edge binding",
    "Diameter: 9 inches",
    "Foldable design",
    "Lightweight: 3 oz",
    "Machine washable"
  ],
  rating: 4.5,
  reviewCount: 267,
  isFeatured: false,
  isNew: false,
  shippingInfo: "Ships within 1-3 business days. Free shipping on orders over $75.",

  seo: {
    title: "Canvas Frisbee | HappyPaws",
    description: "Soft canvas flying disc with reinforced edges for safe outdoor catching.",
  },
  checkoutChampProductId: "189",
};
