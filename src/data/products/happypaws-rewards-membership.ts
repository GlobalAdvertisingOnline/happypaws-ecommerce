import type { Product } from "@/lib/types/product";
import { MEMBERSHIP } from "@/lib/constants";

export const happypawsRewardsMembership: Product = {
  slug: "happypaws-rewards-membership",
  name: "HappyPaws Rewards",
  shortDescription: "Monthly rewards membership with exclusive discounts and free shipping on every order.",
  description: `<p>Join HappyPaws Rewards for exclusive member-only discounts and free shipping on every order, every month.</p>`,
  category: "Accessories",
  type: "subscription",
  images: [
    { src: "https://pub-e6ac2cc030e3466a91ba67cb97aa6813.r2.dev/happypaws/products/happypaws-rewards-membership.webp", alt: "HappyPaws Rewards" }
  ],
  variants: [
    {
      id: "variant-244",
      name: "HappyPaws Rewards",
      sku: "MEMBERSHIP-001",
      price: MEMBERSHIP.price,
      compareAtPrice: 7990,
      inStock: true,
    }
  ],
  features: [
    "Free shipping on all orders",
    "15% member discount storewide",
    "Early access to new arrivals",
    "Monthly exclusive offers",
    "Cancel anytime"
  ],
  rating: 4.9,
  reviewCount: 312,
  isFeatured: false,
  isNew: false,
  shippingInfo: "Digital membership — no shipping required.",
  subscription: {
    interval: "monthly",
    recurringPrice: MEMBERSHIP.price,
    cancelUrl: "/membership/manage",
  },
  seo: {
    title: "HappyPaws Rewards | HappyPaws",
    description: "Monthly rewards membership with exclusive discounts and free shipping on every order.",
  },
  checkoutChampProductId: "244",
};
