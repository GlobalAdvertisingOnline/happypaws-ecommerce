import type { Product } from "@/lib/types/product";

export const memoryFoamMattressBed: Product = {
  slug: "memory-foam-mattress-bed",
  name: "Memory Foam Mattress Bed",
  shortDescription: "Thick memory foam mattress with cooling gel layer and washable cover.",
  description: `<p>Premium mattress bed featuring a base layer of high-density memory foam topped with cooling gel-infused foam. Breathable mesh cover promotes airflow. Removable cover with zipper closure.</p>`,
  category: "Beds",
  type: "physical",
  images: [
    { src: "https://pub-e6ac2cc030e3466a91ba67cb97aa6813.r2.dev/happypaws/products/memory-foam-mattress-bed.webp", alt: "Memory Foam Mattress Bed" }
  ],
  variants: [
    {
      id: "variant-206",
      name: "Memory Foam Mattress Bed",
      sku: "HP-036",
      price: 14975,
      compareAtPrice: 29950,
      inStock: true,
    }
  ],
  features: [
    "Memory foam with cooling gel",
    "Breathable mesh cover",
    "Dimensions: 40 x 30 x 5 inches",
    "Removable zippered cover",
    "Machine wash cover cold"
  ],
  rating: 4.9,
  reviewCount: 456,
  isFeatured: true,
  isNew: false,
  shippingInfo: "Ships within 1-3 business days. Free shipping on orders over $75.",

  seo: {
    title: "Memory Foam Mattress Bed | HappyPaws",
    description: "Thick memory foam mattress with cooling gel layer and washable cover.",
  },
  checkoutChampProductId: "206",
};
