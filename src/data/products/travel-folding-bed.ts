import type { Product } from "@/lib/types/product";

export const travelFoldingBed: Product = {
  slug: "travel-folding-bed",
  name: "Travel Folding Bed",
  shortDescription: "Portable canvas bed with foam padding that folds into carrying case.",
  description: `<p>Water-resistant canvas exterior with removable foam pad insert. Tri-fold design with integrated carrying handle. Lightweight construction ideal for travel and outdoor use.</p>`,
  category: "Beds",
  type: "physical",
  images: [
    { src: "https://pub-e6ac2cc030e3466a91ba67cb97aa6813.r2.dev/happypaws/products/travel-folding-bed.webp", alt: "Travel Folding Bed" }
  ],
  variants: [
    {
      id: "variant-199",
      name: "Travel Folding Bed",
      sku: "HP-029",
      price: 4775,
      compareAtPrice: 9550,
      inStock: true,
    }
  ],
  features: [
    "Water-resistant canvas",
    "Removable foam pad",
    "Dimensions: 30 x 20 x 2 inches",
    "Folds to 10 x 20 x 6 inches",
    "Spot clean exterior"
  ],
  rating: 4.6,
  reviewCount: 234,
  isFeatured: false,
  isNew: false,
  shippingInfo: "Ships within 1-3 business days. Free shipping on orders over $75.",

  seo: {
    title: "Travel Folding Bed | HappyPaws",
    description: "Portable canvas bed with foam padding that folds into carrying case.",
  },
  checkoutChampProductId: "199",
};
