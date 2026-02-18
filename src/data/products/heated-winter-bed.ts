import type { Product } from "@/lib/types/product";

export const heatedWinterBed: Product = {
  slug: "heated-winter-bed",
  name: "Heated Winter Bed",
  shortDescription: "Self-warming bed with reflective thermal layer and plush polyester cover.",
  description: `<p>Features a reflective mylar core that radiates body heat back to the pet. No electricity required. Plush polyester cover over fiberfill cushioning provides additional insulation.</p>`,
  category: "Beds",
  type: "physical",
  images: [
    { src: "https://pub-e6ac2cc030e3466a91ba67cb97aa6813.r2.dev/happypaws/products/heated-winter-bed.webp", alt: "Heated Winter Bed" }
  ],
  variants: [
    {
      id: "variant-204",
      name: "Heated Winter Bed",
      sku: "HP-034",
      price: 4575,
      compareAtPrice: 9150,
      inStock: true,
    }
  ],
  features: [
    "Reflective thermal mylar layer",
    "Plush polyester cover",
    "Dimensions: 24 x 18 x 3 inches",
    "No electricity required",
    "Spot clean only"
  ],
  rating: 4.7,
  reviewCount: 312,
  isFeatured: false,
  isNew: true,
  shippingInfo: "Ships within 1-3 business days. Free shipping on orders over $75.",

  seo: {
    title: "Heated Winter Bed | HappyPaws",
    description: "Self-warming bed with reflective thermal layer and plush polyester cover.",
  },
  checkoutChampProductId: "204",
};
