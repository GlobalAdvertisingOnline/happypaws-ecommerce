import type { Product } from "@/lib/types/product";

export const groomingScissorsSet: Product = {
  slug: "grooming-scissors-set",
  name: "Grooming Scissors Set",
  shortDescription: "Three-piece stainless steel scissor set with straight, curved, and thinning shears.",
  description: `<p>Professional grooming set including straight cutting shears, curved shears, and thinning shears. All feature stainless steel blades with adjustable tension screws. Includes protective case.</p>`,
  category: "Grooming",
  type: "physical",
  images: [
    { src: "https://pub-e6ac2cc030e3466a91ba67cb97aa6813.r2.dev/happypaws/products/grooming-scissors-set.webp", alt: "Grooming Scissors Set" }
  ],
  variants: [
    {
      id: "variant-211",
      name: "Grooming Scissors Set",
      sku: "HP-041",
      price: 4995,
      compareAtPrice: 9990,
      inStock: true,
    }
  ],
  features: [
    "Stainless steel blades",
    "Adjustable tension screws",
    "3 scissor types included",
    "Blade lengths: 6-7 inches",
    "Protective case included"
  ],
  rating: 4.8,
  reviewCount: 234,
  isFeatured: false,
  isNew: false,
  shippingInfo: "Ships within 1-3 business days. Free shipping on orders over $75.",

  seo: {
    title: "Grooming Scissors Set | HappyPaws",
    description: "Three-piece stainless steel scissor set with straight, curved, and thinning shears.",
  },
  checkoutChampProductId: "211",
};
