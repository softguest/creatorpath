// components/bootcamp/hero.tsx
"use client";

import { ArrowRight, ArrowDown } from "lucide-react";
import Image from "next/image";
import { bootcampConfig } from "@/lib/bootcamp-config";
import { createWhatsAppUrl, whatsappMessages } from "@/lib/whatsapp";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background Grid */}
      <div className="absolute inset-0 grid-background opacity-30" />

      {/* Animated Gold Orb */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#D4AF37]/20 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: "2s" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full border border-white/10">
              <div className="w-2 h-2 bg-[#C62828] rounded-full animate-pulse" />
              <span className="text-xs tracking-wider text-[#A1A1AA]">
                FOUNDING COHORT • {bootcampConfig.foundingCohort}
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
                STOP WONDERING
                <br />
                WHAT TO POST.
              </h1>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
                START BUILDING
                <br />
                <span className="text-[#D4AF37]">YOUR CONTENT SYSTEM.</span>
              </h2>
            </div>

            {/* Supporting Text */}
            <p className="text-lg md:text-xl text-[#A1A1AA] max-w-xl leading-relaxed">
              A 30-day practical creator accelerator where you learn to find ideas, create meaningful content, publish consistently, understand your audience and build toward monetization.
            </p>

            {/* Program Date Badge */}
            <div className="inline-block px-6 py-3 glass-strong rounded-lg border border-[#D4AF37]/30">
              <p className="text-sm font-semibold text-[#D4AF37] tracking-wide">
                {bootcampConfig.dates}
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href={createWhatsAppUrl(whatsappMessages.general)}
                className="group px-8 py-4 bg-[#D4AF37] text-[#050505] font-semibold rounded-lg hover:bg-[#F5C542] transition-all hover:scale-105 gold-glow flex items-center justify-center gap-2"
              >
                JOIN THE BOOTCAMP
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#program"
                className="group px-8 py-4 glass-strong text-white font-semibold rounded-lg hover:border-[#D4AF37]/50 transition-all flex items-center justify-center gap-2"
              >
                EXPLORE THE PROGRAM
                <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative hidden lg:block">
            {/* Main Image Container */}
            <div className="relative w-full aspect-[4/5] glass-strong rounded-2xl overflow-hidden border border-white/10 gold-glow">
              <Image
                src="/images/boris-creator.jpg"
                alt="Boris Amah"
                fill
                className="object-cover"
                priority
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
            </div>

            {/* Floating Stats Cards */}
            <div className="absolute -top-8 -right-8 glass rounded-xl p-4 border border-white/10 animate-float">
              <p className="text-xs text-[#A1A1AA] mb-1">ENGAGEMENT</p>
              <p className="text-2xl font-bold text-[#D4AF37]">+18.4%</p>
            </div>

            <div className="absolute top-1/3 -left-8 glass rounded-xl p-4 border border-white/10 animate-float" style={{ animationDelay: "1s" }}>
              <p className="text-xs text-[#A1A1AA] mb-1">VIEWS</p>
              <p className="text-2xl font-bold text-white">12.8K</p>
            </div>

            <div className="absolute bottom-20 -right-8 glass rounded-xl p-4 border border-white/10 animate-float" style={{ animationDelay: "2s" }}>
              <p className="text-xs text-[#A1A1AA] mb-1">AUDIENCE</p>
              <p className="text-2xl font-bold text-white">4.7K</p>
            </div>

            <div className="absolute -bottom-8 left-1/4 glass rounded-xl p-4 border border-white/10 animate-float" style={{ animationDelay: "0.5s" }}>
              <p className="text-xs text-[#A1A1AA] mb-1">CONTENT CREATED</p>
              <p className="text-2xl font-bold text-[#D4AF37]">30+</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}