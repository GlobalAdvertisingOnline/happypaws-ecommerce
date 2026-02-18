import type { Product } from "@/lib/types/product";

export const studdedLeatherCollar: Product = {
  slug: "studded-leather-collar",
  name: "Studded Leather Collar",
  shortDescription: "Full-grain leather collar with decorative metal studs and heavy-duty buckle.",
  description: `<p>Premium leather collar featuring rows of nickel-plated decorative studs. Heavy-gauge roller buckle and reinforced D-ring withstand strong pulls. Edges are beveled and sealed for smooth finish.</p>`,
  category: "Collars",
  type: "physical",
  images: [
    { src: "https://pub-e6ac2cc030e3466a91ba67cb97aa6813.r2.dev/happypaws/products/studded-leather-collar.webp", alt: "Studded Leather Collar" }
  ],
  variants: [
    {
      id: "variant-177",
      name: "Studded Leather Collar",
      sku: "HP-007",
      price: 5875,
      compareAtPrice: 11750,
      inStock: true,
    }
  ],
  features: [
    "Full-grain leather",
    "Nickel-plated metal studs",
    "Heavy-duty roller buckle",
    "Fits necks 16-24 inches",
    "Width: 1.5 inches"
  ],
  rating: 4.8,
  reviewCount: 345,
  isFeatured: true,
  isNew: false,
  shippingInfo: "Ships within 1-3 business days. Free shipping on orders over $75.",

  seo: {
    title: "Studded Leather Collar | HappyPaws",
    description: "Full-grain leather collar with decorative metal studs and heavy-duty buckle.",
  },
  checkoutChampProductId: "177",
};
