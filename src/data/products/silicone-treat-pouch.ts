import type { Product } from "@/lib/types/product";

export const siliconeTreatPouch: Product = {
  slug: "silicone-treat-pouch",
  name: "Silicone Treat Pouch",
  shortDescription: "Food-grade silicone pouch with magnetic closure and belt clip attachment.",
  description: `<p>Flexible silicone treat pouch with strong magnetic closure for quick access. Belt clip and waist strap loop allow multiple carrying options. Easy to clean and dishwasher safe.</p>`,
  category: "Accessories",
  type: "physical",
  images: [
    { src: "https://pub-e6ac2cc030e3466a91ba67cb97aa6813.r2.dev/happypaws/products/silicone-treat-pouch.webp", alt: "Silicone Treat Pouch" }
  ],
  variants: [
    {
      id: "variant-240",
      name: "Silicone Treat Pouch",
      sku: "HP-069",
      price: 1597,
      compareAtPrice: 3194,
      inStock: true,
    }
  ],
  features: [
    "Food-grade silicone",
    "Magnetic closure",
    "Belt clip and strap loop",
    "Capacity: 1 cup",
    "Dishwasher safe"
  ],
  rating: 4.6,
  reviewCount: 378,
  isFeatured: false,
  isNew: false,
  shippingInfo: "Ships within 1-3 business days. Free shipping on orders over $75.",

  seo: {
    title: "Silicone Treat Pouch | HappyPaws",
    description: "Food-grade silicone pouch with magnetic closure and belt clip attachment.",
  },
  checkoutChampProductId: "240",
};
