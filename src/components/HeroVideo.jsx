import {
  Star,
  GraduationCap,
  ShieldCheck,
  CheckCircle2,
  Play,
  Terminal,
  LockKeyhole,
} from "lucide-react";
import { useState } from "react";

import IntroVideo from "../assets/Intro.mp4";
import VideoThumbnail from "../assets/thumbnail.webp";

export default function HeroVideo() {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="w-full">
      {/* =========================================================
          VIDEO CARD
      ========================================================= */}
      <div className="group overflow-hidden rounded-2xl border border-[#00FF41]/15 bg-[#0D0D0D] shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
        {/* Top terminal-style header */}
        <div className="flex items-center justify-between border-b border-white/10 bg-[#101010] px-4 py-3 sm:px-5">
          <div className="flex items-center gap-3">
            {/* Terminal dots */}
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#333]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#333]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#00FF41]" />
            </div>

            <div className="hidden h-4 w-px bg-white/10 sm:block" />

            <div className="flex items-center gap-2 text-xs text-[#8A8A8A] sm:text-sm">
              <Terminal size={14} className="text-[#00FF41]" />
              <span>course_intro.mp4</span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs text-[#777]">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#00FF41]" />
            01:18
          </div>
        </div>

        {/* Video */}
        <div className="relative aspect-video overflow-hidden">
          {!playing ? (
            <>
              {/* Thumbnail */}
              <img
                src={VideoThumbnail}
                alt="30-Day Ethical Hacking Masterclass Preview"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.02]"
              />

              {/* Dark cinematic overlay */}
              <div className="absolute inset-0 bg-black/35" />

              {/* Green atmospheric overlay */}
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,65,0.12),transparent_55%)]" />

              {/* Subtle scanline effect */}
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.08]"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(to bottom, transparent 0px, transparent 3px, rgba(0,255,65,0.25) 4px)",
                }}
              />

              {/* Center play button */}
              <button
                type="button"
                onClick={() => setPlaying(true)}
                aria-label="Play course introduction video"
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="relative">
                  {/* Outer pulse */}
                  <div className="absolute inset-[-14px] animate-ping rounded-full border border-[#00FF41]/20" />

                  {/* Glow */}
                  <div className="absolute inset-[-8px] rounded-full bg-[#00FF41]/20 blur-xl" />

                  {/* Button */}
                  <div
                    className="
                      relative flex h-20 w-20 items-center justify-center
                      rounded-full
                      border border-[#00FF41]/60
                      bg-[#00FF41]
                      shadow-[0_0_35px_rgba(0,255,65,0.35)]
                      transition-all duration-300
                      group-hover:scale-110
                      group-hover:shadow-[0_0_50px_rgba(0,255,65,0.5)]
                      sm:h-24 sm:w-24
                    "
                  >
                    <Play
                      size={34}
                      className="ml-1 fill-black text-black sm:h-10 sm:w-10"
                    />
                  </div>
                </div>
              </button>

              {/* Bottom video label */}
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#00FF41]">
                    Watch Before You Enroll
                  </p>

                  <p className="mt-1 text-sm font-medium text-white sm:text-base">
                    Discover what you'll learn
                  </p>
                </div>

                <div className="hidden items-center gap-2 rounded-lg border border-white/10 bg-black/60 px-3 py-2 text-xs text-[#B0B0B0] backdrop-blur-md sm:flex">
                  <LockKeyhole size={13} className="text-[#00FF41]" />
                  Course Preview
                </div>
              </div>
            </>
          ) : (
            <video
              className="h-full w-full bg-black object-contain"
              controls
              autoPlay
              playsInline
              controlsList="nodownload"
            >
              <source src={IntroVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
      </div>

      {/* =========================================================
          CREDENTIALS
      ========================================================= */}
      <div className="mt-5 grid grid-cols-3 gap-2 sm:gap-4">
        {/* Experience */}
        <div className="group rounded-xl border border-white/10 bg-[#0D0D0D] p-3 text-center transition-all duration-300 hover:border-[#00FF41]/30 hover:bg-[#101010] sm:p-4">
          <GraduationCap
            size={20}
            className="mx-auto text-[#00FF41] transition-transform duration-300 group-hover:-translate-y-1"
          />

          <h4 className="mt-2 font-serif text-lg font-medium text-white sm:text-xl">
            8+ Yrs
          </h4>

          <p className="mt-0.5 text-[10px] uppercase tracking-wide text-[#777] sm:text-xs">
            Experience
          </p>
        </div>

        {/* Tools */}
        <div className="group rounded-xl border border-white/10 bg-[#0D0D0D] p-3 text-center transition-all duration-300 hover:border-[#00FF41]/30 hover:bg-[#101010] sm:p-4">
          <ShieldCheck
            size={20}
            className="mx-auto text-[#00FF41] transition-transform duration-300 group-hover:-translate-y-1"
          />

          <h4 className="mt-2 font-serif text-lg font-medium text-white sm:text-xl">
            50+
          </h4>

          <p className="mt-0.5 text-[10px] uppercase tracking-wide text-[#777] sm:text-xs">
            Tools Covered
          </p>
        </div>

        {/* Rating */}
        <div className="group rounded-xl border border-white/10 bg-[#0D0D0D] p-3 text-center transition-all duration-300 hover:border-[#00FF41]/30 hover:bg-[#101010] sm:p-4">
          <Star
            size={20}
            className="mx-auto fill-[#00FF41] text-[#00FF41] transition-transform duration-300 group-hover:-translate-y-1"
          />

          <h4 className="mt-2 font-serif text-lg font-medium text-white sm:text-xl">
            4.6/5
          </h4>

          <p className="mt-0.5 text-[10px] uppercase tracking-wide text-[#777] sm:text-xs">
            Mentor Rating
          </p>
        </div>
      </div>

      {/* =========================================================
          WHAT YOU'LL DISCOVER
      ========================================================= */}
      <div className="relative mt-5 overflow-hidden rounded-xl border border-white/10 bg-[#0D0D0D] p-5 sm:p-6">
        {/* Small green accent */}
        <div className="absolute left-0 top-0 h-full w-[2px] bg-[#00FF41]" />

        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#00FF41]/20 bg-[#00FF41]/5">
            <ShieldCheck size={18} className="text-[#00FF41]" />
          </div>

          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#00FF41]">
              Preview
            </p>

            <h4 className="font-serif text-lg font-medium text-white">
              What you'll discover
            </h4>
          </div>
        </div>

        <div className="mt-5 space-y-3">
          {[
            "Why most beginners struggle to learn ethical hacking",
            "A structured roadmap to start your cyber security journey",
            "Practical demonstrations with real security tools",
            "How this 30-day masterclass builds strong fundamentals",
          ].map((item) => (
            <div
              key={item}
              className="flex items-start gap-3"
            >
              <CheckCircle2
                size={17}
                className="mt-0.5 shrink-0 text-[#00FF41]"
              />

              <span className="text-sm leading-6 text-[#A3A3A3]">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}