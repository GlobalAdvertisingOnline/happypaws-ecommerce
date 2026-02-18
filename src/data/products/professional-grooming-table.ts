import type { Product } from "@/lib/types/product";

export const professionalGroomingTable: Product = {
  slug: "professional-grooming-table",
  name: "Professional Grooming Table",
  shortDescription: "Foldable grooming table with non-slip rubber surface and adjustable arm.",
  description: `<p>Steel-frame grooming table with textured rubber mat surface. Height-adjustable legs and foldable design for storage. Includes adjustable grooming arm with noose attachment.</p>`,
  category: "Grooming",
  type: "physical",
  images: [
    { src: "https://pub-e6ac2cc030e3466a91ba67cb97aa6813.r2.dev/happypaws/products/professional-grooming-table.webp", alt: "Professional Grooming Table" }
  ],
  variants: [
    {
      id: "variant-215",
      name: "Professional Grooming Table",
      sku: "HP-045",
      price: 16975,
      compareAtPrice: 33950,
      inStock: true,
    }
  ],
  features: [
    "Steel frame construction",
    "Non-slip rubber surface",
    "Foldable legs",
    "Adjustable grooming arm",
    "Dimensions: 36 x 24 x 32 inches"
  ],
  rating: 4.9,
  reviewCount: 145,
  isFeatured: true,
  isNew: false,
  shippingInfo: "Ships within 1-3 business days. Free shipping on orders over $75.",

  seo: {
    title: "Professional Grooming Table | HappyPaws",
    description: "Foldable grooming table with non-slip rubber surface and adjustable arm.",
  },
  checkoutChampProductId: "215",
};
