// components/bootcamp/workflow-section.tsx
"use client";

import Image from "next/image";

export default function WorkflowSection() {
  const workflow = [
    { step: "IDEA", description: "Content ideation and validation" },
    { step: "SCRIPT", description: "Story structure and messaging" },
    { step: "RECORD", description: "Filming and asset creation" },
    { step: "EDIT", description: "Post-production and polish" },
    { step: "PUBLISH", description: "Strategic distribution" },
    { step: "ANALYZE", description: "Performance evaluation" },
    { step: "IMPROVE", description: "Refinement and iteration" },
  ];

  return (
    <section className="relative py-24 lg:py-32 bg-[#0B0B0D]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16 space-y-6">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            DON'T JUST LEARN FROM ME.
          </h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#D4AF37]">
            BUILD WITH ME.
          </h3>
          
          <p className="text-lg text-[#A1A1AA] max-w-2xl mx-auto pt-4">
            Higher-tier members get access to my real creator workflow.
          </p>
        </div>

        {/* Workflow Visualization */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Workflow Steps */}
          <div className="space-y-4">
            {workflow.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center">
                  <span className="text-[#D4AF37] font-bold">{index + 1}</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold mb-1">{item.step}</h4>
                  <p className="text-[#A1A1AA]">{item.description}</p>
                </div>
                {index < workflow.length - 1 && (
                  <div className="flex-shrink-0 w-px h-12 bg-gradient-to-b from-[#D4AF37]/50 to-transparent mt-12" />
                )}
              </div>
            ))}
          </div>

          {/* Visual Placeholder */}
          <div className="relative aspect-[4/3] glass-strong rounded-xl overflow-hidden border border-white/10">
            <Image
              src="/images/workflow.jpg"
              alt="Creator workflow visualization"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D] via-transparent to-transparent" />
          </div>
        </div>

        {/* Additional Context */}
        <div className="glass-strong rounded-xl p-8 border border-white/10 max-w-3xl mx-auto">
          <p className="text-lg text-center leading-relaxed">
            You'll see how I <span className="text-[#D4AF37] font-semibold">plan actual content</span>, 
            create videos, publish posts, read the feedback and decide what to change next.
          </p>
        </div>

        {/* Screenshots Placeholder */}
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          <div className="relative aspect-video glass-strong rounded-xl overflow-hidden border border-white/10">
            <Image
              src="/images/analytics-1.jpg"
              alt="Analytics dashboard"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-video glass-strong rounded-xl overflow-hidden border border-white/10">
            <Image
              src="/images/post-performance.jpg"
              alt="Post performance metrics"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}