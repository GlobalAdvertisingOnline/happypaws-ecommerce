import type { Product } from "@/lib/types/product";

export const outdoorWaterproofBed: Product = {
  slug: "outdoor-waterproof-bed",
  name: "Outdoor Waterproof Bed",
  shortDescription: "All-weather bed with waterproof nylon shell and quick-dry foam core.",
  description: `<p>Designed for outdoor use with a waterproof ripstop nylon shell and mildew-resistant foam interior. UV-resistant fabric maintains color. Drainage grommets allow water escape.</p>`,
  category: "Beds",
  type: "physical",
  images: [
    { src: "https://pub-e6ac2cc030e3466a91ba67cb97aa6813.r2.dev/happypaws/products/outdoor-waterproof-bed.webp", alt: "Outdoor Waterproof Bed" }
  ],
  variants: [
    {
      id: "variant-201",
      name: "Outdoor Waterproof Bed",
      sku: "HP-031",
      price: 7975,
      compareAtPrice: 15950,
      inStock: true,
    }
  ],
  features: [
    "Waterproof ripstop nylon",
    "Quick-dry foam core",
    "Dimensions: 36 x 24 x 3 inches",
    "UV-resistant fabric",
    "Hose clean and air dry"
  ],
  rating: 4.7,
  reviewCount: 267,
  isFeatured: false,
  isNew: false,
  shippingInfo: "Ships within 1-3 business days. Free shipping on orders over $75.",

  seo: {
    title: "Outdoor Waterproof Bed | HappyPaws",
    description: "All-weather bed with waterproof nylon shell and quick-dry foam core.",
  },
  checkoutChampProductId: "201",
};
