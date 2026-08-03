import { useEffect } from "react";
import {
  X,
  User,
  Mail,
  Phone,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export default function CheckoutModal({
  open,
  onClose,
  formData,
  setFormData,
  onContinue,
  loading = false,
}) {
  // Body scroll lock — this is what was causing the double-scrollbar/
  // oversized feeling. Without it, the page behind the modal keeps its
  // own scrollbar active at the same time the modal scrolls internally.
  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  // Escape to close
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 p-3 backdrop-blur-md sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="checkout-title"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="relative w-full max-w-lg">
        <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FFB627]/10 blur-[100px]" />

        {/* max-h capped below viewport (not 92vh) so the modal never
            crowds the very top/bottom edge even with body scroll locked.
            Custom thin scrollbar instead of the browser default, so if
            it does scroll it still looks like part of the design. */}
        <div className="relative max-h-[85vh] overflow-y-auto rounded-2xl border border-[#EDEAE3]/10 bg-[#12100D] shadow-[0_30px_100px_rgba(0,0,0,0.5)] [scrollbar-color:#FFB627_transparent] [scrollbar-width:thin] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#FFB627]/40 [&::-webkit-scrollbar-track]:bg-transparent">
          <button
            onClick={onClose}
            aria-label="Close checkout"
            className="absolute right-4 top-4 z-20 rounded-full border border-[#EDEAE3]/10 bg-[#0A0908]/60 p-2 text-[#A8A29B] backdrop-blur transition hover:bg-[#EDEAE3]/10 hover:text-[#EDEAE3]"
          >
            <X size={18} />
          </button>

          {/* Header */}
          <div className="border-b border-[#EDEAE3]/10 px-5 py-6 pr-14 sm:px-8 sm:py-8">
            <span className="inline-flex -rotate-1 items-center bg-[#FFB627] px-3.5 py-1.5 text-xs font-bold uppercase tracking-wide text-[#0A0908] shadow-[3px_3px_0_rgba(237,234,227,0.15)]">
              Limited Time Offer
            </span>

            {/* <h2 id="checkout-title" className="mt-5 font-serif text-2xl font-medium text-[#EDEAE3] sm:text-3xl">
              Complete your
              <span className="block text-[#FFB627]">enrollment</span>
            </h2>

            <p className="mt-3 text-sm text-[#A8A29B]">
              You're one step away from joining thousands of cyber security
              learners.
            </p> */}
          </div>

          <div className="p-5 sm:p-8">
            {/* Course summary */}
            <div className="rounded-xl border border-[#FFB627]/20 bg-[#1A1713] p-5">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <h3 className="font-serif text-xl text-[#EDEAE3]">
                    30-Day Ethical Hacking
                  </h3>
                  <p className="mt-1 text-sm text-[#A8A29B]">
                    Recorded Masterclass
                  </p>
                </div>
                <span className="rounded-full bg-[#FFB627]/10 px-3 py-1 text-xs font-bold text-[#FFB627]">
                  SAVE ₹1,001
                </span>
              </div>

              <div className="mt-5 flex flex-wrap items-baseline gap-3">
                <span className="text-xl text-[#77716A] line-through">
                  ₹2,000
                </span>
                <span className="font-serif text-4xl font-medium text-[#FFB627] sm:text-5xl">
                  ₹999
                </span>
              </div>
            </div>

            {/* Form */}
            <div className="mt-6 space-y-3">
              <label className="block">
                <span className="sr-only">Full name</span>
                <div className="relative">
                  <User
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#77716A]"
                  />
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    className="w-full rounded-xl border border-[#EDEAE3]/10 bg-[#18140F] py-3.5 pl-12 pr-4 text-[#EDEAE3] outline-none transition placeholder:text-[#666] focus:border-[#FFB627]"
                  />
                </div>
              </label>

              <label className="block">
                <span className="sr-only">Email address</span>
                <div className="relative">
                  <Mail
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#77716A]"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    className="w-full rounded-xl border border-[#EDEAE3]/10 bg-[#18140F] py-3.5 pl-12 pr-4 text-[#EDEAE3] outline-none transition placeholder:text-[#666] focus:border-[#FFB627]"
                  />
                </div>
              </label>

              <label className="block">
                <span className="sr-only">Phone number</span>
                <div className="relative">
                  <Phone
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#77716A]"
                  />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="w-full rounded-xl border border-[#EDEAE3]/10 bg-[#18140F] py-3.5 pl-12 pr-4 text-[#EDEAE3] outline-none transition placeholder:text-[#666] focus:border-[#FFB627]"
                  />
                </div>
              </label>
            </div>

            {/* Benefits */}
            {/* <div className="mt-6 rounded-xl border border-[#FFB627]/15 bg-[#15120D] p-4">
              <div className="space-y-2.5">
                {["Lifetime Access", "Instant Course Access", "100% Malayalam", "WhatsApp Community Support"].map(
                  (item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle2 size={17} className="shrink-0 text-[#FFB627]" />
                      <span className="text-sm text-[#D7D2CA]">{item}</span>
                    </div>
                  )
                )}
              </div>
            </div> */}

            {/* Trust */}
            <div className="mt-5 flex items-start gap-3 rounded-xl border border-[#FFB627]/15 bg-[#FFB627]/5 p-4">
              <ShieldCheck
                size={20}
                className="mt-0.5 shrink-0 text-[#FFB627]"
              />
              <div>
                <h4 className="text-sm font-semibold text-[#FFB627]">
                  Secure Razorpay Checkout
                </h4>
                <p className="mt-1 text-xs leading-6 text-[#A8A29B]">
                  Your payment is securely processed through Razorpay. Course
                  access details will be sent immediately after successful
                  payment.
                </p>
              </div>
            </div>

            {/* Button */}
            <button
              onClick={onContinue}
              disabled={loading}
              className="group mt-6 flex w-full items-center justify-center gap-3 rounded-xl bg-[#FFB627] py-3.5 text-base font-bold text-[#0A0908] shadow-[4px_4px_0_rgba(237,234,227,0.15)] transition-transform duration-200 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0"
            >
              {loading ? "Processing..." : "Continue to Secure Payment"}
              {!loading && (
                <ArrowRight
                  size={20}
                  className="transition group-hover:translate-x-1"
                />
              )}
            </button>

            <p className="mt-4 text-center text-xs text-[#77716A]">
              No hidden charges • Secure payment • Instant access after payment
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
