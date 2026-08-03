import AnimatedBackground from "./AnimatedBackground";
import HeroVideo from "./HeroVideo";
import HeroCard from "./HeroCard";
import { Star, Users, ShieldCheck } from "lucide-react";


export default function Hero({onEnrollClick,}) {
  return (
    <section className="relative overflow-hidden bg-[#0A0908] text-[#EDEAE3]">
      <AnimatedBackground />

      {/* Grain instead of scanlines — reads like paper/film, not a UI mockup */}
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
        {/* Text block — left-aligned, constrained to roughly the width of the
            video column below, so the hero flows into the grid instead of
            being a separate centered banner on top of it */}
        <div className="max-w-3xl">
          {/* Badge — a sticker someone placed, not a centered pill.
              Slight rotation + hard shadow instead of blur/glow. */}
          <div className="inline-flex -rotate-[1.5deg] items-center gap-2 border border-[#FFB627]/40 bg-[#FFB627] px-4 py-1.5 text-sm font-bold uppercase tracking-wide text-[#0A0908] shadow-[3px_3px_0_rgba(0,0,0,0.4)]">
            30-Day Ethical Hacking Masterclass
          </div>

          {/* Heading — serif display instead of the generic bold-sans-with-
              gradient-accent every AI tool defaults to. If Fraunces / a
              similar serif isn't loaded in your project, add it via
              Google Fonts or your font pipeline — this leans on
              font-serif as a fallback. */}
          <h1 className="mt-7 font-serif text-4xl sm:text-5xl lg:text-6xl font-medium leading-[1.08] tracking-tight">
            Learn ethical hacking in Malayalam.
            <br />
            Build your cyber security foundation in just{" "}
            <span className="relative inline-block whitespace-nowrap">
              30 days
              {/* Hand-drawn underline — a real imperfect stroke, not a
                  straight border-bottom */}
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
                  stroke="#FFB627"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            .
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-[#A8A29B]">
            Stop wasting time on random YouTube tutorials. This is a structured,
            30-day recorded course — real demonstrations, complete Malayalam
            explanations, built for people starting from zero.
          </p>

          {/* Trust — one line of running text, like a photo caption, not a
              boxed stat component */}
          <p className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-[#A8A29B]">
            <span className="inline-flex items-center gap-1 text-[#EDEAE3]">
              <Star size={14} className="fill-[#FFB627] text-[#FFB627]" />
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

        {/* Main Layout */}
        <div className="mt-14 grid gap-10 lg:grid-cols-[1.4fr_.8fr] items-start">
          {/* Left */}
          <div>
            <p className="mb-4 text-sm text-[#A8A29B]">
              Watch this before you enroll —
            </p>
            <HeroVideo  onEnrollClick={onEnrollClick}  />
          </div>

          {/* Right */}
          <HeroCard  onEnrollClick={onEnrollClick}  />
        </div>
      </div>
    </section>
  );
}
