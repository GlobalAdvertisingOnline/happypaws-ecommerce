"use client";

import { ShoppingBag, Users, ThumbsUp, Headphones } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useImageReveal } from "@/hooks/useImageReveal";
import { useCountUp } from "@/hooks/useCountUp";
import { IMAGES } from "@/lib/constants";

const stats = [
  { icon: ShoppingBag, value: "10,000+", label: "Orders Delivered" },
  { icon: Users, value: "50,000+", label: "Happy Pet Owners" },
  { icon: ThumbsUp, value: "98%", label: "Satisfaction Rate" },
  { icon: Headphones, value: "5", label: "Days/Week Support" },
];

function StatItem({ icon: Icon, value, label }: (typeof stats)[number]) {
  const { ref, display } = useCountUp(value);
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-teal/10">
        <Icon className="h-7 w-7 text-brand-teal" />
      </div>
      <div>
        <p ref={ref as React.RefObject<HTMLParagraphElement>} className="text-3xl font-bold text-slate-900">
          {display}
        </p>
        <p className="mt-1 text-sm text-slate-500">{label}</p>
      </div>
    </div>
  );
}

export function AboutSection() {
  const sectionRef = useScrollReveal<HTMLDivElement>();
  const { ref: aboutImgRef, onLoad: onAboutLoad } = useImageReveal();

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div ref={sectionRef} className="scroll-reveal grid items-center gap-12 lg:grid-cols-2">
          {/* Image */}
          <div className="mt-4 lg:mt-0">
            <img
              ref={aboutImgRef}
              src={IMAGES.about}
              alt="Our modern fulfillment center"
              width={600}
              height={450}
              className="img-reveal mx-auto rounded-2xl shadow-xl"
              loading="lazy"
              onLoad={onAboutLoad}
            />
          </div>

          {/* Text */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              Who We Are
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              HappyPaws was founded by pet lovers with a simple mission: to
              provide high-quality accessories that keep pets comfortable, safe,
              and happy. Every product is carefully selected for durability,
              safety, and design.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              From cozy beds to durable collars and fun toys, we source only the
              best materials and partner with trusted manufacturers. Our team
              ensures every order is packed with care and shipped promptly to your
              doorstep.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <StatItem key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
