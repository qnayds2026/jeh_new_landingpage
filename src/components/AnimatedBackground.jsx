export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base */}
      <div className="absolute inset-0 bg-[#0A0B0A]" />

      {/* Single off-center glow */}
      <div className="absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-[#3FA66E]/10 blur-[160px]" />

      {/* Faint hand-drawn circuit line */}
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.06]"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M -50 120 C 200 80, 350 200, 600 140 S 900 60, 1200 160"
          fill="none"
          stroke="#EAEDEA"
          strokeWidth="1"
        />
        <path
          d="M -50 500 C 250 460, 400 560, 700 480 S 1000 420, 1300 520"
          fill="none"
          stroke="#EAEDEA"
          strokeWidth="1"
        />
      </svg>

      {/* Grain */}
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.04]"
        aria-hidden="true"
      >
        <filter id="bg-grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.9"
            numOctaves="2"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#bg-grain)" />
      </svg>

      {/* Bottom fade */}
      <div className="absolute bottom-0 h-52 w-full bg-gradient-to-t from-[#0A0B0A] to-transparent" />
    </div>
  );
}
