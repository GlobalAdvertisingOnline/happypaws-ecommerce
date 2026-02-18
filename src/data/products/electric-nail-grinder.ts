import type { Product } from "@/lib/types/product";

export const electricNailGrinder: Product = {
  slug: "electric-nail-grinder",
  name: "Electric Nail Grinder",
  shortDescription: "Cordless rechargeable nail grinder with multiple speed settings and diamond bit.",
  description: `<p>USB-rechargeable nail grinder with variable speed motor and diamond-coated grinding head. Low-noise operation suitable for nervous pets. Includes replacement grinding bands.</p>`,
  category: "Grooming",
  type: "physical",
  images: [
    { src: "https://pub-e6ac2cc030e3466a91ba67cb97aa6813.r2.dev/happypaws/products/electric-nail-grinder.webp", alt: "Electric Nail Grinder" }
  ],
  variants: [
    {
      id: "variant-213",
      name: "Electric Nail Grinder",
      sku: "HP-043",
      price: 3495,
      compareAtPrice: 6990,
      inStock: true,
    }
  ],
  features: [
    "USB rechargeable battery",
    "Diamond grinding head",
    "Variable speed settings",
    "Replacement bands included",
    "Wipe clean after use"
  ],
  rating: 4.7,
  reviewCount: 389,
  isFeatured: false,
  isNew: false,
  shippingInfo: "Ships within 1-3 business days. Free shipping on orders over $75.",

  seo: {
    title: "Electric Nail Grinder | HappyPaws",
    description: "Cordless rechargeable nail grinder with multiple speed settings and diamond bit.",
  },
  checkoutChampProductId: "213",
};
