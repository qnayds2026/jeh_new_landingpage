import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Do I need any prior knowledge to join this masterclass?",
    answer:
      "No. This masterclass is designed for complete beginners. You'll start with the fundamentals and gradually progress to practical ethical hacking concepts.",
  },
  {
    question: "Is this course completely in Malayalam?",
    answer:
      "Yes. The lessons are taught in Malayalam to make cyber security concepts easy to understand while introducing important technical terms in English.",
  },
  {
    question: "Will I get lifetime access?",
    answer:
      "Yes. Once you enroll, you'll have lifetime access to all recorded lessons, allowing you to learn at your own pace.",
  },
  {
    question: "Will I get support if I have doubts?",
    answer:
      "Yes. You'll get access to our WhatsApp community where you can ask questions and receive guidance during your learning journey.",
  },
  {
    question: "What tools will I learn?",
    answer:
      "You'll be introduced to tools such as Kali Linux, Nmap, Wireshark, Burp Suite and other beginner-friendly cyber security tools through practical demonstrations.",
  },
  {
    question: "How do I access the course after payment?",
    answer:
      "Once your payment is confirmed, you'll receive instructions to access the course and can begin learning immediately.",
  },
];

export default function FAQ() {
  const [active, setActive] = useState(0);
  const toggle = (index) => setActive(active === index ? null : index);

  return (
    <section className="relative overflow-hidden bg-[#0A0B0A] py-28">
      <div className="absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-[#3FA66E]/8 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <div className="text-center">
          <span className="inline-flex -rotate-1 items-center bg-[#3FA66E] px-4 py-1.5 text-sm font-bold uppercase tracking-wide text-[#0A0B0A] shadow-[3px_3px_0_rgba(234,237,234,0.15)]">
            Frequently Asked Questions
          </span>

          <h2 className="mt-8 font-serif text-4xl font-medium leading-tight text-[#EAEDEA] md:text-5xl">
            Have questions?
            <span className="block text-[#3FA66E]">We've got answers.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#A3A9A3]">
            Everything you need to know before joining the 30-day ethical
            hacking masterclass.
          </p>
        </div>

        <div className="mt-16 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = active === index;
            return (
              <div
                key={index}
                className={`overflow-hidden rounded-2xl border transition-colors duration-300 ${
                  isOpen
                    ? "border-[#3FA66E]/30 bg-[#161612]"
                    : "border-[#EAEDEA]/10 bg-[#121412]"
                }`}
              >
                <button
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between px-7 py-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3FA66E] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0B0A]"
                >
                  <h3 className="pr-6 text-lg font-medium text-[#EAEDEA]">
                    {faq.question}
                  </h3>
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#3FA66E]/25 bg-[#3FA66E]/10">
                    {isOpen ? (
                      <Minus className="text-[#3FA66E]" size={18} />
                    ) : (
                      <Plus className="text-[#3FA66E]" size={18} />
                    )}
                  </div>
                </button>

                <div
                  className={`grid transition-all duration-500 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                >
                  <div className="overflow-hidden">
                    <p className="px-7 pb-7 leading-7 text-[#A3A9A3]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <p className="text-[#A3A9A3]">
            Still have questions?{" "}
            <a
              href="https://wa.me/YOUR_NUMBER"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 font-semibold text-[#3FA66E] underline decoration-[#3FA66E]/30 underline-offset-4 transition-colors hover:decoration-[#3FA66E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3FA66E] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0B0A]"
            >
              Contact us on WhatsApp →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
