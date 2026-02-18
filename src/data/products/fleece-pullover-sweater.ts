import type { Product } from "@/lib/types/product";

export const fleecePulloverSweater: Product = {
  slug: "fleece-pullover-sweater",
  name: "Fleece Pullover Sweater",
  shortDescription: "Soft polyester fleece sweater with ribbed cuffs and easy on-off leash hole.",
  description: `<p>Cozy pullover constructed from anti-pill polyester fleece. Features ribbed collar and cuffs for stretch comfort. Back leash access hole allows attachment while worn.</p>`,
  category: "Apparel",
  type: "physical",
  images: [
    { src: "https://pub-e6ac2cc030e3466a91ba67cb97aa6813.r2.dev/happypaws/products/fleece-pullover-sweater.webp", alt: "Fleece Pullover Sweater" }
  ],
  variants: [
    {
      id: "variant-220",
      name: "Fleece Pullover Sweater",
      sku: "HP-050",
      price: 2575,
      compareAtPrice: 5150,
      inStock: true,
    }
  ],
  features: [
    "Anti-pill polyester fleece",
    "Ribbed collar and cuffs",
    "Back leash hole",
    "Multiple sizes available",
    "Machine wash cold"
  ],
  rating: 4.6,
  reviewCount: 412,
  isFeatured: false,
  isNew: false,
  shippingInfo: "Ships within 1-3 business days. Free shipping on orders over $75.",

  seo: {
    title: "Fleece Pullover Sweater | HappyPaws",
    description: "Soft polyester fleece sweater with ribbed cuffs and easy on-off leash hole.",
  },
  checkoutChampProductId: "220",
};
