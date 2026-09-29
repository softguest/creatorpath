// components/bootcamp/faq.tsx
"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Do I need a camera?",
      answer: "No. A smartphone is enough to begin.",
    },
    {
      question: "Do I need followers already?",
      answer: "No. This bootcamp is designed for creators at all stages, including complete beginners.",
    },
    {
      question: "Is monetization guaranteed?",
      answer: "No. The program teaches content creation, monetization preparation and legitimate eligibility/application processes. Platform approval depends on current platform requirements and policies.",
    },
    {
      question: "Can I join if I already have a page?",
      answer: "Yes. The bootcamp works for both aspiring creators and those who already have an established presence but want to improve their system.",
    },
    {
      question: "Is this only for Facebook?",
      answer: "No. Facebook and YouTube are the main platforms, but the underlying content system applies broadly to all social platforms.",
    },
    {
      question: "What happens after 30 days?",
      answer: "You'll leave with a 90-day content roadmap and the skills to continue building your creator business independently.",
    },
    {
      question: "How do I join?",
      answer: "Choose your membership tier and complete the registration process through WhatsApp or the registration form.",
    },
  ];

  return (
    <section id="faq" className="relative py-24 lg:py-32 bg-[#0B0B0D]">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            FREQUENTLY ASKED
            <br />
            <span className="text-[#D4AF37]">QUESTIONS</span>
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="glass-strong rounded-xl border border-white/10 overflow-hidden transition-all"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
              >
                <span className="text-lg font-semibold pr-8">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-[#D4AF37] flex-shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              
              <div
                className={`overflow-hidden transition-all ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-5 text-[#A1A1AA]">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}