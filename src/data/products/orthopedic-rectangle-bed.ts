import type { Product } from "@/lib/types/product";

export const orthopedicRectangleBed: Product = {
  slug: "orthopedic-rectangle-bed",
  name: "Orthopedic Rectangle Bed",
  shortDescription: "Memory foam rectangle bed with removable polyester cover and non-slip bottom.",
  description: `<p>Supportive memory foam mattress enclosed in a machine-washable polyester cover. Non-slip rubber dots on base prevent sliding. Bolstered edges provide head and neck rest.</p>`,
  category: "Beds",
  type: "physical",
  images: [
    { src: "https://pub-e6ac2cc030e3466a91ba67cb97aa6813.r2.dev/happypaws/products/orthopedic-rectangle-bed.webp", alt: "Orthopedic Rectangle Bed" }
  ],
  variants: [
    {
      id: "variant-195",
      name: "Orthopedic Rectangle Bed",
      sku: "HP-025",
      price: 8975,
      compareAtPrice: 17950,
      inStock: true,
    }
  ],
  features: [
    "Memory foam core",
    "Removable polyester cover",
    "Dimensions: 36 x 28 x 4 inches",
    "Non-slip rubber bottom",
    "Machine wash cover"
  ],
  rating: 4.9,
  reviewCount: 567,
  isFeatured: true,
  isNew: false,
  shippingInfo: "Ships within 1-3 business days. Free shipping on orders over $75.",

  seo: {
    title: "Orthopedic Rectangle Bed | HappyPaws",
    description: "Memory foam rectangle bed with removable polyester cover and non-slip bottom.",
  },
  checkoutChampProductId: "195",
};
