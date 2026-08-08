import { useState } from "react";
import { Plus, Minus, MessageCircle, ShieldCheck } from "lucide-react";

const faqs = [
  {
    question: "Do I need any prior knowledge to join this course?",
    answer:
      "No. This course is designed for complete beginners. You can start from zero and gradually learn the fundamentals of cyber security and ethical hacking in a structured way.",
  },
  {
    question: "Is the entire course taught in Malayalam?",
    answer:
      "Yes. The main explanations are in Malayalam, making difficult cyber security concepts easier to understand. Important technical terms are also introduced in English so you become familiar with industry terminology.",
  },
  {
    question: "Are the classes live or recorded?",
    answer:
      "The masterclass is completely recorded. You can learn at your own pace, pause lessons, replay difficult topics and continue whenever it is convenient for you.",
  },
  {
    question: "How much time should I spend learning every day?",
    answer:
      "You don't need to spend your entire day learning. Following the 30-day roadmap consistently and giving dedicated time each day is enough to build a strong foundation.",
  },
  {
    question: "What tools will I learn?",
    answer:
      "You'll get practical exposure to beginner-friendly cyber security tools including Kali Linux, Nmap, Wireshark, Burp Suite and other commonly used tools.",
  },
  {
    question: "What should I do after completing the course?",
    answer:
      "After completing the masterclass, you'll have a clearer understanding of cyber security fundamentals and the next steps you can take to continue learning ethical hacking, penetration testing and other security domains.",
  },
  {
    question: "What laptop or system do I need?",
    answer:
      "A basic modern laptop is enough to get started. For practical labs and security tools, having reasonable RAM and storage will provide a smoother learning experience.",
  },
  {
    question: "Will I get support if I have doubts?",
    answer:
      "Yes. You'll have access to WhatsApp community support where you can ask questions, discuss your learning and stay connected with other learners.",
  },
  {
    question: "How do I access the course after payment?",
    answer:
      "After your payment is successfully confirmed, you'll receive the required course access instructions. You can then start learning immediately.",
  },
];

export default function FAQ() {
  const [active, setActive] = useState(0);

  const toggle = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="relative overflow-hidden bg-[#050505] py-24 sm:py-28">
      {/* Background glow */}
      <div className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-[#00FF41]/[0.035] blur-[140px]" />

      <div className="pointer-events-none absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-[#00FF41]/[0.025] blur-[130px]" />

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

      <div className="relative z-10 mx-auto max-w-5xl px-5 sm:px-6">
        {/* ================= HEADER ================= */}

        <div className="mx-auto max-w-3xl text-center">
          <span
            className="
              inline-flex
              items-center
              rounded-full
              border border-[#00FF41]/25
              bg-[#00FF41]/[0.06]
              px-4 py-2
              text-xs
              font-bold
              uppercase
              tracking-[0.16em]
              text-[#00FF41]
            "
          >
            Frequently Asked Questions
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
            Still have <span className="text-[#00FF41]">questions?</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#777] sm:text-lg">
            Everything you need to know before starting your ethical hacking
            journey with QNAYDS.
          </p>
        </div>

        {/* ================= FAQ LIST ================= */}

        <div className="mt-14 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = active === index;

            return (
              <div
                key={index}
                className={`
                  overflow-hidden
                  rounded-2xl
                  border
                  transition-all
                  duration-300
                  ${
                    isOpen
                      ? "border-[#00FF41]/30 bg-[#0B0F0B] shadow-[0_10px_40px_rgba(0,255,65,0.05)]"
                      : "border-white/[0.08] bg-[#0A0A0A] hover:border-[#00FF41]/15"
                  }
                `}
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  className="
                    flex
                    w-full
                    items-center
                    justify-between
                    gap-5
                    px-5
                    py-5
                    text-left
                    sm:px-7
                    sm:py-6
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-[#00FF41]
                  "
                >
                  <div className="flex items-start gap-4">
                    {/* Number */}
                    <span
                      className={`
                        hidden
                        pt-1
                        text-xs
                        font-bold
                        tracking-widest
                        sm:block
                        ${isOpen ? "text-[#00FF41]" : "text-[#444]"}
                      `}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3
                    className={`
                      flex-1
                      text-base
                      font-semibold
                      leading-7
                      transition-colors
                      sm:text-lg
                      ${isOpen ? "text-white" : "text-[#D4D4D4]"}
                    `}
                  >
                    {faq.question}
                  </h3>

                  <div
                    className={`
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      transition-all
                      duration-300
                      ${
                        isOpen
                          ? "border-[#00FF41]/40 bg-[#00FF41]/10"
                          : "border-white/10 bg-white/[0.025]"
                      }
                    `}
                  >
                    {isOpen ? (
                      <Minus size={17} className="text-[#00FF41]" />
                    ) : (
                      <Plus size={17} className="text-[#888]" />
                    )}
                  </div>
                </button>

                {/* Answer */}
                <div
                  className={`
                    grid
                    transition-all
                    duration-500
                    ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}
                  `}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-white/[0.06] px-5 pb-6 pt-5 sm:px-7 sm:pb-7 sm:pt-5">
                      <div className="flex gap-4">
                        <div className="hidden w-6 shrink-0 sm:block" />

                        <p className="max-w-3xl text-sm leading-7 text-[#858585] sm:text-base">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ================= SUPPORT CTA ================= */}

        <div
          className="
            relative
            mt-14
            overflow-hidden
            rounded-2xl
            border
            border-[#00FF41]/15
            bg-[#0A0D0A]
            px-6
            py-8
            text-center
            sm:px-10
            sm:py-10
          "
        >
          <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#00FF41]/[0.06] blur-[70px]" />

          <div className="relative z-10">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-[#00FF41]/20 bg-[#00FF41]/10">
              <ShieldCheck size={23} className="text-[#00FF41]" />
            </div>

            <h3 className="mt-5 font-serif text-2xl text-white sm:text-3xl">
              Still not sure if this is for you?
            </h3>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-[#777] sm:text-base">
              Talk to our team and get your questions answered before you
              enroll.
            </p>

            <a
              href="https://wa.me/+919074871204"
              target="_blank"
              rel="noopener noreferrer"
              className="
                mt-6
                inline-flex
                items-center
                gap-2
                rounded-xl
                bg-[#00FF41]
                px-7
                py-3.5
                text-sm
                font-bold
                text-black
                shadow-[0_0_25px_rgba(0,255,65,0.12)]
                transition-all
                duration-200
                hover:-translate-y-0.5
                hover:shadow-[0_0_35px_rgba(0,255,65,0.2)]
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-[#00FF41]
                focus-visible:ring-offset-2
                focus-visible:ring-offset-[#050505]
              "
            >
              <MessageCircle size={18} />
              Chat With Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
