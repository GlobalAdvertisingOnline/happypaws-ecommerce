import type { Product } from "@/lib/types/product";

export const caveHoodedBed: Product = {
  slug: "cave-hooded-bed",
  name: "Cave Hooded Bed",
  shortDescription: "Enclosed cave-style bed with plush interior and hood for burrowing pets.",
  description: `<p>Semi-enclosed bed with a flexible hood that creates a cave-like space. Polyester shell with sherpa fleece lining. Base contains a removable cushion insert for washing.</p>`,
  category: "Beds",
  type: "physical",
  images: [
    { src: "https://pub-e6ac2cc030e3466a91ba67cb97aa6813.r2.dev/happypaws/products/cave-hooded-bed.webp", alt: "Cave Hooded Bed" }
  ],
  variants: [
    {
      id: "variant-198",
      name: "Cave Hooded Bed",
      sku: "HP-028",
      price: 5475,
      compareAtPrice: 10950,
      inStock: true,
    }
  ],
  features: [
    "Polyester shell with sherpa lining",
    "Flexible hooded design",
    "Interior dimensions: 18 x 14 inches",
    "Removable cushion insert",
    "Machine wash on gentle"
  ],
  rating: 4.8,
  reviewCount: 289,
  isFeatured: false,
  isNew: true,
  shippingInfo: "Ships within 1-3 business days. Free shipping on orders over $75.",

  seo: {
    title: "Cave Hooded Bed | HappyPaws",
    description: "Enclosed cave-style bed with plush interior and hood for burrowing pets.",
  },
  checkoutChampProductId: "198",
};
