import type { Product } from "@/lib/types/product";

export const rubberGroomingMitt: Product = {
  slug: "rubber-grooming-mitt",
  name: "Rubber Grooming Mitt",
  shortDescription: "Flexible rubber mitt with nodules for gentle massage and loose hair removal.",
  description: `<p>Soft rubber mitt fits either hand with adjustable wrist strap. Raised rubber nodules collect loose hair while providing massage. Flexible material follows body contours.</p>`,
  category: "Grooming",
  type: "physical",
  images: [
    { src: "https://pub-e6ac2cc030e3466a91ba67cb97aa6813.r2.dev/happypaws/products/rubber-grooming-mitt.webp", alt: "Rubber Grooming Mitt" }
  ],
  variants: [
    {
      id: "variant-212",
      name: "Rubber Grooming Mitt",
      sku: "HP-042",
      price: 1296,
      compareAtPrice: 2592,
      inStock: true,
    }
  ],
  features: [
    "Flexible rubber construction",
    "Raised massage nodules",
    "Adjustable wrist strap",
    "One size fits most hands",
    "Rinse clean with water"
  ],
  rating: 4.5,
  reviewCount: 445,
  isFeatured: false,
  isNew: false,
  shippingInfo: "Ships within 1-3 business days. Free shipping on orders over $75.",

  seo: {
    title: "Rubber Grooming Mitt | HappyPaws",
    description: "Flexible rubber mitt with nodules for gentle massage and loose hair removal.",
  },
  checkoutChampProductId: "212",
};
