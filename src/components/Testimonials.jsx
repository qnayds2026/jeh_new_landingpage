import { useState } from "react";
import {
  Play,
  ArrowUpRight,
  ChevronDown,
  Star,
  CheckCircle2,
} from "lucide-react";

const ALL_VIDEOS = [
  {
    id: "dSWuXMFdOaQ",
    desc: "Fukri Smart Solutions CEO ഫുക്രിയുടെ അനുഭവം. അദ്ദേഹം ഈ കോഴ്‌സ് സുഹൃത്തിന് നിർദ്ദേശിക്കുകയും പിന്നീട് ഇതിലെ ക്വാളിറ്റി കണ്ട് സ്വയം ജോയിൻ ചെയ്യുകയും ചെയ്തു.",
  },
  {
    id: "oO2m4N7rkjc",
    desc: "ഹാക്കിങ് പഠിക്കാൻ ആഗ്രഹിക്കുന്ന തുടക്കക്കാർക്ക് ഏറ്റവും മികച്ച കോഴ്‌സ് ആണിതെന്ന് വിദ്യാർത്ഥി പറയുന്നു.",
  },
  {
    id: "vILn-_i2n5U",
    desc: "സങ്കീർണ്ണമായ സൈബർ സെക്യൂരിറ്റി വിഷയങ്ങൾ പോലും വളരെ ലളിതമായി മലയാളത്തിൽ മനസ്സിലാക്കിത്തരുന്നു.",
  },
  {
    id: "mcGd31D19Xo",
    desc: "റെക്കോർഡഡ് ക്ലാസ്സുകൾ ആയതിനാൽ സ്വന്തം സമയത്ത് ജോലിക്ക് ഒപ്പം പഠിക്കാൻ സാധിച്ചതിന്റെ അനുഭവം.",
  },
  {
    id: "U-9r2GyKZ0s",
    desc: "Whatsapp ഗ്രൂപ്പിലൂടെ ലഭിക്കുന്ന മികച്ച സപ്പോർട്ട് വളരെ സഹായകമായി എന്ന് വിദ്യാർത്ഥി സാക്ഷ്യപ്പെടുത്തുന്നു.",
  },
  {
    id: "XflR50c2TvA",
    desc: "സൈബർ ലോകത്തെ പുതിയ കാര്യങ്ങൾ പ്രാക്ടിക്കൽ ആയി പഠിക്കാൻ ഈ കോഴ്‌സ് ഏറെ സഹായിച്ചു.",
  },
  {
    id: "TZmmOn7nkfE",
    desc: "വളരെ കുറഞ്ഞ ഫീസിൽ ഇത്രയും മികച്ചൊരു കോഴ്‌സ് നൽകുന്നതിന് QNAYDS അക്കാദമിക്ക് നന്ദി.",
  },
  {
    id: "9_Q4-pjZbn0",
    desc: "എല്ലാ ക്ലാസ്സുകളും വ്യക്തവും ലളിതവുമാണ്. താല്പര്യമുള്ള എല്ലാവർക്കും ധൈര്യമായി ജോയിൻ ചെയ്യാം.",
  },
  {
    id: "Qi05xOMa2m4",
    desc: "മുൻപരിചയം ഇല്ലാത്തവർക്കും എളുപ്പത്തിൽ മനസ്സിലാകുന്ന രീതിയിലാണ് ക്ലാസ്സുകൾ ഡിസൈൻ ചെയ്തിരിക്കുന്നത്.",
  },
];

const INITIAL_COUNT = 6;

export default function Testimonials({ onEnrollClick }) {
  const [playingId, setPlayingId] = useState(null);
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  const visibleVideos = ALL_VIDEOS.slice(0, visibleCount);
  const hasMore = visibleCount < ALL_VIDEOS.length;

  return (
    <section className="relative overflow-hidden bg-[#050505] py-24">
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none absolute -right-40 top-0 h-[500px] w-[500px] rounded-full bg-[#00FF41]/[0.035] blur-[140px]" />

      <div className="pointer-events-none absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-[#00FF41]/[0.025] blur-[130px]" />

      {/* Subtle cyber grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(#00FF41 1px, transparent 1px),
            linear-gradient(90deg, #00FF41 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* =========================================================
            SECTION HEADING
        ========================================================= */}

        <div className="mx-auto max-w-3xl text-center">
          <span
            className="
              inline-flex
              -rotate-1
              items-center
              border border-[#00FF41]/30
              bg-[#00FF41]
              px-4 py-2
              text-xs
              font-bold
              uppercase
              tracking-[0.14em]
              text-[#050505]
              shadow-[3px_3px_0_rgba(255,255,255,0.08)]
              sm:text-sm
            "
          >
            Student Success Stories
          </span>

          <h2 className="mt-7 font-serif text-4xl font-medium leading-tight text-white md:text-5xl">
            Don't just take our word for it.
            <span className="block text-[#00FF41]">
              Hear it from our students.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#8A8A8A] sm:text-lg sm:leading-8">
            Real experiences from learners who have started their cybersecurity
            journey with QNAYDS.
          </p>
        </div>

        {/* =========================================================
            GOOGLE REVIEW
        ========================================================= */}

        <div className="mx-auto mt-12 max-w-2xl">
          <div
            className="
              relative
              overflow-hidden
              rounded-3xl
              border border-white/10
              bg-[#0D0D0D]
              p-6
              shadow-[0_20px_60px_rgba(0,0,0,0.35)]
              sm:p-8
            "
          >
            {/* Green glow */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#00FF41]/[0.05] blur-[70px]" />

            <div className="relative z-10">
              {/* Google Header */}
              <div className="flex items-center gap-4">
                {/* Google G */}
                <div
                  className="
                    flex
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-white
                    text-2xl
                    font-bold
                    shadow-[0_0_20px_rgba(255,255,255,0.08)]
                  "
                >
                  <span className="text-[#4285F4]">G</span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white sm:text-2xl">
                    Google Reviews
                  </h3>

                  <p className="mt-0.5 text-sm text-[#777]">
                    Trusted by thousands of learners
                  </p>
                </div>
              </div>

              {/* Rating */}
              <div className="mt-7 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
                {/* Score */}
                <div className="flex items-center gap-3">
                  <span className="font-serif text-5xl font-medium leading-none text-white sm:text-6xl">
                    4.6
                  </span>

                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-0.5">
                      {[1, 2, 3, 4].map((star) => (
                        <Star
                          key={star}
                          size={20}
                          className="fill-[#00FF41] text-[#00FF41]"
                        />
                      ))}

                      {/* Half/partial star representation */}
                      <Star
                        size={20}
                        className="fill-[#00FF41]/30 text-[#00FF41]"
                      />
                    </div>

                    <span className="text-xs text-[#777]">
                      Based on 1.4K+ Reviews
                    </span>
                  </div>
                </div>

                {/* Verified */}
                <div className="hidden h-10 w-px bg-white/10 sm:block" />

                <div className="flex items-center gap-2 text-sm text-[#A3A3A3]">
                  <CheckCircle2 size={16} className="text-[#00FF41]" />
                  Verified student feedback
                </div>
              </div>

              {/* Review Button */}
              <div className="mt-7">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();

                    // Replace with your actual Google Reviews URL
                    console.log("Add Google Reviews URL here");
                  }}
                  className="
                    group
                    inline-flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    border border-[#00FF41]/25
                    bg-[#00FF41]/[0.04]
                    px-6
                    py-3.5
                    text-sm
                    font-semibold
                    text-[#00FF41]
                    transition-all
                    duration-300
                    hover:border-[#00FF41]/50
                    hover:bg-[#00FF41]/[0.08]
                    hover:shadow-[0_0_25px_rgba(0,255,65,0.08)]
                    sm:w-auto
                  "
                >
                  <span className="text-lg font-bold">G</span>
                  Read Google Reviews
                  <ArrowUpRight
                    size={17}
                    className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================
            DIVIDER / STORY LABEL
        ========================================================= */}

        <div className="mt-16 flex items-center gap-4">
          <div className="h-px flex-1 bg-white/10" />

          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-[#666]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#00FF41] shadow-[0_0_8px_#00FF41]" />
            Real Student Experiences
          </div>

          <div className="h-px flex-1 bg-white/10" />
        </div>

        {/* =========================================================
            VIDEO GRID
        ========================================================= */}

        <div className="mt-10 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {visibleVideos.map((video) => {
            const isPlaying = playingId === video.id;

            return (
              <div
                key={video.id}
                className="
                  group
                  overflow-hidden
                  rounded-2xl
                  border border-white/10
                  bg-[#0D0D0D]
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:border-[#00FF41]/30
                  hover:shadow-[0_20px_50px_rgba(0,255,65,0.10)]
                "
              >
                {/* Video */}
                <div className="relative aspect-video bg-black">
                  {isPlaying ? (
                    <iframe
                      className="h-full w-full"
                      src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
                      title="Student testimonial"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <button
                      type="button"
                      onClick={() => setPlayingId(video.id)}
                      className="relative h-full w-full"
                      aria-label="Play student testimonial"
                    >
                      <img
                        src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                        alt="Student testimonial"
                        className="
                          h-full
                          w-full
                          object-cover
                          transition
                          duration-500
                          group-hover:scale-105
                        "
                      />

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

                      {/* Verified */}
                      <div
                        className="
                          absolute
                          left-4
                          top-4
                          flex
                          items-center
                          gap-1.5
                          rounded-full
                          border border-[#00FF41]/30
                          bg-black/70
                          px-3
                          py-1.5
                          text-[10px]
                          font-bold
                          uppercase
                          tracking-wide
                          text-[#00FF41]
                          backdrop-blur
                        "
                      >
                        <CheckCircle2 size={12} />
                        Student Story
                      </div>

                      {/* YouTube */}
                      <div
                        className="
                          absolute
                          right-4
                          top-4
                          flex
                          items-center
                          gap-1
                          rounded-full
                          bg-black/60
                          px-3
                          py-1
                          text-xs
                          text-white
                          backdrop-blur
                        "
                      >
                        YouTube
                        <ArrowUpRight size={12} />
                      </div>

                      {/* Play */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative">
                          <span className="absolute inset-0 animate-ping rounded-full bg-[#00FF41]/30" />

                          <div
                            className="
                              relative
                              flex
                              h-16
                              w-16
                              items-center
                              justify-center
                              rounded-full
                              bg-[#00FF41]
                              shadow-[0_0_30px_rgba(0,255,65,0.25)]
                              transition
                              duration-300
                              group-hover:scale-110
                            "
                          >
                            <Play
                              size={26}
                              className="ml-1 fill-[#050505] text-[#050505]"
                            />
                          </div>
                        </div>
                      </div>
                    </button>
                  )}
                </div>

                {/* Description */}
                <div className="p-6">
                  <p className="line-clamp-4 text-sm leading-7 text-[#D4D4D4]">
                    {video.desc}
                  </p>

                  <div className="mt-5 flex items-center gap-2 border-t border-white/10 pt-4">
                    <CheckCircle2 size={14} className="text-[#00FF41]" />

                    <span className="text-xs font-medium text-[#666]">
                      Real learner experience
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* =========================================================
            VIEW MORE
        ========================================================= */}

        {hasMore && (
          <div className="mt-10 text-center">
            <button
              type="button"
              onClick={() => setVisibleCount(ALL_VIDEOS.length)}
              className="
                group
                inline-flex
                items-center
                gap-2
                rounded-xl
                border border-[#00FF41]/25
                bg-[#0D0D0D]
                px-8
                py-3.5
                text-sm
                font-semibold
                text-white
                transition-all
                duration-200
                hover:border-[#00FF41]/50
                hover:text-[#00FF41]
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-[#00FF41]
              "
            >
              View More Stories
              <ChevronDown
                size={18}
                className="transition group-hover:translate-y-0.5"
              />
            </button>
          </div>
        )}

        {/* =========================================================
            BOTTOM CTA
        ========================================================= */}

        <div
          className="
            relative
            mt-20
            overflow-hidden
            rounded-3xl
            border border-[#00FF41]/20
            bg-[#0D0D0D]
            p-8
            text-center
            sm:p-10
          "
        >
          {/* Glow */}
          <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-80 -translate-x-1/2 rounded-full bg-[#00FF41]/[0.04] blur-[80px]" />

          <div className="relative z-10">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#00FF41]">
              Your turn
            </span>

            <h3 className="mt-4 font-serif text-3xl text-white sm:text-4xl">
              Ready to become our next
              <span className="text-[#00FF41]"> success story?</span>
            </h3>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#777] sm:text-base">
              Join learners building their cybersecurity foundation through
              structured lessons, practical demonstrations, Malayalam
              explanations, and community support.
            </p>

            <button
              onClick={onEnrollClick}
              type="button"
              className="
                group
                mt-8
                inline-flex
                items-center
                gap-2
                rounded-xl
                bg-[#00FF41]
                px-10
                py-4
                text-lg
                font-bold
                text-[#050505]
                shadow-[0_0_25px_rgba(0,255,65,0.12)]
                transition-all
                duration-200
                hover:-translate-y-0.5
                hover:shadow-[0_0_35px_rgba(0,255,65,0.22)]
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-[#00FF41]
              "
            >
              Start Learning Today
              <ArrowUpRight
                size={18}
                className="
                  transition
                  group-hover:translate-x-0.5
                  group-hover:-translate-y-0.5
                "
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
