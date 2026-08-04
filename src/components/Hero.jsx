import AnimatedBackground from "./AnimatedBackground";
import HeroVideo from "./HeroVideo";
import HeroCard from "./HeroCard";
import { Star, Users, ShieldCheck } from "lucide-react";

export default function Hero({ onEnrollClick }) {
  return (
    <section className="relative overflow-hidden bg-[#0A0B0A] text-[#EAEDEA]">
      <AnimatedBackground />

      {/* Grain — unchanged, still colorless so it works under any accent */}
      <svg
        className="pointer-events-none absolute inset-0 z-0 h-full w-full opacity-[0.05]"
        aria-hidden="true"
      >
        <filter id="grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.85"
            numOctaves="2"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain)" />
      </svg>

      <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 pt-20 lg:pt-28 pb-16">
        <div className="max-w-3xl">
          {/* Badge — same sticker treatment, new accent */}
          <div className="inline-flex -rotate-[1.5deg] items-center gap-2 border border-[#3FA66E]/40 bg-[#3FA66E] px-4 py-1.5 text-sm font-bold uppercase tracking-wide text-[#0A0B0A] shadow-[3px_3px_0_rgba(0,0,0,0.4)]">
            30-Day Ethical Hacking Masterclass
          </div>

          <h1 className="mt-7 font-serif text-4xl sm:text-5xl lg:text-6xl font-medium leading-[1.08] tracking-tight">
            Learn ethical hacking in Malayalam.
            <br />
            Build your cyber security foundation in just{" "}
            <span className="relative inline-block whitespace-nowrap">
              30 days
              <svg
                className="absolute -bottom-1 left-0 w-full"
                height="10"
                viewBox="0 0 200 10"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M2 7 C 40 2, 90 9, 130 4 S 180 2, 198 6"
                  fill="none"
                  stroke="#3FA66E"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            .
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-[#A3A9A3]">
            Stop wasting time on random YouTube tutorials. This is a structured,
            30-day recorded course — real demonstrations, complete Malayalam
            explanations, built for people starting from zero.
          </p>

          <p className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-[#A3A9A3]">
            <span className="inline-flex items-center gap-1 text-[#EAEDEA]">
              <Star size={14} className="fill-[#3FA66E] text-[#3FA66E]" />
              4.6 on Google
            </span>
            <span aria-hidden="true">·</span>
            <span className="inline-flex items-center gap-1">
              <Users size={14} />
              10,000+ students
            </span>
            <span aria-hidden="true">·</span>
            <span className="inline-flex items-center gap-1">
              <ShieldCheck size={14} />
              built for absolute beginners
            </span>
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.4fr_.8fr] items-start">
          <div>
            <p className="mb-4 text-sm text-[#A3A9A3]">
              Watch this before you enroll —
            </p>
            <HeroVideo onEnrollClick={onEnrollClick} />
          </div>

          <HeroCard onEnrollClick={onEnrollClick} />
        </div>
      </div>
    </section>
  );
}
