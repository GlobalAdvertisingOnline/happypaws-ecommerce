import type { Product } from "@/lib/types/product";

export const classicLeatherDogCollar: Product = {
  slug: "classic-leather-dog-collar",
  name: "Classic Leather Dog Collar",
  shortDescription: "Genuine full-grain leather collar with brass buckle and D-ring for medium to large dogs.",
  description: `<p>Crafted from full-grain leather with a solid brass buckle and welded D-ring attachment. Features five adjustment holes and burnished edges for durability. Available in rich brown tones with contrast stitching.</p>`,
  category: "Collars",
  type: "physical",
  images: [
    { src: "https://pub-e6ac2cc030e3466a91ba67cb97aa6813.r2.dev/happypaws/products/classic-leather-dog-collar.webp", alt: "Classic Leather Dog Collar" }
  ],
  variants: [
    {
      id: "variant-170",
      name: "Classic Leather Dog Collar",
      sku: "HP-001",
      price: 4275,
      compareAtPrice: 8550,
      inStock: true,
    }
  ],
  features: [
    "Full-grain leather construction",
    "Solid brass buckle and D-ring",
    "5 adjustment holes",
    "Fits necks 14-20 inches",
    "Width: 1 inch"
  ],
  rating: 4.8,
  reviewCount: 567,
  isFeatured: true,
  isNew: false,
  shippingInfo: "Ships within 1-3 business days. Free shipping on orders over $75.",

  seo: {
    title: "Classic Leather Dog Collar | HappyPaws",
    description: "Genuine full-grain leather collar with brass buckle and D-ring for medium to large dogs.",
  },
  checkoutChampProductId: "170",
};
