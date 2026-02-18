import type { Product } from "@/lib/types/product";

export const desheddingTool: Product = {
  slug: "deshedding-tool",
  name: "Deshedding Tool",
  shortDescription: "Stainless steel deshedding comb with curved blade edge and ergonomic handle.",
  description: `<p>Curved stainless steel blade reaches through topcoat to remove loose undercoat hair. Ergonomic plastic handle with rubber grip. Ejector button releases collected hair.</p>`,
  category: "Grooming",
  type: "physical",
  images: [
    { src: "https://pub-e6ac2cc030e3466a91ba67cb97aa6813.r2.dev/happypaws/products/deshedding-tool.webp", alt: "Deshedding Tool" }
  ],
  variants: [
    {
      id: "variant-209",
      name: "Deshedding Tool",
      sku: "HP-039",
      price: 2695,
      compareAtPrice: 5390,
      inStock: true,
    }
  ],
  features: [
    "Stainless steel curved blade",
    "Ergonomic rubber grip handle",
    "Hair ejector button",
    "Blade width: 4 inches",
    "Clean blade after each use"
  ],
  rating: 4.8,
  reviewCount: 567,
  isFeatured: true,
  isNew: false,
  shippingInfo: "Ships within 1-3 business days. Free shipping on orders over $75.",

  seo: {
    title: "Deshedding Tool | HappyPaws",
    description: "Stainless steel deshedding comb with curved blade edge and ergonomic handle.",
  },
  checkoutChampProductId: "209",
};
