import type { Product } from "@/lib/types/product";

export const elevatedDoubleFeeder: Product = {
  slug: "elevated-double-feeder",
  name: "Elevated Double Feeder",
  shortDescription: "Bamboo stand with two stainless steel bowls at raised height for comfortable eating.",
  description: `<p>Sustainable bamboo stand holds two removable stainless steel bowls at elevated height. Reduces neck strain during feeding. Non-slip feet protect floors from scratches.</p>`,
  category: "Accessories",
  type: "physical",
  images: [
    { src: "https://pub-e6ac2cc030e3466a91ba67cb97aa6813.r2.dev/happypaws/products/elevated-double-feeder.webp", alt: "Elevated Double Feeder" }
  ],
  variants: [
    {
      id: "variant-234",
      name: "Elevated Double Feeder",
      sku: "HP-064",
      price: 4475,
      compareAtPrice: 8950,
      inStock: true,
    }
  ],
  features: [
    "Sustainable bamboo stand",
    "2 stainless steel bowls",
    "Elevated feeding height: 4 inches",
    "Non-slip rubber feet",
    "Bowls are dishwasher safe"
  ],
  rating: 4.8,
  reviewCount: 312,
  isFeatured: false,
  isNew: false,
  shippingInfo: "Ships within 1-3 business days. Free shipping on orders over $75.",

  seo: {
    title: "Elevated Double Feeder | HappyPaws",
    description: "Bamboo stand with two stainless steel bowls at raised height for comfortable eating.",
  },
  checkoutChampProductId: "234",
};
