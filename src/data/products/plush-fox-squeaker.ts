import type { Product } from "@/lib/types/product";

export const plushFoxSqueaker: Product = {
  slug: "plush-fox-squeaker",
  name: "Plush Fox Squeaker",
  shortDescription: "Elongated plush fox toy with multiple squeakers along the body.",
  description: `<p>Long-bodied plush fox with soft polyester exterior and multiple internal squeakers. No stuffing design reduces mess during play. Reinforced seams at high-stress points for durability.</p>`,
  category: "Toys",
  type: "physical",
  images: [
    { src: "https://pub-e6ac2cc030e3466a91ba67cb97aa6813.r2.dev/happypaws/products/plush-fox-squeaker.webp", alt: "Plush Fox Squeaker" }
  ],
  variants: [
    {
      id: "variant-192",
      name: "Plush Fox Squeaker",
      sku: "HP-022",
      price: 1875,
      compareAtPrice: 3750,
      inStock: true,
    }
  ],
  features: [
    "Polyester plush material",
    "Multiple internal squeakers",
    "Length: 24 inches",
    "No stuffing design",
    "Surface wash only"
  ],
  rating: 4.6,
  reviewCount: 298,
  isFeatured: false,
  isNew: false,
  shippingInfo: "Ships within 1-3 business days. Free shipping on orders over $75.",

  seo: {
    title: "Plush Fox Squeaker | HappyPaws",
    description: "Elongated plush fox toy with multiple squeakers along the body.",
  },
  checkoutChampProductId: "192",
};
