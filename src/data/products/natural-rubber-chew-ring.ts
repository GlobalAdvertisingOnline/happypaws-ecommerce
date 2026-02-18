import type { Product } from "@/lib/types/product";

export const naturalRubberChewRing: Product = {
  slug: "natural-rubber-chew-ring",
  name: "Natural Rubber Chew Ring",
  shortDescription: "Solid natural rubber ring with textured surface for satisfying chewing.",
  description: `<p>Molded from 100% natural rubber with raised nubs and ridges for varied texture. Ring shape allows for tug play and solo chewing. Flexible yet durable construction withstands strong jaws.</p>`,
  category: "Toys",
  type: "physical",
  images: [
    { src: "https://pub-e6ac2cc030e3466a91ba67cb97aa6813.r2.dev/happypaws/products/natural-rubber-chew-ring.webp", alt: "Natural Rubber Chew Ring" }
  ],
  variants: [
    {
      id: "variant-184",
      name: "Natural Rubber Chew Ring",
      sku: "HP-014",
      price: 1295,
      compareAtPrice: 2590,
      inStock: true,
    }
  ],
  features: [
    "100% natural rubber",
    "Textured surface",
    "Diameter: 5 inches",
    "Ring thickness: 1 inch",
    "Rinse clean with water"
  ],
  rating: 4.7,
  reviewCount: 389,
  isFeatured: false,
  isNew: false,
  shippingInfo: "Ships within 1-3 business days. Free shipping on orders over $75.",

  seo: {
    title: "Natural Rubber Chew Ring | HappyPaws",
    description: "Solid natural rubber ring with textured surface for satisfying chewing.",
  },
  checkoutChampProductId: "184",
};
