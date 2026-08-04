import { useEffect } from "react";
import { X, User, Mail, Phone, ShieldCheck, ArrowRight } from "lucide-react";

export default function CheckoutModal({
  open,
  onClose,
  formData,
  setFormData,
  onContinue,
  loading = false,
}) {
  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

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
        <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#3FA66E]/10 blur-[100px]" />

        <div className="relative max-h-[85vh] overflow-y-auto rounded-2xl border border-[#EAEDEA]/10 bg-[#121412] shadow-[0_30px_100px_rgba(0,0,0,0.5)] [scrollbar-color:#3FA66E_transparent] [scrollbar-width:thin] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#3FA66E]/40 [&::-webkit-scrollbar-track]:bg-transparent">
          <button
            onClick={onClose}
            aria-label="Close checkout"
            className="absolute right-4 top-4 z-20 rounded-full border border-[#EAEDEA]/10 bg-[#0A0B0A]/60 p-2 text-[#A3A9A3] backdrop-blur transition hover:bg-[#EAEDEA]/10 hover:text-[#EAEDEA]"
          >
            <X size={18} />
          </button>

          {/* Header */}
          <div className="border-b border-[#EAEDEA]/10 px-5 py-6 pr-14 sm:px-8 sm:py-8">
            <span className="inline-flex -rotate-1 items-center bg-[#3FA66E] px-3.5 py-1.5 text-xs font-bold uppercase tracking-wide text-[#0A0B0A] shadow-[3px_3px_0_rgba(234,237,234,0.15)]">
              Limited Time Offer
            </span>

            {/* <h2 id="checkout-title" className="mt-5 font-serif text-2xl font-medium text-[#EAEDEA] sm:text-3xl">
              Complete your
              <span className="block text-[#3FA66E]">enrollment</span>
            </h2>

            <p className="mt-3 text-sm text-[#A3A9A3]">
              You're one step away from joining thousands of cyber security
              learners.
            </p> */}
          </div>

          <div className="p-5 sm:p-8">
            {/* Course summary */}
            <div className="rounded-xl border border-[#3FA66E]/20 bg-[#1A1D1A] p-5">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <h3 className="font-serif text-xl text-[#EAEDEA]">
                    30-Day Ethical Hacking
                  </h3>
                  <p className="mt-1 text-sm text-[#A3A9A3]">
                    Recorded Masterclass
                  </p>
                </div>
                <span className="rounded-full bg-[#3FA66E]/10 px-3 py-1 text-xs font-bold text-[#3FA66E]">
                  SAVE ₹1,001
                </span>
              </div>

              <div className="mt-5 flex flex-wrap items-baseline gap-3">
                <span className="text-xl text-[#77716A] line-through">
                  ₹2,000
                </span>
                <span className="font-serif text-4xl font-medium text-[#3FA66E] sm:text-5xl">
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
                    className="w-full rounded-xl border border-[#EAEDEA]/10 bg-[#18140F] py-3.5 pl-12 pr-4 text-[#EAEDEA] outline-none transition placeholder:text-[#666] focus:border-[#3FA66E]"
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
                    className="w-full rounded-xl border border-[#EAEDEA]/10 bg-[#18140F] py-3.5 pl-12 pr-4 text-[#EAEDEA] outline-none transition placeholder:text-[#666] focus:border-[#3FA66E]"
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
                    className="w-full rounded-xl border border-[#EAEDEA]/10 bg-[#18140F] py-3.5 pl-12 pr-4 text-[#EAEDEA] outline-none transition placeholder:text-[#666] focus:border-[#3FA66E]"
                  />
                </div>
              </label>
            </div>

            {/* Benefits */}
            {/* <div className="mt-6 rounded-xl border border-[#3FA66E]/15 bg-[#15120D] p-4">
              <div className="space-y-2.5">
                {["Lifetime Access", "Instant Course Access", "100% Malayalam", "WhatsApp Community Support"].map(
                  (item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle2 size={17} className="shrink-0 text-[#3FA66E]" />
                      <span className="text-sm text-[#D7D2CA]">{item}</span>
                    </div>
                  )
                )}
              </div>
            </div> */}

            {/* Trust */}
            <div className="mt-5 flex items-start gap-3 rounded-xl border border-[#3FA66E]/15 bg-[#3FA66E]/5 p-4">
              <ShieldCheck
                size={20}
                className="mt-0.5 shrink-0 text-[#3FA66E]"
              />
              <div>
                <h4 className="text-sm font-semibold text-[#3FA66E]">
                  Secure Razorpay Checkout
                </h4>
                <p className="mt-1 text-xs leading-6 text-[#A3A9A3]">
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
              className="group mt-6 flex w-full items-center justify-center gap-3 rounded-xl bg-[#3FA66E] py-3.5 text-base font-bold text-[#0A0B0A] shadow-[4px_4px_0_rgba(234,237,234,0.15)] transition-transform duration-200 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0"
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
