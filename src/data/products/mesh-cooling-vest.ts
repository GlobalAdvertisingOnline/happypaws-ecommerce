import type { Product } from "@/lib/types/product";

export const meshCoolingVest: Product = {
  slug: "mesh-cooling-vest",
  name: "Mesh Cooling Vest",
  shortDescription: "Lightweight breathable mesh vest that cools when wet for hot weather wear.",
  description: `<p>Evaporative cooling vest made from multi-layer mesh fabric. Soak in water and wring out to activate cooling effect. Reflective trim for visibility. Velcro closures adjust fit.</p>`,
  category: "Apparel",
  type: "physical",
  images: [
    { src: "https://pub-e6ac2cc030e3466a91ba67cb97aa6813.r2.dev/happypaws/products/mesh-cooling-vest.webp", alt: "Mesh Cooling Vest" }
  ],
  variants: [
    {
      id: "variant-224",
      name: "Mesh Cooling Vest",
      sku: "HP-054",
      price: 2995,
      compareAtPrice: 5990,
      inStock: true,
    }
  ],
  features: [
    "Multi-layer mesh fabric",
    "Evaporative cooling technology",
    "Reflective trim",
    "Velcro closures",
    "Rinse and air dry"
  ],
  rating: 4.7,
  reviewCount: 312,
  isFeatured: false,
  isNew: false,
  shippingInfo: "Ships within 1-3 business days. Free shipping on orders over $75.",

  seo: {
    title: "Mesh Cooling Vest | HappyPaws",
    description: "Lightweight breathable mesh vest that cools when wet for hot weather wear.",
  },
  checkoutChampProductId: "224",
};
