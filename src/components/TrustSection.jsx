import {
  ShieldCheck,
  BadgeCheck,
  Users,
  MessageCircle,
  Video,
  Clock3,
  CheckCircle2,
} from "lucide-react";

const trustItems = [
  {
    icon: ShieldCheck,
    title: "Practical Cybersecurity Training",
    description:
      "Learn through real security concepts, practical demonstrations, and industry-relevant tools.",
  },
  {
    icon: Video,
    title: "Structured Recorded Classes",
    description:
      "Follow the lessons at your own pace and revisit the content whenever you need.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Community Support",
    description:
      "Get guidance and stay connected with other learners throughout your learning journey.",
  },
  {
    icon: Clock3,
    title: "Lifetime Access",
    description:
      "Pay once and keep access to your course content without recurring subscriptions.",
  },
];

export default function TrustSection() {
  return (
    <section className="relative overflow-hidden bg-[#050505] py-24">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-[#00FF41]/[0.035] blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="mx-auto max-w-3xl text-center">
          <span
            className="
              inline-flex items-center gap-2
              rounded-full
              border border-[#00FF41]/25
              bg-[#00FF41]/[0.05]
              px-4 py-2
              text-xs font-bold
              uppercase tracking-[0.16em]
              text-[#00FF41]
            "
          >
            <BadgeCheck size={14} />
            Why You Can Trust Us
          </span>

          <h2
            className="
              mt-6
              font-serif
              text-4xl font-medium
              leading-tight
              text-white
              md:text-5xl
            "
          >
            Learn with confidence.
            <span className="block text-[#00FF41]">Not guesswork.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#929292] sm:text-lg">
            Starting cybersecurity can feel overwhelming. We built this
            masterclass to give beginners a structured path, practical
            knowledge, and ongoing support — without the confusion of random
            tutorials.
          </p>
        </div>

        {/* =====================================================
            TRUST GRID
        ===================================================== */}

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="
                  group
                  rounded-2xl
                  border border-white/10
                  bg-[#0D0D0D]
                  p-6
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-[#00FF41]/25
                  hover:bg-[#101010]
                "
              >
                <div
                  className="
                    flex h-11 w-11
                    items-center justify-center
                    rounded-xl
                    border border-[#00FF41]/20
                    bg-[#00FF41]/[0.05]
                    transition-all duration-300
                    group-hover:border-[#00FF41]/40
                    group-hover:bg-[#00FF41]/10
                  "
                >
                  <Icon size={21} className="text-[#00FF41]" />
                </div>

                <h3 className="mt-5 font-serif text-xl font-medium text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#808080]">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* =====================================================
            CREDIBILITY STRIP
        ===================================================== */}

        <div
          className="
            mx-auto mt-8
            max-w-5xl
            rounded-2xl
            border border-white/10
            bg-[#0D0D0D]
            px-5 py-6
            sm:px-8
          "
        >
          <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
            {/* Students */}
            <div className="flex items-center gap-4">
              <div
                className="
                  flex h-11 w-11 shrink-0
                  items-center justify-center
                  rounded-full
                  bg-[#00FF41]/[0.07]
                "
              >
                <Users size={20} className="text-[#00FF41]" />
              </div>

              <div>
                <p className="font-semibold text-white">10,000+ Learners</p>

                <p className="text-xs text-[#666]">Learning cybersecurity</p>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden h-10 w-px bg-white/10 lg:block" />

            {/* Rating */}
            <div className="flex items-center gap-4">
              <div
                className="
                  flex h-11 w-11 shrink-0
                  items-center justify-center
                  rounded-full
                  bg-[#00FF41]/[0.07]
                "
              >
                <span className="text-lg text-[#00FF41]">★</span>
              </div>

              <div>
                <p className="font-semibold text-white">4.6 / 5 Rating</p>

                <p className="text-xs text-[#666]">Student feedback</p>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden h-10 w-px bg-white/10 lg:block" />

            {/* Support */}
            <div className="flex items-center gap-4">
              <div
                className="
                  flex h-11 w-11 shrink-0
                  items-center justify-center
                  rounded-full
                  bg-[#00FF41]/[0.07]
                "
              >
                <MessageCircle size={20} className="text-[#00FF41]" />
              </div>

              <div>
                <p className="font-semibold text-white">Community Support</p>

                <p className="text-xs text-[#666]">Learn with guidance</p>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            TRUST CHECKLIST
        ===================================================== */}

        <div className="mx-auto mt-12 max-w-2xl text-center">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-[#555]">
            What you can expect
          </p>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
            {[
              "Beginner Friendly",
              "Malayalam Classes",
              "Practical Demonstrations",
              "Lifetime Access",
              "Community Support",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 text-sm text-[#A3A3A3]"
              >
                <CheckCircle2 size={15} className="text-[#00FF41]" />

                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
