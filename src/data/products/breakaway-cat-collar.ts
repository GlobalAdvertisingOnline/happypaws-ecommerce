import type { Product } from "@/lib/types/product";

export const breakawayCatCollar: Product = {
  slug: "breakaway-cat-collar",
  name: "Breakaway Cat Collar",
  shortDescription: "Lightweight nylon cat collar with safety breakaway buckle and bell attachment.",
  description: `<p>Designed specifically for cats with a quick-release breakaway buckle that opens under pressure. Includes a small brass bell and elastic safety segment. Adjustable to fit most adult cats.</p>`,
  category: "Collars",
  type: "physical",
  images: [
    { src: "https://pub-e6ac2cc030e3466a91ba67cb97aa6813.r2.dev/happypaws/products/breakaway-cat-collar.webp", alt: "Breakaway Cat Collar" }
  ],
  variants: [
    {
      id: "variant-178",
      name: "Breakaway Cat Collar",
      sku: "HP-008",
      price: 795,
      compareAtPrice: 1590,
      inStock: true,
    }
  ],
  features: [
    "Lightweight nylon webbing",
    "Safety breakaway buckle",
    "Brass bell included",
    "Adjustable 8-12 inches",
    "Width: 0.375 inch"
  ],
  rating: 4.5,
  reviewCount: 189,
  isFeatured: false,
  isNew: false,
  shippingInfo: "Ships within 1-3 business days. Free shipping on orders over $75.",

  seo: {
    title: "Breakaway Cat Collar | HappyPaws",
    description: "Lightweight nylon cat collar with safety breakaway buckle and bell attachment.",
  },
  checkoutChampProductId: "178",
};
