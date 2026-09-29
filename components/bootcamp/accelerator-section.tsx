// components/bootcamp/accelerator-section.tsx
"use client";

import { createWhatsAppUrl, whatsappMessages } from "@/lib/whatsapp";

export default function AcceleratorSection() {
  const pillars = [
    {
      number: "01",
      title: "YOUR CONTENT",
      description: "Personal review of your actual work, strengths and opportunities",
    },
    {
      number: "02",
      title: "YOUR STRATEGY",
      description: "Custom roadmap built around your goals and audience",
    },
    {
      number: "03",
      title: "YOUR PROGRESS",
      description: "Direct mentorship as you execute and refine your system",
    },
  ];

  return (
    <section className="relative py-24 lg:py-32 bg-[#050505]">
      {/* Gold accent line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16 space-y-6">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            FOR CREATORS WHO WANT
            <br />
            MORE THAN A COURSE.
          </h2>
          
          <div className="space-y-4 text-lg text-[#A1A1AA] max-w-2xl mx-auto pt-4">
            <p>You don't need another folder full of videos.</p>
            <p className="text-white text-xl">
              You need someone looking at your content, your strategy and your progress.
            </p>
          </div>
        </div>

        {/* Pillars */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="glass-strong rounded-xl p-8 border border-white/10 hover:border-[#D4AF37]/50 transition-all text-center"
            >
              <p className="text-6xl font-bold text-[#D4AF37]/20 mb-4">
                {pillar.number}
              </p>
              <h3 className="text-xl font-bold mb-3">{pillar.title}</h3>
              <p className="text-[#A1A1AA]">{pillar.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href={createWhatsAppUrl(whatsappMessages.accelerator)}
            className="inline-block px-10 py-5 bg-[#D4AF37] text-[#050505] text-lg font-bold rounded-lg hover:bg-[#F5C542] transition-all hover:scale-105 gold-glow-strong"
          >
            APPLY FOR PERSONALIZED MENTORSHIP
          </a>
        </div>
      </div>
    </section>
  );
}