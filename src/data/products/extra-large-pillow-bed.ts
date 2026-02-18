import type { Product } from "@/lib/types/product";

export const extraLargePillowBed: Product = {
  slug: "extra-large-pillow-bed",
  name: "Extra Large Pillow Bed",
  shortDescription: "Oversized pillow-style bed with cotton canvas cover for giant breeds.",
  description: `<p>Generously sized pillow bed constructed with heavy-duty cotton canvas exterior. Filled with recycled polyester fiber for cushioned support. Zippered cover removes for machine washing.</p>`,
  category: "Beds",
  type: "physical",
  images: [
    { src: "https://pub-e6ac2cc030e3466a91ba67cb97aa6813.r2.dev/happypaws/products/extra-large-pillow-bed.webp", alt: "Extra Large Pillow Bed" }
  ],
  variants: [
    {
      id: "variant-203",
      name: "Extra Large Pillow Bed",
      sku: "HP-033",
      price: 9975,
      compareAtPrice: 19950,
      inStock: true,
    }
  ],
  features: [
    "Heavy-duty cotton canvas",
    "Recycled polyester fill",
    "Dimensions: 48 x 36 x 6 inches",
    "Zippered removable cover",
    "Machine wash cover"
  ],
  rating: 4.8,
  reviewCount: 234,
  isFeatured: false,
  isNew: false,
  shippingInfo: "Ships within 1-3 business days. Free shipping on orders over $75.",

  seo: {
    title: "Extra Large Pillow Bed | HappyPaws",
    description: "Oversized pillow-style bed with cotton canvas cover for giant breeds.",
  },
  checkoutChampProductId: "203",
};
