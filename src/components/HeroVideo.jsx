import {
  Star,
  GraduationCap,
  ShieldCheck,
  CheckCircle2,
  Play,
} from "lucide-react";
import { useState } from "react";
import IntroVideo from "../assets/Intro.mp4";
import VideoThumbnail from "../assets/thumbnail.webp";

export default function HeroVideo() {
  const [playing, setPlaying] = useState(false);
  return (
    <div>
      {/* Top info */}
      <div className="overflow-hidden rounded-2xl border border-[#EDEAE3]/10 bg-[#12100D]">
        {/* Header */}

        <div className="flex items-center justify-between border-b border-[#EDEAE3]/10 px-4 py-3 text-xs text-[#A8A29B]">
          <span>Course Introduction</span>
          <span>1:18</span>
        </div>

        <div className="relative aspect-video">
          {!playing ? (
            <>
              <img
                src={VideoThumbnail}
                alt="JEH Masterclass Preview"
                className="h-full w-full object-cover"
              />

              {/* Dark Overlay */}

              <div className="absolute inset-0 bg-black/20" />

              {/* Play Button */}

              <button
                onClick={() => setPlaying(true)}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white/90 backdrop-blur shadow-2xl transition duration-300 hover:scale-110">
                  <Play
                    size={42}
                    className="ml-1 fill-[#0A0908] text-[#0A0908]"
                  />
                </div>
              </button>
            </>
          ) : (
            <video className="h-full w-full" controls autoPlay playsInline>
              <source src={IntroVideo} type="video/mp4" />
            </video>
          )}
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
