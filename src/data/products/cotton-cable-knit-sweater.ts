import type { Product } from "@/lib/types/product";

export const cottonCableKnitSweater: Product = {
  slug: "cotton-cable-knit-sweater",
  name: "Cotton Cable Knit Sweater",
  shortDescription: "Classic cable knit sweater made from soft cotton blend with ribbed trim.",
  description: `<p>Timeless cable knit pattern crafted from a soft cotton-polyester blend. Ribbed trim at neck, sleeves, and hem provides stretch. Rear opening accommodates leash attachment.</p>`,
  category: "Apparel",
  type: "physical",
  images: [
    { src: "https://pub-e6ac2cc030e3466a91ba67cb97aa6813.r2.dev/happypaws/products/cotton-cable-knit-sweater.webp", alt: "Cotton Cable Knit Sweater" }
  ],
  variants: [
    {
      id: "variant-225",
      name: "Cotton Cable Knit Sweater",
      sku: "HP-055",
      price: 3875,
      compareAtPrice: 7750,
      inStock: true,
    }
  ],
  features: [
    "Cotton-polyester blend",
    "Cable knit pattern",
    "Ribbed trim details",
    "Leash hole opening",
    "Hand wash cold"
  ],
  rating: 4.7,
  reviewCount: 256,
  isFeatured: false,
  isNew: false,
  shippingInfo: "Ships within 1-3 business days. Free shipping on orders over $75.",

  seo: {
    title: "Cotton Cable Knit Sweater | HappyPaws",
    description: "Classic cable knit sweater made from soft cotton blend with ribbed trim.",
  },
  checkoutChampProductId: "225",
};
