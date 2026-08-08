import { useEffect, useState } from "react";
import { ArrowRight, Clock3, Zap } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function StickyCTA({ onEnrollClick }) {
  const [show, setShow] = useState(false);

  // Dummy countdown
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 51,
  });

  /* =========================================
     SHOW STICKY CTA AFTER SCROLL
  ========================================= */
  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 700);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =========================================
     COUNTDOWN
  ========================================= */
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev;

        if (hours === 0 && minutes === 0 && seconds === 0) {
          return {
            hours: 23,
            minutes: 59,
            seconds: 59,
          };
        }

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

  const formattedTime = [
    timeLeft.hours,
    timeLeft.minutes,
    timeLeft.seconds,
  ]
    .map((value) => String(value).padStart(2, "0"))
    .join(":");

  /* =========================================
     WHATSAPP
  ========================================= */
  const phoneNumber = "919074871204";

  const message = encodeURIComponent(
    "Hi, I am interested in the 30-Day Ethical Hacking Masterclass."
  );

  return (
    <>
      {/* =====================================================
          WHATSAPP FLOATING BUTTON
      ===================================================== */}
      <a
        href={`https://wa.me/${phoneNumber}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact us on WhatsApp"
        className={`
          fixed
          right-4
          z-[1001]

          flex
          h-14
          w-14
          items-center
          justify-center

          rounded-full
          bg-[#25D366]
          text-white

          shadow-[0_8px_30px_rgba(37,211,102,0.35)]

          transition-all
          duration-500
          ease-out

          sm:right-6
          sm:h-16
          sm:w-16

          lg:right-8
          lg:h-16
          lg:w-16

          ${
            show
              ? `
                bottom-[150px]
                translate-y-0
                scale-100
                opacity-100
              `
              : `
                pointer-events-none
                bottom-4
                translate-y-8
                scale-75
                opacity-0
              `
          }
        `}
      >
        <span
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-0
            rounded-full
            bg-[#25D366]/30
            blur-md
            motion-safe:animate-pulse
          "
        />

        <FaWhatsapp
          className="
            relative
            z-10
            text-[30px]

            sm:text-[34px]
          "
        />
      </a>

      {/* =====================================================
          STICKY CTA
      ===================================================== */}
      <div
        className={`
          fixed
          inset-x-0
          bottom-0
          z-[1000]

          px-2
          pb-2

          sm:px-4
          sm:pb-4

          transition-all
          duration-500
          ease-out

          ${
            show
              ? "translate-y-0 opacity-100"
              : "pointer-events-none translate-y-full opacity-0"
          }
        `}
        style={{
          paddingBottom: show
            ? "max(0.5rem, env(safe-area-inset-bottom))"
            : undefined,
        }}
      >
        {/* =================================================
            MAIN BAR
        ================================================= */}
        <div
          className="
            mx-auto
            w-full
            max-w-6xl

            overflow-hidden

            rounded-2xl

            border
            border-[#00FF41]/15

            bg-[#090D0A]/95

            shadow-[0_-5px_35px_rgba(0,0,0,0.45)]

            backdrop-blur-xl
          "
        >
          {/* ===============================================
              CONTENT
          =============================================== */}
          <div
            className="
              flex
              w-full
              flex-col
              gap-3

              px-3
              py-3

              sm:flex-row
              sm:items-center
              sm:justify-between
              sm:gap-6

              sm:px-5
              sm:py-3.5

              lg:px-7
              lg:py-4
            "
          >
            {/* =========================================
                PRICE + TIMER
            ========================================= */}
            <div
              className="
                flex
                w-full
                items-center
                justify-between
                gap-2

                sm:w-auto
                sm:block
              "
            >
              {/* PRICE */}
              <div
                className="
                  flex
                  min-w-0
                  items-baseline
                  gap-2

                  sm:gap-3
                "
              >
                <span
                  className="
                    shrink-0
                    font-serif
                    text-3xl
                    font-medium
                    leading-none
                    text-[#00FF41]

                    sm:text-4xl

                    lg:text-[42px]
                  "
                >
                  ₹999
                </span>

                <span
                  className="
                    shrink-0
                    text-sm
                    text-[#666]
                    line-through

                    sm:text-base

                    lg:text-lg
                  "
                >
                  ₹2,000
                </span>
              </div>

              {/* =====================================
                  MOBILE COUNTDOWN
              ===================================== */}
              <div
                className="
                  flex
                  shrink-0
                  items-center
                  gap-1.5

                  rounded-lg
                  border
                  border-[#00FF41]/20

                  bg-[#071009]

                  px-2.5
                  py-2

                  shadow-[0_0_15px_rgba(0,255,65,0.05)]

                  sm:hidden
                "
              >
                <Clock3
                  size={14}
                  className="shrink-0 text-[#00FF41]"
                />

                <span
                  className="
                    font-mono
                    text-xs
                    font-bold
                    tracking-wider
                    tabular-nums
                    text-[#00FF41]
                  "
                >
                  {formattedTime}
                </span>
              </div>

              {/* =====================================
                  DESKTOP SUBTITLE
              ===================================== */}
              <p
                className="
                  mt-1
                  hidden
                  text-xs
                  text-[#8A8F8B]

                  sm:block

                  sm:text-sm
                "
              >
                Lifetime Access • Beginner Friendly
              </p>
            </div>

            {/* =========================================
                DESKTOP COUNTDOWN
            ========================================= */}
            <div
              className="
                hidden
                items-center
                gap-3

                sm:flex
              "
            >
              <div
                className="
                  rounded-lg
                  border
                  border-[#00FF41]/20
                  bg-[#071009]

                  px-4
                  py-2
                "
              >
                <p
                  className="
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.16em]
                    text-[#777]
                  "
                >
                  Offer ends in
                </p>

                <div className="mt-1 flex items-center gap-2">
                  <Clock3
                    size={15}
                    className="text-[#00FF41]"
                  />

                  <span
                    className="
                      font-mono
                      text-base
                      font-bold
                      tracking-[0.12em]
                      tabular-nums
                      text-[#00FF41]
                    "
                  >
                    {formattedTime}
                  </span>
                </div>
              </div>
            </div>

            {/* =========================================
                CTA BUTTON
            ========================================= */}
            <div
              className="
                w-full

                sm:w-auto
              "
            >
              <button
                onClick={onEnrollClick}
                type="button"
                className="
                  group
                  relative

                  flex
                  w-full
                  items-center
                  justify-center
                  gap-2

                  overflow-hidden

                  rounded-xl

                  bg-[#00FF41]

                  px-5
                  py-3.5

                  text-base
                  font-bold
                  text-[#020502]

                  shadow-[0_0_20px_rgba(0,255,65,0.15)]

                  transition-all
                  duration-300

                  hover:-translate-y-0.5
                  hover:shadow-[0_0_30px_rgba(0,255,65,0.3)]

                  active:translate-y-0

                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-[#00FF41]
                  focus-visible:ring-offset-2
                  focus-visible:ring-offset-[#090D0A]

                  sm:w-auto
                  sm:min-w-[220px]
                  sm:px-7
                  sm:py-3.5
                  sm:text-base

                  lg:min-w-[260px]
                  lg:px-9
                  lg:py-4
                  lg:text-lg
                "
              >
                {/* Shine animation */}
                <span
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    inset-y-0
                    -left-12
                    w-8
                    rotate-12
                    bg-white/30
                    blur-sm

                    transition-transform
                    duration-700

                    group-hover:translate-x-[350px]
                  "
                />

                <Zap
                  size={17}
                  className="
                    relative
                    z-10
                    shrink-0
                    fill-current
                  "
                />

                <span
                  className="
                    relative
                    z-10
                    whitespace-nowrap
                  "
                >
                  Get Instant Access
                </span>

                <ArrowRight
                  size={18}
                  className="
                    relative
                    z-10
                    shrink-0

                    transition-transform
                    duration-300

                    group-hover:translate-x-1
                  "
                />
              </button>
            </div>
          </div>

          {/* ===============================================
              MOBILE OFFER STRIP
          =============================================== */}
          <div
            className="
              border-t
              border-[#00FF41]/10

              bg-[#00FF41]/[0.025]

              px-4
              py-1.5

              text-center

              text-[10px]
              font-medium
              uppercase
              tracking-[0.12em]

              text-[#666]

              sm:hidden
            "
          >
            Limited Time Offer • Save ₹1,001
          </div>
        </div>
      </div>
    </>
  );
}