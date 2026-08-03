import { ShieldCheck, Terminal, Rocket, ArrowRight } from "lucide-react";

const cards = [
  {
    id: "01",
    tag: "Foundation",
    title: "Think Like An Ethical Hacker",
    description:
      "Understand how hackers identify vulnerabilities, how cyber attacks happen, and how security professionals secure systems using real-world techniques.",
    icon: ShieldCheck,
    points: ["Beginner Friendly", "No Coding Required", "Real World Examples"],
  },
  {
    id: "02",
    tag: "Practical",
    title: "Learn Industry Tools",
    description:
      "Get hands-on exposure to professional cyber security tools used by ethical hackers through structured demonstrations and guided practice.",
    icon: Terminal,
    points: ["Kali Linux", "Burp Suite & Nmap", "Practical Demonstrations"],
  },
  {
    id: "03",
    tag: "Career",
    title: "Build Your Cyber Security Foundation",
    description:
      "Follow a structured roadmap that helps you confidently continue your cyber security journey with strong fundamentals and practical knowledge.",
    icon: Rocket,
    points: ["Career Roadmap", "100% Malayalam", "Lifetime Access"],
  },
];

export default function LearnSection({onEnrollClick,}) {
  return (
    <section className="relative overflow-hidden bg-[#0A0908] py-24">
      {/* Single off-center glow, matching the hero background instead of
          a symmetric centered blob */}
      <div className="absolute -right-32 top-0 h-[500px] w-[500px] rounded-full bg-[#FFB627]/10 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex -rotate-1 items-center bg-[#FFB627] px-4 py-1.5 text-sm font-bold uppercase tracking-wide text-[#0A0908] shadow-[3px_3px_0_rgba(237,234,227,0.15)]">
            What You'll Learn
          </span>

          <h2 className="mt-6 font-serif text-4xl font-medium leading-tight text-[#EDEAE3] md:text-5xl">
            What you'll learn in this{" "}
            <span className="text-[#FFB627]">30-day ethical hacking</span>{" "}
            masterclass
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#A8A29B]">
            Whether you're a student, job seeker, or working professional, this
            masterclass gives you the practical skills, mindset, and roadmap
            needed to confidently begin your cyber security journey.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                className="group relative overflow-hidden rounded-2xl border border-[#EDEAE3]/10 bg-[#12100D] p-8 transition-transform duration-300 hover:-translate-y-1.5"
              >
                {/* Number — kept from the original, it was a good touch;
                    just recolored to sit quietly in the corner */}
                <div className="absolute right-6 top-6 font-serif text-6xl text-[#EDEAE3]/5">
                  {card.id}
                </div>

                <span className="text-xs font-bold uppercase tracking-widest text-[#FFB627]">
                  {card.tag}
                </span>

                {/* Icon — flat, single-color, no gradient tile */}
                <div className="mt-6 flex h-14 w-14 items-center justify-center rounded-xl border border-[#FFB627]/25 bg-[#FFB627]/10">
                  <Icon size={26} className="text-[#FFB627]" />
                </div>

                <h3 className="mt-7 font-serif text-2xl font-medium leading-snug text-[#EDEAE3]">
                  {card.title}
                </h3>

                <p className="mt-4 leading-7 text-[#A8A29B]">
                  {card.description}
                </p>

                <div className="mt-7 space-y-3 border-t border-[#EDEAE3]/10 pt-6">
                  {card.points.map((point) => (
                    <div key={point} className="flex items-center gap-3">
                      <div className="h-1.5 w-1.5 rounded-full bg-[#FFB627]" />
                      <span className="text-sm text-[#EDEAE3]/80">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <button  
          onClick={onEnrollClick}       
            type="button"
            className="group inline-flex items-center gap-3 rounded-xl bg-[#FFB627] px-10 py-5 text-lg font-bold text-[#0A0908] shadow-[4px_4px_0_rgba(237,234,227,0.15)] transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB627] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0908]"
          >
            Start Learning Today
            <ArrowRight
              size={20}
              className="transition group-hover:translate-x-1"
            />
          </button>
        </div>
      </div>
    </section>
  );
}
