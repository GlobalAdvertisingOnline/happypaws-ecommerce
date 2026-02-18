import type { Product } from "@/lib/types/product";

export const wideLeatherCollar: Product = {
  slug: "wide-leather-collar",
  name: "Wide Leather Collar",
  shortDescription: "Extra-wide genuine leather collar designed for large and giant breed dogs.",
  description: `<p>Substantial leather collar measuring 2 inches wide for maximum distribution of leash pressure. Features a heavy roller buckle and two D-rings for balanced attachment. Vegetable-tanned leather.</p>`,
  category: "Collars",
  type: "physical",
  images: [
    { src: "https://pub-e6ac2cc030e3466a91ba67cb97aa6813.r2.dev/happypaws/products/wide-leather-collar.webp", alt: "Wide Leather Collar" }
  ],
  variants: [
    {
      id: "variant-182",
      name: "Wide Leather Collar",
      sku: "HP-012",
      price: 6975,
      compareAtPrice: 13950,
      inStock: true,
    }
  ],
  features: [
    "Vegetable-tanned leather",
    "Width: 2 inches",
    "Heavy roller buckle",
    "Dual D-ring attachment",
    "Fits necks 18-26 inches"
  ],
  rating: 4.8,
  reviewCount: 234,
  isFeatured: false,
  isNew: false,
  shippingInfo: "Ships within 1-3 business days. Free shipping on orders over $75.",

  seo: {
    title: "Wide Leather Collar | HappyPaws",
    description: "Extra-wide genuine leather collar designed for large and giant breed dogs.",
  },
  checkoutChampProductId: "182",
};
