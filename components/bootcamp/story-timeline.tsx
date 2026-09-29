// components/bootcamp/story-timeline.tsx
"use client";

export default function StoryTimeline() {
  const timeline = [
    {
      year: "2024",
      label: "Started creating",
      description: "Started creating video content, telling stories around the Sustainable Development Goals",
    },
    {
      year: "CLIENT WORK",
      label: "NGO + business storytelling",
      description: "Produced documentary content for NGOs and businesses",
    },
    {
      year: "DISCOVERY",
      label: "Content began generating stronger engagement",
      description: "Content strategy started showing results",
    },
    {
      year: "SYSTEM",
      label: "Learned what worked",
      description: "Developed a repeatable content system",
    },
    {
      year: "14 AUG 2026",
      label: "Created football page",
      description: "Launched focused content vertical",
    },
    {
      year: "12 SEP 2026",
      label: "Page monetized",
      description: "Achieved platform monetization",
    },
  ];

  return (
    <section id="program" className="relative py-24 lg:py-32 bg-[#050505]">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Section Title */}
        <div className="mb-16 space-y-6">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            I DIDN'T START WITH
            <br />A VIRAL VIDEO.
          </h2>
          
          <div className="space-y-4 text-lg text-[#A1A1AA] max-w-2xl">
            <p>
              I started creating video content in 2024, telling stories around the Sustainable Development Goals.
            </p>
            <p>
              At first, I didn't experience the viral videos, massive engagement or income that many creators dream about.
            </p>
            <p className="text-white font-semibold">
              I kept creating.
            </p>
            <p>
              I started producing documentary content for NGOs and businesses.
            </p>
            <p className="text-2xl font-bold text-[#D4AF37] pt-4">
              And something changed.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#D4AF37] via-[#D4AF37]/50 to-transparent" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div key={index} className="relative pl-20">
                {/* Dot */}
                <div className="absolute left-6 top-2 w-5 h-5 rounded-full bg-[#D4AF37] border-4 border-[#050505] ring-4 ring-[#D4AF37]/20" />

                {/* Content */}
                <div className="glass-strong rounded-xl p-6 border border-white/10 hover:border-[#D4AF37]/30 transition-all">
                  <p className="text-sm text-[#D4AF37] font-bold mb-2">
                    {item.year}
                  </p>
                  <h3 className="text-xl font-bold mb-2">
                    {item.label}
                  </h3>
                  <p className="text-[#A1A1AA]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}