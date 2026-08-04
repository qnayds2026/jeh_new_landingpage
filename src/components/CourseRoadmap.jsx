import {
  Network,
  Laptop,
  Search,
  Shield,
  Globe,
  Lock,
  ArrowRight,
  Star,
  ShieldCheck,
} from "lucide-react";

const roadmap = [
  {
    title: "Cyber Security Fundamentals",
    icon: Shield,
    description:
      "Understand cyber security, ethical hacking, networking and Linux from scratch.",
  },
  {
    title: "Reconnaissance & Scanning",
    icon: Search,
    description:
      "Learn how professionals gather information and identify vulnerabilities.",
  },
  {
    title: "Web Application Security",
    icon: Globe,
    description:
      "Explore common web vulnerabilities and understand how attackers think.",
  },
  {
    title: "Practical Hacking Tools",
    icon: Laptop,
    description:
      "Hands-on exposure to Kali Linux, Burp Suite, Wireshark, Nmap and more.",
  },
  {
    title: "System Security",
    icon: Lock,
    description:
      "Learn authentication, privilege concepts, malware basics and system protection.",
  },
  {
    title: "Career Roadmap",
    icon: Network,
    description:
      "Build confidence with a clear roadmap for continuing your cyber security journey.",
  },
];

export default function CourseRoadmap({ onEnrollClick }) {
  return (
    <section className="relative overflow-hidden bg-[#0A0B0A] py-28">
      <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[#3FA66E]/8 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex -rotate-1 items-center bg-[#3FA66E] px-4 py-1.5 text-sm font-bold uppercase tracking-wide text-[#0A0B0A] shadow-[3px_3px_0_rgba(234,237,234,0.15)]">
            Learning Roadmap
          </span>
          <h2 className="mt-6 font-serif text-4xl font-medium text-[#EAEDEA] md:text-5xl">
            Your journey into{" "}
            <span className="text-[#3FA66E]">cyber security</span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-[#A3A9A3]">
            Step-by-step structured learning designed for complete beginners.
          </p>
        </div>

        <div className="relative mt-24">
          <svg
            className="absolute left-8 top-0 h-full w-4 -translate-x-1/2"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M 8 0 C 2 100, 14 200, 8 300 S 2 500, 8 600 S 14 800, 8 900 S 2 1100, 8 1200"
              fill="none"
              stroke="#3FA66E"
              strokeOpacity="0.25"
              strokeWidth="2"
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          <div className="space-y-12">
            {roadmap.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="relative flex gap-8">
                  <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-[#3FA66E]/30 bg-[#121412]">
                    <Icon size={26} className="text-[#3FA66E]" />
                  </div>
                  <div className="flex-1 rounded-2xl border border-[#EAEDEA]/10 bg-[#121412] p-8 transition-colors duration-300 hover:border-[#3FA66E]/30">
                    <span className="text-sm font-semibold uppercase tracking-widest text-[#3FA66E]">
                      Module {index + 1}
                    </span>
                    <h3 className="mt-3 font-serif text-2xl font-medium text-[#EAEDEA]">
                      {item.title}
                    </h3>
                    <p className="mt-4 leading-8 text-[#A3A9A3]">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative mt-24 overflow-hidden rounded-2xl border border-[#EAEDEA]/10 bg-[#121412] p-10 text-center lg:p-14">
          <div className="absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-[#3FA66E]/10 blur-[110px]" />

          <div className="relative z-10">
            <span className="inline-flex rotate-1 items-center bg-[#3FA66E] px-4 py-1.5 text-sm font-bold uppercase tracking-wide text-[#0A0B0A] shadow-[3px_3px_0_rgba(234,237,234,0.15)]">
              Start Today
            </span>

            <h2 className="mx-auto mt-8 max-w-2xl font-serif text-4xl font-medium leading-tight text-[#EAEDEA] md:text-5xl">
              Ready to start your{" "}
              <span className="text-[#3FA66E]">cyber security journey?</span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#A3A9A3]">
              Join thousands of students learning ethical hacking through
              structured Malayalam lessons, practical demonstrations and
              lifetime access.
            </p>

            <button
              onClick={onEnrollClick}
              type="button"
              className="group mt-10 inline-flex items-center gap-3 rounded-xl bg-[#3FA66E] px-10 py-5 text-lg font-bold text-[#0A0B0A] shadow-[4px_4px_0_rgba(234,237,234,0.15)] transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3FA66E] focus-visible:ring-offset-2 focus-visible:ring-offset-[#121412]"
            >
              Get Instant Access
              <ArrowRight
                size={20}
                className="transition group-hover:translate-x-1"
              />
            </button>

            <div className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-[#A3A9A3]">
              <span className="inline-flex items-center gap-1.5">
                <Star size={14} className="fill-[#3FA66E] text-[#3FA66E]" />
                4.6 Google Rating
              </span>
              <span aria-hidden="true">·</span>
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck size={14} />
                10,000+ students
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
