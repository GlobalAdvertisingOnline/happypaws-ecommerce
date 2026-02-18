import type { Product } from "@/lib/types/product";

export const interactiveTreatPuzzle: Product = {
  slug: "interactive-treat-puzzle",
  name: "Interactive Treat Puzzle",
  shortDescription: "Durable plastic puzzle toy with sliding compartments for hiding treats.",
  description: `<p>Food-grade plastic puzzle featuring multiple sliding covers and rotating discs. Designed to slow eating and provide mental stimulation. Dishwasher-safe for thorough cleaning.</p>`,
  category: "Toys",
  type: "physical",
  images: [
    { src: "https://pub-e6ac2cc030e3466a91ba67cb97aa6813.r2.dev/happypaws/products/interactive-treat-puzzle.webp", alt: "Interactive Treat Puzzle" }
  ],
  variants: [
    {
      id: "variant-186",
      name: "Interactive Treat Puzzle",
      sku: "HP-016",
      price: 2795,
      compareAtPrice: 5590,
      inStock: true,
    }
  ],
  features: [
    "Food-grade plastic",
    "Multiple sliding compartments",
    "Dimensions: 10 x 10 x 2 inches",
    "Non-slip rubber base",
    "Dishwasher safe"
  ],
  rating: 4.8,
  reviewCount: 678,
  isFeatured: true,
  isNew: false,
  shippingInfo: "Ships within 1-3 business days. Free shipping on orders over $75.",

  seo: {
    title: "Interactive Treat Puzzle | HappyPaws",
    description: "Durable plastic puzzle toy with sliding compartments for hiding treats.",
  },
  checkoutChampProductId: "186",
};
