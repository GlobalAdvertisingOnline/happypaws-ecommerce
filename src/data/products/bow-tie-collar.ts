import type { Product } from "@/lib/types/product";

export const bowTieCollar: Product = {
  slug: "bow-tie-collar",
  name: "Bow Tie Collar",
  shortDescription: "Cotton collar with detachable fabric bow tie and adjustable snap closure.",
  description: `<p>Soft cotton webbing collar featuring a removable fabric bow tie attachment. Plastic snap closure allows easy adjustment. Bow tie attaches via elastic loop for secure positioning.</p>`,
  category: "Collars",
  type: "physical",
  images: [
    { src: "https://pub-e6ac2cc030e3466a91ba67cb97aa6813.r2.dev/happypaws/products/bow-tie-collar.webp", alt: "Bow Tie Collar" }
  ],
  variants: [
    {
      id: "variant-181",
      name: "Bow Tie Collar",
      sku: "HP-011",
      price: 1895,
      compareAtPrice: 3790,
      inStock: true,
    }
  ],
  features: [
    "Cotton webbing collar",
    "Detachable fabric bow tie",
    "Plastic snap closure",
    "Adjustable 10-16 inches",
    "Hand wash recommended"
  ],
  rating: 4.6,
  reviewCount: 267,
  isFeatured: false,
  isNew: true,
  shippingInfo: "Ships within 1-3 business days. Free shipping on orders over $75.",

  seo: {
    title: "Bow Tie Collar | HappyPaws",
    description: "Cotton collar with detachable fabric bow tie and adjustable snap closure.",
  },
  checkoutChampProductId: "181",
};
