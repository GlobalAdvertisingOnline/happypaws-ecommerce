import type { Product } from "@/lib/types/product";

export const retractableLeash: Product = {
  slug: "retractable-leash",
  name: "Retractable Leash",
  shortDescription: "16-foot retractable nylon leash with ergonomic handle and one-touch brake.",
  description: `<p>Retractable leash with smooth recoil mechanism housed in an ergonomic ABS plastic handle. One-touch brake button controls extension. Reflective tape on cord for visibility.</p>`,
  category: "Accessories",
  type: "physical",
  images: [
    { src: "https://pub-e6ac2cc030e3466a91ba67cb97aa6813.r2.dev/happypaws/products/retractable-leash.webp", alt: "Retractable Leash" }
  ],
  variants: [
    {
      id: "variant-231",
      name: "Retractable Leash",
      sku: "HP-061",
      price: 2475,
      compareAtPrice: 4950,
      inStock: true,
    }
  ],
  features: [
    "16-foot nylon cord",
    "ABS plastic handle",
    "One-touch brake system",
    "Reflective cord tape",
    "Weight capacity: 50 lbs"
  ],
  rating: 4.6,
  reviewCount: 423,
  isFeatured: false,
  isNew: false,
  shippingInfo: "Ships within 1-3 business days. Free shipping on orders over $75.",

  seo: {
    title: "Retractable Leash | HappyPaws",
    description: "16-foot retractable nylon leash with ergonomic handle and one-touch brake.",
  },
  checkoutChampProductId: "231",
};
