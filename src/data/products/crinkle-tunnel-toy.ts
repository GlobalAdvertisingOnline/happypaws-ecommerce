import type { Product } from "@/lib/types/product";

export const crinkleTunnelToy: Product = {
  slug: "crinkle-tunnel-toy",
  name: "Crinkle Tunnel Toy",
  shortDescription: "Collapsible polyester tunnel with internal crinkle lining for cats.",
  description: `<p>Lightweight cat tunnel made from durable polyester with spring-wire frame. Internal crinkle lining produces sound with movement. Collapses flat with velcro strap for compact storage.</p>`,
  category: "Toys",
  type: "physical",
  images: [
    { src: "https://pub-e6ac2cc030e3466a91ba67cb97aa6813.r2.dev/happypaws/products/crinkle-tunnel-toy.webp", alt: "Crinkle Tunnel Toy" }
  ],
  variants: [
    {
      id: "variant-190",
      name: "Crinkle Tunnel Toy",
      sku: "HP-020",
      price: 2195,
      compareAtPrice: 4390,
      inStock: true,
    }
  ],
  features: [
    "Polyester with wire frame",
    "Internal crinkle lining",
    "Extended length: 36 inches",
    "Diameter: 10 inches",
    "Wipe clean with damp cloth"
  ],
  rating: 4.6,
  reviewCount: 189,
  isFeatured: false,
  isNew: false,
  shippingInfo: "Ships within 1-3 business days. Free shipping on orders over $75.",

  seo: {
    title: "Crinkle Tunnel Toy | HappyPaws",
    description: "Collapsible polyester tunnel with internal crinkle lining for cats.",
  },
  checkoutChampProductId: "190",
};
