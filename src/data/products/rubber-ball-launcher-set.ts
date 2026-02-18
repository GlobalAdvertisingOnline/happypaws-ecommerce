import type { Product } from "@/lib/types/product";

export const rubberBallLauncherSet: Product = {
  slug: "rubber-ball-launcher-set",
  name: "Rubber Ball Launcher Set",
  shortDescription: "Plastic ball launcher with three natural rubber balls for long-distance fetch.",
  description: `<p>Ergonomic plastic launcher designed for extended throwing distance without arm strain. Includes three replacement natural rubber balls. Lightweight construction suitable for all ages.</p>`,
  category: "Toys",
  type: "physical",
  images: [
    { src: "https://pub-e6ac2cc030e3466a91ba67cb97aa6813.r2.dev/happypaws/products/rubber-ball-launcher-set.webp", alt: "Rubber Ball Launcher Set" }
  ],
  variants: [
    {
      id: "variant-193",
      name: "Rubber Ball Launcher Set",
      sku: "HP-023",
      price: 2395,
      compareAtPrice: 4790,
      inStock: true,
    }
  ],
  features: [
    "Plastic launcher handle",
    "3 natural rubber balls included",
    "Ball diameter: 2 inches",
    "Launcher length: 24 inches",
    "Rinse clean with water"
  ],
  rating: 4.8,
  reviewCount: 412,
  isFeatured: true,
  isNew: false,
  shippingInfo: "Ships within 1-3 business days. Free shipping on orders over $75.",

  seo: {
    title: "Rubber Ball Launcher Set | HappyPaws",
    description: "Plastic ball launcher with three natural rubber balls for long-distance fetch.",
  },
  checkoutChampProductId: "193",
};
