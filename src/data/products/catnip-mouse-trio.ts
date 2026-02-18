import type { Product } from "@/lib/types/product";

export const catnipMouseTrio: Product = {
  slug: "catnip-mouse-trio",
  name: "Catnip Mouse Trio",
  shortDescription: "Set of three fabric mice filled with organic catnip for feline play.",
  description: `<p>Three small mouse toys constructed from cotton fabric with polyester fiber and organic catnip fill. Each mouse features a natural cord tail. Varied fabric patterns in each set.</p>`,
  category: "Toys",
  type: "physical",
  images: [
    { src: "https://pub-e6ac2cc030e3466a91ba67cb97aa6813.r2.dev/happypaws/products/catnip-mouse-trio.webp", alt: "Catnip Mouse Trio" }
  ],
  variants: [
    {
      id: "variant-194",
      name: "Catnip Mouse Trio",
      sku: "HP-024",
      price: 796,
      compareAtPrice: 1592,
      inStock: true,
    }
  ],
  features: [
    "Cotton fabric exterior",
    "Organic catnip filling",
    "Set of 3 mice",
    "Length: 3 inches each",
    "Spot clean only"
  ],
  rating: 4.5,
  reviewCount: 534,
  isFeatured: false,
  isNew: false,
  shippingInfo: "Ships within 1-3 business days. Free shipping on orders over $75.",

  seo: {
    title: "Catnip Mouse Trio | HappyPaws",
    description: "Set of three fabric mice filled with organic catnip for feline play.",
  },
  checkoutChampProductId: "194",
};
