import type { Product } from "@/lib/types/product";

export const canvasMartingaleCollar: Product = {
  slug: "canvas-martingale-collar",
  name: "Canvas Martingale Collar",
  shortDescription: "Heavy-duty canvas martingale-style collar with limited slip design for training.",
  description: `<p>Constructed from double-layered canvas with a martingale loop that tightens gently when pulled. Includes welded steel rings and reinforced webbing. Designed for dogs that slip traditional collars.</p>`,
  category: "Collars",
  type: "physical",
  images: [
    { src: "https://pub-e6ac2cc030e3466a91ba67cb97aa6813.r2.dev/happypaws/products/canvas-martingale-collar.webp", alt: "Canvas Martingale Collar" }
  ],
  variants: [
    {
      id: "variant-176",
      name: "Canvas Martingale Collar",
      sku: "HP-006",
      price: 3195,
      compareAtPrice: 6390,
      inStock: true,
    }
  ],
  features: [
    "Double-layer canvas construction",
    "Limited-slip martingale design",
    "Welded steel rings",
    "Adjustable 12-20 inches",
    "Machine wash cold"
  ],
  rating: 4.6,
  reviewCount: 278,
  isFeatured: false,
  isNew: false,
  shippingInfo: "Ships within 1-3 business days. Free shipping on orders over $75.",

  seo: {
    title: "Canvas Martingale Collar | HappyPaws",
    description: "Heavy-duty canvas martingale-style collar with limited slip design for training.",
  },
  checkoutChampProductId: "176",
};
