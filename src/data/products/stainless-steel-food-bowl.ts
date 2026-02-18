import type { Product } from "@/lib/types/product";

export const stainlessSteelFoodBowl: Product = {
  slug: "stainless-steel-food-bowl",
  name: "Stainless Steel Food Bowl",
  shortDescription: "Heavy-gauge stainless steel bowl with non-slip rubber base ring.",
  description: `<p>Food-grade stainless steel bowl with a wide base for stability. Removable rubber ring prevents sliding during mealtime. Dishwasher safe for easy cleaning.</p>`,
  category: "Accessories",
  type: "physical",
  images: [
    { src: "https://pub-e6ac2cc030e3466a91ba67cb97aa6813.r2.dev/happypaws/products/stainless-steel-food-bowl.webp", alt: "Stainless Steel Food Bowl" }
  ],
  variants: [
    {
      id: "variant-233",
      name: "Stainless Steel Food Bowl",
      sku: "HP-063",
      price: 1796,
      compareAtPrice: 3592,
      inStock: true,
    }
  ],
  features: [
    "Food-grade stainless steel",
    "Non-slip rubber base",
    "Capacity: 32 oz",
    "Dishwasher safe",
    "Diameter: 7 inches"
  ],
  rating: 4.7,
  reviewCount: 534,
  isFeatured: false,
  isNew: false,
  shippingInfo: "Ships within 1-3 business days. Free shipping on orders over $75.",

  seo: {
    title: "Stainless Steel Food Bowl | HappyPaws",
    description: "Heavy-gauge stainless steel bowl with non-slip rubber base ring.",
  },
  checkoutChampProductId: "233",
};
