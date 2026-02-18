import type { Product } from "@/lib/types/product";

export const velvetPouch: Product = {
  slug: "velvet-pouch",
  name: "Velvet Storage Pouch",
  shortDescription: "Soft velvet drawstring pouch for storing small pet accessories and treats.",
  description: `<p>Elegant velvet pouch with satin drawstring closure. Perfect for storing small accessories, treats, or grooming tools. Lined interior protects contents.</p>`,
  category: "Accessories",
  type: "physical",
  images: [
    { src: "https://pub-e6ac2cc030e3466a91ba67cb97aa6813.r2.dev/happypaws/products/velvet-pouch.webp", alt: "Velvet Storage Pouch" }
  ],
  variants: [
    {
      id: "variant-245",
      name: "Velvet Storage Pouch",
      sku: "HP-VP",
      price: 500,
      compareAtPrice: 1000,
      inStock: true,
    }
  ],
  features: [
    "Soft velvet exterior",
    "Satin drawstring closure",
    "Lined interior",
    "Dimensions: 6 x 8 inches",
    "Spot clean only"
  ],
  rating: 4.5,
  reviewCount: 145,
  isFeatured: false,
  isNew: false,
  shippingInfo: "Ships within 1-3 business days. Free shipping on orders over $75.",

  seo: {
    title: "Velvet Storage Pouch | HappyPaws",
    description: "Soft velvet drawstring pouch for storing small pet accessories and treats.",
  },
  checkoutChampProductId: "245",
};
