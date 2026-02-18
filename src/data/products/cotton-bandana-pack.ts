import type { Product } from "@/lib/types/product";

export const cottonBandanaPack: Product = {
  slug: "cotton-bandana-pack",
  name: "Cotton Bandana Pack",
  shortDescription: "Three-pack of 100% cotton bandanas in assorted patterns with snap closure.",
  description: `<p>Set of three cotton bandanas featuring a convenient snap closure that fits over collars. Pre-washed cotton is soft against fur. Assorted classic patterns in each pack.</p>`,
  category: "Apparel",
  type: "physical",
  images: [
    { src: "https://pub-e6ac2cc030e3466a91ba67cb97aa6813.r2.dev/happypaws/products/cotton-bandana-pack.webp", alt: "Cotton Bandana Pack" }
  ],
  variants: [
    {
      id: "variant-223",
      name: "Cotton Bandana Pack",
      sku: "HP-053",
      price: 1476,
      compareAtPrice: 2952,
      inStock: true,
    }
  ],
  features: [
    "100% cotton fabric",
    "Snap-over-collar closure",
    "Set of 3 bandanas",
    "Triangle shape",
    "Machine washable"
  ],
  rating: 4.5,
  reviewCount: 567,
  isFeatured: false,
  isNew: false,
  shippingInfo: "Ships within 1-3 business days. Free shipping on orders over $75.",

  seo: {
    title: "Cotton Bandana Pack | HappyPaws",
    description: "Three-pack of 100% cotton bandanas in assorted patterns with snap closure.",
  },
  checkoutChampProductId: "223",
};
