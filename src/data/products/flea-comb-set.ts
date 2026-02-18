import type { Product } from "@/lib/types/product";

export const fleaCombSet: Product = {
  slug: "flea-comb-set",
  name: "Flea Comb Set",
  shortDescription: "Two-piece stainless steel flea comb set with fine-tooth and double-row designs.",
  description: `<p>Set includes a fine-tooth single-row comb and a double-row comb for thorough inspection. Stainless steel teeth spaced closely to trap fleas and debris. Ergonomic plastic handles.</p>`,
  category: "Grooming",
  type: "physical",
  images: [
    { src: "https://pub-e6ac2cc030e3466a91ba67cb97aa6813.r2.dev/happypaws/products/flea-comb-set.webp", alt: "Flea Comb Set" }
  ],
  variants: [
    {
      id: "variant-216",
      name: "Flea Comb Set",
      sku: "HP-046",
      price: 995,
      compareAtPrice: 1990,
      inStock: true,
    }
  ],
  features: [
    "Stainless steel teeth",
    "2 comb styles included",
    "Fine tooth spacing",
    "Ergonomic plastic handles",
    "Clean after each use"
  ],
  rating: 4.5,
  reviewCount: 356,
  isFeatured: false,
  isNew: false,
  shippingInfo: "Ships within 1-3 business days. Free shipping on orders over $75.",

  seo: {
    title: "Flea Comb Set | HappyPaws",
    description: "Two-piece stainless steel flea comb set with fine-tooth and double-row designs.",
  },
  checkoutChampProductId: "216",
};
