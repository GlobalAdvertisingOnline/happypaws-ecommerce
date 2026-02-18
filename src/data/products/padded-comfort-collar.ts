import type { Product } from "@/lib/types/product";

export const paddedComfortCollar: Product = {
  slug: "padded-comfort-collar",
  name: "Padded Comfort Collar",
  shortDescription: "Neoprene-padded nylon collar with soft interior lining for extended wear comfort.",
  description: `<p>Features a neoprene foam padding beneath nylon exterior for cushioned neck support. Stainless steel hardware resists corrosion. Double-stitched seams provide structural integrity throughout.</p>`,
  category: "Collars",
  type: "physical",
  images: [
    { src: "https://pub-e6ac2cc030e3466a91ba67cb97aa6813.r2.dev/happypaws/products/padded-comfort-collar.webp", alt: "Padded Comfort Collar" }
  ],
  variants: [
    {
      id: "variant-173",
      name: "Padded Comfort Collar",
      sku: "HP-004",
      price: 2895,
      compareAtPrice: 5790,
      inStock: true,
    }
  ],
  features: [
    "Nylon exterior with neoprene padding",
    "Stainless steel buckle and D-ring",
    "Adjustable 14-22 inches",
    "Width: 1.25 inches",
    "Spot clean only"
  ],
  rating: 4.8,
  reviewCount: 412,
  isFeatured: true,
  isNew: false,
  shippingInfo: "Ships within 1-3 business days. Free shipping on orders over $75.",

  seo: {
    title: "Padded Comfort Collar | HappyPaws",
    description: "Neoprene-padded nylon collar with soft interior lining for extended wear comfort.",
  },
  checkoutChampProductId: "173",
};
