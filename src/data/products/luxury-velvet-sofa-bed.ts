import type { Product } from "@/lib/types/product";

export const luxuryVelvetSofaBed: Product = {
  slug: "luxury-velvet-sofa-bed",
  name: "Luxury Velvet Sofa Bed",
  shortDescription: "Miniature sofa-style bed with velvet upholstery and wooden legs.",
  description: `<p>Furniture-grade pet sofa with crushed velvet upholstery and solid wood legs. Removable seat cushion with polyester fill. Matches home decor with sophisticated silhouette.</p>`,
  category: "Beds",
  type: "physical",
  images: [
    { src: "https://pub-e6ac2cc030e3466a91ba67cb97aa6813.r2.dev/happypaws/products/luxury-velvet-sofa-bed.webp", alt: "Luxury Velvet Sofa Bed" }
  ],
  variants: [
    {
      id: "variant-200",
      name: "Luxury Velvet Sofa Bed",
      sku: "HP-030",
      price: 12975,
      compareAtPrice: 25950,
      inStock: true,
    }
  ],
  features: [
    "Crushed velvet upholstery",
    "Solid wood legs",
    "Dimensions: 28 x 18 x 12 inches",
    "Removable seat cushion",
    "Spot clean only"
  ],
  rating: 4.9,
  reviewCount: 178,
  isFeatured: true,
  isNew: false,
  shippingInfo: "Ships within 1-3 business days. Free shipping on orders over $75.",

  seo: {
    title: "Luxury Velvet Sofa Bed | HappyPaws",
    description: "Miniature sofa-style bed with velvet upholstery and wooden legs.",
  },
  checkoutChampProductId: "200",
};
