import type { Product } from "@/lib/types/product";

export const adjustableNylonHarness: Product = {
  slug: "adjustable-nylon-harness",
  name: "Adjustable Nylon Harness",
  shortDescription: "Step-in nylon harness with padded chest plate and dual D-ring attachment.",
  description: `<p>Step-in style harness constructed from durable nylon webbing with a padded neoprene chest plate. Dual D-rings allow front and back leash attachment. Four adjustment points ensure custom fit.</p>`,
  category: "Accessories",
  type: "physical",
  images: [
    { src: "https://pub-e6ac2cc030e3466a91ba67cb97aa6813.r2.dev/happypaws/products/adjustable-nylon-harness.webp", alt: "Adjustable Nylon Harness" }
  ],
  variants: [
    {
      id: "variant-230",
      name: "Adjustable Nylon Harness",
      sku: "HP-060",
      price: 3595,
      compareAtPrice: 7190,
      inStock: true,
    }
  ],
  features: [
    "Nylon webbing construction",
    "Padded neoprene chest plate",
    "Dual D-ring attachment",
    "4 adjustment points",
    "Machine wash on gentle"
  ],
  rating: 4.8,
  reviewCount: 567,
  isFeatured: true,
  isNew: false,
  shippingInfo: "Ships within 1-3 business days. Free shipping on orders over $75.",

  seo: {
    title: "Adjustable Nylon Harness | HappyPaws",
    description: "Step-in nylon harness with padded chest plate and dual D-ring attachment.",
  },
  checkoutChampProductId: "230",
};
