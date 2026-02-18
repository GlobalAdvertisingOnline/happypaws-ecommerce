import type { Product } from "@/lib/types/product";

export const bambooPinBrush: Product = {
  slug: "bamboo-pin-brush",
  name: "Bamboo Pin Brush",
  shortDescription: "Sustainable bamboo brush with rounded metal pins for gentle detangling.",
  description: `<p>Eco-friendly brush crafted from sustainable bamboo with a natural cork palm grip. Rounded stainless steel pins glide through fur without scratching skin. Cushioned pin base flexes with coat contours.</p>`,
  category: "Grooming",
  type: "physical",
  images: [
    { src: "https://pub-e6ac2cc030e3466a91ba67cb97aa6813.r2.dev/happypaws/products/bamboo-pin-brush.webp", alt: "Bamboo Pin Brush" }
  ],
  variants: [
    {
      id: "variant-210",
      name: "Bamboo Pin Brush",
      sku: "HP-040",
      price: 2295,
      compareAtPrice: 4590,
      inStock: true,
    }
  ],
  features: [
    "Sustainable bamboo handle",
    "Stainless steel rounded pins",
    "Cork palm grip",
    "Dimensions: 9 x 3 inches",
    "Remove hair and wipe clean"
  ],
  rating: 4.6,
  reviewCount: 312,
  isFeatured: false,
  isNew: true,
  shippingInfo: "Ships within 1-3 business days. Free shipping on orders over $75.",

  seo: {
    title: "Bamboo Pin Brush | HappyPaws",
    description: "Sustainable bamboo brush with rounded metal pins for gentle detangling.",
  },
  checkoutChampProductId: "210",
};
