// components/bootcamp/pricing-cards.tsx
"use client";

import { Check } from "lucide-react";
import { bootcampConfig } from "@/lib/bootcamp-config";
import { createWhatsAppUrl, whatsappMessages } from "@/lib/whatsapp";

export default function PricingCards() {
  const tiers = [
    {
      name: bootcampConfig.prices.starter.name,
      price: bootcampConfig.prices.starter.amount,
      description: "For creators who want the complete training system.",
      popular: false,
      features: [
        "30-day curriculum",
        "Daily assignments",
        "Content strategy",
        "Storytelling",
        "Video creation",
        "Publishing",
        "Analytics",
        "Monetization education",
        "Community access",
      ],
      cta: "STARTER →",
      message: whatsappMessages.starter,
    },
    {
      name: bootcampConfig.prices.insider.name,
      price: bootcampConfig.prices.insider.amount,
      description: "Everything in Starter plus real creator workflow access.",
      popular: true,
      features: [
        "Everything in Starter",
        "Real creator workflow",
        "Behind-the-scenes creation",
        "Real post-performance analysis",
        "Content feedback",
        "Weekly Q&A",
        "Practical guidance",
      ],
      cta: "JOIN INSIDER →",
      message: whatsappMessages.insider,
    },
    {
      name: bootcampConfig.prices.accelerator.name,
      price: bootcampConfig.prices.accelerator.amount,
      description: "PERSONALIZED MENTORSHIP",
      popular: false,
      premium: true,
      features: [
        "Everything in Insider",
        "Personal creator audit",
        "Personal content strategy",
        "1-on-1 sessions",
        "Content reviews",
        "Monetization-readiness audit",
        "Personalized platform guidance",
        "Post-bootcamp action plan",
        "Direct mentorship",
      ],
      cta: "APPLY FOR ACCELERATOR →",
      message: whatsappMessages.accelerator,
    },
  ];

  return (
    <section id="membership" className="relative py-24 lg:py-32 bg-[#0B0B0D]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            CHOOSE HOW CLOSE
            <br />
            YOU WANT TO GET.
          </h2>
        </div>

        {/* Pricing Grid */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`relative glass-strong rounded-2xl p-8 border transition-all hover:scale-105 ${
                tier.popular
                  ? "border-[#D4AF37] gold-glow lg:scale-105"
                  : tier.premium
                  ? "border-[#D4AF37]/50"
                  : "border-white/10 hover:border-[#D4AF37]/30"
              }`}
            >
              {/* Popular Badge */}
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="px-4 py-1.5 bg-[#D4AF37] text-[#050505] text-xs font-bold rounded-full">
                    MOST POPULAR
                  </div>
                </div>
              )}

              {/* Tier Name */}
              <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
              
              {/* Price */}
              <p className="text-4xl font-bold text-[#D4AF37] mb-4">
                {tier.price}
              </p>

              {/* Description */}
              <p className="text-[#A1A1AA] mb-8">
                {tier.description}
              </p>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-[#A1A1AA]">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={createWhatsAppUrl(tier.message)}
                className={`block w-full py-4 text-center font-semibold rounded-lg transition-all ${
                  tier.popular || tier.premium
                    ? "bg-[#D4AF37] text-[#050505] hover:bg-[#F5C542]"
                    : "bg-white/5 text-white hover:bg-white/10 border border-white/10"
                }`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="mt-12 max-w-3xl mx-auto">
          <p className="text-sm text-[#A1A1AA] text-center">
            Monetization guidance does not guarantee platform approval. Eligibility and approval remain subject to each platform's current requirements and policies.
          </p>
        </div>
      </div>
    </section>
  );
}