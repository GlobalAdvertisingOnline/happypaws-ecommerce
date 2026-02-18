import type { Product } from "@/lib/types/product";

export const leatherBraidedLeash: Product = {
  slug: "leather-braided-leash",
  name: "Leather Braided Leash",
  shortDescription: "Hand-braided genuine leather leash with brass snap hook and wrist loop.",
  description: `<p>Artisan leash hand-braided from genuine leather strips with a solid brass snap hook. Rolled leather handle includes a wrist loop. Develops rich patina with use over time.</p>`,
  category: "Accessories",
  type: "physical",
  images: [
    { src: "https://pub-e6ac2cc030e3466a91ba67cb97aa6813.r2.dev/happypaws/products/leather-braided-leash.webp", alt: "Leather Braided Leash" }
  ],
  variants: [
    {
      id: "variant-232",
      name: "Leather Braided Leash",
      sku: "HP-062",
      price: 6275,
      compareAtPrice: 12550,
      inStock: true,
    }
  ],
  features: [
    "Genuine braided leather",
    "Solid brass snap hook",
    "Rolled handle with wrist loop",
    "Length: 6 feet",
    "Condition with leather balm"
  ],
  rating: 4.9,
  reviewCount: 189,
  isFeatured: false,
  isNew: false,
  shippingInfo: "Ships within 1-3 business days. Free shipping on orders over $75.",

  seo: {
    title: "Leather Braided Leash | HappyPaws",
    description: "Hand-braided genuine leather leash with brass snap hook and wrist loop.",
  },
  checkoutChampProductId: "232",
};
