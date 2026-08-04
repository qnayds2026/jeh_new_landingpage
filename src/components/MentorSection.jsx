import {
  Users,
  GraduationCap,
  ShieldCheck,
  Award,
  Star,
  CheckCircle2,
} from "lucide-react";
import Adil_Sir from "../assets/Adil_sir.webp";

export default function MentorSection() {
  return (
    <section className="relative overflow-hidden bg-[#0A0B0A] py-28">
      <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-[#3FA66E]/8 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* LEFT */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl border border-[#EAEDEA]/10">
              <img
                src={Adil_Sir}
                alt="Adil Ameen"
                className="w-full object-cover"
              />
            </div>

            <div className="absolute -bottom-6 left-6 -rotate-1 rounded-xl border border-[#EAEDEA]/10 bg-[#121412] p-5 shadow-[5px_5px_0_rgba(63,166,110,0.25)]">
              <div className="flex items-center gap-3">
                <Star className="fill-[#3FA66E] text-[#3FA66E]" />
                <div>
                  <h4 className="font-serif text-lg font-medium text-[#EAEDEA]">
                    4.6 Google Rating
                  </h4>
                  <p className="text-sm text-[#A3A9A3]">Trusted by thousands</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div>
            <span className="inline-flex rotate-1 items-center bg-[#3FA66E] px-4 py-1.5 text-sm font-bold uppercase tracking-wide text-[#0A0B0A] shadow-[3px_3px_0_rgba(234,237,234,0.15)]">
              Meet Your Mentor
            </span>

            <h2 className="mt-6 font-serif text-4xl font-medium text-[#EAEDEA] md:text-5xl">
              Learn from <span className="text-[#3FA66E]">Adil Sir</span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#A3A9A3]">
              Adil Sir has helped thousands of students begin their ethical
              hacking journey through practical teaching, structured learning,
              and beginner-friendly explanations in Malayalam.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-[#EAEDEA]/10 p-6">
                <Users className="text-[#3FA66E]" size={22} />
                <h3 className="mt-4 font-serif text-3xl font-medium text-[#EAEDEA]">
                  10,000+
                </h3>
                <p className="text-[#A3A9A3]">Students</p>
              </div>
              <div className="rounded-xl border border-[#EAEDEA]/10 p-6">
                <GraduationCap className="text-[#3FA66E]" size={22} />
                <h3 className="mt-4 font-serif text-3xl font-medium text-[#EAEDEA]">
                  100+
                </h3>
                <p className="text-[#A3A9A3]">Video Lessons</p>
              </div>
              <div className="rounded-xl border border-[#EAEDEA]/10 p-6">
                <ShieldCheck className="text-[#3FA66E]" size={22} />
                <h3 className="mt-4 font-serif text-3xl font-medium text-[#EAEDEA]">
                  Beginner
                </h3>
                <p className="text-[#A3A9A3]">Friendly</p>
              </div>
              <div className="rounded-xl border border-[#EAEDEA]/10 p-6">
                <Award className="text-[#3FA66E]" size={22} />
                <h3 className="mt-4 font-serif text-3xl font-medium text-[#EAEDEA]">
                  Trusted
                </h3>
                <p className="text-[#A3A9A3]">Mentor</p>
              </div>
            </div>

            <div className="mt-10 space-y-4">
              {[
                "Practical teaching approach",
                "Structured learning roadmap",
                "100% Malayalam explanations",
                "Lifetime learning support",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="text-[#3FA66E]" size={20} />
                  <span className="text-[#EAEDEA]/80">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
