import type { Product } from "@/lib/types/product";

export const smallCatPerchBed: Product = {
  slug: "small-cat-perch-bed",
  name: "Small Cat Perch Bed",
  shortDescription: "Window-mounted cat bed with suction cups and plush fleece cushion.",
  description: `<p>Space-saving cat bed that mounts to windows using industrial-strength suction cups. Plush fleece cushion is removable and washable. Steel frame supports up to 30 pounds.</p>`,
  category: "Beds",
  type: "physical",
  images: [
    { src: "https://pub-e6ac2cc030e3466a91ba67cb97aa6813.r2.dev/happypaws/products/small-cat-perch-bed.webp", alt: "Small Cat Perch Bed" }
  ],
  variants: [
    {
      id: "variant-202",
      name: "Small Cat Perch Bed",
      sku: "HP-032",
      price: 3975,
      compareAtPrice: 7950,
      inStock: true,
    }
  ],
  features: [
    "Steel frame construction",
    "Industrial suction cup mount",
    "Cushion dimensions: 20 x 12 inches",
    "Weight capacity: 30 lbs",
    "Machine wash cushion"
  ],
  rating: 4.6,
  reviewCount: 345,
  isFeatured: false,
  isNew: false,
  shippingInfo: "Ships within 1-3 business days. Free shipping on orders over $75.",

  seo: {
    title: "Small Cat Perch Bed | HappyPaws",
    description: "Window-mounted cat bed with suction cups and plush fleece cushion.",
  },
  checkoutChampProductId: "202",
};
