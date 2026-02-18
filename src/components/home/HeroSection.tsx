"use client";

import Link from "next/link";
import { Star, Users } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useImageReveal } from "@/hooks/useImageReveal";
import { IMAGES } from "@/lib/constants";

export function HeroSection() {
  const textRef = useScrollReveal<HTMLDivElement>();
  const { ref: heroImgRef, onLoad: onHeroLoad } = useImageReveal();

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-teal-50/50 to-white">
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-brand-teal/5 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-brand-teal/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28 lg:px-8 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Text column */}
          <div ref={textRef} className="scroll-reveal text-center lg:text-left">
            {/* Trust badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-brand-teal/10 px-4 py-1.5 text-sm font-medium text-brand-teal">
              <span className="flex items-center gap-1">
                <Star className="h-3.5 w-3.5 fill-brand-gold text-brand-gold" />
                <Star className="h-3.5 w-3.5 fill-brand-gold text-brand-gold" />
                <Star className="h-3.5 w-3.5 fill-brand-gold text-brand-gold" />
                <Star className="h-3.5 w-3.5 fill-brand-gold text-brand-gold" />
                <Star className="h-3.5 w-3.5 fill-brand-gold text-brand-gold" />
              </span>
              Trusted by 50,000+ Happy Pet Owners
            </div>

            <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
              Premium{" "}
              <span className="text-brand-teal">Pet Accessories</span>{" "}
              They Deserve
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 md:text-xl lg:mx-0">
              Quality collars, cozy beds, fun toys, and grooming essentials for
              dogs and cats. Thoughtfully designed for pets, trusted by owners.
            </p>

            {/* CTA buttons */}
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
              <Link
                href="/tracking"
                className="btn-shine inline-flex w-full items-center justify-center rounded-lg bg-brand-teal px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-brand-teal/25 transition-all hover:bg-brand-teal-dark hover:shadow-xl sm:w-auto"
              >
                Track Your Order
              </Link>
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center rounded-lg border-2 border-slate-200 bg-white px-8 py-3.5 text-base font-semibold text-slate-700 transition-all hover:border-brand-teal hover:text-brand-teal sm:w-auto"
              >
                Contact Us
              </Link>
            </div>

            {/* Social proof */}
            <div className="mt-12 flex items-center justify-center gap-8 text-sm text-slate-500 lg:justify-start">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-brand-teal" />
                <span>50,000+ Pet Owners</span>
              </div>
              <div className="hidden h-4 w-px bg-slate-300 sm:block" />
              <div className="hidden items-center gap-2 sm:flex">
                <Star className="h-4 w-4 fill-brand-gold text-brand-gold" />
                <span>4.9/5 Average Rating</span>
              </div>
            </div>
          </div>

          {/* Image column */}
          <div className="mt-8 lg:mt-0">
            <img
              ref={heroImgRef}
              src={IMAGES.hero}
              alt="Premium pet accessories collection for dogs and cats"
              width={640}
              height={360}
              className="img-reveal mx-auto rounded-2xl shadow-2xl"
              loading="eager"
              onLoad={onHeroLoad}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
