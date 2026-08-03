import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

export default function StickyCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShow(window.scrollY > 700);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-[999] transition-all duration-500 ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-full opacity-0"
      }`}
    >
      <div className="border-t border-[#FFB627]/20 bg-[#12100D]/95 shadow-[0_-10px_40px_rgba(0,0,0,0.4)] backdrop-blur-lg">
        <div
          className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:px-6 sm:py-4"
          style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
        >
          {/* Price */}
          <div className="flex items-center justify-between gap-3 sm:block">
            <div className="flex items-baseline gap-2 sm:gap-3">
              <h3 className="font-serif text-3xl font-medium text-[#FFB627] sm:text-4xl lg:text-5xl">
                ₹999
              </h3>
              <span className="text-base text-[#A8A29B] line-through sm:text-xl">
                ₹2,000
              </span>
            </div>
            <p className="hidden text-sm text-[#A8A29B] sm:mt-1 sm:block">
              Lifetime Access • Beginner Friendly
            </p>
          </div>

          {/* CTA — full width on mobile so it's an easy thumb target,
              auto width from sm: up */}
          <button
            type="button"
            className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#FFB627] px-6 py-3.5 text-base font-bold text-[#0A0908] shadow-[3px_3px_0_rgba(237,234,227,0.15)] transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB627] focus-visible:ring-offset-2 focus-visible:ring-offset-[#12100D] sm:w-auto sm:px-10 sm:py-4 sm:text-lg lg:px-12 lg:py-5 lg:text-xl"
          >
            Get Instant Access
            <ArrowRight size={18} className="shrink-0 transition group-hover:translate-x-1 sm:h-5 sm:w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}