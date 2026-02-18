import type { Product } from "@/lib/types/product";

export const travelWaterBottle: Product = {
  slug: "travel-water-bottle",
  name: "Travel Water Bottle",
  shortDescription: "Portable water bottle with attached fold-out bowl for on-the-go hydration.",
  description: `<p>BPA-free plastic water bottle with integrated silicone bowl that folds out from the cap. One-hand operation allows easy water dispensing. Leak-proof seal for travel.</p>`,
  category: "Accessories",
  type: "physical",
  images: [
    { src: "https://pub-e6ac2cc030e3466a91ba67cb97aa6813.r2.dev/happypaws/products/travel-water-bottle.webp", alt: "Travel Water Bottle" }
  ],
  variants: [
    {
      id: "variant-235",
      name: "Travel Water Bottle",
      sku: "HP-065",
      price: 1896,
      compareAtPrice: 3792,
      inStock: true,
    }
  ],
  features: [
    "BPA-free plastic",
    "Integrated silicone bowl",
    "Capacity: 20 oz",
    "One-hand operation",
    "Leak-proof seal"
  ],
  rating: 4.6,
  reviewCount: 445,
  isFeatured: false,
  isNew: false,
  shippingInfo: "Ships within 1-3 business days. Free shipping on orders over $75.",

  seo: {
    title: "Travel Water Bottle | HappyPaws",
    description: "Portable water bottle with attached fold-out bowl for on-the-go hydration.",
  },
  checkoutChampProductId: "235",
};
