// components/bootcamp/system-section.tsx
"use client";

export default function SystemSection() {
  const cards = [
    {
      number: "01",
      title: "WHAT TO POST",
      description: "Learn to find endless content ideas that resonate with your audience",
    },
    {
      number: "02",
      title: "HOW TO CREATE",
      description: "Master hooks, storytelling, filming and editing techniques",
    },
    {
      number: "03",
      title: "HOW TO PUBLISH",
      description: "Develop a consistent publishing workflow that works for you",
    },
    {
      number: "04",
      title: "HOW TO ENGAGE",
      description: "Build real connections and understand what drives interaction",
    },
    {
      number: "05",
      title: "HOW TO ANALYZE",
      description: "Read your analytics and understand what the data is telling you",
    },
    {
      number: "06",
      title: "HOW TO IMPROVE",
      description: "Iterate based on performance and continuously refine your system",
    },
  ];

  return (
    <section className="relative py-24 lg:py-32 bg-[#0B0B0D]">
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16 space-y-6">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            YOU DON'T NEED
            <br />
            MORE MOTIVATION.
          </h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#D4AF37]">
            YOU NEED A SYSTEM.
          </h3>
          
          <p className="text-lg text-[#A1A1AA] max-w-2xl mx-auto pt-4">
            Most aspiring creators don't struggle because they lack ambition.
            They struggle because nobody has shown them what to do next.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="group glass-strong rounded-xl p-8 border border-white/10 hover:border-[#D4AF37]/50 transition-all hover:scale-105 hover:gold-glow cursor-pointer"
            >
              <p className="text-5xl font-bold text-[#D4AF37]/20 group-hover:text-[#D4AF37]/40 transition-colors mb-4">
                {card.number}
              </p>
              <h3 className="text-xl font-bold mb-3">
                {card.title}
              </h3>
              <p className="text-[#A1A1AA]">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}