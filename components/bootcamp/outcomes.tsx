// components/bootcamp/outcomes.tsx
"use client";

import { Check } from "lucide-react";
import { useState, useEffect } from "react";

export default function Outcomes() {
  const [visibleItems, setVisibleItems] = useState(0);

  const outcomes = [
    "Defined niche",
    "Content pillars",
    "Content idea bank",
    "30-day content calendar",
    "Published videos",
    "Repeatable workflow",
    "Analytics fundamentals",
    "Better understanding of copyright",
    "Monetization-readiness roadmap",
    "90-day content plan",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleItems((prev) => {
        if (prev < outcomes.length) {
          return prev + 1;
        }
        return prev;
      });
    }, 100);

    return () => clearInterval(timer);
  }, [outcomes.length]);

  return (
    <section className="relative py-24 lg:py-32 bg-[#0B0B0D]">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            WHAT YOU SHOULD HAVE
            <br />
            <span className="text-[#D4AF37]">AFTER 30 DAYS</span>
          </h2>
        </div>

        {/* Outcomes List */}
        <div className="glass-strong rounded-2xl p-8 md:p-12 border border-white/10">
          <div className="grid md:grid-cols-2 gap-6">
            {outcomes.map((outcome, index) => (
              <div
                key={index}
                className={`flex items-center gap-4 transition-all duration-500 ${
                  index < visibleItems
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-4"
                }`}
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37] flex items-center justify-center">
                  <Check className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <p className="text-lg">{outcome}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}