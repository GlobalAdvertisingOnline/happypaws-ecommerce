import type { Product } from "@/lib/types/product";

export const petFirstAidKit: Product = {
  slug: "pet-first-aid-kit",
  name: "Pet First Aid Kit",
  shortDescription: "Compact first aid kit in nylon case with bandages, scissors, and essential supplies.",
  description: `<p>Portable first aid kit containing essential emergency supplies in a zippered nylon case. Includes gauze, bandages, antiseptic wipes, scissors, and tweezers. Compact size fits in bags.</p>`,
  category: "Accessories",
  type: "physical",
  images: [
    { src: "https://pub-e6ac2cc030e3466a91ba67cb97aa6813.r2.dev/happypaws/products/pet-first-aid-kit.webp", alt: "Pet First Aid Kit" }
  ],
  variants: [
    {
      id: "variant-243",
      name: "Pet First Aid Kit",
      sku: "HP-072",
      price: 2396,
      compareAtPrice: 4792,
      inStock: true,
    }
  ],
  features: [
    "Zippered nylon case",
    "Bandages and gauze included",
    "Stainless steel scissors",
    "Antiseptic wipes",
    "Dimensions: 6 x 4 x 2 inches"
  ],
  rating: 4.7,
  reviewCount: 189,
  isFeatured: false,
  isNew: false,
  shippingInfo: "Ships within 1-3 business days. Free shipping on orders over $75.",

  seo: {
    title: "Pet First Aid Kit | HappyPaws",
    description: "Compact first aid kit in nylon case with bandages, scissors, and essential supplies.",
  },
  checkoutChampProductId: "243",
};
