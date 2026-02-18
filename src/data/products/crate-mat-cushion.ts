import type { Product } from "@/lib/types/product";

export const crateMatCushion: Product = {
  slug: "crate-mat-cushion",
  name: "Crate Mat Cushion",
  shortDescription: "Thin foam mat with polyester cover sized to fit standard wire crates.",
  description: `<p>Low-profile foam mat designed to fit inside wire crate bottoms. Polyester cover is water-resistant for easy cleanup. Multiple sizes available to match standard crate dimensions.</p>`,
  category: "Beds",
  type: "physical",
  images: [
    { src: "https://pub-e6ac2cc030e3466a91ba67cb97aa6813.r2.dev/happypaws/products/crate-mat-cushion.webp", alt: "Crate Mat Cushion" }
  ],
  variants: [
    {
      id: "variant-205",
      name: "Crate Mat Cushion",
      sku: "HP-035",
      price: 2975,
      compareAtPrice: 5950,
      inStock: true,
    }
  ],
  features: [
    "Foam core padding",
    "Water-resistant polyester cover",
    "Thickness: 1.5 inches",
    "Non-slip bottom",
    "Machine wash cover"
  ],
  rating: 4.5,
  reviewCount: 423,
  isFeatured: false,
  isNew: false,
  shippingInfo: "Ships within 1-3 business days. Free shipping on orders over $75.",

  seo: {
    title: "Crate Mat Cushion | HappyPaws",
    description: "Thin foam mat with polyester cover sized to fit standard wire crates.",
  },
  checkoutChampProductId: "205",
};
