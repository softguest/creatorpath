// components/bootcamp/final-cta.tsx
import { bootcampConfig } from "@/lib/bootcamp-config";
import { createWhatsAppUrl, whatsappMessages } from "@/lib/whatsapp";

export default function FinalCTA() {
  return (
    <section className="relative py-32 lg:py-40 bg-[#050505] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-background opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#D4AF37]/10 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
        {/* Main Headline */}
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8">
          YOUR NEXT 30 DAYS
          <br />
          <span className="text-[#D4AF37]">START HERE.</span>
        </h2>

        {/* Supporting Text */}
        <div className="space-y-3 text-xl text-[#A1A1AA] mb-12 max-w-2xl mx-auto">
          <p>Stop guessing what to post.</p>
          <p>Stop copying other creators.</p>
          <p>Stop waiting for perfect equipment.</p>
          <p className="text-white text-2xl font-semibold">Build your system.</p>
        </div>

        {/* Date Badge */}
        <div className="inline-block px-8 py-4 glass-strong rounded-xl border border-[#D4AF37]/30 mb-8">
          <p className="text-lg font-bold text-[#D4AF37]">
            {bootcampConfig.dates}
          </p>
        </div>

        {/* Cohort Badge */}
        <div className="flex items-center justify-center gap-3 mb-12">
          <div className="w-2 h-2 bg-[#C62828] rounded-full animate-pulse" />
          <span className="text-sm text-[#A1A1AA] tracking-wider">
            FOUNDING COHORT • {bootcampConfig.foundingCohort}
          </span>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={createWhatsAppUrl(whatsappMessages.general)}
            className="px-10 py-5 bg-[#D4AF37] text-[#050505] text-lg font-bold rounded-lg hover:bg-[#F5C542] transition-all hover:scale-105 gold-glow-strong"
          >
            JOIN THE BOOTCAMP →
          </a>
          
          <a
            href={createWhatsAppUrl(whatsappMessages.general)}
            className="px-10 py-5 glass-strong text-white text-lg font-semibold rounded-lg border border-white/10 hover:border-[#D4AF37]/50 transition-all"
          >
            DM "BOOTCAMP"
          </a>
        </div>
      </div>
    </section>
  );
}