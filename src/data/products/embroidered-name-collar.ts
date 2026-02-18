import type { Product } from "@/lib/types/product";

export const embroideredNameCollar: Product = {
  slug: "embroidered-name-collar",
  name: "Embroidered Name Collar",
  shortDescription: "Personalized nylon collar with custom embroidered text and stainless steel hardware.",
  description: `<p>Durable nylon webbing collar featuring custom embroidered lettering directly on the material. Stainless steel buckle and D-ring prevent rust. Available in multiple nylon color options.</p>`,
  category: "Collars",
  type: "physical",
  images: [
    { src: "https://pub-e6ac2cc030e3466a91ba67cb97aa6813.r2.dev/happypaws/products/embroidered-name-collar.webp", alt: "Embroidered Name Collar" }
  ],
  variants: [
    {
      id: "variant-179",
      name: "Embroidered Name Collar",
      sku: "HP-009",
      price: 2495,
      compareAtPrice: 4990,
      inStock: true,
    }
  ],
  features: [
    "Nylon webbing with embroidery",
    "Stainless steel hardware",
    "Adjustable 10-18 inches",
    "Width: 0.75 inch",
    "Machine washable"
  ],
  rating: 4.7,
  reviewCount: 523,
  isFeatured: false,
  isNew: false,
  shippingInfo: "Ships within 1-3 business days. Free shipping on orders over $75.",

  seo: {
    title: "Embroidered Name Collar | HappyPaws",
    description: "Personalized nylon collar with custom embroidered text and stainless steel hardware.",
  },
  checkoutChampProductId: "179",
};
