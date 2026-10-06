// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Creator Journey | Start Earning through Storytelling",
  description: "Learn how to create meaningful content, build your creator system, understand analytics and work toward monetization in 30 days.",
  openGraph: {
    title: "Creator Journey | Start Earning through Storytelling",
    description: "Learn how to create meaningful content, build your creator system, understand analytics and work toward monetization in 30 days.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Creator Journey | tart Earning through Storytelling",
    description: "Learn how to create meaningful content, build your creator system, understand analytics and work toward monetization in 30 days.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}