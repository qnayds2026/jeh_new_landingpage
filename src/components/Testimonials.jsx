import { useState } from "react";
import { Play, ArrowUpRight } from "lucide-react";

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

export default function Testimonials({ onEnrollClick }) {
  const [playingId, setPlayingId] = useState(null);

  return (
    <section className="relative overflow-hidden bg-[#0A0908] py-28">
      <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-[#FFB627]/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex -rotate-1 items-center bg-[#FFB627] px-4 py-2 text-sm font-bold uppercase tracking-wide text-[#0A0908] shadow-[3px_3px_0_rgba(0,0,0,.35)]">
            Student Success Stories
          </span>

          <h2 className="mt-7 font-serif text-4xl font-medium text-[#EDEAE3] md:text-5xl">
            Hear Directly From
            <span className="text-[#FFB627]"> Our Students</span>
          </h2>

          <p className="mt-5 text-lg leading-8 text-[#A8A29B]">
            Thousands of students have already started their Cyber Security
            journey with QNAYDS. Here's what they have to say.
          </p>
        </div>

        {/* Grid */}

        <div className="mt-16 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {ALL_VIDEOS.map((video) => {
            const isPlaying = playingId === video.id;

            return (
              <div
                key={video.id}
                className="group overflow-hidden rounded-2xl border border-[#EDEAE3]/10 bg-[#12100D] transition-all duration-300 hover:-translate-y-2 hover:border-[#FFB627]/30 hover:shadow-[0_20px_50px_rgba(255,182,39,.18)]"
              >
                {/* Video */}

                <div className="relative aspect-video">
                  {isPlaying ? (
                    <iframe
                      className="h-full w-full"
                      src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
                      title="Student Testimonial"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <button
                      onClick={() => setPlayingId(video.id)}
                      className="relative h-full w-full"
                    >
                      <img
                        src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                        alt="Student testimonial"
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

                      {/* Badge */}

                      <div className="absolute left-4 top-4 rounded-full bg-[#FFB627] px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#0A0908]">
                        Verified Student
                      </div>

                      {/* YouTube */}

                      <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-black/60 px-3 py-1 text-xs text-white backdrop-blur">
                        YouTube
                        <ArrowUpRight size={12} />
                      </div>

                      {/* Play */}

                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative">
                          <span className="absolute inset-0 animate-ping rounded-full bg-[#FFB627]/40" />

                          <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-[#FFB627] shadow-xl transition duration-300 group-hover:scale-110">
                            <Play
                              size={26}
                              className="ml-1 fill-[#0A0908] text-[#0A0908]"
                            />
                          </div>
                        </div>
                      </div>
                    </button>
                  )}
                </div>

                {/* Content */}

                <div className="p-6">
                  <p className="line-clamp-4 leading-7 text-[#EDEAE3]">
                    {video.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom */}

        <div className="mt-20 rounded-3xl border border-[#FFB627]/20 bg-[#12100D] p-10 text-center">
          <h3 className="font-serif text-3xl text-[#EDEAE3]">
            Ready To Become Our Next Success Story?
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-[#A8A29B] leading-8">
            Join thousands of students learning Ethical Hacking through
            practical Malayalam lessons, lifetime access, and hands-on
            demonstrations.
          </p>

          <button
            onClick={onEnrollClick}
            className="mt-8 rounded-xl bg-[#FFB627] px-10 py-4 text-lg font-bold text-[#0A0908] transition duration-300 hover:scale-105 hover:shadow-[0_10px_40px_rgba(255,182,39,.3)]"
          >
            Start Learning Today →
          </button>
        </div>
      </div>
    </section>
  );
}
