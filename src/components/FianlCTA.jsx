import { ArrowRight, ShieldCheck, Star, CheckCircle2 } from "lucide-react";

export default function FinalCTA({ onEnrollClick }) {
  return (
    <section className="relative overflow-hidden bg-[#0A0B0A] py-32">
      <div className="absolute -left-40 top-0 h-[600px] w-[600px] rounded-full bg-[#3FA66E]/8 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-4xl px-6">
        <div className="overflow-hidden rounded-2xl border border-[#EAEDEA]/10 bg-[#121412] p-10 text-center md:p-16">
          <span className="inline-flex -rotate-1 items-center bg-[#3FA66E] px-4 py-1.5 text-sm font-bold uppercase tracking-wide text-[#0A0B0A] shadow-[3px_3px_0_rgba(234,237,234,0.15)]">
            Start Today
          </span>

          <h2 className="mx-auto mt-8 max-w-2xl font-serif text-4xl font-medium leading-tight text-[#EAEDEA] md:text-6xl">
            Your cyber security
            <span className="block text-[#3FA66E]">journey starts here</span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-[#A3A9A3]">
            Ethical hacking through practical Malayalam lessons, lifetime
            access, hands-on demonstrations and structured learning.
          </p>

          <div className="mx-auto mt-8 flex max-w-xl flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-[#EAEDEA]/80">
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 size={14} className="text-[#3FA66E]" />
              100+ Video Lessons
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 size={14} className="text-[#3FA66E]" />
              Lifetime Access
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 size={14} className="text-[#3FA66E]" />
              WhatsApp Support
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 size={14} className="text-[#3FA66E]" />
              100% Malayalam
            </span>
          </div>

          <div className="mx-auto mt-12 max-w-sm rounded-xl border border-dashed border-[#EAEDEA]/20 p-6 text-left">
            <div className="flex items-baseline justify-between text-sm text-[#A3A9A3]">
              <span>Regular price</span>
              <span className="line-through">₹2,000</span>
            </div>
            <div className="my-4 border-t border-dashed border-[#EAEDEA]/20" />
            <div className="flex items-baseline justify-between">
              <span className="text-sm text-[#A3A9A3]">Offer price</span>
              <span className="font-serif text-5xl font-medium text-[#3FA66E]">
                ₹999
              </span>
            </div>
            <p className="mt-3 text-right text-sm font-medium text-[#EAEDEA]">
              You save ₹1,001 today
            </p>
          </div>

          <button
            onClick={onEnrollClick}
            type="button"
            className="group mt-10 inline-flex items-center gap-3 rounded-xl bg-[#3FA66E] px-12 py-5 text-lg font-bold text-[#0A0B0A] shadow-[4px_4px_0_rgba(234,237,234,0.15)] transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3FA66E] focus-visible:ring-offset-2 focus-visible:ring-offset-[#121412]"
          >
            Get Instant Access
            <ArrowRight
              size={20}
              className="transition group-hover:translate-x-1"
            />
          </button>

          <div className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-[#A3A9A3]">
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck size={14} />
              Secure Payment
            </span>
            <span aria-hidden="true">·</span>
            <span className="inline-flex items-center gap-1.5">
              <Star size={14} className="fill-[#3FA66E] text-[#3FA66E]" />
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
