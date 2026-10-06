"use client";

import Script from "next/script";

export default function TawkChat() {
  return (
    <Script
      id="tawk-to"
      strategy="afterInteractive"
      src='https://embed.tawk.to/6abfb28d41be1034c6157f7b/1k3ud2v3q'
      crossOrigin="anonymous"
    />
  );
}