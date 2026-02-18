import type { Product } from "@/lib/types/product";

export const insulatedWinterCoat: Product = {
  slug: "insulated-winter-coat",
  name: "Insulated Winter Coat",
  shortDescription: "Quilted nylon coat with synthetic down fill and water-resistant outer shell.",
  description: `<p>Cold-weather coat featuring quilted nylon shell with synthetic down insulation. Water-resistant exterior sheds snow and light rain. Full belly coverage with velcro closures.</p>`,
  category: "Apparel",
  type: "physical",
  images: [
    { src: "https://pub-e6ac2cc030e3466a91ba67cb97aa6813.r2.dev/happypaws/products/insulated-winter-coat.webp", alt: "Insulated Winter Coat" }
  ],
  variants: [
    {
      id: "variant-221",
      name: "Insulated Winter Coat",
      sku: "HP-051",
      price: 5775,
      compareAtPrice: 11550,
      inStock: true,
    }
  ],
  features: [
    "Quilted nylon shell",
    "Synthetic down insulation",
    "Water-resistant exterior",
    "Velcro belly closures",
    "Spot clean only"
  ],
  rating: 4.8,
  reviewCount: 289,
  isFeatured: true,
  isNew: false,
  shippingInfo: "Ships within 1-3 business days. Free shipping on orders over $75.",

  seo: {
    title: "Insulated Winter Coat | HappyPaws",
    description: "Quilted nylon coat with synthetic down fill and water-resistant outer shell.",
  },
  checkoutChampProductId: "221",
};
