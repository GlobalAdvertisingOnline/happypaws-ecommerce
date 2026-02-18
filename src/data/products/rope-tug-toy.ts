import type { Product } from "@/lib/types/product";

export const ropeTugToy: Product = {
  slug: "rope-tug-toy",
  name: "Rope Tug Toy",
  shortDescription: "Heavy-duty cotton rope with knotted ends for interactive tug-of-war play.",
  description: `<p>Thick braided cotton rope featuring tightly wound knots at each end for grip. Natural cotton fibers are gentle on teeth and gums. Machine washable for easy cleaning between play sessions.</p>`,
  category: "Toys",
  type: "physical",
  images: [
    { src: "https://pub-e6ac2cc030e3466a91ba67cb97aa6813.r2.dev/happypaws/products/rope-tug-toy.webp", alt: "Rope Tug Toy" }
  ],
  variants: [
    {
      id: "variant-185",
      name: "Rope Tug Toy",
      sku: "HP-015",
      price: 1175,
      compareAtPrice: 2350,
      inStock: true,
    }
  ],
  features: [
    "100% cotton rope",
    "Triple-knotted design",
    "Length: 18 inches",
    "Diameter: 1.5 inches",
    "Machine washable"
  ],
  rating: 4.6,
  reviewCount: 534,
  isFeatured: false,
  isNew: false,
  shippingInfo: "Ships within 1-3 business days. Free shipping on orders over $75.",

  seo: {
    title: "Rope Tug Toy | HappyPaws",
    description: "Heavy-duty cotton rope with knotted ends for interactive tug-of-war play.",
  },
  checkoutChampProductId: "185",
};
