import type { Product } from "@/lib/types/product";

export const softHoodieSweatshirt: Product = {
  slug: "soft-hoodie-sweatshirt",
  name: "Soft Hoodie Sweatshirt",
  shortDescription: "Cotton blend hoodie with kangaroo pocket and drawstring hood for small dogs.",
  description: `<p>Casual hoodie sweatshirt made from a soft cotton-polyester blend. Features a functional kangaroo pocket and adjustable drawstring hood. Ribbed cuffs and hem.</p>`,
  category: "Apparel",
  type: "physical",
  images: [
    { src: "https://pub-e6ac2cc030e3466a91ba67cb97aa6813.r2.dev/happypaws/products/soft-hoodie-sweatshirt.webp", alt: "Soft Hoodie Sweatshirt" }
  ],
  variants: [
    {
      id: "variant-229",
      name: "Soft Hoodie Sweatshirt",
      sku: "HP-059",
      price: 2775,
      compareAtPrice: 5550,
      inStock: true,
    }
  ],
  features: [
    "Cotton-polyester blend",
    "Functional kangaroo pocket",
    "Drawstring hood",
    "Ribbed cuffs and hem",
    "Machine wash cold"
  ],
  rating: 4.6,
  reviewCount: 334,
  isFeatured: false,
  isNew: false,
  shippingInfo: "Ships within 1-3 business days. Free shipping on orders over $75.",

  seo: {
    title: "Soft Hoodie Sweatshirt | HappyPaws",
    description: "Cotton blend hoodie with kangaroo pocket and drawstring hood for small dogs.",
  },
  checkoutChampProductId: "229",
};
