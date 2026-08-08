import {
  Shield,
  Wifi,
  UserX,
  MailWarning,
  Smartphone,
  Camera,
  Bluetooth,
  Cpu,
  CheckCircle2,
  XCircle,
  GraduationCap,
  Briefcase,
  Code2,
  BookOpen,
} from "lucide-react";

const topics = [
  {
    title: "Ethical Hacking Fundamentals",
    icon: Shield,
  },
  {
    title: "Wi-Fi Security Concepts",
    icon: Wifi,
  },
  {
    title: "Social Engineering",
    icon: UserX,
  },
  {
    title: "Phishing & Online Threats",
    icon: MailWarning,
  },
  {
    title: "Smartphone Security",
    icon: Smartphone,
  },
  {
    title: "Camera & CCTV Security",
    icon: Camera,
  },
  {
    title: "Bluetooth Security",
    icon: Bluetooth,
  },
  {
    title: "AI in Cybersecurity",
    icon: Cpu,
  },
];

const courseFor = [
  {
    icon: GraduationCap,
    text: "College, Degree & Engineering Students",
  },
  {
    icon: Briefcase,
    text: "Working Professionals & Job Seekers",
  },
  {
    icon: Shield,
    text: "Beginners interested in Cybersecurity",
  },
  {
    icon: BookOpen,
    text: "Anyone who wants to learn in Malayalam",
  },
];

const notFor = [
  "You are looking for advanced penetration testing.",
  "You are expecting illegal hacking methods.",
  "You are unwilling to practice what you learn.",
  "You expect to become an expert without building fundamentals.",
];

export default function WhatYouWillMaster() {
  return (
    <section className="relative overflow-hidden bg-[#050505] py-24 sm:py-28">
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-[#00FF41]/[0.035] blur-[140px]" />

      <div className="pointer-events-none absolute -left-40 bottom-0 h-[450px] w-[450px] rounded-full bg-[#00FF41]/[0.025] blur-[140px]" />

      {/* Subtle cyber grid */}
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
            SECTION HEADING
        ========================================================= */}

        <div className="mx-auto max-w-3xl text-center">
          <span
            className="
              inline-flex
              items-center
              rounded-full
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
            Inside The Masterclass
          </span>

          <h2
            className="
              mt-6
              font-serif
              text-4xl
              font-medium
              leading-tight
              text-white
              sm:text-5xl
              lg:text-6xl
            "
          >
            What You Will{" "}
            <span className="text-[#00FF41]">Master</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#777] sm:text-lg">
            Learn the core concepts, tools and security techniques that give
            you a strong foundation in ethical hacking and cybersecurity.
          </p>
        </div>

        {/* =========================================================
            TOPICS GRID
        ========================================================= */}

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {topics.map((topic, index) => {
            const Icon = topic.icon;

            return (
              <div
                key={topic.title}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-2xl
                  border
                  border-white/10
                  bg-[#0D0D0D]
                  px-5
                  py-7
                  text-center
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#00FF41]/35
                  hover:bg-[#0F110F]
                  hover:shadow-[0_15px_40px_rgba(0,255,65,0.06)]
                "
              >
                {/* Number */}
                <span
                  className="
                    absolute
                    right-4
                    top-3
                    text-[10px]
                    font-bold
                    tracking-widest
                    text-white/[0.08]
                  "
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Icon */}
                <div
                  className="
                    mx-auto
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#00FF41]/20
                    bg-[#00FF41]/[0.06]
                    transition-all
                    duration-300
                    group-hover:border-[#00FF41]/50
                    group-hover:bg-[#00FF41]/[0.10]
                    group-hover:shadow-[0_0_25px_rgba(0,255,65,0.12)]
                  "
                >
                  <Icon
                    size={24}
                    className="
                      text-[#00FF41]
                      transition-transform
                      duration-300
                      group-hover:scale-110
                    "
                  />
                </div>

                {/* Title */}
                <h3 className="mt-5 text-sm font-semibold leading-6 text-white sm:text-base">
                  {topic.title}
                </h3>

                {/* Bottom indicator */}
                <div className="mx-auto mt-5 h-px w-8 bg-[#00FF41]/30 transition-all duration-300 group-hover:w-14 group-hover:bg-[#00FF41]" />
              </div>
            );
          })}
        </div>

        {/* =========================================================
            WHO THIS COURSE IS FOR
        ========================================================= */}

        <div className="mt-20 grid gap-6 lg:grid-cols-2">

          {/* FOR YOU */}
          <div
            className="
              relative
              overflow-hidden
              rounded-3xl
              border
              border-[#00FF41]/20
              bg-[#0D0D0D]
              p-7
              sm:p-9
            "
          >
            {/* Glow */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#00FF41]/[0.06] blur-[80px]" />

            <div className="relative z-10">

              {/* Header */}
              <div className="flex items-center gap-4">
                <div
                  className="
                    flex
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-[#00FF41]/25
                    bg-[#00FF41]/[0.07]
                  "
                >
                  <CheckCircle2
                    size={25}
                    className="text-[#00FF41]"
                  />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-[#00FF41]">
                    Perfect For
                  </p>

                  <h3 className="mt-1 font-serif text-2xl font-medium text-white sm:text-3xl">
                    Who Is This Course For?
                  </h3>
                </div>
              </div>

              {/* List */}
              <div className="mt-8 space-y-5">
                {courseFor.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.text}
                      className="flex items-start gap-4"
                    >
                      <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#00FF41]/[0.07]">
                        <Icon
                          size={15}
                          className="text-[#00FF41]"
                        />
                      </div>

                      <span className="text-sm leading-6 text-[#B5B5B5] sm:text-base">
                        {item.text}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Bottom message */}
              <div
                className="
                  mt-8
                  rounded-xl
                  border
                  border-[#00FF41]/10
                  bg-[#00FF41]/[0.035]
                  p-4
                "
              >
                <p className="text-sm leading-6 text-[#777]">
                  <span className="font-semibold text-[#00FF41]">
                    No prior experience required.
                  </span>{" "}
                  If you're serious about understanding cybersecurity from the
                  ground up, this course is designed for you.
                </p>
              </div>
            </div>
          </div>

          {/* NOT FOR YOU */}
          <div
            className="
              relative
              overflow-hidden
              rounded-3xl
              border
              border-red-500/15
              bg-[#0D0D0D]
              p-7
              sm:p-9
            "
          >
            {/* Subtle red glow */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-red-500/[0.025] blur-[80px]" />

            <div className="relative z-10">

              {/* Header */}
              <div className="flex items-center gap-4">
                <div
                  className="
                    flex
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-red-500/20
                    bg-red-500/[0.05]
                  "
                >
                  <XCircle
                    size={25}
                    className="text-red-400"
                  />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-red-400">
                    Important
                  </p>

                  <h3 className="mt-1 font-serif text-2xl font-medium text-white sm:text-3xl">
                    This Course Is Not For You If...
                  </h3>
                </div>
              </div>

              {/* List */}
              <div className="mt-8 space-y-5">
                {notFor.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-4"
                  >
                    <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center">
                      <XCircle
                        size={17}
                        className="text-red-400"
                      />
                    </div>

                    <span className="text-sm leading-6 text-[#B5B5B5] sm:text-base">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Bottom message */}
              <div
                className="
                  mt-8
                  rounded-xl
                  border
                  border-white/10
                  bg-white/[0.02]
                  p-4
                "
              >
                <p className="text-sm leading-6 text-[#666]">
                  This masterclass focuses on{" "}
                  <span className="font-semibold text-white">
                    ethical, legal and foundational cybersecurity education.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================
            VALUE STATEMENT
        ========================================================= */}

        <div className="mt-16 text-center">
          <p className="mx-auto max-w-2xl text-sm leading-7 text-[#666] sm:text-base">
            <span className="text-white">
              Don't just collect tutorials.
            </span>{" "}
            Build a proper foundation, understand how security works and know
            what to learn next.
          </p>
        </div>
      </div>
    </section>
  );
}