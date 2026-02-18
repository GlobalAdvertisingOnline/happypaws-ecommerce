import type { Product } from "@/lib/types/product";

export const plushDuckToy: Product = {
  slug: "plush-duck-toy",
  name: "Plush Duck Toy",
  shortDescription: "Stuffed polyester duck with crinkle wings and multi-toned squeaker inside.",
  description: `<p>Soft plush duck toy with a polyester outer shell and fiberfill stuffing. Wings contain crinkle material for auditory interest. Body houses a squeaker that produces varied tones when compressed.</p>`,
  category: "Toys",
  type: "physical",
  images: [
    { src: "https://pub-e6ac2cc030e3466a91ba67cb97aa6813.r2.dev/happypaws/products/plush-duck-toy.webp", alt: "Plush Duck Toy" }
  ],
  variants: [
    {
      id: "variant-187",
      name: "Plush Duck Toy",
      sku: "HP-017",
      price: 1475,
      compareAtPrice: 2950,
      inStock: true,
    }
  ],
  features: [
    "Polyester plush construction",
    "Crinkle wing material",
    "Internal multi-tone squeaker",
    "Length: 12 inches",
    "Surface wash recommended"
  ],
  rating: 4.6,
  reviewCount: 312,
  isFeatured: false,
  isNew: true,
  shippingInfo: "Ships within 1-3 business days. Free shipping on orders over $75.",

  seo: {
    title: "Plush Duck Toy | HappyPaws",
    description: "Stuffed polyester duck with crinkle wings and multi-toned squeaker inside.",
  },
  checkoutChampProductId: "187",
};
