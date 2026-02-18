import type { Product } from "@/lib/types/product";

export const roundBolsterBed: Product = {
  slug: "round-bolster-bed",
  name: "Round Bolster Bed",
  shortDescription: "Circular plush bed with raised bolster rim for curling and nesting comfort.",
  description: `<p>Round bed featuring a continuous raised bolster edge filled with recycled polyester fiber. Center cushion is removable for washing. Faux fur exterior provides soft surface texture.</p>`,
  category: "Beds",
  type: "physical",
  images: [
    { src: "https://pub-e6ac2cc030e3466a91ba67cb97aa6813.r2.dev/happypaws/products/round-bolster-bed.webp", alt: "Round Bolster Bed" }
  ],
  variants: [
    {
      id: "variant-196",
      name: "Round Bolster Bed",
      sku: "HP-026",
      price: 6475,
      compareAtPrice: 12950,
      inStock: true,
    }
  ],
  features: [
    "Faux fur exterior",
    "Recycled polyester fill",
    "Diameter: 30 inches",
    "Removable center cushion",
    "Machine wash cold"
  ],
  rating: 4.8,
  reviewCount: 423,
  isFeatured: false,
  isNew: false,
  shippingInfo: "Ships within 1-3 business days. Free shipping on orders over $75.",

  seo: {
    title: "Round Bolster Bed | HappyPaws",
    description: "Circular plush bed with raised bolster rim for curling and nesting comfort.",
  },
  checkoutChampProductId: "196",
};
