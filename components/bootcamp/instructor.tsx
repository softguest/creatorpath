// components/bootcamp/instructor.tsx
import Image from "next/image";
// import { Facebook, Youtube, Instagram } from "lucide-react";
import { bootcampConfig } from "@/lib/bootcamp-config";

export default function Instructor() {
//   const socialLinks = [
//     { icon: Facebook, href: bootcampConfig.social.facebook, label: "Facebook" },
//     { icon: Youtube, href: bootcampConfig.social.youtube, label: "YouTube" },
//     { icon: Instagram, href: bootcampConfig.social.instagram, label: "Instagram" },
//   ];

  return (
    <section className="relative py-24 lg:py-32 bg-[#050505]">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative aspect-[3/4] glass-strong rounded-2xl overflow-hidden border border-white/10">
            <Image
              src={bootcampConfig.instructor.image}
              alt={bootcampConfig.instructor.name}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-2">
                {bootcampConfig.instructor.name}
              </h2>
              <p className="text-[#D4AF37] text-lg">
                {bootcampConfig.instructor.title}
              </p>
            </div>

            <p className="text-lg text-[#A1A1AA] leading-relaxed">
              {bootcampConfig.instructor.bio}
            </p>

            {/* Social Links */}
            {/* <div className="flex gap-4 pt-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 glass-strong rounded-full border border-white/10 hover:border-[#D4AF37]/50 flex items-center justify-center transition-all hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}