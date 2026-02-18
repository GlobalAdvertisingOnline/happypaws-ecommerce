import type { Product } from "@/lib/types/product";

export const rubberPawBootsSet: Product = {
  slug: "rubber-paw-boots-set",
  name: "Rubber Paw Boots Set",
  shortDescription: "Set of four waterproof rubber boots with non-slip soles and adjustable straps.",
  description: `<p>Protective rubber boots shield paws from hot pavement, ice, and debris. Textured rubber soles provide traction. Adjustable nylon straps secure boots above the ankle.</p>`,
  category: "Apparel",
  type: "physical",
  images: [
    { src: "https://pub-e6ac2cc030e3466a91ba67cb97aa6813.r2.dev/happypaws/products/rubber-paw-boots-set.webp", alt: "Rubber Paw Boots Set" }
  ],
  variants: [
    {
      id: "variant-222",
      name: "Rubber Paw Boots Set",
      sku: "HP-052",
      price: 3295,
      compareAtPrice: 6590,
      inStock: true,
    }
  ],
  features: [
    "Waterproof rubber construction",
    "Non-slip textured soles",
    "Set of 4 boots",
    "Adjustable nylon straps",
    "Wipe clean with damp cloth"
  ],
  rating: 4.6,
  reviewCount: 234,
  isFeatured: false,
  isNew: true,
  shippingInfo: "Ships within 1-3 business days. Free shipping on orders over $75.",

  seo: {
    title: "Rubber Paw Boots Set | HappyPaws",
    description: "Set of four waterproof rubber boots with non-slip soles and adjustable straps.",
  },
  checkoutChampProductId: "222",
};
