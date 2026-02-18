import type { Product } from "@/lib/types/product";

export const airlineApprovedCarrier: Product = {
  slug: "airline-approved-carrier",
  name: "Airline Approved Carrier",
  shortDescription: "Soft-sided polyester carrier with mesh windows meeting airline cabin requirements.",
  description: `<p>Meets major airline under-seat dimensions for cabin travel. Polyester exterior with plush fleece pad inside. Multiple mesh panels provide ventilation. Folds flat for storage.</p>`,
  category: "Accessories",
  type: "physical",
  images: [
    { src: "https://pub-e6ac2cc030e3466a91ba67cb97aa6813.r2.dev/happypaws/products/airline-approved-carrier.webp", alt: "Airline Approved Carrier" }
  ],
  variants: [
    {
      id: "variant-241",
      name: "Airline Approved Carrier",
      sku: "HP-070",
      price: 6775,
      compareAtPrice: 13550,
      inStock: true,
    }
  ],
  features: [
    "Polyester exterior with fleece pad",
    "Meets airline under-seat dimensions",
    "Multiple mesh windows",
    "Folds flat",
    "Dimensions: 17 x 10 x 9 inches"
  ],
  rating: 4.8,
  reviewCount: 234,
  isFeatured: false,
  isNew: false,
  shippingInfo: "Ships within 1-3 business days. Free shipping on orders over $75.",

  seo: {
    title: "Airline Approved Carrier | HappyPaws",
    description: "Soft-sided polyester carrier with mesh windows meeting airline cabin requirements.",
  },
  checkoutChampProductId: "241",
};
