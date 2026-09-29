// components/bootcamp/audience-grid.tsx
"use client";

export default function AudienceGrid() {
  const audiences = [
    "Aspiring Creators",
    "Facebook Creators",
    "YouTubers",
    "Entrepreneurs",
    "Students",
    "Personal Brands",
    "Freelancers",
    "Videographers",
  ];

  return (
    <section className="relative py-24 lg:py-32 bg-[#0B0B0D]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight max-w-3xl mx-auto leading-tight">
            IF YOU HAVE SOMETHING TO SAY,
            <br />
            <span className="text-[#D4AF37]">YOU CAN BUILD SOMETHING WITH IT.</span>
          </h2>
        </div>

        {/* Audience Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {audiences.map((audience, index) => (
            <div
              key={index}
              className="glass-strong rounded-xl p-6 border border-white/10 hover:border-[#D4AF37]/50 transition-all hover:scale-105 text-center cursor-pointer"
            >
              <p className="font-semibold">{audience}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}