// components/bootcamp/bootcamp-timeline.tsx
"use client";

export default function BootcampTimeline() {
  const weeks = [
    {
      week: "WEEK 01",
      title: "BUILD",
      items: [
        "Niche",
        "Page setup",
        "Audience",
        "Content pillars",
        "Content ideas",
      ],
      color: "from-[#D4AF37]/20 to-transparent",
    },
    {
      week: "WEEK 02",
      title: "CREATE",
      items: [
        "Hooks",
        "Storytelling",
        "Filming",
        "Editing",
        "Publishing",
      ],
      color: "from-[#F5C542]/20 to-transparent",
    },
    {
      week: "WEEK 03",
      title: "GROW",
      items: [
        "Analytics",
        "Engagement",
        "Retention",
        "Repurposing",
        "Consistency",
      ],
      color: "from-[#D4AF37]/20 to-transparent",
    },
    {
      week: "WEEK 04",
      title: "MONETIZE",
      items: [
        "Copyright",
        "Original content",
        "Platform requirements",
        "Creator business",
        "90-day strategy",
      ],
      color: "from-[#F5C542]/20 to-transparent",
    },
  ];

  return (
    <section id="how-it-works" className="relative py-24 lg:py-32 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            30 DAYS.
            <br />
            <span className="text-[#D4AF37]">ONE CREATOR SYSTEM.</span>
          </h2>
        </div>

        {/* Timeline Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {weeks.map((week, index) => (
            <div
              key={index}
              className="group relative glass-strong rounded-xl p-8 border border-white/10 hover:border-[#D4AF37]/50 transition-all hover:scale-105 overflow-hidden"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-b ${week.color} opacity-0 group-hover:opacity-100 transition-opacity`} />

              {/* Content */}
              <div className="relative z-10">
                <p className="text-sm text-[#D4AF37] font-bold mb-2">
                  {week.week}
                </p>
                <h3 className="text-3xl font-bold mb-6">
                  {week.title}
                </h3>

                <ul className="space-y-3">
                  {week.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                      <span className="text-[#A1A1AA] group-hover:text-white transition-colors">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}