import type { Product } from "@/lib/types/product";

export const carSeatCover: Product = {
  slug: "car-seat-cover",
  name: "Car Seat Cover",
  shortDescription: "Waterproof polyester seat cover with hammock configuration and seat anchors.",
  description: `<p>Protects vehicle seats with waterproof polyester fabric. Converts between bench cover and hammock style. Seat anchors and headrest straps ensure secure installation.</p>`,
  category: "Accessories",
  type: "physical",
  images: [
    { src: "https://pub-e6ac2cc030e3466a91ba67cb97aa6813.r2.dev/happypaws/products/car-seat-cover.webp", alt: "Car Seat Cover" }
  ],
  variants: [
    {
      id: "variant-238",
      name: "Car Seat Cover",
      sku: "HP-067",
      price: 4875,
      compareAtPrice: 9750,
      inStock: true,
    }
  ],
  features: [
    "Waterproof polyester fabric",
    "Bench and hammock modes",
    "Seat anchors included",
    "Dimensions: 54 x 58 inches",
    "Machine wash cold"
  ],
  rating: 4.8,
  reviewCount: 389,
  isFeatured: true,
  isNew: false,
  shippingInfo: "Ships within 1-3 business days. Free shipping on orders over $75.",

  seo: {
    title: "Car Seat Cover | HappyPaws",
    description: "Waterproof polyester seat cover with hammock configuration and seat anchors.",
  },
  checkoutChampProductId: "238",
};
