import { useState } from "react";
import { Play, ArrowUpRight } from "lucide-react";

const stories = [
  { name: "Shruti Chaudhary", role: "Student", videoId: "VIDEO_ID_1" },
  { name: "Siddharth Rajsekar", role: "Working Professional", videoId: "VIDEO_ID_2" },
  { name: "Aparna Ganesh", role: "Student", videoId: "VIDEO_ID_3" },
  { name: "Archit Mishra", role: "Engineering Student", videoId: "VIDEO_ID_4" },
  { name: "Mahesh Hasaramani", role: "Working Professional", videoId: "VIDEO_ID_5" },
  { name: "Sakshi Chandraakar", role: "Student", videoId: "VIDEO_ID_6" },
];

export default function Testimonials() {
  const [playingId, setPlayingId] = useState(null);

  return (
    <section className="relative overflow-hidden bg-[#0E0C09] py-28">
      <div className="absolute right-0 top-0 h-[450px] w-[450px] rounded-full bg-[#FFB627]/8 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Heading — no stats row here, that's already covered by the
            Hero and Mentor sections. This one just needs to earn trust
            through the videos themselves. */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex -rotate-1 items-center bg-[#FFB627] px-4 py-1.5 text-sm font-bold uppercase tracking-wide text-[#0A0908] shadow-[3px_3px_0_rgba(237,234,227,0.15)]">
            Student Success
          </span>
          <h2 className="mt-6 font-serif text-4xl font-medium text-[#EDEAE3] md:text-5xl">
            Stories, not stats
          </h2>
          <p className="mt-4 text-lg leading-8 text-[#A8A29B]">
            Real students, in their own words, talking about where they
            started and where this course took them.
          </p>
        </div>

        {/* Video grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {stories.map((story) => {
            const isPlaying = playingId === story.videoId;
            return (
              <div
                key={story.videoId}
                className="group relative aspect-video overflow-hidden rounded-xl border border-[#EDEAE3]/10 bg-[#12100D]"
              >
                {isPlaying ? (
                  <iframe
                    className="h-full w-full"
                    src={`https://www.youtube.com/embed/${story.videoId}?autoplay=1`}
                    title={`${story.name} testimonial`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <button
                    type="button"
                    onClick={() => setPlayingId(story.videoId)}
                    className="relative h-full w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB627] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0E0C09]"
                    aria-label={`Play ${story.name}'s testimonial`}
                  >
                    <img
                      src={`https://img.youtube.com/vi/${story.videoId}/hqdefault.jpg`}
                      alt=""
                      aria-hidden="true"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Gradient for name legibility, not a full dark overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

                    {/* Play button — amber, matches the site's single accent
                        instead of borrowing YouTube's red */}
                    <span className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#FFB627] shadow-[3px_3px_0_rgba(0,0,0,0.35)] transition-transform duration-200 group-hover:scale-110">
                      <Play size={22} className="ml-0.5 fill-[#0A0908] text-[#0A0908]" />
                    </span>

                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="font-serif text-lg font-medium text-[#EDEAE3]">
                        {story.name}
                      </h3>
                      <p className="text-sm text-[#A8A29B]">{story.role}</p>
                    </div>

                    <span className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-black/50 px-2.5 py-1 text-xs text-[#EDEAE3]/80 backdrop-blur-sm">
                      YouTube
                      <ArrowUpRight size={12} />
                    </span>
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}