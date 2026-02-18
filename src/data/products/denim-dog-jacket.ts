import type { Product } from "@/lib/types/product";

export const denimDogJacket: Product = {
  slug: "denim-dog-jacket",
  name: "Denim Dog Jacket",
  shortDescription: "Classic denim jacket with brass snap buttons and fleece-lined interior.",
  description: `<p>Vintage-style denim jacket constructed from cotton denim with brass snap closures. Soft fleece lining adds warmth. Back features a leash access point.</p>`,
  category: "Apparel",
  type: "physical",
  images: [
    { src: "https://pub-e6ac2cc030e3466a91ba67cb97aa6813.r2.dev/happypaws/products/denim-dog-jacket.webp", alt: "Denim Dog Jacket" }
  ],
  variants: [
    {
      id: "variant-228",
      name: "Denim Dog Jacket",
      sku: "HP-058",
      price: 4175,
      compareAtPrice: 8350,
      inStock: true,
    }
  ],
  features: [
    "Cotton denim exterior",
    "Fleece-lined interior",
    "Brass snap buttons",
    "Leash access point",
    "Machine wash cold"
  ],
  rating: 4.7,
  reviewCount: 223,
  isFeatured: false,
  isNew: true,
  shippingInfo: "Ships within 1-3 business days. Free shipping on orders over $75.",

  seo: {
    title: "Denim Dog Jacket | HappyPaws",
    description: "Classic denim jacket with brass snap buttons and fleece-lined interior.",
  },
  checkoutChampProductId: "228",
};
