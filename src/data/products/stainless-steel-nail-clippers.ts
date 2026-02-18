import type { Product } from "@/lib/types/product";

export const stainlessSteelNailClippers: Product = {
  slug: "stainless-steel-nail-clippers",
  name: "Stainless Steel Nail Clippers",
  shortDescription: "Professional-grade stainless steel clippers with safety guard and rubber grip.",
  description: `<p>Heavy-duty nail clippers forged from surgical-grade stainless steel. Built-in safety guard prevents over-cutting. Non-slip rubber handles provide secure grip during use.</p>`,
  category: "Grooming",
  type: "physical",
  images: [
    { src: "https://pub-e6ac2cc030e3466a91ba67cb97aa6813.r2.dev/happypaws/products/stainless-steel-nail-clippers.webp", alt: "Stainless Steel Nail Clippers" }
  ],
  variants: [
    {
      id: "variant-208",
      name: "Stainless Steel Nail Clippers",
      sku: "HP-038",
      price: 1596,
      compareAtPrice: 3192,
      inStock: true,
    }
  ],
  features: [
    "Surgical-grade stainless steel",
    "Built-in safety guard",
    "Non-slip rubber handles",
    "Length: 5 inches",
    "Wipe blade clean after use"
  ],
  rating: 4.8,
  reviewCount: 678,
  isFeatured: false,
  isNew: false,
  shippingInfo: "Ships within 1-3 business days. Free shipping on orders over $75.",

  seo: {
    title: "Stainless Steel Nail Clippers | HappyPaws",
    description: "Professional-grade stainless steel clippers with safety guard and rubber grip.",
  },
  checkoutChampProductId: "208",
};
