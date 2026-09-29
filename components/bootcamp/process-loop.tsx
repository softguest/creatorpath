// components/bootcamp/process-loop.tsx
"use client";

export default function ProcessLoop() {
  const processes = [
    { label: "LEARN", angle: 0 },
    { label: "CREATE", angle: 72 },
    { label: "POST", angle: 144 },
    { label: "ANALYZE", angle: 216 },
    { label: "IMPROVE", angle: 288 },
  ];

  return (
    <section className="relative py-24 lg:py-32 bg-[#050505] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-[#D4AF37]/20 rounded-full" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-[#D4AF37]/30 rounded-full" />

      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="relative aspect-square max-w-2xl mx-auto">
          {/* Center Circle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 glass-strong rounded-full border border-[#D4AF37] flex items-center justify-center gold-glow z-10">
            <p className="text-lg font-bold text-center">
              YOUR
              <br />
              CONTENT
            </p>
          </div>

          {/* Rotating Circle Line */}
          <svg
            className="absolute inset-0 w-full h-full animate-rotate"
            viewBox="0 0 100 100"
          >
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="0.5"
              strokeDasharray="4 4"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#F5C542" stopOpacity="0.2" />
              </linearGradient>
            </defs>
          </svg>

          {/* Process Points */}
          {processes.map((process, index) => {
            const radius = 45; // percentage
            const x = 50 + radius * Math.cos((process.angle - 90) * (Math.PI / 180));
            const y = 50 + radius * Math.sin((process.angle - 90) * (Math.PI / 180));

            return (
              <div
                key={index}
                className="absolute glass-strong rounded-xl px-6 py-3 border border-[#D4AF37]/30 hover:border-[#D4AF37] transition-all hover:scale-110 cursor-pointer"
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                  transform: 'translate(-50%, -50%)',
                }}
              >
                <p className="text-sm font-bold text-[#D4AF37] whitespace-nowrap">
                  {process.label}
                </p>
              </div>
            );
          })}

          {/* Arrows */}
          {processes.map((_, index) => {
            const nextIndex = (index + 1) % processes.length;
            return (
              <svg
                key={`arrow-${index}`}
                className="absolute inset-0 w-full h-full pointer-events-none"
                viewBox="0 0 100 100"
              >
                <defs>
                  <marker
                    id={`arrowhead-${index}`}
                    markerWidth="10"
                    markerHeight="10"
                    refX="5"
                    refY="3"
                    orient="auto"
                  >
                    <polygon
                      points="0 0, 6 3, 0 6"
                      fill="#D4AF37"
                      opacity="0.5"
                    />
                  </marker>
                </defs>
                <path
                  d={`M ${50 + 45 * Math.cos((processes[index].angle - 90) * (Math.PI / 180))} ${50 + 45 * Math.sin((processes[index].angle - 90) * (Math.PI / 180))} A 45 45 0 0 1 ${50 + 45 * Math.cos((processes[nextIndex].angle - 90) * (Math.PI / 180))} ${50 + 45 * Math.sin((processes[nextIndex].angle - 90) * (Math.PI / 180))}`}
                  fill="none"
                  stroke="#D4AF37"
                  strokeWidth="0.3"
                  opacity="0.3"
                  markerEnd={`url(#arrowhead-${index})`}
                />
              </svg>
            );
          })}
        </div>
      </div>
    </section>
  );
}