import type { Product } from "@/lib/types/product";

export const nylonAdjustablePuppyCollar: Product = {
  slug: "nylon-adjustable-puppy-collar",
  name: "Nylon Adjustable Puppy Collar",
  shortDescription: "Lightweight nylon collar with plastic quick-release buckle designed for puppies and small breeds.",
  description: `<p>Durable nylon webbing collar featuring a quick-release plastic buckle for easy on and off. Adjustable sizing accommodates growing puppies. Reinforced stitching at stress points ensures longevity.</p>`,
  category: "Collars",
  type: "physical",
  images: [
    { src: "https://pub-e6ac2cc030e3466a91ba67cb97aa6813.r2.dev/happypaws/products/nylon-adjustable-puppy-collar.webp", alt: "Nylon Adjustable Puppy Collar" }
  ],
  variants: [
    {
      id: "variant-171",
      name: "Nylon Adjustable Puppy Collar",
      sku: "HP-002",
      price: 895,
      compareAtPrice: 1790,
      inStock: true,
    }
  ],
  features: [
    "Nylon webbing material",
    "Quick-release plastic buckle",
    "Adjustable from 8-12 inches",
    "Width: 0.5 inch",
    "Machine washable"
  ],
  rating: 4.6,
  reviewCount: 234,
  isFeatured: false,
  isNew: true,
  shippingInfo: "Ships within 1-3 business days. Free shipping on orders over $75.",

  seo: {
    title: "Nylon Adjustable Puppy Collar | HappyPaws",
    description: "Lightweight nylon collar with plastic quick-release buckle designed for puppies and small breeds.",
  },
  checkoutChampProductId: "171",
};
