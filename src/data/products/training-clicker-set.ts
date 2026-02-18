import type { Product } from "@/lib/types/product";

export const trainingClickerSet: Product = {
  slug: "training-clicker-set",
  name: "Training Clicker Set",
  shortDescription: "Two-pack of plastic training clickers with wrist straps and button mechanism.",
  description: `<p>Pack of two plastic clickers with consistent click sound for training reinforcement. Attached wrist straps prevent dropping. Ergonomic button requires minimal pressure.</p>`,
  category: "Accessories",
  type: "physical",
  images: [
    { src: "https://pub-e6ac2cc030e3466a91ba67cb97aa6813.r2.dev/happypaws/products/training-clicker-set.webp", alt: "Training Clicker Set" }
  ],
  variants: [
    {
      id: "variant-242",
      name: "Training Clicker Set",
      sku: "HP-071",
      price: 695,
      compareAtPrice: 1390,
      inStock: true,
    }
  ],
  features: [
    "Set of 2 clickers",
    "Plastic construction",
    "Attached wrist straps",
    "Ergonomic button design",
    "Dimensions: 2 x 1.5 inches each"
  ],
  rating: 4.5,
  reviewCount: 567,
  isFeatured: false,
  isNew: false,
  shippingInfo: "Ships within 1-3 business days. Free shipping on orders over $75.",

  seo: {
    title: "Training Clicker Set | HappyPaws",
    description: "Two-pack of plastic training clickers with wrist straps and button mechanism.",
  },
  checkoutChampProductId: "242",
};
