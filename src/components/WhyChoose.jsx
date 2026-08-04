import {
  MonitorPlay,
  Globe,
  MessageCircle,
  Infinity,
  BookOpen,
  Award,
} from "lucide-react";

const features = [
  {
    icon: MonitorPlay,
    title: "30-Day Recorded Course",
    description:
      "Learn anytime at your own pace with structured lessons designed for beginners.",
  },
  {
    icon: Globe,
    title: "100% Malayalam",
    description:
      "Complex cyber security concepts explained in simple Malayalam.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Support",
    description:
      "Get your doubts cleared and stay connected with our learning community.",
  },
  {
    icon: Infinity,
    title: "Lifetime Access",
    description:
      "Rewatch lessons anytime and continue learning whenever you need.",
  },
  {
    icon: BookOpen,
    title: "Hands-on Learning",
    description:
      "Understand cyber security using practical demonstrations instead of only theory.",
  },
  {
    icon: Award,
    title: "Trusted by 10,000+ Students",
    description:
      "Thousands of students across Kerala have started their cyber security journey with us.",
  },
];

export default function WhyChoose() {
  return (
    <section className="relative overflow-hidden bg-[#0E0F0E] py-24">
      <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-[#3FA66E]/8 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rotate-1 items-center bg-[#3FA66E] px-4 py-1.5 text-sm font-bold uppercase tracking-wide text-[#0A0B0A] shadow-[3px_3px_0_rgba(234,237,234,0.15)]">
            Why Choose QNAYDS
          </span>

          <h2 className="mt-6 font-serif text-4xl font-medium leading-tight text-[#EAEDEA] md:text-5xl">
            Everything you need to start your{" "}
            <span className="text-[#3FA66E]">cyber security journey</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-[#A3A9A3]">
            This isn't just another online course. It's a structured learning
            experience designed to help complete beginners confidently enter the
            world of ethical hacking and cyber security.
          </p>
        </div>

        <div className="mt-20 grid gap-x-12 gap-y-10 md:grid-cols-2">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex gap-5 border-b border-[#EAEDEA]/10 pb-8 last:border-0 md:[&:nth-last-child(-n+2)]:border-0"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#3FA66E]/25 bg-[#3FA66E]/10">
                  <Icon size={22} className="text-[#3FA66E]" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-medium text-[#EAEDEA]">
                    {item.title}
                  </h3>
                  <p className="mt-2 leading-7 text-[#A3A9A3]">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
