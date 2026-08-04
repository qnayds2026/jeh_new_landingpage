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
    <div className="sticky top-8 overflow-hidden rounded-2xl border border-[#EAEDEA]/10 bg-[#121412]">
      {/* Offer banner — a stamped ticket stub, not a gradient alert bar */}
      <div className="relative bg-[#3FA66E] py-3 text-center">
        <p className="rotate-[-0.5deg] text-sm font-bold uppercase tracking-widest text-[#0A0B0A]">
          Limited Time Offer
        </p>
        {/* Perforated edge, like a torn ticket */}
        <div
          className="absolute -bottom-[5px] left-0 h-[10px] w-full bg-[#121412]"
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

      <div className="p-8 pt-10">
        <h2 className="font-serif text-3xl font-medium leading-tight">
          Get instant access
        </h2>
        <p className="mt-2 text-[#A3A9A3]">
          Everything you need to begin your ethical hacking journey.
        </p>

        {/* Pricing — receipt style, dashed rule instead of a boxed gradient */}
        <div className="my-8 rounded-xl border border-dashed border-[#EAEDEA]/20 p-6">
          <div className="flex items-baseline justify-between text-sm text-[#A3A9A3]">
            <span>Regular price</span>
            <span className="line-through">₹2,000</span>
          </div>
          <div className="my-4 border-t border-dashed border-[#EAEDEA]/20" />
          <div className="flex items-baseline justify-between">
            <span className="text-sm text-[#A3A9A3]">Offer price</span>
            <span className="flex items-center gap-1 font-serif text-5xl font-medium text-[#3FA66E]">
              <BadgeIndianRupee size={30} className="shrink-0" />
              999
            </span>
          </div>
          <p className="mt-3 text-right text-sm font-medium text-[#EAEDEA]">
            You save ₹1,001 today
          </p>
        </div>

        {/* Included */}
        <div className="space-y-3">
          {features.map((item) => (
            <div key={item} className="flex items-center gap-3">
              <CheckCircle2 size={18} className="shrink-0 text-[#3FA66E]" />
              <span className="text-[#EAEDEA]">{item}</span>
            </div>
          ))}
        </div>

        {/* CTA — solid green, hard offset shadow to match the hero badge,
            no gradient */}
        <button
          onClick={onEnrollClick}
          type="button"
          className="group mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-[#3FA66E] py-5 text-lg font-bold text-[#0A0B0A] shadow-[4px_4px_0_rgba(234,237,234,0.15)] transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3FA66E] focus-visible:ring-offset-2 focus-visible:ring-offset-[#121412]"
        >
          Get Instant Access
          <ArrowRight
            size={20}
            className="transition group-hover:translate-x-1"
          />
        </button>

        {/* Trust */}
        <div className="mt-8 space-y-4 border-t border-[#EAEDEA]/10 pt-6 text-[#A3A9A3]">
          <div className="flex items-center gap-3">
            <Lock size={18} />
            Secure payment
          </div>
          <div className="flex items-center gap-3">
            <Clock3 size={18} />
            Instant course access
          </div>
          <div className="flex items-center gap-3">
            <ShieldCheck size={18} />
            Trusted by 10,000+ students
          </div>
        </div>
      </div>
    </div>
  );
}
