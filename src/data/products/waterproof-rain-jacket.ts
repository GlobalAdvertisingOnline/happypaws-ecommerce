import type { Product } from "@/lib/types/product";

export const waterproofRainJacket: Product = {
  slug: "waterproof-rain-jacket",
  name: "Waterproof Rain Jacket",
  shortDescription: "Lightweight nylon rain jacket with reflective piping and adjustable belly band.",
  description: `<p>Water-resistant nylon jacket with sealed seams to keep pets dry. Reflective piping increases visibility in low light. Adjustable velcro belly band and neck closure ensure fit.</p>`,
  category: "Apparel",
  type: "physical",
  images: [
    { src: "https://pub-e6ac2cc030e3466a91ba67cb97aa6813.r2.dev/happypaws/products/waterproof-rain-jacket.webp", alt: "Waterproof Rain Jacket" }
  ],
  variants: [
    {
      id: "variant-219",
      name: "Waterproof Rain Jacket",
      sku: "HP-049",
      price: 3795,
      compareAtPrice: 7590,
      inStock: true,
    }
  ],
  features: [
    "Water-resistant nylon",
    "Sealed seams",
    "Reflective piping",
    "Adjustable velcro closures",
    "Wipe clean or machine wash"
  ],
  rating: 4.7,
  reviewCount: 345,
  isFeatured: false,
  isNew: false,
  shippingInfo: "Ships within 1-3 business days. Free shipping on orders over $75.",

  seo: {
    title: "Waterproof Rain Jacket | HappyPaws",
    description: "Lightweight nylon rain jacket with reflective piping and adjustable belly band.",
  },
  checkoutChampProductId: "219",
};
