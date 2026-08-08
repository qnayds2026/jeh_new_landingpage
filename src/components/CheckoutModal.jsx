import { useEffect, useState } from "react";
import {
  X,
  User,
  Mail,
  Phone,
  ShieldCheck,
  ArrowRight,
  Clock3,
  CheckCircle2,
  Lock,
} from "lucide-react";

export default function CheckoutModal({
  open,
  onClose,
  formData,
  setFormData,
  onContinue,
  loading = false,
}) {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59,
  });

  // Prevent background scrolling
  useEffect(() => {
    if (!open) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [open]);

  // Close with Escape
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  // Dummy countdown
  useEffect(() => {
    if (!open) return;

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
              // Dummy timer resets
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
  }, [open]);

  if (!open) return null;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const formatTime = (value) => String(value).padStart(2, "0");

  return (
    <div
      className="
        fixed inset-0 z-[9999]
        flex items-center justify-center
        bg-black/85
        p-3
        backdrop-blur-md
        sm:p-5
      "
      role="dialog"
      aria-modal="true"
      aria-labelledby="checkout-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      {/* Background glow */}
      <div
        className="
          pointer-events-none
          absolute
          h-[350px]
          w-[350px]
          rounded-full
          bg-[#00FF41]/[0.06]
          blur-[120px]
        "
      />

      {/* Modal */}
      <div
        className="
          relative
          flex
          w-full
          max-w-lg
          max-h-[92vh]
          flex-col
          overflow-hidden
          rounded-2xl
          border
          border-[#00FF41]/20
          bg-[#090B09]
          shadow-[0_30px_100px_rgba(0,0,0,0.65)]
        "
      >
        {/* Close */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close checkout"
          className="
            absolute
            right-4
            top-4
            z-30
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-full
            border
            border-white/10
            bg-black/60
            text-[#777]
            backdrop-blur
            transition
            hover:border-[#00FF41]/30
            hover:bg-[#00FF41]/10
            hover:text-white
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-[#00FF41]
          "
        >
          <X size={18} />
        </button>

        {/* ================= HEADER ================= */}

        <div className="shrink-0 border-b border-white/10 px-5 py-5 pr-16 sm:px-7 sm:py-6">
          <div className="flex flex-wrap items-center gap-3">
            <span
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-[#00FF41]/30
                bg-[#00FF41]/[0.07]
                px-3.5
                py-1.5
                text-[11px]
                font-bold
                uppercase
                tracking-[0.14em]
                text-[#00FF41]
              "
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#00FF41] shadow-[0_0_8px_#00FF41]" />
              Limited Time Offer
            </span>
          </div>

          <h2
            id="checkout-title"
            className="
              mt-4
              font-serif
              text-2xl
              font-medium
              leading-tight
              text-white
              sm:text-3xl
            "
          >
            Complete your
            <span className="block text-[#00FF41]">
              enrollment
            </span>
          </h2>

          <p className="mt-2 text-sm leading-6 text-[#777]">
            You're one step away from starting your ethical hacking journey.
          </p>
        </div>

        {/* ================= SCROLLABLE CONTENT ================= */}

        <div
          className="
            overflow-y-auto
            px-5
            py-5
            sm:px-7
            sm:py-6
            [scrollbar-color:#00FF41_transparent]
            [scrollbar-width:thin]
            [&::-webkit-scrollbar]:w-1.5
            [&::-webkit-scrollbar-thumb]:rounded-full
            [&::-webkit-scrollbar-thumb]:bg-[#00FF41]/30
            [&::-webkit-scrollbar-track]:bg-transparent
          "
        >
          {/* ================= OFFER TIMER ================= */}

          <div
            className="
              rounded-xl
              border
              border-[#00FF41]/15
              bg-[#00FF41]/[0.035]
              p-4
            "
          >
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <Clock3
                  size={16}
                  className="text-[#00FF41]"
                />

                <span className="text-xs font-semibold uppercase tracking-wide text-[#A3A3A3]">
                  Offer expires in
                </span>
              </div>

              <div className="font-mono text-sm font-bold tracking-wider text-[#00FF41]">
                {formatTime(timeLeft.hours)}:
                {formatTime(timeLeft.minutes)}:
                {formatTime(timeLeft.seconds)}
              </div>
            </div>
          </div>

          {/* ================= COURSE SUMMARY ================= */}

          <div
            className="
              mt-4
              rounded-xl
              border
              border-[#00FF41]/20
              bg-[#0D110D]
              p-5
            "
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#00FF41]">
                  You're enrolling in
                </p>

                <h3 className="mt-2 font-serif text-xl text-white">
                  30-Day Ethical Hacking
                </h3>

                <p className="mt-1 text-sm text-[#777]">
                  Recorded Masterclass
                </p>
              </div>

              <span
                className="
                  rounded-full
                  border
                  border-[#00FF41]/20
                  bg-[#00FF41]/10
                  px-3
                  py-1
                  text-[11px]
                  font-bold
                  text-[#00FF41]
                "
              >
                SAVE ₹1,001
              </span>
            </div>

            <div className="mt-5 flex items-end gap-3">
              <span className="text-lg text-[#555] line-through">
                ₹2,000
              </span>

              <span className="font-serif text-4xl font-medium text-[#00FF41] sm:text-5xl">
                ₹999
              </span>
            </div>
          </div>

          {/* ================= FORM ================= */}

          <div className="mt-5">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-[#777]">
              Enter your details
            </p>

            <div className="space-y-3">
              {/* Name */}
              <div className="relative">
                <User
                  size={18}
                  className="
                    pointer-events-none
                    absolute
                    left-4
                    top-1/2
                    -translate-y-1/2
                    text-[#555]
                  "
                />

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  autoComplete="name"
                  className="
                    w-full
                    rounded-xl
                    border
                    border-white/10
                    bg-[#0D0F0D]
                    py-3.5
                    pl-12
                    pr-4
                    text-sm
                    text-white
                    outline-none
                    transition
                    placeholder:text-[#555]
                    focus:border-[#00FF41]/50
                    focus:bg-[#101410]
                    focus:ring-1
                    focus:ring-[#00FF41]/20
                  "
                />
              </div>

              {/* Email */}
              <div className="relative">
                <Mail
                  size={18}
                  className="
                    pointer-events-none
                    absolute
                    left-4
                    top-1/2
                    -translate-y-1/2
                    text-[#555]
                  "
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  autoComplete="email"
                  className="
                    w-full
                    rounded-xl
                    border
                    border-white/10
                    bg-[#0D0F0D]
                    py-3.5
                    pl-12
                    pr-4
                    text-sm
                    text-white
                    outline-none
                    transition
                    placeholder:text-[#555]
                    focus:border-[#00FF41]/50
                    focus:bg-[#101410]
                    focus:ring-1
                    focus:ring-[#00FF41]/20
                  "
                />
              </div>

              {/* Phone */}
              <div className="relative">
                <Phone
                  size={18}
                  className="
                    pointer-events-none
                    absolute
                    left-4
                    top-1/2
                    -translate-y-1/2
                    text-[#555]
                  "
                />

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  autoComplete="tel"
                  inputMode="tel"
                  className="
                    w-full
                    rounded-xl
                    border
                    border-white/10
                    bg-[#0D0F0D]
                    py-3.5
                    pl-12
                    pr-4
                    text-sm
                    text-white
                    outline-none
                    transition
                    placeholder:text-[#555]
                    focus:border-[#00FF41]/50
                    focus:bg-[#101410]
                    focus:ring-1
                    focus:ring-[#00FF41]/20
                  "
                />
              </div>
            </div>
          </div>

          {/* ================= INCLUDED ================= */}

          <div className="mt-5 grid grid-cols-2 gap-2.5">
            {[
              "Lifetime Access",
              "100% Malayalam",
              "WhatsApp Support",
              "Beginner Friendly",
            ].map((item) => (
              <div
                key={item}
                className="
                  flex
                  items-center
                  gap-2
                  rounded-lg
                  border
                  border-white/[0.06]
                  bg-white/[0.02]
                  px-3
                  py-2.5
                "
              >
                <CheckCircle2
                  size={15}
                  className="shrink-0 text-[#00FF41]"
                />

                <span className="text-[11px] text-[#999] sm:text-xs">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* ================= TRUST ================= */}

          <div
            className="
              mt-5
              flex
              items-start
              gap-3
              rounded-xl
              border
              border-[#00FF41]/15
              bg-[#00FF41]/[0.035]
              p-4
            "
          >
            <ShieldCheck
              size={20}
              className="mt-0.5 shrink-0 text-[#00FF41]"
            />

            <div>
              <h4 className="text-sm font-semibold text-[#00FF41]">
                Secure Razorpay Checkout
              </h4>

              <p className="mt-1 text-xs leading-5 text-[#777]">
                Your payment is securely processed through Razorpay.
                Your course access details will be provided after
                successful payment.
              </p>
            </div>
          </div>

          {/* ================= CTA ================= */}

          <button
            type="button"
            onClick={onContinue}
            disabled={loading}
            className="
              group
              mt-5
              flex
              w-full
              items-center
              justify-center
              gap-3
              rounded-xl
              bg-[#00FF41]
              py-4
              text-base
              font-bold
              text-black
              shadow-[0_0_25px_rgba(0,255,65,0.10)]
              transition-all
              duration-200
              hover:-translate-y-0.5
              hover:shadow-[0_0_35px_rgba(0,255,65,0.18)]
              disabled:cursor-not-allowed
              disabled:opacity-50
              disabled:hover:translate-y-0
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-[#00FF41]
              focus-visible:ring-offset-2
              focus-visible:ring-offset-[#090B09]
            "
          >
            {loading ? (
              "Processing..."
            ) : (
              <>
                Continue to Secure Payment

                <ArrowRight
                  size={19}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </>
            )}
          </button>

          {/* ================= FOOTER TRUST ================= */}

          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-[11px] text-[#555]">
            <span className="inline-flex items-center gap-1.5">
              <Lock size={12} />
              Secure Payment
            </span>

            <span>•</span>

            <span>No Hidden Charges</span>

            <span>•</span>

            <span>Instant Access</span>
          </div>
        </div>
      </div>
    </div>
  );
}