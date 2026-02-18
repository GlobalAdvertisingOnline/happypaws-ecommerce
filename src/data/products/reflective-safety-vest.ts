import type { Product } from "@/lib/types/product";

export const reflectiveSafetyVest: Product = {
  slug: "reflective-safety-vest",
  name: "Reflective Safety Vest",
  shortDescription: "High-visibility neon vest with 360-degree reflective strips for nighttime walks.",
  description: `<p>Bright neon mesh vest with wide reflective strips on all sides. Lightweight construction allows wearing over other garments. Easy velcro closure for quick on and off.</p>`,
  category: "Apparel",
  type: "physical",
  images: [
    { src: "https://pub-e6ac2cc030e3466a91ba67cb97aa6813.r2.dev/happypaws/products/reflective-safety-vest.webp", alt: "Reflective Safety Vest" }
  ],
  variants: [
    {
      id: "variant-226",
      name: "Reflective Safety Vest",
      sku: "HP-056",
      price: 1975,
      compareAtPrice: 3950,
      inStock: true,
    }
  ],
  features: [
    "Neon mesh fabric",
    "360-degree reflective strips",
    "Velcro closure",
    "Lightweight design",
    "Machine washable"
  ],
  rating: 4.6,
  reviewCount: 345,
  isFeatured: false,
  isNew: false,
  shippingInfo: "Ships within 1-3 business days. Free shipping on orders over $75.",

  seo: {
    title: "Reflective Safety Vest | HappyPaws",
    description: "High-visibility neon vest with 360-degree reflective strips for nighttime walks.",
  },
  checkoutChampProductId: "226",
};
