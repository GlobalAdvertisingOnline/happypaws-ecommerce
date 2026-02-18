import type { Product } from "@/lib/types/product";

export const plushSqueakyBall: Product = {
  slug: "plush-squeaky-ball",
  name: "Plush Squeaky Ball",
  shortDescription: "Soft polyester plush ball with internal squeaker for interactive play sessions.",
  description: `<p>Round plush toy constructed from durable polyester fabric with polyester fiber fill. Contains a replaceable squeaker mechanism. Double-stitched seams resist pulling and chewing.</p>`,
  category: "Toys",
  type: "physical",
  images: [
    { src: "https://pub-e6ac2cc030e3466a91ba67cb97aa6813.r2.dev/happypaws/products/plush-squeaky-ball.webp", alt: "Plush Squeaky Ball" }
  ],
  variants: [
    {
      id: "variant-183",
      name: "Plush Squeaky Ball",
      sku: "HP-013",
      price: 975,
      compareAtPrice: 1950,
      inStock: true,
    }
  ],
  features: [
    "Polyester plush exterior",
    "Internal squeaker",
    "Diameter: 3 inches",
    "Double-stitched seams",
    "Surface wash only"
  ],
  rating: 4.5,
  reviewCount: 456,
  isFeatured: false,
  isNew: false,
  shippingInfo: "Ships within 1-3 business days. Free shipping on orders over $75.",

  seo: {
    title: "Plush Squeaky Ball | HappyPaws",
    description: "Soft polyester plush ball with internal squeaker for interactive play sessions.",
  },
  checkoutChampProductId: "183",
};
