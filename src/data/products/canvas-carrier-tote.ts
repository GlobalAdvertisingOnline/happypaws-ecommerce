import type { Product } from "@/lib/types/product";

export const canvasCarrierTote: Product = {
  slug: "canvas-carrier-tote",
  name: "Canvas Carrier Tote",
  shortDescription: "Sturdy canvas carrier bag with mesh ventilation and padded shoulder strap.",
  description: `<p>Durable canvas carrier with reinforced bottom and mesh side panels for airflow. Padded adjustable shoulder strap distributes weight. Interior safety tether attaches to collar.</p>`,
  category: "Accessories",
  type: "physical",
  images: [
    { src: "https://pub-e6ac2cc030e3466a91ba67cb97aa6813.r2.dev/happypaws/products/canvas-carrier-tote.webp", alt: "Canvas Carrier Tote" }
  ],
  variants: [
    {
      id: "variant-236",
      name: "Canvas Carrier Tote",
      sku: "HP-066",
      price: 5275,
      compareAtPrice: 10550,
      inStock: true,
    }
  ],
  features: [
    "Heavy-duty canvas exterior",
    "Mesh ventilation panels",
    "Padded shoulder strap",
    "Interior safety tether",
    "Dimensions: 17 x 9 x 11 inches"
  ],
  rating: 4.7,
  reviewCount: 267,
  isFeatured: false,
  isNew: false,
  shippingInfo: "Ships within 1-3 business days. Free shipping on orders over $75.",

  seo: {
    title: "Canvas Carrier Tote | HappyPaws",
    description: "Sturdy canvas carrier bag with mesh ventilation and padded shoulder strap.",
  },
  checkoutChampProductId: "236",
};
