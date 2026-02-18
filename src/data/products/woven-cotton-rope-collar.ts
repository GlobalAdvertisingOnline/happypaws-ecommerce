import type { Product } from "@/lib/types/product";

export const wovenCottonRopeCollar: Product = {
  slug: "woven-cotton-rope-collar",
  name: "Woven Cotton Rope Collar",
  shortDescription: "Hand-braided cotton rope collar with adjustable leather slider closure.",
  description: `<p>Artisan-style collar constructed from triple-braided cotton rope with a natural fiber feel. Leather slider allows for size adjustment. Finished with brass end caps and a matching D-ring.</p>`,
  category: "Collars",
  type: "physical",
  images: [
    { src: "https://pub-e6ac2cc030e3466a91ba67cb97aa6813.r2.dev/happypaws/products/woven-cotton-rope-collar.webp", alt: "Woven Cotton Rope Collar" }
  ],
  variants: [
    {
      id: "variant-175",
      name: "Woven Cotton Rope Collar",
      sku: "HP-005",
      price: 3475,
      compareAtPrice: 6950,
      inStock: true,
    }
  ],
  features: [
    "100% cotton rope construction",
    "Leather adjustment slider",
    "Brass hardware and end caps",
    "Fits necks 10-16 inches",
    "Air dry after washing"
  ],
  rating: 4.7,
  reviewCount: 156,
  isFeatured: false,
  isNew: true,
  shippingInfo: "Ships within 1-3 business days. Free shipping on orders over $75.",

  seo: {
    title: "Woven Cotton Rope Collar | HappyPaws",
    description: "Hand-braided cotton rope collar with adjustable leather slider closure.",
  },
  checkoutChampProductId: "175",
};
