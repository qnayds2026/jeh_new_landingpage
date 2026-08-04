import { useState } from "react";
import { Play, ArrowUpRight, ChevronDown } from "lucide-react";

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
    <section className="relative overflow-hidden bg-[#0A0B0A] py-28">
      <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-[#3FA66E]/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex -rotate-1 items-center bg-[#3FA66E] px-4 py-2 text-sm font-bold uppercase tracking-wide text-[#0A0B0A] shadow-[3px_3px_0_rgba(0,0,0,0.35)]">
            Student Success Stories
          </span>

          <h2 className="mt-7 font-serif text-4xl font-medium text-[#EAEDEA] md:text-5xl">
            Hear directly from
            <span className="text-[#3FA66E]"> our students</span>
          </h2>

          <p className="mt-5 text-lg leading-8 text-[#A3A9A3]">
            Thousands of students have already started their cyber security
            journey with QNAYDS. Here's what they have to say.
          </p>
        </div>

        {/* Grid — only the first `visibleCount` render */}
        <div className="mt-16 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {visibleVideos.map((video) => {
            const isPlaying = playingId === video.id;
            return (
              <div
                key={video.id}
                className="group overflow-hidden rounded-2xl border border-[#EAEDEA]/10 bg-[#121412] transition-all duration-300 hover:-translate-y-2 hover:border-[#3FA66E]/30 hover:shadow-[0_20px_50px_rgba(63,166,110,0.18)]"
              >
                <div className="relative aspect-video">
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
                      onClick={() => setPlayingId(video.id)}
                      className="relative h-full w-full"
                      aria-label="Play student testimonial"
                    >
                      <img
                        src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                        alt="Student testimonial"
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

                      <div className="absolute left-4 top-4 rounded-full bg-[#3FA66E] px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#0A0B0A]">
                        Verified Student
                      </div>

                      <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-black/60 px-3 py-1 text-xs text-white backdrop-blur">
                        YouTube
                        <ArrowUpRight size={12} />
                      </div>

                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative">
                          <span className="absolute inset-0 animate-ping rounded-full bg-[#3FA66E]/40" />
                          <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-[#3FA66E] shadow-xl transition duration-300 group-hover:scale-110">
                            <Play
                              size={26}
                              className="ml-1 fill-[#0A0B0A] text-[#0A0B0A]"
                            />
                          </div>
                        </div>
                      </div>
                    </button>
                  )}
                </div>

                <div className="p-6">
                  <p className="line-clamp-4 leading-7 text-[#EAEDEA]">
                    {video.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* View more */}
        {hasMore && (
          <div className="mt-10 text-center">
            <button
              type="button"
              onClick={() => setVisibleCount(ALL_VIDEOS.length)}
              className="group inline-flex items-center gap-2 rounded-xl border border-[#3FA66E]/30 bg-[#121412] px-8 py-3.5 text-sm font-semibold text-[#EAEDEA] transition-colors duration-200 hover:border-[#3FA66E]/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3FA66E] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0B0A]"
            >
              View More Stories
              <ChevronDown
                size={18}
                className="transition group-hover:translate-y-0.5"
              />
            </button>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-20 rounded-2xl border border-[#3FA66E]/20 bg-[#121412] p-10 text-center">
          <h3 className="font-serif text-3xl text-[#EAEDEA]">
            Ready to become our next success story?
          </h3>

          <p className="mx-auto mt-4 max-w-2xl leading-8 text-[#A3A9A3]">
            Join thousands of students learning ethical hacking through
            practical Malayalam lessons, lifetime access, and hands-on
            demonstrations.
          </p>

          <button
            onClick={onEnrollClick}
            type="button"
            className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-[#3FA66E] px-10 py-4 text-lg font-bold text-[#0A0B0A] shadow-[4px_4px_0_rgba(234,237,234,0.15)] transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3FA66E] focus-visible:ring-offset-2 focus-visible:ring-offset-[#121412]"
          >
            Start Learning Today
            <ArrowUpRight
              size={18}
              className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </button>
        </div>
      </div>
    </section>
  );
}
