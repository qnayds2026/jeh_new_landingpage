import {
  CheckCircle2,
  ArrowRight,
  Lock,
  Clock3,
  ShieldCheck,
  BadgeIndianRupee,
} from "lucide-react";

const features = [
  "30-Day Recorded Masterclass",
  "Lifetime Access",
  "100% Malayalam Classes",
  "WhatsApp Community Support",
  "Beginner Friendly Roadmap",
];

export default function HeroCard({ onEnrollClick }) {
  return (
    <div className="sticky top-8 overflow-hidden rounded-2xl border border-white/10 bg-[#0D0D0D] shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
      {/* ================= OFFER BANNER ================= */}
      <div className="relative bg-[#00FF41] py-3 text-center">
        <p className="text-sm font-bold uppercase tracking-[0.15em] text-black">
          Limited Time Offer
        </p>

        {/* Perforated edge */}
        <div
          className="absolute -bottom-[5px] left-0 h-[10px] w-full bg-[#0D0D0D]"
          style={{
            maskImage:
              "radial-gradient(circle at 6px 0, transparent 5px, black 5.5px)",
            maskSize: "12px 10px",
            maskRepeat: "repeat-x",
            WebkitMaskImage:
              "radial-gradient(circle at 6px 0, transparent 5px, black 5.5px)",
            WebkitMaskSize: "12px 10px",
            WebkitMaskRepeat: "repeat-x",
          }}
          aria-hidden="true"
        />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="p-5 pt-9 sm:p-6 sm:pt-10 lg:p-8 lg:pt-10">
        {/* Heading */}
        <h2 className="font-serif text-2xl font-medium leading-tight text-white sm:text-3xl">
          Get Instant Access
        </h2>

        <p className="mt-2 text-sm leading-6 text-[#A3A3A3] sm:text-base">
          Everything you need to begin your Ethical Hacking journey.
        </p>

        {/* ================= PRICING ================= */}
        <div className="my-7 rounded-xl border border-[#00FF41]/20 bg-[#111111] p-4 sm:my-8 sm:p-6">
          <div className="flex items-baseline justify-between gap-3 text-sm text-[#737373]">
            <span>Regular price</span>

            <span className="line-through">
              ₹2,000
            </span>
          </div>

          <div className="my-4 border-t border-dashed border-white/10" />

          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-sm text-[#A3A3A3]">
              Offer price
            </span>

            <span className="flex items-center gap-1 font-serif text-4xl font-semibold text-[#00FF41] sm:text-5xl">
              <BadgeIndianRupee
                size={26}
                className="shrink-0 sm:h-7 sm:w-7"
              />
              999
            </span>
          </div>

          <div className="mt-3 flex items-center justify-between gap-3">
            <span className="text-xs text-[#737373]">
              Limited time pricing
            </span>

            <p className="text-right text-xs font-semibold text-[#00FF41] sm:text-sm">
              Save ₹1,001
            </p>
          </div>
        </div>

        {/* ================= INCLUDED ================= */}
        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.15em] text-[#737373]">
            What's Included
          </p>

          <div className="space-y-3">
            {features.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3"
              >
                <CheckCircle2
                  size={18}
                  className="mt-0.5 shrink-0 text-[#00FF41]"
                />

                <span className="text-sm leading-6 text-[#E5E5E5]">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ================= CTA ================= */}
        <button
          onClick={onEnrollClick}
          type="button"
          className="
            group mt-7 flex w-full items-center justify-center gap-2
            rounded-xl
            bg-[#00FF41]
            px-5 py-4
            text-base font-bold
            text-black
            shadow-[0_0_25px_rgba(0,255,65,0.12)]
            transition-all duration-200
            hover:-translate-y-0.5
            hover:shadow-[0_0_35px_rgba(0,255,65,0.25)]
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-[#00FF41]
            focus-visible:ring-offset-2
            focus-visible:ring-offset-[#0D0D0D]
            sm:mt-8
            sm:py-5
            sm:text-lg
          "
        >
          Get Instant Access

          <ArrowRight
            size={20}
            className="shrink-0 transition-transform duration-200 group-hover:translate-x-1"
          />
        </button>

        {/* ================= TRUST ================= */}
        <div className="mt-7 space-y-3 border-t border-white/10 pt-6 text-sm text-[#8A8A8A]">
          <div className="flex items-center gap-3">
            <Lock
              size={17}
              className="shrink-0 text-[#00FF41]"
            />

            <span>Secure payment</span>
          </div>

          <div className="flex items-center gap-3">
            <Clock3
              size={17}
              className="shrink-0 text-[#00FF41]"
            />

            <span>Instant course access</span>
          </div>

          <div className="flex items-center gap-3">
            <ShieldCheck
              size={17}
              className="shrink-0 text-[#00FF41]"
            />

            <span>Trusted by 10,000+ students</span>
          </div>
        </div>
      </div>
    </div>
  );
}