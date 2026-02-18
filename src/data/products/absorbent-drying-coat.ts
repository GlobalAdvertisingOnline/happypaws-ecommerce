import type { Product } from "@/lib/types/product";

export const absorbentDryingCoat: Product = {
  slug: "absorbent-drying-coat",
  name: "Absorbent Drying Coat",
  shortDescription: "Microfiber towel coat with adjustable velcro straps for post-bath drying.",
  description: `<p>Wearable microfiber drying coat absorbs moisture quickly after bathing or swimming. Adjustable velcro straps at neck and belly ensure secure fit. Machine washable for repeated use.</p>`,
  category: "Grooming",
  type: "physical",
  images: [
    { src: "https://pub-e6ac2cc030e3466a91ba67cb97aa6813.r2.dev/happypaws/products/absorbent-drying-coat.webp", alt: "Absorbent Drying Coat" }
  ],
  variants: [
    {
      id: "variant-217",
      name: "Absorbent Drying Coat",
      sku: "HP-047",
      price: 2896,
      compareAtPrice: 5792,
      inStock: true,
    }
  ],
  features: [
    "Microfiber construction",
    "Adjustable velcro straps",
    "Multiple sizes available",
    "Machine washable",
    "Tumble dry low"
  ],
  rating: 4.7,
  reviewCount: 278,
  isFeatured: false,
  isNew: false,
  shippingInfo: "Ships within 1-3 business days. Free shipping on orders over $75.",

  seo: {
    title: "Absorbent Drying Coat | HappyPaws",
    description: "Microfiber towel coat with adjustable velcro straps for post-bath drying.",
  },
  checkoutChampProductId: "217",
};
