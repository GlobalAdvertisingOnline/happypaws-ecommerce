import type { Product } from "@/lib/types/product";

export const gpsCollarAttachment: Product = {
  slug: "gps-collar-attachment",
  name: "GPS Collar Attachment",
  shortDescription: "Lightweight GPS tracker that clips to any collar for real-time location monitoring.",
  description: `<p>Compact GPS unit attaches to existing collars via durable clip mechanism. Water-resistant housing withstands outdoor conditions. Rechargeable battery via USB.</p>`,
  category: "Accessories",
  type: "physical",
  images: [
    { src: "https://pub-e6ac2cc030e3466a91ba67cb97aa6813.r2.dev/happypaws/products/gps-collar-attachment.webp", alt: "GPS Collar Attachment" }
  ],
  variants: [
    {
      id: "variant-239",
      name: "GPS Collar Attachment",
      sku: "HP-068",
      price: 8475,
      compareAtPrice: 16950,
      inStock: true,
    }
  ],
  features: [
    "Lightweight plastic housing",
    "Water-resistant design",
    "USB rechargeable battery",
    "Collar clip attachment",
    "Dimensions: 1.5 x 1.5 x 0.5 inches"
  ],
  rating: 4.7,
  reviewCount: 256,
  isFeatured: false,
  isNew: true,
  shippingInfo: "Ships within 1-3 business days. Free shipping on orders over $75.",

  seo: {
    title: "GPS Collar Attachment | HappyPaws",
    description: "Lightweight GPS tracker that clips to any collar for real-time location monitoring.",
  },
  checkoutChampProductId: "239",
};
