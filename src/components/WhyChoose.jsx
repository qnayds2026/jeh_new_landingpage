// import {
//   X,
//   Check,
//   ShieldCheck,
//   Award,
//   Users,
//   MessageCircle,
//   BookOpen,
// } from "lucide-react";

// const comparisons = [
//   {
//     traditional: "English-heavy learning",
//     qnayds: "100% Malayalam",
//   },
//   {
//     traditional: "No clear learning path",
//     qnayds: "Structured 30-Day Roadmap",
//   },
//   {
//     traditional: "Learn alone without support",
//     qnayds: "WhatsApp Community Support",
//   },
//   {
//     traditional: "Random or unstructured videos",
//     qnayds: "Organized Recorded Sessions",
//   },
//   {
//     traditional: "Mostly theory",
//     qnayds: "Practical Demonstrations",
//   },
//   {
//     traditional: "Difficult for beginners",
//     qnayds: "Beginner-Friendly Teaching",
//   },
// ];

// const trustPoints = [
//   {
//     icon: ShieldCheck,
//     title: "Beginner Friendly",
//   },
//   {
//     icon: MessageCircle,
//     title: "WhatsApp Support",
//   },
//   {
//     icon: BookOpen,
//     title: "Structured Learning",
//   },
//   {
//     icon: Users,
//     title: "10,000+ Students",
//   },
//   {
//     icon: Award,
//     title: "Experienced Trainer",
//   },
// ];

// export default function WhyChoose() {
//   return (
//     <section className="relative overflow-hidden bg-[#050505] py-24 sm:py-28">
//       {/* =====================================================
//           BACKGROUND
//       ===================================================== */}

//       <div className="pointer-events-none absolute -right-40 top-10 h-[500px] w-[500px] rounded-full bg-[#00FF41]/[0.035] blur-[140px]" />

//       <div className="pointer-events-none absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-[#00FF41]/[0.025] blur-[130px]" />

//       {/* Cyber grid */}
//       <div
//         className="pointer-events-none absolute inset-0 opacity-[0.018]"
//         style={{
//           backgroundImage: `
//             linear-gradient(#00FF41 1px, transparent 1px),
//             linear-gradient(90deg, #00FF41 1px, transparent 1px)
//           `,
//           backgroundSize: "50px 50px",
//         }}
//       />

//       <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
//         {/* =====================================================
//             HEADING
//         ===================================================== */}

//         <div className="mx-auto max-w-3xl text-center">
//           <span
//             className="
//               inline-flex
//               items-center
//               rounded-full
//               border border-[#00FF41]/25
//               bg-[#00FF41]/[0.06]
//               px-4 py-2
//               text-xs
//               font-bold
//               uppercase
//               tracking-[0.16em]
//               text-[#00FF41]
//             "
//           >
//             Why QNAYDS
//           </span>

//           <h2
//             className="
//               mt-6
//               font-serif
//               text-4xl
//               font-medium
//               leading-tight
//               text-white
//               sm:text-5xl
//               lg:text-6xl
//             "
//           >
//             Why QNAYDS Is <span className="text-[#00FF41]">Different</span>
//           </h2>

//           <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#777] sm:text-lg">
//             You can learn cybersecurity from anywhere. The difference is having
//             the right language, structure, support and practical direction.
//           </p>
//         </div>

//         {/* =====================================================
//             COMPARISON TABLE
//         ===================================================== */}

//         <div className="mt-14 overflow-hidden rounded-2xl border border-white/10 bg-[#0B0B0B] shadow-[0_25px_80px_rgba(0,0,0,0.35)]">
//           {/* Desktop Header */}
//           <div className="hidden grid-cols-2 border-b border-white/10 sm:grid">
//             <div className="bg-white/[0.025] px-6 py-5 text-center sm:px-8">
//               <p className="text-sm font-bold uppercase tracking-widest text-[#777]">
//                 Traditional Learning
//               </p>
//             </div>

//             <div className="border-l border-[#00FF41]/10 bg-[#00FF41]/[0.035] px-6 py-5 text-center sm:px-8">
//               <p className="text-sm font-bold uppercase tracking-widest text-[#00FF41]">
//                 QNAYDS Academy
//               </p>
//             </div>
//           </div>

//           {/* Rows */}
//           <div>
//             {comparisons.map((item, index) => (
//               <div
//                 key={index}
//                 className="
//                   grid
//                   grid-cols-1
//                   border-b
//                   border-white/[0.07]
//                   last:border-b-0
//                   sm:grid-cols-2
//                 "
//               >
//                 {/* Traditional */}
//                 <div className="flex items-center gap-3 px-5 py-5 sm:px-8">
//                   <X size={18} className="shrink-0 text-red-400/80" />

//                   <div>
//                     <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-[#555] sm:hidden">
//                       Traditional Learning
//                     </p>

//                     <span className="text-sm text-[#888] sm:text-base">
//                       {item.traditional}
//                     </span>
//                   </div>
//                 </div>

//                 {/* QNAYDS */}
//                 <div
//                   className="
//                     flex
//                     items-center
//                     gap-3
//                     border-t
//                     border-white/[0.06]
//                     bg-[#00FF41]/[0.025]
//                     px-5
//                     py-5
//                     sm:border-l
//                     sm:border-t-0
//                     sm:border-[#00FF41]/10
//                     sm:px-8
//                   "
//                 >
//                   <Check size={19} className="shrink-0 text-[#00FF41]" />

//                   <div>
//                     <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-[#00FF41]/70 sm:hidden">
//                       QNAYDS Academy
//                     </p>

//                     <span className="text-sm font-semibold text-white sm:text-base">
//                       {item.qnayds}
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* =====================================================
//             TRUST / RECOGNITION
//         ===================================================== */}

//         <div className="mt-20 text-center">
//           <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#555]">
//             Built Around Your Learning Experience
//           </p>

//           <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
//             {trustPoints.map((item) => {
//               const Icon = item.icon;

//               return (
//                 <div
//                   key={item.title}
//                   className="
//                     flex
//                     items-center
//                     justify-center
//                     gap-3
//                     rounded-xl
//                     border
//                     border-white/10
//                     bg-[#0B0B0B]
//                     px-4
//                     py-4
//                     transition-all
//                     duration-300
//                     hover:border-[#00FF41]/25
//                     hover:bg-[#00FF41]/[0.025]
//                   "
//                 >
//                   <Icon size={19} className="shrink-0 text-[#00FF41]" />

//                   <span className="text-sm font-medium text-[#B5B5B5]">
//                     {item.title}
//                   </span>
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//         {/* =====================================================
//             VALUE STATEMENT
//         ===================================================== */}

//         <div className="mx-auto mt-16 max-w-3xl text-center">
//           <div
//             className="
//               rounded-2xl
//               border
//               border-[#00FF41]/15
//               bg-[#00FF41]/[0.025]
//               px-6
//               py-7
//               sm:px-10
//             "
//           >
//             <ShieldCheck size={28} className="mx-auto text-[#00FF41]" />

//             <h3 className="mt-4 font-serif text-2xl text-white sm:text-3xl">
//               More than just recorded videos.
//             </h3>

//             <p className="mt-3 text-sm leading-7 text-[#777] sm:text-base">
//               You're getting a structured path to learn cybersecurity,
//               beginner-friendly explanations, practical demonstrations and a
//               community to support you along the way.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
