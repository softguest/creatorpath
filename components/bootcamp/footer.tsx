// components/bootcamp/footer.tsx
// import { Facebook, Youtube, Instagram } from "lucide-react";
import { bootcampConfig } from "@/lib/bootcamp-config";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: "Program", href: "#program" },
    { label: "Membership", href: "#membership" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: createWhatsAppUrl("") },
  ];

//   const socialLinks = [
//     { icon: Facebook, href: bootcampConfig.social.facebook, label: "Facebook" },
//     { icon: Youtube, href: bootcampConfig.social.youtube, label: "YouTube" },
//     { icon: Instagram, href: bootcampConfig.social.instagram, label: "Instagram" },
//   ];

  return (
    <footer className="relative border-t border-white/8 bg-[#0B0B0D]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-2">
              {bootcampConfig.instructor.name}
            </h3>
            <p className="text-[#A1A1AA]">
              30-Day Creator Bootcamp
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-[#A1A1AA] hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            {/* <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 glass rounded-full border border-white/10 hover:border-[#D4AF37]/50 flex items-center justify-center transition-all hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div> */}
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/8 text-center text-sm text-[#A1A1AA]">
          <p>© {currentYear} Boris Amah. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

function createWhatsAppUrl(message: string): string {
  return "#";
}