import type { Product } from "@/lib/types/product";

export const giftBox: Product = {
  slug: "gift-box",
  name: "Premium Gift Box",
  shortDescription: "Sturdy cardboard gift box with magnetic closure and ribbon accent.",
  description: `<p>Presentation gift box constructed from rigid cardboard with magnetic flap closure. Finished with grosgrain ribbon accent. Perfect for gifting pet accessories.</p>`,
  category: "Accessories",
  type: "physical",
  images: [
    { src: "https://pub-e6ac2cc030e3466a91ba67cb97aa6813.r2.dev/happypaws/products/gift-box.webp", alt: "Premium Gift Box" }
  ],
  variants: [
    {
      id: "variant-246",
      name: "Premium Gift Box",
      sku: "HP-GB",
      price: 500,
      compareAtPrice: 1000,
      inStock: true,
    }
  ],
  features: [
    "Rigid cardboard construction",
    "Magnetic flap closure",
    "Grosgrain ribbon accent",
    "Dimensions: 10 x 8 x 4 inches",
    "Reusable packaging"
  ],
  rating: 4.6,
  reviewCount: 98,
  isFeatured: false,
  isNew: false,
  shippingInfo: "Ships within 1-3 business days. Free shipping on orders over $75.",

  seo: {
    title: "Premium Gift Box | HappyPaws",
    description: "Sturdy cardboard gift box with magnetic closure and ribbon accent.",
  },
  checkoutChampProductId: "246",
};
