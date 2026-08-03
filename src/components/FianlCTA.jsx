import { ArrowRight, ShieldCheck, Star, CheckCircle2 } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-[#0A0908] py-32">
      <div className="absolute -left-40 top-0 h-[600px] w-[600px] rounded-full bg-[#FFB627]/8 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-4xl px-6">
        <div className="overflow-hidden rounded-2xl border border-[#EDEAE3]/10 bg-[#12100D] p-10 text-center md:p-16">
          <span className="inline-flex -rotate-1 items-center bg-[#FFB627] px-4 py-1.5 text-sm font-bold uppercase tracking-wide text-[#0A0908] shadow-[3px_3px_0_rgba(237,234,227,0.15)]">
            Start Today
          </span>

          <h2 className="mx-auto mt-8 max-w-2xl font-serif text-4xl font-medium leading-tight text-[#EDEAE3] md:text-6xl">
            Your cyber security
            <span className="block text-[#FFB627]">journey starts here</span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-[#A8A29B]">
            Ethical hacking through practical Malayalam lessons, lifetime
            access, hands-on demonstrations and structured learning.
          </p>

          {/* Features — inline list, not repeated pill chips */}
          <div className="mx-auto mt-8 flex max-w-xl flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-[#EDEAE3]/80">
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 size={14} className="text-[#FFB627]" />
              100+ Video Lessons
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 size={14} className="text-[#FFB627]" />
              Lifetime Access
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 size={14} className="text-[#FFB627]" />
              WhatsApp Support
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 size={14} className="text-[#FFB627]" />
              100% Malayalam
            </span>
          </div>

          {/* Price — receipt styling, echoing HeroCard. This is the one
              place on the page it's worth repeating that motif, since
              it's the final price commitment, not just decoration. */}
          <div className="mx-auto mt-12 max-w-sm rounded-xl border border-dashed border-[#EDEAE3]/20 p-6 text-left">
            <div className="flex items-baseline justify-between text-sm text-[#A8A29B]">
              <span>Regular price</span>
              <span className="line-through">₹2,000</span>
            </div>
            <div className="my-4 border-t border-dashed border-[#EDEAE3]/20" />
            <div className="flex items-baseline justify-between">
              <span className="text-sm text-[#A8A29B]">Offer price</span>
              <span className="font-serif text-5xl font-medium text-[#FFB627]">₹999</span>
            </div>
            <p className="mt-3 text-right text-sm font-medium text-[#EDEAE3]">
              You save ₹1,001 today
            </p>
          </div>

          <button
            type="button"
            className="group mt-10 inline-flex items-center gap-3 rounded-xl bg-[#FFB627] px-12 py-5 text-lg font-bold text-[#0A0908] shadow-[4px_4px_0_rgba(237,234,227,0.15)] transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB627] focus-visible:ring-offset-2 focus-visible:ring-offset-[#12100D]"
          >
            Get Instant Access
            <ArrowRight size={20} className="transition group-hover:translate-x-1" />
          </button>

          {/* Trust — single accent color, no emoji */}
          <div className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-[#A8A29B]">
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck size={14} />
              Secure Payment
            </span>
            <span aria-hidden="true">·</span>
            <span className="inline-flex items-center gap-1.5">
              <Star size={14} className="fill-[#FFB627] text-[#FFB627]" />
              4.6 Google Rating
            </span>
            <span aria-hidden="true">·</span>
            <span>10,000+ Students</span>
          </div>
        </div>
      </div>
    </section>
  );
}