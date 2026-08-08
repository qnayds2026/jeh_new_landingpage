import {
  ShieldCheck,
  Terminal,
  Rocket,
  ArrowRight,
  CheckCircle2,
  BadgeIndianRupee,
} from "lucide-react";

const cards = [
  {
    id: "01",
    tag: "BUILD THE FOUNDATION",
    title: "Think Like An Ethical Hacker",
    description:
      "Go beyond random tutorials. Learn how attackers think, how vulnerabilities are discovered, how cyber attacks happen, and how security professionals approach them.",
    icon: ShieldCheck,
    points: [
      "Understand the hacker mindset",
      "Learn how real attacks happen",
      "No prior experience required",
    ],
  },
  {
    id: "02",
    tag: "GET PRACTICAL",
    title: "Learn The Tools Hackers Use",
    description:
      "Get introduced to the same categories of tools used in real security testing, with structured demonstrations that show you what they actually do and when to use them.",
    icon: Terminal,
    points: [
      "Kali Linux",
      "Nmap & Burp Suite",
      "Real security demonstrations",
    ],
  },
  {
    id: "03",
    tag: "KNOW YOUR NEXT STEP",
    title: "Follow A Clear Cybersecurity Roadmap",
    description:
      "Stop wondering what to learn next. Follow a structured path that takes you from absolute beginner to a confident starting point for your cybersecurity journey.",
    icon: Rocket,
    points: [
      "Structured learning roadmap",
      "Beginner-friendly progression",
      "Know what to learn next",
    ],
  },
];

export default function LearnSection({ onEnrollClick }) {
  return (
    <section className="relative overflow-hidden bg-[#000000] py-24">
      {/* Subtle green atmosphere */}
      <div className="pointer-events-none absolute -left-40 top-20 h-[450px] w-[450px] rounded-full bg-[#00FF41]/[0.035] blur-[140px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-[#00FF41]/[0.04] blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* =====================================================
            HEADING
        ===================================================== */}

        <div className="mx-auto max-w-4xl text-center">

          <span
            className="
              inline-flex items-center gap-2
              rounded-full
              border border-[#00FF41]/30
              bg-[#00FF41]/[0.07]
              px-4 py-2
              text-xs font-bold
              uppercase tracking-[0.16em]
              text-[#00FF41]
            "
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#00FF41]" />
            More Than Just A Course
          </span>

          <h2
            className="
              mt-7
              font-serif
              text-4xl font-medium
              leading-tight
              text-white
              md:text-5xl
              lg:text-6xl
            "
          >
            What You're Actually Getting
            <span className="block text-[#00FF41]">
              For ₹999
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-[#A3A3A3] sm:text-lg">
            You're not paying for a collection of random videos. You're
            getting a structured starting point for your cybersecurity
            journey — with practical demonstrations, a clear roadmap,
            lifetime access and community support.
          </p>

          {/* Value statement */}
          <div className="mt-8 inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm text-[#737373]">
            <span>Structured Learning</span>
            <span className="text-[#00FF41]">•</span>
            <span>Practical Knowledge</span>
            <span className="text-[#00FF41]">•</span>
            <span>Lifetime Access</span>
            <span className="text-[#00FF41]">•</span>
            <span>Community Support</span>
          </div>
        </div>

        {/* =====================================================
            VALUE CARDS
        ===================================================== */}

        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          {cards.map((card) => {
            const Icon = card.icon;

            return (
              <div
                key={card.id}
                className="
                  group relative overflow-hidden
                  rounded-2xl
                  border border-white/10
                  bg-[#0D0D0D]
                  p-6
                  transition-all duration-300
                  hover:-translate-y-2
                  hover:border-[#00FF41]/30
                  hover:shadow-[0_15px_50px_rgba(0,255,65,0.06)]
                  sm:p-8
                "
              >
                {/* Number */}
                <div
                  className="
                    absolute right-5 top-3
                    font-mono
                    text-6xl font-bold
                    text-white/[0.025]
                    transition-colors
                    group-hover:text-[#00FF41]/[0.06]
                  "
                >
                  {card.id}
                </div>

                {/* Tag */}
                <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#00FF41]">
                  {card.tag}
                </span>

                {/* Icon */}
                <div
                  className="
                    mt-6
                    flex h-14 w-14
                    items-center justify-center
                    rounded-xl
                    border border-[#00FF41]/20
                    bg-[#00FF41]/[0.06]
                    transition-all duration-300
                    group-hover:border-[#00FF41]/40
                    group-hover:bg-[#00FF41]/10
                  "
                >
                  <Icon
                    size={26}
                    className="text-[#00FF41]"
                  />
                </div>

                {/* Title */}
                <h3
                  className="
                    mt-6
                    font-serif
                    text-2xl font-medium
                    leading-snug
                    text-white
                  "
                >
                  {card.title}
                </h3>

                {/* Description */}
                <p className="mt-4 text-sm leading-7 text-[#929292]">
                  {card.description}
                </p>

                {/* Points */}
                <div className="mt-7 space-y-3 border-t border-white/10 pt-6">
                  {card.points.map((point) => (
                    <div
                      key={point}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2
                        size={17}
                        className="mt-0.5 shrink-0 text-[#00FF41]"
                      />

                      <span className="text-sm text-[#D0D0D0]">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* =====================================================
            VALUE STRIP
        ===================================================== */}

        <div
          className="
            mx-auto mt-10 max-w-4xl
            rounded-2xl
            border border-[#00FF41]/20
            bg-[#0B0B0B]
            p-5
            sm:p-6
          "
        >
          <div className="flex flex-col items-center justify-between gap-5 sm:flex-row">

            {/* Left */}
            <div className="flex items-center gap-4">

              <div
                className="
                  flex h-12 w-12 shrink-0
                  items-center justify-center
                  rounded-xl
                  border border-[#00FF41]/20
                  bg-[#00FF41]/[0.06]
                "
              >
                <BadgeIndianRupee
                  size={23}
                  className="text-[#00FF41]"
                />
              </div>

              <div>
                <p className="text-sm font-semibold text-white">
                  One-time payment. Lifetime access.
                </p>

                <p className="mt-1 text-xs text-[#737373]">
                  No monthly subscription or recurring charges.
                </p>
              </div>

            </div>

            {/* Price */}
            <div className="text-center sm:text-right">

              <div className="flex items-baseline gap-2">
                <span className="text-sm text-[#666] line-through">
                  ₹2,000
                </span>

                <span className="font-serif text-3xl font-semibold text-[#00FF41]">
                  ₹999
                </span>
              </div>

              <p className="mt-1 text-xs font-medium text-[#00FF41]">
                Save ₹1,001
              </p>

            </div>
          </div>
        </div>

        {/* =====================================================
            CTA
        ===================================================== */}

        <div className="mt-12 text-center">

          <p className="mb-4 text-sm text-[#737373]">
            Ready to build your cybersecurity foundation?
          </p>

          <button
            onClick={onEnrollClick}
            type="button"
            className="
              group
              inline-flex
              items-center
              justify-center
              gap-3
              rounded-xl
              bg-[#00FF41]
              px-8 py-4
              text-base font-bold
              text-black
              shadow-[0_0_25px_rgba(0,255,65,0.12)]
              transition-all duration-200
              hover:-translate-y-0.5
              hover:shadow-[0_0_40px_rgba(0,255,65,0.25)]
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-[#00FF41]
              focus-visible:ring-offset-2
              focus-visible:ring-offset-black
              sm:px-10
              sm:py-5
              sm:text-lg
            "
          >
            Start Learning Today

            <ArrowRight
              size={20}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </button>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-[#666]">
            <span>✓ Lifetime Access</span>
            <span>✓ Malayalam Classes</span>
            <span>✓ WhatsApp Support</span>
            <span>✓ Beginner Friendly</span>
          </div>
        </div>
      </div>
    </section>
  );
}