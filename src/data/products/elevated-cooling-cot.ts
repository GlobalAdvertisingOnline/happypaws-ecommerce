import type { Product } from "@/lib/types/product";

export const elevatedCoolingCot: Product = {
  slug: "elevated-cooling-cot",
  name: "Elevated Cooling Cot",
  shortDescription: "Breathable mesh cot with powder-coated steel frame for warm weather comfort.",
  description: `<p>Raised pet bed featuring a PVC-coated mesh sleeping surface stretched over a powder-coated steel frame. Elevated design promotes airflow. Folds flat for travel and storage.</p>`,
  category: "Beds",
  type: "physical",
  images: [
    { src: "https://pub-e6ac2cc030e3466a91ba67cb97aa6813.r2.dev/happypaws/products/elevated-cooling-cot.webp", alt: "Elevated Cooling Cot" }
  ],
  variants: [
    {
      id: "variant-197",
      name: "Elevated Cooling Cot",
      sku: "HP-027",
      price: 5975,
      compareAtPrice: 11950,
      inStock: true,
    }
  ],
  features: [
    "PVC-coated mesh surface",
    "Powder-coated steel frame",
    "Dimensions: 42 x 30 x 7 inches",
    "Weight capacity: 100 lbs",
    "Wipe clean with damp cloth"
  ],
  rating: 4.7,
  reviewCount: 345,
  isFeatured: false,
  isNew: false,
  shippingInfo: "Ships within 1-3 business days. Free shipping on orders over $75.",

  seo: {
    title: "Elevated Cooling Cot | HappyPaws",
    description: "Breathable mesh cot with powder-coated steel frame for warm weather comfort.",
  },
  checkoutChampProductId: "197",
};
