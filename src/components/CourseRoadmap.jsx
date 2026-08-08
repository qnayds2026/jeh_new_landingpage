import {
  Network,
  Laptop,
  Search,
  Shield,
  Globe,
  Lock,
  ArrowRight,
  CheckCircle2,
  Terminal,
  Zap,
} from "lucide-react";

const roadmap = [
  {
    title: "Cyber Security Fundamentals",
    shortTitle: "Build Your Foundation",
    icon: Shield,
    description:
      "Start from zero and understand the fundamentals of cyber security, ethical hacking, networking, Linux, threats, vulnerabilities and security concepts.",
    points: [
      "Cyber Security Basics",
      "Networking Fundamentals",
      "Linux Essentials",
    ],
  },
  {
    title: "Reconnaissance & Scanning",
    shortTitle: "Learn How Hackers Think",
    icon: Search,
    description:
      "Understand how ethical hackers gather information about a target and identify possible attack surfaces before attempting exploitation.",
    points: [
      "Information Gathering",
      "Reconnaissance",
      "Scanning & Enumeration",
    ],
  },
  {
    title: "Web Application Security",
    shortTitle: "Understand Web Attacks",
    icon: Globe,
    description:
      "Explore how web applications can become vulnerable and learn to recognize common security weaknesses from an ethical hacking perspective.",
    points: [
      "Web Security Fundamentals",
      "Common Vulnerabilities",
      "Attacker Mindset",
    ],
  },
  {
    title: "Practical Hacking Tools",
    shortTitle: "Get Hands-On",
    icon: Laptop,
    description:
      "Move beyond theory and get practical exposure to tools used by cybersecurity professionals during security testing and analysis.",
    points: ["Kali Linux", "Burp Suite & Nmap", "Wireshark & Security Tools"],
  },
  {
    title: "System Security",
    shortTitle: "Understand System Attacks",
    icon: Lock,
    description:
      "Learn essential concepts around authentication, privileges, malware, system vulnerabilities and the fundamentals of protecting systems.",
    points: ["Authentication", "Privilege Concepts", "System Protection"],
  },
  {
    title: "Your Cyber Security Roadmap",
    shortTitle: "Know What To Learn Next",
    icon: Network,
    description:
      "Finish with a clearer understanding of where to go next and how to continue developing your cybersecurity skills after the masterclass.",
    points: ["Learning Roadmap", "Skill Development", "Career Direction"],
  },
];

export default function CourseRoadmap({ onEnrollClick }) {
  return (
    <section className="relative overflow-hidden bg-[#050505] py-24 sm:py-28">
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-[#00FF41]/[0.035] blur-[140px]" />

      <div className="pointer-events-none absolute -right-40 bottom-20 h-[500px] w-[500px] rounded-full bg-[#00FF41]/[0.025] blur-[140px]" />

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

      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        {/* =========================================================
            HEADER
        ========================================================= */}

        <div className="mx-auto max-w-4xl text-center">
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
            <Terminal size={14} />
            Learning Roadmap
          </span>

          <h2
            className="
              mt-7
              font-serif
              text-4xl
              font-medium
              leading-[1.08]
              text-white
              sm:text-5xl
              lg:text-6xl
            "
          >
            From complete beginner
            <span className="block text-[#00FF41]">to confident learner.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-[#8A8A8A] sm:text-lg sm:leading-8">
            You don't need to know cybersecurity before you start. Follow a
            structured path that takes you from the fundamentals to practical
            ethical hacking concepts — one step at a time.
          </p>
        </div>

        {/* =========================================================
            VALUE STRIP
        ========================================================= */}

        <div className="mx-auto mt-12 grid max-w-4xl gap-3 sm:grid-cols-3">
          {[
            {
              icon: Zap,
              title: "Start From Zero",
              text: "No prior expertise required",
            },
            {
              icon: Laptop,
              title: "Learn Practically",
              text: "Tools + real demonstrations",
            },
            {
              icon: Network,
              title: "Know What's Next",
              text: "Clear path after the course",
            },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="
                  rounded-2xl
                  border
                  border-white/10
                  bg-[#0D0D0D]
                  p-5
                  text-center
                  transition
                  hover:border-[#00FF41]/25
                "
              >
                <Icon size={21} className="mx-auto text-[#00FF41]" />

                <h3 className="mt-3 text-sm font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-1 text-xs text-[#666]">{item.text}</p>
              </div>
            );
          })}
        </div>

        {/* =========================================================
            ROADMAP
        ========================================================= */}

        <div className="relative mt-20">
          {/* Desktop connecting line */}
          <div
            className="
              absolute
              bottom-0
              left-8
              top-0
              hidden
              w-px
              bg-gradient-to-b
              from-[#00FF41]/50
              via-[#00FF41]/20
              to-transparent
              md:block
            "
          />

          <div className="space-y-6 md:space-y-8">
            {roadmap.map((item, index) => {
              const Icon = item.icon;
              const moduleNumber = String(index + 1).padStart(2, "0");

              return (
                <div
                  key={item.title}
                  className="group relative flex gap-4 md:gap-8"
                >
                  {/* =================================================
                      NUMBER / ICON
                  ================================================= */}

                  <div className="relative z-10 shrink-0">
                    <div
                      className="
                        flex
                        h-16
                        w-16
                        items-center
                        justify-center
                        rounded-2xl
                        border
                        border-[#00FF41]/25
                        bg-[#0D0D0D]
                        shadow-[0_0_25px_rgba(0,255,65,0.04)]
                        transition-all
                        duration-300
                        group-hover:border-[#00FF41]/60
                        group-hover:bg-[#00FF41]/[0.06]
                        group-hover:shadow-[0_0_30px_rgba(0,255,65,0.10)]
                        sm:h-[72px]
                        sm:w-[72px]
                      "
                    >
                      <Icon
                        size={26}
                        className="
                          text-[#00FF41]
                          transition-transform
                          duration-300
                          group-hover:scale-110
                        "
                      />
                    </div>

                    {/* Module number */}
                    <span
                      className="
                        absolute
                        -bottom-2
                        -right-2
                        flex
                        h-6
                        min-w-6
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#00FF41]/30
                        bg-[#050505]
                        px-1.5
                        text-[10px]
                        font-bold
                        text-[#00FF41]
                      "
                    >
                      {moduleNumber}
                    </span>
                  </div>

                  {/* =================================================
                      CONTENT CARD
                  ================================================= */}

                  <div
                    className="
                      min-w-0
                      flex-1
                      rounded-2xl
                      border
                      border-white/10
                      bg-[#0D0D0D]
                      p-5
                      transition-all
                      duration-300
                      group-hover:-translate-y-1
                      group-hover:border-[#00FF41]/25
                      group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.25)]
                      sm:p-7
                    "
                  >
                    {/* Top row */}
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#00FF41] sm:text-xs">
                        Module {moduleNumber}
                      </span>

                      <span className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1 text-[10px] font-medium text-[#666]">
                        30-Day Masterclass
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="mt-4 font-serif text-2xl font-medium leading-tight text-white sm:text-3xl">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-sm font-medium text-[#00FF41]/80">
                      {item.shortTitle}
                    </p>

                    {/* Description */}
                    <p className="mt-4 max-w-3xl text-sm leading-7 text-[#777] sm:text-base sm:leading-8">
                      {item.description}
                    </p>

                    {/* Points */}
                    <div className="mt-6 grid gap-2 sm:grid-cols-3">
                      {item.points.map((point) => (
                        <div
                          key={point}
                          className="flex items-center gap-2 text-xs text-[#A3A3A3] sm:text-sm"
                        >
                          <CheckCircle2
                            size={15}
                            className="shrink-0 text-[#00FF41]"
                          />

                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* =========================================================
            COURSE VALUE / CTA
        ========================================================= */}

        <div
          className="
            relative
            mt-20
            overflow-hidden
            rounded-3xl
            border
            border-[#00FF41]/20
            bg-[#0D0D0D]
            p-8
            text-center
            sm:p-12
            lg:p-14
          "
        >
          {/* Glow */}
          <div className="pointer-events-none absolute left-1/2 top-0 h-48 w-96 -translate-x-1/2 rounded-full bg-[#00FF41]/[0.05] blur-[100px]" />

          <div className="relative z-10">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#00FF41]">
              <Zap size={14} />A structured path, not random tutorials
            </span>

            <h2
              className="
                mx-auto
                mt-5
                max-w-3xl
                font-serif
                text-3xl
                font-medium
                leading-tight
                text-white
                sm:text-4xl
                lg:text-5xl
              "
            >
              Know exactly what you're
              <span className="text-[#00FF41]"> learning and why.</span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#777] sm:text-base sm:leading-8">
              Stop jumping between random videos and wondering what to learn
              next. This masterclass gives you a structured foundation you can
              build on long after the 30 days are over.
            </p>

            {/* Value points */}
            <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3">
              {[
                "Structured curriculum",
                "Practical demonstrations",
                "100% Malayalam",
                "Lifetime access",
              ].map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-2 text-sm text-[#A3A3A3]"
                >
                  <CheckCircle2 size={15} className="text-[#00FF41]" />
                  {item}
                </span>
              ))}
            </div>

            {/* CTA */}
            <button
              onClick={onEnrollClick}
              type="button"
              className="
                group
                mt-10
                inline-flex
                items-center
                justify-center
                gap-3
                rounded-xl
                bg-[#00FF41]
                px-8
                py-4
                text-base
                font-bold
                text-[#050505]
                shadow-[0_0_25px_rgba(0,255,65,0.10)]
                transition-all
                duration-200
                hover:-translate-y-0.5
                hover:shadow-[0_0_40px_rgba(0,255,65,0.20)]
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-[#00FF41]
                focus-visible:ring-offset-2
                focus-visible:ring-offset-[#0D0D0D]
                sm:px-10
                sm:py-5
                sm:text-lg
              "
            >
              Get Instant Access
              <ArrowRight
                size={20}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </button>

            <p className="mt-4 text-xs text-[#555]">
              Start from zero • Learn at your own pace • Lifetime access
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
