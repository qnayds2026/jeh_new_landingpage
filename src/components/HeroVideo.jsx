import { Star, GraduationCap, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function HeroVideo() {
  return (
    <div>
      {/* Top info */}
      <div className="mb-5">
        <p className="text-sm font-semibold uppercase tracking-widest text-[#FFB627]">
          Meet your mentor
        </p>
        <h3 className="mt-1 font-serif text-3xl font-medium">Alan Sir</h3>
        <p className="mt-2 text-[#A8A29B]">
          Cyber Security Trainer • Ethical Hacker • Mentor
        </p>
      </div>

      {/* Video */}
      <div className="overflow-hidden rounded-2xl border border-[#EDEAE3]/10 bg-[#12100D]">
        {/* Simple label bar instead of fake window-chrome/REC dot —
            honest about what it is: a preview clip, not a live feed */}
        <div className="flex items-center justify-between border-b border-[#EDEAE3]/10 px-4 py-2.5 text-xs text-[#A8A29B]">
          <span>Course preview</span>
          <span>2:14</span>
        </div>

        <div className="aspect-video">
          <iframe
            className="h-full w-full"
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
            title="JEH Masterclass"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>

      {/* Mentor credentials — single amber accent instead of three
          different neon colors per card */}
      <div className="mt-6 grid grid-cols-3 gap-4">
        <div className="rounded-xl border border-[#EDEAE3]/10 p-4 text-center">
          <GraduationCap className="mx-auto text-[#FFB627]" size={20} />
          <h4 className="mt-2 font-serif text-lg">8+ Yrs</h4>
          <p className="text-xs text-[#A8A29B]">Experience</p>
        </div>
        <div className="rounded-xl border border-[#EDEAE3]/10 p-4 text-center">
          <ShieldCheck className="mx-auto text-[#FFB627]" size={20} />
          <h4 className="mt-2 font-serif text-lg">50+</h4>
          <p className="text-xs text-[#A8A29B]">Tools Covered</p>
        </div>
        <div className="rounded-xl border border-[#EDEAE3]/10 p-4 text-center">
          <Star className="mx-auto fill-[#FFB627] text-[#FFB627]" size={20} />
          <h4 className="mt-2 font-serif text-lg">4.6/5</h4>
          <p className="text-xs text-[#A8A29B]">Mentor Rating</p>
        </div>
      </div>

      {/* Info box — plain checklist, no monospace/log-line motif */}
      <div className="mt-6 rounded-xl border border-[#EDEAE3]/10 bg-[#12100D] p-6">
        <h4 className="font-serif text-lg font-medium">What you'll discover</h4>
        <div className="mt-4 space-y-3 text-[#A8A29B]">
          <div className="flex items-start gap-3">
            <CheckCircle2
              size={18}
              className="mt-0.5 shrink-0 text-[#FFB627]"
            />
            <span>Why most beginners struggle to learn ethical hacking</span>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle2
              size={18}
              className="mt-0.5 shrink-0 text-[#FFB627]"
            />
            <span>
              A structured roadmap to start your cyber security journey
            </span>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle2
              size={18}
              className="mt-0.5 shrink-0 text-[#FFB627]"
            />
            <span>Practical demonstrations with real security tools</span>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle2
              size={18}
              className="mt-0.5 shrink-0 text-[#FFB627]"
            />
            <span>How this 30-day masterclass builds strong fundamentals</span>
          </div>
        </div>
      </div>
    </div>
  );
}
