import { useEffect, useState } from "react";
import {
  ArrowRight,
  ShieldCheck,
  Star,
  CheckCircle2,
  Clock3,
  Zap,
} from "lucide-react";

export default function FinalCTA({ onEnrollClick }) {
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
        } else {
          seconds = 59;

          if (minutes > 0) {
            minutes -= 1;
          } else {
            minutes = 59;

            if (hours > 0) {
              hours -= 1;
            } else {
              // Dummy countdown — restart after reaching zero
              hours = 23;
            }
          }
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

  const formatTime = (value) => String(value).padStart(2, "0");

  return (
    <section className="relative overflow-hidden bg-[#050505] py-24 sm:py-28">
      {/* Background glow */}
      <div className="pointer-events-none absolute -right-40 top-10 h-[500px] w-[500px] rounded-full bg-[#00FF41]/[0.05] blur-[140px]" />

      <div className="pointer-events-none absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-[#00FF41]/[0.025] blur-[130px]" />

      {/* Subtle cyber grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.018]"
        style={{
          backgroundImage: `
            linear-gradient(#00FF41 1px, transparent 1px),
            linear-gradient(90deg, #00FF41 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-4xl px-5 sm:px-6">
        <div className="overflow-hidden rounded-3xl border border-[#00FF41]/15 bg-[#0A0D0A] p-7 text-center shadow-[0_20px_80px_rgba(0,0,0,0.4)] sm:p-10 md:p-16">

          {/* Limited Offer */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#00FF41]/30 bg-[#00FF41]/[0.07] px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-[#00FF41]">
            <Zap size={15} className="fill-[#00FF41]" />
            Limited Time Offer
          </div>

          {/* Heading */}
          <h2 className="mx-auto mt-7 max-w-2xl font-serif text-4xl font-medium leading-tight text-white sm:text-5xl md:text-6xl">
            Your cyber security
            <span className="block text-[#00FF41]">
              journey starts here
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-[#858585] sm:text-lg">
            Learn ethical hacking through practical lessons, structured
            learning, Malayalam explanations and hands-on demonstrations.
          </p>

          {/* Benefits */}
          <div className="mx-auto mt-8 flex max-w-xl flex-wrap items-center justify-center gap-x-5 gap-y-3 text-sm text-[#D4D4D4]">
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 size={15} className="text-[#00FF41]" />
              100+ Video Lessons
            </span>

            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 size={15} className="text-[#00FF41]" />
              Lifetime Access
            </span>

            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 size={15} className="text-[#00FF41]" />
              WhatsApp Support
            </span>

            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 size={15} className="text-[#00FF41]" />
              100% Malayalam
            </span>
          </div>

          {/* ================= COUNTDOWN ================= */}

          <div className="mx-auto mt-10 max-w-md">
            <div className="mb-3 flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[#00FF41]">
              <Clock3 size={15} />
              Offer ends in
            </div>

            <div className="flex items-center justify-center gap-2 sm:gap-3">
              {/* Hours */}
              <div className="min-w-[72px] rounded-xl border border-[#00FF41]/20 bg-black/50 px-3 py-3 sm:min-w-[85px] sm:px-4 sm:py-4">
                <div className="font-mono text-2xl font-bold text-white sm:text-3xl">
                  {formatTime(timeLeft.hours)}
                </div>
                <div className="mt-1 text-[10px] font-semibold uppercase tracking-widest text-[#666]">
                  Hours
                </div>
              </div>

              <span className="pb-5 text-xl font-bold text-[#00FF41]">
                :
              </span>

              {/* Minutes */}
              <div className="min-w-[72px] rounded-xl border border-[#00FF41]/20 bg-black/50 px-3 py-3 sm:min-w-[85px] sm:px-4 sm:py-4">
                <div className="font-mono text-2xl font-bold text-white sm:text-3xl">
                  {formatTime(timeLeft.minutes)}
                </div>
                <div className="mt-1 text-[10px] font-semibold uppercase tracking-widest text-[#666]">
                  Minutes
                </div>
              </div>

              <span className="pb-5 text-xl font-bold text-[#00FF41]">
                :
              </span>

              {/* Seconds */}
              <div className="min-w-[72px] rounded-xl border border-[#00FF41]/20 bg-black/50 px-3 py-3 sm:min-w-[85px] sm:px-4 sm:py-4">
                <div className="font-mono text-2xl font-bold text-[#00FF41] sm:text-3xl">
                  {formatTime(timeLeft.seconds)}
                </div>
                <div className="mt-1 text-[10px] font-semibold uppercase tracking-widest text-[#666]">
                  Seconds
                </div>
              </div>
            </div>
          </div>

          {/* ================= PRICE ================= */}

          <div className="mx-auto mt-10 max-w-sm rounded-2xl border border-dashed border-white/15 bg-black/30 p-6 text-left">
            <div className="flex items-baseline justify-between text-sm text-[#777]">
              <span>Regular price</span>
              <span className="line-through">₹2,000</span>
            </div>

            <div className="my-4 border-t border-dashed border-white/10" />

            <div className="flex items-baseline justify-between">
              <span className="text-sm text-[#777]">
                Today's offer price
              </span>

              <span className="font-serif text-5xl font-medium text-[#00FF41]">
                ₹999
              </span>
            </div>

            <p className="mt-3 text-right text-sm font-semibold text-white">
              You save ₹1,001 today
            </p>
          </div>

          {/* CTA */}
          <button
            onClick={onEnrollClick}
            type="button"
            className="
              group
              mt-8
              inline-flex
              items-center
              justify-center
              gap-3
              rounded-xl
              bg-[#00FF41]
              px-10
              py-5
              text-lg
              font-bold
              text-black
              shadow-[0_0_30px_rgba(0,255,65,0.12)]
              transition-all
              duration-200
              hover:-translate-y-1
              hover:shadow-[0_0_40px_rgba(0,255,65,0.22)]
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-[#00FF41]
              focus-visible:ring-offset-2
              focus-visible:ring-offset-[#0A0D0A]
              sm:px-14
            "
          >
            Get Instant Access

            <ArrowRight
              size={20}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </button>

          {/* Trust */}
          <div className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-[#777]">
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck size={15} className="text-[#00FF41]" />
              Secure Payment
            </span>

            <span className="hidden text-[#333] sm:inline">
              •
            </span>

            <span className="inline-flex items-center gap-1.5">
              <Star
                size={15}
                className="fill-[#00FF41] text-[#00FF41]"
              />
              4.6 Google Rating
            </span>

            <span className="hidden text-[#333] sm:inline">
              •
            </span>

            <span>10,000+ Students</span>
          </div>

          {/* Small urgency message */}
          <p className="mt-6 text-xs text-[#555]">
            Limited-time introductory pricing. Offer may change without
            notice.
          </p>
        </div>
      </div>
    </section>
  );
}