// components/bootcamp/equipment-section.tsx
"use client";

import { Smartphone, Lightbulb, Repeat } from "lucide-react";

export default function EquipmentSection() {
  const essentials = [
    {
      icon: Lightbulb,
      label: "IDEA",
    },
    {
      icon: Smartphone,
      label: "PHONE",
    },
    {
      icon: Repeat,
      label: "CONSISTENCY",
    },
  ];

  return (
    <section className="relative py-24 lg:py-32 bg-[#050505]">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8">
            YOU DON'T NEED A STUDIO
            <br />
            TO START.
          </h2>
          
          <div className="space-y-4 text-lg text-[#A1A1AA] max-w-2xl mx-auto">
            <p>You don't need the most expensive camera.</p>
            <p>You don't need thousands of followers.</p>
            <p className="text-white text-xl font-semibold">
              You need an idea, a phone, a system and the willingness to execute.
            </p>
          </div>
        </div>

        {/* Essentials */}
        <div className="grid md:grid-cols-3 gap-8">
          {essentials.map((item, index) => (
            <div
              key={index}
              className="glass-strong rounded-xl p-8 border border-white/10 hover:border-[#D4AF37]/50 transition-all hover:scale-105 text-center"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center">
                <item.icon className="w-8 h-8 text-[#D4AF37]" />
              </div>
              <p className="text-xl font-bold">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}