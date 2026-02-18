import type { Product } from "@/lib/types/product";

export const dualSidedSlickerBrush: Product = {
  slug: "dual-sided-slicker-brush",
  name: "Dual-Sided Slicker Brush",
  shortDescription: "Wooden handle brush with fine wire bristles on one side and soft nylon on the other.",
  description: `<p>Ergonomic wooden handle brush featuring stainless steel slicker pins on one side and soft nylon bristles on the reverse. Rounded pin tips protect skin. Suitable for all coat types.</p>`,
  category: "Grooming",
  type: "physical",
  images: [
    { src: "https://pub-e6ac2cc030e3466a91ba67cb97aa6813.r2.dev/happypaws/products/dual-sided-slicker-brush.webp", alt: "Dual-Sided Slicker Brush" }
  ],
  variants: [
    {
      id: "variant-207",
      name: "Dual-Sided Slicker Brush",
      sku: "HP-037",
      price: 1795,
      compareAtPrice: 3590,
      inStock: true,
    }
  ],
  features: [
    "Wooden ergonomic handle",
    "Stainless steel slicker pins",
    "Soft nylon bristle side",
    "Dimensions: 7 x 3 inches",
    "Wipe clean after use"
  ],
  rating: 4.7,
  reviewCount: 534,
  isFeatured: false,
  isNew: false,
  shippingInfo: "Ships within 1-3 business days. Free shipping on orders over $75.",

  seo: {
    title: "Dual-Sided Slicker Brush | HappyPaws",
    description: "Wooden handle brush with fine wire bristles on one side and soft nylon on the other.",
  },
  checkoutChampProductId: "207",
};
