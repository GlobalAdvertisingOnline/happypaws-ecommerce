import type { Product } from "@/lib/types/product";

export const rubberFetchBall: Product = {
  slug: "rubber-fetch-ball",
  name: "Rubber Fetch Ball",
  shortDescription: "High-bounce natural rubber ball with textured grip surface for outdoor play.",
  description: `<p>Solid natural rubber ball engineered for high bounce and durability. Textured surface provides grip for easy pickup. Bright color ensures visibility in grass and low light conditions.</p>`,
  category: "Toys",
  type: "physical",
  images: [
    { src: "https://pub-e6ac2cc030e3466a91ba67cb97aa6813.r2.dev/happypaws/products/rubber-fetch-ball.webp", alt: "Rubber Fetch Ball" }
  ],
  variants: [
    {
      id: "variant-188",
      name: "Rubber Fetch Ball",
      sku: "HP-018",
      price: 896,
      compareAtPrice: 1792,
      inStock: true,
    }
  ],
  features: [
    "100% natural rubber",
    "High-bounce design",
    "Diameter: 2.5 inches",
    "Textured grip surface",
    "Rinse with water to clean"
  ],
  rating: 4.7,
  reviewCount: 623,
  isFeatured: false,
  isNew: false,
  shippingInfo: "Ships within 1-3 business days. Free shipping on orders over $75.",

  seo: {
    title: "Rubber Fetch Ball | HappyPaws",
    description: "High-bounce natural rubber ball with textured grip surface for outdoor play.",
  },
  checkoutChampProductId: "188",
};
