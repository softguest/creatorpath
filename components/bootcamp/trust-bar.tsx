// components/bootcamp/trust-bar.tsx
import { bootcampConfig } from "@/lib/bootcamp-config";

export default function TrustBar() {
  return (
    <section className="relative py-16 border-y border-white/8 bg-[#0B0B0D]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {bootcampConfig.stats.map((stat, index) => (
            <div key={index} className="text-center space-y-2">
              <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#D4AF37]">
                {stat.value}
              </p>
              <p className="text-sm text-[#A1A1AA] tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}