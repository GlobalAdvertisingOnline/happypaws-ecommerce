import type { Product } from "@/lib/types/product";

export const rubberBoneChew: Product = {
  slug: "rubber-bone-chew",
  name: "Rubber Bone Chew",
  shortDescription: "Classic bone-shaped natural rubber chew toy with flavor-infused material.",
  description: `<p>Traditional bone shape molded from durable natural rubber. Hollow center allows for treat filling. Textured surface with raised ridges provides varied chewing experience.</p>`,
  category: "Toys",
  type: "physical",
  images: [
    { src: "https://pub-e6ac2cc030e3466a91ba67cb97aa6813.r2.dev/happypaws/products/rubber-bone-chew.webp", alt: "Rubber Bone Chew" }
  ],
  variants: [
    {
      id: "variant-191",
      name: "Rubber Bone Chew",
      sku: "HP-021",
      price: 1395,
      compareAtPrice: 2790,
      inStock: true,
    }
  ],
  features: [
    "Natural rubber construction",
    "Hollow center for treats",
    "Length: 6 inches",
    "Textured ridges",
    "Dishwasher safe"
  ],
  rating: 4.7,
  reviewCount: 445,
  isFeatured: false,
  isNew: false,
  shippingInfo: "Ships within 1-3 business days. Free shipping on orders over $75.",

  seo: {
    title: "Rubber Bone Chew | HappyPaws",
    description: "Classic bone-shaped natural rubber chew toy with flavor-infused material.",
  },
  checkoutChampProductId: "191",
};
