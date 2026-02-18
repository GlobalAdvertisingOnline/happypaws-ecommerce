import type { Product } from "@/lib/types/product";

export const reflectiveSafetyCollar: Product = {
  slug: "reflective-safety-collar",
  name: "Reflective Safety Collar",
  shortDescription: "Nylon collar with reflective stitching for visibility during evening walks.",
  description: `<p>High-visibility nylon collar featuring reflective threading woven throughout the webbing. Includes a sturdy metal D-ring and adjustable plastic buckle. Ideal for low-light outdoor activities.</p>`,
  category: "Collars",
  type: "physical",
  images: [
    { src: "https://pub-e6ac2cc030e3466a91ba67cb97aa6813.r2.dev/happypaws/products/reflective-safety-collar.webp", alt: "Reflective Safety Collar" }
  ],
  variants: [
    {
      id: "variant-172",
      name: "Reflective Safety Collar",
      sku: "HP-003",
      price: 1495,
      compareAtPrice: 2990,
      inStock: true,
    }
  ],
  features: [
    "Nylon with reflective stitching",
    "Metal D-ring attachment",
    "Adjustable 12-18 inches",
    "Width: 0.75 inch",
    "Hand wash recommended"
  ],
  rating: 4.7,
  reviewCount: 189,
  isFeatured: false,
  isNew: false,
  shippingInfo: "Ships within 1-3 business days. Free shipping on orders over $75.",

  seo: {
    title: "Reflective Safety Collar | HappyPaws",
    description: "Nylon collar with reflective stitching for visibility during evening walks.",
  },
  checkoutChampProductId: "172",
};
