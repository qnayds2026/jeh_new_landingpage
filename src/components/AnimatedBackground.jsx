export default function AnimatedBackground() {
  return (
    <>
      {/* =========================================================
          CYBER GREEN ATMOSPHERIC GLOW
      ========================================================= */}
      <div
        className="
          pointer-events-none
          absolute
          -right-40
          -top-40
          h-[600px]
          w-[600px]
          rounded-full
          bg-[#00FF41]/[0.07]
          blur-[160px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -left-40
          top-[35%]
          h-[400px]
          w-[400px]
          rounded-full
          bg-[#00FF41]/[0.035]
          blur-[140px]
        "
      />

      {/* =========================================================
          SUBTLE CYBER GRID
      ========================================================= */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.035]
        "
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,255,65,0.35) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,65,0.35) 1px, transparent 1px)
          `,
          backgroundSize: "70px 70px",
          maskImage: "linear-gradient(to bottom, black 0%, transparent 75%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 0%, transparent 75%)",
        }}
      />

      {/* =========================================================
          CIRCUIT / NETWORK LINES
      ========================================================= */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.055]"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        {/* Top circuit */}
        <path
          d="M -100 150
             C 100 100, 260 220, 450 150
             S 800 70, 1050 150
             S 1350 220, 1600 100"
          fill="none"
          stroke="#00FF41"
          strokeWidth="1"
        />

        {/* Middle circuit */}
        <path
          d="M -100 430
             C 180 360, 350 520, 600 450
             S 950 350, 1200 450
             S 1450 520, 1650 400"
          fill="none"
          stroke="#00FF41"
          strokeWidth="1"
        />

        {/* Bottom circuit */}
        <path
          d="M -100 720
             C 200 650, 420 780, 700 700
             S 1050 620, 1350 720
             S 1550 760, 1700 680"
          fill="none"
          stroke="#00FF41"
          strokeWidth="1"
        />
      </svg>

      {/* =========================================================
          SMALL CYBER NODES
      ========================================================= */}
      <div className="pointer-events-none absolute right-[18%] top-[22%] h-1.5 w-1.5 rounded-full bg-[#00FF41] opacity-40 shadow-[0_0_10px_#00FF41]" />

      <div className="pointer-events-none absolute left-[12%] top-[42%] h-1 w-1 rounded-full bg-[#00FF41] opacity-30 shadow-[0_0_8px_#00FF41]" />

      <div className="pointer-events-none absolute right-[30%] top-[58%] h-1 w-1 rounded-full bg-[#00FF41] opacity-30 shadow-[0_0_8px_#00FF41]" />

      {/* =========================================================
          DIGITAL GRAIN
      ========================================================= */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.035]"
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

      {/* =========================================================
          BOTTOM FADE
      ========================================================= */}
      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          h-52
          w-full
          bg-gradient-to-t
          from-[#080908]
          to-transparent
        "
      />
    </>
  );
}
