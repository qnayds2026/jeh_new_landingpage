import {
  Users,
  GraduationCap,
  ShieldCheck,
  Award,
  Star,
  CheckCircle2,
  Quote,
  Sparkles,
} from "lucide-react";
import Adil_Sir from "../assets/Adil_sir.webp";

export default function MentorSection() {
  return (
    <section className="relative overflow-hidden bg-[#050505] py-24 sm:py-28">
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-[#00FF41]/[0.035] blur-[140px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-[#00FF41]/[0.025] blur-[130px]" />

      {/* Cyber grid */}
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

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">

          {/* =====================================================
              LEFT — MENTOR IMAGE
          ===================================================== */}

          <div className="relative mx-auto w-full max-w-xl">
            {/* Image frame */}
            <div
              className="
                relative
                overflow-hidden
                rounded-3xl
                border border-white/10
                bg-[#0D0D0D]
                shadow-[0_30px_80px_rgba(0,0,0,0.5)]
              "
            >
              {/* Green glow behind mentor */}
              <div className="pointer-events-none absolute inset-x-10 bottom-0 h-72 rounded-full bg-[#00FF41]/[0.06] blur-[90px]" />

              <img
                src={Adil_Sir}
                alt="Adil Ameen - Cyber Security Trainer"
                className="
                  relative
                  z-10
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  hover:scale-[1.02]
                "
              />

              {/* Bottom gradient */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-40 bg-gradient-to-t from-black/70 to-transparent" />
            </div>

            {/* =================================================
                EXPERIENCE CARD
            ================================================= */}

            <div
              className="
                absolute
                -bottom-7
                left-4
                right-4
                z-30
                rounded-2xl
                border
                border-[#00FF41]/20
                bg-[#0D0D0D]/95
                p-4
                shadow-[0_20px_50px_rgba(0,0,0,0.5)]
                backdrop-blur-xl
                sm:left-8
                sm:right-auto
                sm:min-w-[310px]
              "
            >
              <div className="flex items-center gap-4">
                <div
                  className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    border border-[#00FF41]/20
                    bg-[#00FF41]/[0.07]
                  "
                >
                  <ShieldCheck
                    size={22}
                    className="text-[#00FF41]"
                  />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#00FF41]">
                    Cyber Security Trainer
                  </p>

                  <p className="mt-1 text-sm text-[#A3A3A3]">
                    Practical. Structured. Beginner-friendly.
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative corner */}
            <div className="pointer-events-none absolute -right-3 -top-3 h-16 w-16 rounded-tr-3xl border-r border-t border-[#00FF41]/30" />
          </div>

          {/* =====================================================
              RIGHT — MENTOR STORY
          ===================================================== */}

          <div>
            {/* Label */}
            <span
              className="
                inline-flex
                items-center
                gap-2
                border
                border-[#00FF41]/25
                bg-[#00FF41]/[0.06]
                px-4
                py-2
                text-xs
                font-bold
                uppercase
                tracking-[0.16em]
                text-[#00FF41]
              "
            >
              <Sparkles size={14} />
              Your Trainer
            </span>

            {/* Main heading */}
            <h2
              className="
                mt-6
                max-w-3xl
                font-serif
                text-4xl
                font-medium
                leading-[1.08]
                text-white
                sm:text-5xl
              "
            >
              Learn from someone who knows
              <span className="text-[#00FF41]">
                {" "}how to make cybersecurity simple.
              </span>
            </h2>

            {/* Introduction */}
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#A3A3A3]">
              Cybersecurity can feel overwhelming when you're starting from
              zero. Adil Sir's teaching approach focuses on breaking complex
              concepts into simple, practical lessons that beginners can
              actually understand and follow.
            </p>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#A3A3A3]">
              Instead of simply showing you tools, the goal is to help you
              understand{" "}
              <span className="font-semibold text-white">
                how ethical hackers think,
              </span>{" "}
              why attacks work, and how security professionals approach
              problems.
            </p>

            {/* =================================================
                TRUST STATS
            ================================================= */}

            <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4">
              {/* Students */}
              <div
                className="
                  rounded-2xl
                  border border-white/10
                  bg-[#0D0D0D]
                  p-5
                  transition
                  hover:border-[#00FF41]/25
                "
              >
                <Users
                  size={21}
                  className="text-[#00FF41]"
                />

                <h3 className="mt-4 font-serif text-3xl font-medium text-white">
                  10,000+
                </h3>

                <p className="mt-1 text-sm text-[#777]">
                  Students Reached
                </p>
              </div>

              {/* Lessons */}
              <div
                className="
                  rounded-2xl
                  border border-white/10
                  bg-[#0D0D0D]
                  p-5
                  transition
                  hover:border-[#00FF41]/25
                "
              >
                <GraduationCap
                  size={21}
                  className="text-[#00FF41]"
                />

                <h3 className="mt-4 font-serif text-3xl font-medium text-white">
                  100+
                </h3>

                <p className="mt-1 text-sm text-[#777]">
                  Video Lessons
                </p>
              </div>
            </div>

            {/* =================================================
                WHY STUDENTS LEARN FROM HIM
            ================================================= */}

            <div className="mt-10">
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.16em] text-[#666]">
                Why students choose his teaching
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  {
                    icon: ShieldCheck,
                    title: "Practical Learning",
                    text: "Learn concepts through real security examples and demonstrations.",
                  },
                  {
                    icon: GraduationCap,
                    title: "Beginner Friendly",
                    text: "Complex cybersecurity concepts explained without unnecessary confusion.",
                  },
                  {
                    icon: Award,
                    title: "Structured Roadmap",
                    text: "Follow a clear learning path instead of jumping between random topics.",
                  },
                  {
                    icon: Users,
                    title: "Student Focused",
                    text: "Designed around the problems beginners actually face while learning.",
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="
                        flex
                        gap-3
                        rounded-xl
                        border border-white/[0.07]
                        bg-white/[0.015]
                        p-4
                        transition
                        hover:border-[#00FF41]/20
                        hover:bg-[#00FF41]/[0.02]
                      "
                    >
                      <div className="mt-0.5 shrink-0">
                        <Icon
                          size={19}
                          className="text-[#00FF41]"
                        />
                      </div>

                      <div>
                        <h4 className="font-semibold text-white">
                          {item.title}
                        </h4>

                        <p className="mt-1 text-sm leading-6 text-[#777]">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* =================================================
                QUOTE
            ================================================= */}

            <div
              className="
                relative
                mt-10
                overflow-hidden
                rounded-2xl
                border
                border-[#00FF41]/15
                bg-[#0D0D0D]
                p-6
              "
            >
              <Quote
                size={28}
                className="absolute right-5 top-5 text-[#00FF41]/15"
              />

              <div className="relative z-10">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={15}
                      className="fill-[#00FF41] text-[#00FF41]"
                    />
                  ))}
                </div>

                <p className="mt-4 max-w-xl text-base leading-7 text-[#D4D4D4]">
                  "The goal isn't to make cybersecurity look complicated.
                  It's to make it understandable enough that you can
                  confidently start doing it yourself."
                </p>

                <div className="mt-4 flex items-center gap-3">
                  <div className="h-px w-8 bg-[#00FF41]" />

                  <span className="text-sm font-semibold text-[#00FF41]">
                    Adil Sir
                  </span>
                </div>
              </div>
            </div>

            {/* Rating */}
            <div className="mt-6 flex items-center gap-3 text-sm text-[#777]">
              <Star
                size={17}
                className="fill-[#00FF41] text-[#00FF41]"
              />

              <span>
                4.6 Google Rating
              </span>

              <span className="text-white/20">•</span>

              <span>
                Trusted by learners
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}