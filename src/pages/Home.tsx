import React, { useEffect, useRef, useState, ReactNode } from "react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

// ─── Types ────────────────────────────────────────────────────────────────────
interface ServiceTime {
  day: string;
  time: string;
  name: string;
  description: string;
}

interface Event {
  date: string;
  month: string;
  title: string;
  type: string;
  description: string;
}

interface Sermon {
  title: string;
  preacher: string;
  scripture: string;
  date: string;
  youtubeId: string;
}

// ─── Data ────────────────────────────────────────────────────────────────────
const serviceTimes: ServiceTime[] = [
  {
    day: "Sunday",
    time: "7:45 AM",
    name: "Kingdom Cinema (First Service)",
    description: "Join our creative expression of the word of God through film, visuals, and storytelling.",
  },
  {
    day: "Sunday",
    time: "9:00 AM",
    name: "Sunday School",
    description: "Interactive study of God's Word to build a strong foundation for your faith.",
  },
  {
    day: "Sunday",
    time: "9:35 AM",
    name: "Celebration Service (Second Service)",
    description: "Experience dynamic worship, powerful preaching, and heartfelt fellowship.",
  },
  {
    day: "Tuesday",
    time: "6:30 PM",
    name: "Digging Deep",
    description: "A deep dive into the Bible to grow in wisdom and understanding of scripture.",
  },
  {
    day: "Thursday",
    time: "6:30 PM",
    name: "Faith Clinic",
    description: "A time of intense prayer, healing, and spiritual empowerment.",
  },
  {
    day: "3rd Saturday",
    time: "7:00 AM",
    name: "Zion Hour",
    description: "Early morning prophetic encounter to set the pace for your month.",
  },
];

const events: Event[] = [
  {
    date: "TBA",
    month: "—",
    title: "Add Your Next Event",
    type: "Special",
    description: "Update this section with your upcoming church events via antigravity.",
  },
  {
    date: "TBA",
    month: "—",
    title: "Add Your Next Event",
    type: "Prayer",
    description: "Update this section with your upcoming church events via antigravity.",
  },
];

const sermon: Sermon = {
  title: "Add Your Latest Sermon Title",
  preacher: "Pastor — Add Name",
  scripture: "Add scripture reference",
  date: "Add date",
  youtubeId: "YOUR_YOUTUBE_VIDEO_ID",
};

const pillars = [
  { letter: "G", word: "Grace", line: "Unmerited favour — it is our name, our nature, our atmosphere." },
  { letter: "F", word: "Fire", line: "Set ablaze by the Holy Ghost. We burn for the things of the Kingdom." },
  { letter: "P", word: "Purpose", line: "Every life repositioned for a divine assignment." },
];

// ─── Hook: fade-in on scroll ──────────────────────────────────────────────────
function useFadeIn(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

function FadeSection({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const { ref, visible } = useFadeIn();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(30px)",
        transition: `opacity 0.8s ease ${delay}ms, transform 0.8s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function Home() {
  const [emailInput, setEmailInput] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) { setSubscribed(true); }
  };

  return (
    <div className="bg-black text-white min-h-screen font-sans selection:bg-green-500/30">

      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[100dvh] flex flex-col justify-end px-6 md:px-12 lg:px-8 pb-16 md:pb-24 overflow-hidden">
        <video autoPlay muted loop playsInline src="/hero-bg.mp4" className="absolute inset-0 w-full h-full object-cover z-0 opacity-20 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent z-10" />

        <div className="relative z-20 max-w-7xl mx-auto w-full">
          <p className="text-[11px] font-bold tracking-[0.22em] uppercase text-green-400 mb-5 flex items-center gap-3">
            <span className="w-8 h-[1px] bg-green-600"></span> Welcome to
          </p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-[1.05] tracking-tight text-white max-w-4xl">
            RCCG<br />
            House of <em className="not-italic bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">Grace</em>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-lg leading-relaxed mt-6 mb-10 font-medium">
            A place where grace is not just our name — it is the atmosphere you breathe and the foundation you stand on.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/connect" className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(34,197,94,0.4)] hover:shadow-[0_0_30px_rgba(34,197,94,0.6)] flex items-center justify-center text-sm tracking-wide uppercase">
              Plan Your Visit
            </Link>
            <Link to="/about" className="bg-green-900/20 border border-green-500/30 px-8 py-4 rounded-full font-bold hover:bg-green-900/40 transition-all duration-300 text-green-300 text-sm tracking-wide uppercase">
              Who We Are
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 right-6 md:right-12 lg:right-24 z-20 flex flex-col items-center gap-2 opacity-60">
          <div className="w-[1px] h-12 bg-gradient-to-b from-green-600 to-transparent animate-pulse" />
          <span className="text-[10px] tracking-[0.2em] uppercase text-green-400" style={{ writingMode: 'vertical-rl' }}>Scroll</span>
        </div>
      </section>

      {/* ── Welcome / Pastor Message ──────────────────────────────────────────── */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-8 max-w-7xl mx-auto border-b border-zinc-700 w-full">
        <FadeSection>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[4/5] max-w-md w-full mx-auto lg:mx-0 rounded-3xl overflow-hidden shadow-sm border border-zinc-800">
              <img src="/IMG_6384.jpg" alt="Welcome to RCCG House of Grace" className="absolute inset-0 w-full h-full object-cover" />
            </div>
            <div>
              <p className="text-green-400 text-sm font-bold uppercase tracking-widest mb-4">A Word From Our Pastor</p>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-8">YOU ARE WELCOME<br />HOME.</h2>
              <div className="w-12 h-1 bg-gradient-to-r from-green-400 to-emerald-500 mb-8 rounded-full" />
              <div className="text-gray-400 text-lg leading-relaxed space-y-6">
                <p>
                  Whether you are joining us for the first time or you have been a part of this family for years, I want you to know that you are not here by accident. God has a purpose for every step that led you through our doors.
                </p>
                <p>
                  At RCCG House of Grace, we believe that every person carries within them a divine potential and our mission is to create an environment where that potential is discovered, nurtured, and released. Grace is our name, our identity, and the very atmosphere of this house.
                </p>
                <p>
                  Come as you are. You will find a family that loves you, welcomes you, and walks with you into all that God has for your life.
                </p>
              </div>
              <div className="mt-12 pt-8 border-t border-zinc-800">
                <p className="text-xl font-bold bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent italic">Pastor — ABIOBUN OLUWATOSIN</p>
                <p className="text-xs tracking-widest uppercase text-gray-500 mt-2 font-semibold">Zonal Pastor · RCCG House of Grace</p>
              </div>
            </div>
          </div>
        </FadeSection>
      </section>

      {/* ── Identity Pillars ──────────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-8 max-w-7xl mx-auto border-b border-zinc-700 w-full">
        <FadeSection>
          <p className="text-emerald-600 text-sm font-bold uppercase tracking-widest mb-4 text-center">Who We Are</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-12 md:mb-16 text-center">Grace · Fire · Purpose</h2>
        </FadeSection>
        <FadeSection delay={120}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((p) => (
              <div key={p.word} className="bg-zinc-900 border border-zinc-800 p-10 rounded-3xl hover:bg-zinc-800 transition-all group">
                <p className="text-6xl font-bold text-zinc-800 group-hover:text-green-400/20 transition-colors mb-4">{p.letter}</p>
                <h3 className="text-2xl font-bold mb-4">{p.word}</h3>
                <p className="text-gray-400 leading-relaxed">{p.line}</p>
              </div>
            ))}
          </div>
        </FadeSection>
      </section>

      {/* ── Service Times ─────────────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-8 max-w-7xl mx-auto border-b border-zinc-700 w-full">
        <FadeSection>
          <p className="text-orange-600 text-sm font-bold uppercase tracking-widest mb-4">Join Us</p>
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight mb-8">Worship With Us</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-orange-400 to-red-500 mb-12 rounded-full" />
        </FadeSection>
        <FadeSection delay={100}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceTimes.map((s) => (
              <div key={s.name} className="bg-zinc-900 border border-zinc-800 p-10 rounded-3xl hover:bg-zinc-800 transition-all">
                <p className="text-orange-600 text-xs font-bold tracking-widest uppercase mb-4">{s.day}</p>
                <p className="text-3xl font-bold mb-4">{s.time}</p>
                <p className="text-lg font-bold text-white mb-4">{s.name}</p>
                <p className="text-gray-400 leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </FadeSection>
      </section>

      {/* ── Latest Sermon ─────────────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-8 max-w-7xl mx-auto border-b border-zinc-700 w-full">
        <FadeSection>
          <p className="text-green-400 text-sm font-bold uppercase tracking-widest mb-4">Hear The Word</p>
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight mb-8">Latest Sermon</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-green-400 to-emerald-500 mb-12 rounded-full" />
        </FadeSection>
        <FadeSection delay={120}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative aspect-video rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-900">
              {sermon.youtubeId === "YOUR_YOUTUBE_VIDEO_ID" ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-green-400/50">
                  <div className="w-16 h-16 rounded-full border border-green-600/30 flex items-center justify-center text-2xl">▶</div>
                  <span className="text-xs tracking-widest uppercase font-bold text-gray-500">Find ID at @rccghouseofgrace5858</span>
                </div>
              ) : (
                <iframe
                  src={`https://www.youtube.com/embed/${sermon.youtubeId}`}
                  title={sermon.title}
                  className="w-full h-full border-none"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
            </div>
            <div>
              <p className="text-green-400 text-xs font-bold tracking-widest uppercase mb-4">{sermon.date}</p>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">{sermon.title}</h3>
              <p className="text-gray-400 font-medium mb-2">{sermon.preacher}</p>
              <p className="text-emerald-600 italic mb-8">{sermon.scripture}</p>
              <Link to="/sermons" className="bg-green-900/20 border border-green-500/30 px-8 py-4 rounded-full font-bold hover:bg-green-900/40 transition-all duration-300 text-green-300 text-sm tracking-wide uppercase">
                View All Sermons
              </Link>
            </div>
          </div>
        </FadeSection>
      </section>

      {/* ── Upcoming Events ───────────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-8 max-w-7xl mx-auto border-b border-zinc-700 w-full">
        <FadeSection>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <p className="text-orange-600 text-sm font-bold uppercase tracking-widest mb-4">What's Coming Up</p>
              <h2 className="text-4xl sm:text-5xl font-bold leading-tight">Upcoming Events</h2>
            </div>
            <Link to="/events" className="text-white hover:text-orange-600 transition-colors font-bold flex items-center gap-2">
              View All <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
          <div className="w-12 h-1 bg-gradient-to-r from-orange-400 to-red-500 mb-12 rounded-full" />
        </FadeSection>
        <FadeSection delay={120}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((ev, i) => (
              <div key={i} className="bg-zinc-900 border border-zinc-800 p-10 rounded-3xl hover:border-orange-300 transition-all relative overflow-hidden group">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-400 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-4xl font-bold text-orange-600">{ev.date}</span>
                  <span className="text-xs font-bold tracking-widest uppercase text-orange-600/70">{ev.month}</span>
                </div>
                <span className="inline-block px-3 py-1 border border-orange-200 rounded-full text-[10px] tracking-widest uppercase text-orange-600 mb-4 bg-orange-50">{ev.type}</span>
                <h3 className="text-xl font-bold mb-3">{ev.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">{ev.description}</p>
              </div>
            ))}
          </div>
        </FadeSection>
      </section>

      {/* ── Newsletter ────────────────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-8 max-w-7xl mx-auto w-full">
        <FadeSection>
          <div className="bg-gradient-to-br from-zinc-900 to-black border border-green-500/30 rounded-3xl p-10 md:p-16 text-center max-w-4xl mx-auto shadow-sm">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Join Our Mailing List</h2>
            <p className="text-gray-400 mb-10 max-w-lg mx-auto">
              Get updates on sermons, events, and church news delivered directly to your inbox.
            </p>
            {!subscribed ? (
              <form className="flex flex-col sm:flex-row max-w-md mx-auto gap-4" onSubmit={handleSubscribe}>
                <input
                  type="email"
                  placeholder="Your email address"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  required
                  className="flex-1 bg-black border border-zinc-700 rounded-full px-6 py-4 focus:outline-none focus:border-green-400 text-white placeholder:text-gray-400"
                />
                <button type="submit" className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(34,197,94,0.4)] hover:shadow-[0_0_30px_rgba(34,197,94,0.6)] flex items-center justify-center text-sm tracking-wide uppercase">
                  Subscribe
                </button>
              </form>
            ) : (
              <p className="text-green-400 font-bold">✦ Thank you — you're on the list. God bless you.</p>
            )}
            <p className="text-xs text-gray-500 mt-6">No spam, ever. Unsubscribe at any time.</p>
          </div>
        </FadeSection>
      </section>

      {/* ── RCCG Affiliation ──────────────────────────────────────────────────── */}
      <div className="border-t border-zinc-700 py-8 px-6 md:px-12 lg:px-8 max-w-7xl mx-auto w-full flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <span className="px-3 py-1 border border-zinc-700 rounded-full text-[10px] tracking-widest uppercase text-gray-500">A Parish of RCCG</span>
          <span className="text-xs text-gray-500 font-medium">Zonal HQ · Lagos Province 15</span>
        </div>
        <div className="flex gap-6">
          <a href="https://www.rccg.org" target="_blank" rel="noreferrer" className="text-xs font-bold tracking-widest uppercase text-gray-500 hover:text-white transition-colors">RCCG HQ ↗</a>
        </div>
      </div>
    </div>
  );
}
