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
    <section className="relative overflow-hidden bg-[#0A0908] py-28">
      <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-[#FFB627]/8 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* LEFT */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl border border-[#EDEAE3]/10">
              <img
                src={Adil_Sir}
                alt="Adil Ameen"
                className="w-full object-cover"
              />
            </div>

            {/* Floating card — hard offset shadow, matching the hero badge
                and CTA buttons, instead of a blurred glass card */}
            <div className="absolute -bottom-6 left-6 -rotate-1 rounded-xl border border-[#EDEAE3]/10 bg-[#12100D] p-5 shadow-[5px_5px_0_rgba(255,182,39,0.25)]">
              <div className="flex items-center gap-3">
                <Star className="fill-[#FFB627] text-[#FFB627]" />
                <div>
                  <h4 className="font-serif text-lg font-medium text-[#EDEAE3]">
                    4.6 Google Rating
                  </h4>
                  <p className="text-sm text-[#A8A29B]">Trusted by thousands</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div>
            <span className="inline-flex rotate-1 items-center bg-[#FFB627] px-4 py-1.5 text-sm font-bold uppercase tracking-wide text-[#0A0908] shadow-[3px_3px_0_rgba(237,234,227,0.15)]">
              Meet Your Mentor
            </span>

            <h2 className="mt-6 font-serif text-4xl font-medium text-[#EDEAE3] md:text-5xl">
              Learn from <span className="text-[#FFB627]">Adil Sir</span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#A8A29B]">
              Adil Sir has helped thousands of students begin their ethical
              hacking journey through practical teaching, structured learning,
              and beginner-friendly explanations in Malayalam.
            </p>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-[#EDEAE3]/10 p-6">
                <Users className="text-[#FFB627]" size={22} />
                <h3 className="mt-4 font-serif text-3xl font-medium text-[#EDEAE3]">
                  10,000+
                </h3>
                <p className="text-[#A8A29B]">Students</p>
              </div>
              <div className="rounded-xl border border-[#EDEAE3]/10 p-6">
                <GraduationCap className="text-[#FFB627]" size={22} />
                <h3 className="mt-4 font-serif text-3xl font-medium text-[#EDEAE3]">
                  100+
                </h3>
                <p className="text-[#A8A29B]">Video Lessons</p>
              </div>
              <div className="rounded-xl border border-[#EDEAE3]/10 p-6">
                <ShieldCheck className="text-[#FFB627]" size={22} />
                <h3 className="mt-4 font-serif text-3xl font-medium text-[#EDEAE3]">
                  Beginner
                </h3>
                <p className="text-[#A8A29B]">Friendly</p>
              </div>
              <div className="rounded-xl border border-[#EDEAE3]/10 p-6">
                <Award className="text-[#FFB627]" size={22} />
                <h3 className="mt-4 font-serif text-3xl font-medium text-[#EDEAE3]">
                  Trusted
                </h3>
                <p className="text-[#A8A29B]">Mentor</p>
              </div>
            </div>

            {/* Why learn */}
            <div className="mt-10 space-y-4">
              {[
                "Practical teaching approach",
                "Structured learning roadmap",
                "100% Malayalam explanations",
                "Lifetime learning support",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="text-[#FFB627]" size={20} />
                  <span className="text-[#EDEAE3]/80">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
