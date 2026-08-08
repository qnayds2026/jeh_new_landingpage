import { useEffect, useState } from "react";
import AnimatedBackground from "./AnimatedBackground";
import HeroVideo from "./HeroVideo";
import HeroCard from "./HeroCard";
import { Star, Users, ShieldCheck, Video, Clock3 } from "lucide-react";

export default function Hero({ onEnrollClick }) {
  // =========================================================
  // DUMMY LIMITED-TIME COUNTDOWN
  // Starts from 23:59:59
  // =========================================================

  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds -= 1;
        } else if (minutes > 0) {
          minutes -= 1;
          seconds = 59;
        } else if (hours > 0) {
          hours -= 1;
          minutes = 59;
          seconds = 59;
        } else {
          // Dummy timer resets after reaching zero
          hours = 23;
          minutes = 59;
          seconds = 59;
        }

        return {
          hours,
          minutes,
          seconds,
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (value) => {
    return String(value).padStart(2, "0");
  };

  return (
    <section className="relative overflow-hidden bg-[#000000] text-white">
      <AnimatedBackground />

      {/* =========================================================
          ATMOSPHERIC GLOW
      ========================================================= */}

      <div
        className="
          pointer-events-none absolute
          -right-40 top-10
          h-[500px] w-[500px]
          rounded-full
          bg-[#00FF41]/[0.06]
          blur-[140px]
        "
      />

      <div
        className="
          pointer-events-none absolute
          -left-40 bottom-0
          h-[400px] w-[400px]
          rounded-full
          bg-[#00FF41]/[0.035]
          blur-[130px]
        "
      />

      {/* =========================================================
          CYBER GRID
      ========================================================= */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(#00FF41 1px, transparent 1px),
            linear-gradient(90deg, #00FF41 1px, transparent 1px)
          `,
          backgroundSize: "45px 45px",
        }}
      />

      {/* =========================================================
          GRAIN
      ========================================================= */}

      <svg
        className="pointer-events-none absolute inset-0 z-0 h-full w-full opacity-[0.035]"
        aria-hidden="true"
      >
        <filter id="hero-grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.85"
            numOctaves="2"
            stitchTiles="stitch"
          />

          <feColorMatrix
            type="saturate"
            values="0"
          />
        </filter>

        <rect
          width="100%"
          height="100%"
          filter="url(#hero-grain)"
        />
      </svg>

      {/* =========================================================
          MAIN CONTENT
      ========================================================= */}

      <div className="relative z-10 mx-auto max-w-7xl px-5 pb-16 pt-20 sm:px-6 lg:px-8 lg:pb-20 lg:pt-28">

        {/* =====================================================
            HERO COPY
        ===================================================== */}

        <div className="mx-auto max-w-5xl text-center">

          {/* Badge */}

          <div
            className="
              inline-flex items-center gap-2
              rounded-full
              border border-[#00FF41]/30
              bg-[#00FF41]/[0.07]
              px-5 py-2
              text-xs font-bold uppercase
              tracking-[0.16em]
              text-[#00FF41]
              shadow-[0_0_25px_rgba(0,255,65,0.08)]
              sm:text-sm
            "
          >
            <span
              className="
                h-2 w-2 rounded-full
                bg-[#00FF41]
                shadow-[0_0_10px_#00FF41]
                animate-pulse
              "
            />

            30-Day Hacking Masterclass
          </div>

          {/* Heading */}

          <h1
            className="
              mx-auto mt-8 max-w-5xl
              font-serif
              text-4xl font-medium
              leading-[1.08]
              tracking-tight
              text-white
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
            "
          >
            Want to Learn{" "}

            <span
              className="
                text-[#00FF41]
                drop-shadow-[0_0_18px_rgba(0,255,65,0.18)]
              "
            >
              Ethical Hacking?
            </span>

            <br />

            Don't Know Where to Start?
          </h1>

          {/* Underline */}

          <div
            className="
              mx-auto mt-5
              h-px w-24
              bg-[#00FF41]/70
              shadow-[0_0_12px_#00FF41]
            "
          />

          {/* Description */}

          <p
            className="
              mx-auto mt-7 max-w-3xl
              text-base leading-7
              text-[#A3A3A3]
              sm:text-lg sm:leading-8
              lg:text-xl
            "
          >
            Build a strong foundation in{" "}

            <span className="font-semibold text-[#00FF41]">
              Cybersecurity
            </span>{" "}

            and confidently begin your{" "}

            <span className="font-semibold text-[#00FF41]">
              Ethical Hacking
            </span>{" "}

            journey in just 30 days.
          </p>

          {/* Trust */}

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-[#737373] sm:text-base">
            Designed by experienced cybersecurity trainers and trusted by more
            than{" "}

            <span className="font-semibold text-white">
              10,000+ students
            </span>{" "}

            across Kerala.
          </p>

          {/* =====================================================
              TRUST BADGES
          ===================================================== */}

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">

            {/* Rating */}

            <div
              className="
                inline-flex items-center gap-2
                rounded-full
                border border-white/10
                bg-[#0D0D0D]
                px-4 py-2
                text-sm font-medium
                text-[#D4D4D4]
              "
            >
              <Star
                size={15}
                className="fill-[#00FF41] text-[#00FF41]"
              />

              4.6 Google Rating
            </div>

            {/* Students */}

            <div
              className="
                inline-flex items-center gap-2
                rounded-full
                border border-white/10
                bg-[#0D0D0D]
                px-4 py-2
                text-sm font-medium
                text-[#D4D4D4]
              "
            >
              <Users
                size={15}
                className="text-[#00FF41]"
              />

              10,000+ Students
            </div>

            {/* Support */}

            <div
              className="
                inline-flex items-center gap-2
                rounded-full
                border border-white/10
                bg-[#0D0D0D]
                px-4 py-2
                text-sm font-medium
                text-[#D4D4D4]
              "
            >
              <ShieldCheck
                size={15}
                className="text-[#00FF41]"
              />

              WhatsApp Support
            </div>
          </div>
        </div>

        {/* =====================================================
            LIMITED TIME OFFER
        ===================================================== */}

        <div className="mx-auto mt-12 max-w-xl">

          <div
            className="
              relative overflow-hidden
              rounded-2xl
              border border-[#00FF41]/20
              bg-[#0B0B0B]
              px-5 py-5
              shadow-[0_0_35px_rgba(0,255,65,0.06)]
              sm:px-7
            "
          >

            {/* Green top line */}

            <div
              className="
                absolute left-0 right-0 top-0
                h-[2px]
                bg-[#00FF41]
                shadow-[0_0_12px_#00FF41]
              "
            />

            <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">

              {/* Left */}

              <div className="text-center sm:text-left">

                <div className="flex items-center justify-center gap-2 sm:justify-start">

                  <Clock3
                    size={18}
                    className="text-[#00FF41]"
                  />

                  <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#00FF41]">
                    Limited Time Offer
                  </span>

                </div>

                <p className="mt-1 text-sm text-[#777]">
                  Special enrollment price ends soon
                </p>

              </div>

              {/* Countdown */}

              <div className="flex items-center gap-2">

                {/* Hours */}

                <div className="text-center">

                  <div
                    className="
                      flex h-12 w-14
                      items-center justify-center
                      rounded-lg
                      border border-white/10
                      bg-[#111111]
                      font-mono
                      text-xl font-bold
                      text-white
                      shadow-inner
                      sm:h-14 sm:w-16
                      sm:text-2xl
                    "
                  >
                    {formatTime(timeLeft.hours)}
                  </div>

                  <span className="mt-1 block text-[9px] uppercase tracking-wider text-[#555]">
                    Hours
                  </span>

                </div>

                <span className="mb-4 text-[#00FF41]">
                  :
                </span>

                {/* Minutes */}

                <div className="text-center">

                  <div
                    className="
                      flex h-12 w-14
                      items-center justify-center
                      rounded-lg
                      border border-white/10
                      bg-[#111111]
                      font-mono
                      text-xl font-bold
                      text-white
                      shadow-inner
                      sm:h-14 sm:w-16
                      sm:text-2xl
                    "
                  >
                    {formatTime(timeLeft.minutes)}
                  </div>

                  <span className="mt-1 block text-[9px] uppercase tracking-wider text-[#555]">
                    Minutes
                  </span>

                </div>

                <span className="mb-4 text-[#00FF41]">
                  :
                </span>

                {/* Seconds */}

                <div className="text-center">

                  <div
                    className="
                      flex h-12 w-14
                      items-center justify-center
                      rounded-lg
                      border border-[#00FF41]/20
                      bg-[#00FF41]/[0.04]
                      font-mono
                      text-xl font-bold
                      text-[#00FF41]
                      shadow-[0_0_15px_rgba(0,255,65,0.08)]
                      sm:h-14 sm:w-16
                      sm:text-2xl
                    "
                  >
                    {formatTime(timeLeft.seconds)}
                  </div>

                  <span className="mt-1 block text-[9px] uppercase tracking-wider text-[#555]">
                    Seconds
                  </span>

                </div>

              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            VIDEO + OFFER
        ===================================================== */}

        <div className="mt-12 lg:mt-14">

          {/* Video label */}

          <div className="mb-5 flex justify-center">

            <div
              className="
                inline-flex items-center gap-2
                text-sm font-bold uppercase
                tracking-[0.12em]
                text-[#00FF41]
              "
            >
              <Video size={17} />

              Watch Before You Enroll
            </div>

          </div>

          <div className="grid items-start gap-8 lg:grid-cols-[1.4fr_.8fr]">

            {/* Video */}

            <div>
              <HeroVideo
                onEnrollClick={onEnrollClick}
              />
            </div>

            {/* Offer */}

            <HeroCard
              onEnrollClick={onEnrollClick}
            />

          </div>
        </div>
      </div>
    </section>
  );
}