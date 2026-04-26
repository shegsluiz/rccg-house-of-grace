import { useState, useEffect, useRef, ReactNode } from "react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { OptimizedImage } from "../components/OptimizedImage";

// ─── Types ────────────────────────────────────────────────────────────────────
interface ServiceTime {
  day: string;
  time: string;
  name: string;
  description: string;
  image?: string;
}

interface Event {
  date: string;
  month: string;
  title: string;
  type: string;
  description: string;
  image?: string;
  time?: string;
}

interface Sermon {
  title: string;
  preacher: string;
  scripture: string;
  date: string;
  youtubeId: string;
  description?: string;
}

const CHANNEL_ID = "UCV_ngO2hpet078gqzKptM9g";
const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY as string;

// ─── Data ────────────────────────────────────────────────────────────────────
const serviceTimes: ServiceTime[] = [
  {
    day: "Sunday",
    time: "7:45 AM",
    name: "Kingdom Cinema (First Service)",
    description: "Join our creative expression of the word of God through film, visuals, and storytelling.",
    image: "/optimized/Kingdom.Cinema 2.webp",
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
    date: "1st",
    month: "Friday",
    time: "6:00 PM",
    title: "Monthly Holy Ghost Service (May Edition)",
    type: "Prayer",
    description: "Theme: 'Excellent Counsel'. A powerful night of worship, the Word, and divine encounters with the Holy Spirit. Join us onsite or connect from anywhere as we experience God's guidance and grace.",
    image: "https://www.rccg.org/wp-content/uploads/2026/04/banner-1024x512.jpg",
  },
  {
    date: "1st",
    month: "Sunday",
    time: "9:35 AM",
    title: "Thanksgiving Sunday",
    type: "Celebration",
    description: "Join us for a special time of gratitude and testimony as we celebrate God's goodness in our lives.",
    image: "/optimized/Thanksgiving Post.webp",
  },
];

const initialSermon: Sermon = {
  title: "Join Us Live",
  preacher: "Pastor — Abiodun Oluwatosin",
  scripture: "Various Scriptures",
  date: "Latest Message",
  youtubeId: "",
  description: "Experience the transformative power of God's Word through our latest message."
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

  const [latestSermon, setLatestSermon] = useState<Sermon>(initialSermon);

  useEffect(() => {
    async function fetchLatestSermon() {
      try {
        const channelRes = await fetch(
          `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${CHANNEL_ID}&key=${API_KEY}`
        );
        const channelData = await channelRes.json();
        const uploadsPlaylistId = channelData.items?.[0]?.contentDetails?.relatedPlaylists?.uploads;

        if (uploadsPlaylistId) {
          const playlistRes = await fetch(
            `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsPlaylistId}&maxResults=1&key=${API_KEY}`
          );
          const playlistData = await playlistRes.json();
          const item = playlistData.items?.[0];

          if (item) {
            setLatestSermon({
              title: item.snippet.title,
              preacher: "Pastor — Abiodun Oluwatosin",
              scripture: "RCCG House of Grace",
              date: new Date(item.snippet.publishedAt).toLocaleDateString("en-NG", {
                day: "numeric",
                month: "long",
                year: "numeric",
              }),
              youtubeId: item.snippet.resourceId.videoId,
              description: item.snippet.description?.slice(0, 160) + "..."
            });
          }
        }
      } catch (err) {
        console.error("Failed to fetch latest sermon", err);
      }
    }
    fetchLatestSermon();
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) { setSubscribed(true); }
  };

  return (
    <div className="bg-hog-black text-hog-text-light min-h-screen font-sans selection:bg-hog-green-100">

      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <section className="hog-section-black relative min-h-[100dvh] flex flex-col justify-end pb-16 md:pb-24 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          src="/hero-bg.mp4"
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-40 brightness-110 contrast-105 animate-slow-zoom"
          poster="/optimized/IMG_6718.webp"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-hog-black/20 via-hog-black/40 to-hog-black pointer-events-none z-10" />

        <div className="relative z-20 max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-8">
          <p className="hog-eyebrow mb-5 flex items-center gap-3">
            <span className="w-8 h-[1px] bg-hog-green-400"></span> Welcome to
          </p>
          <h1 className="hog-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl max-w-4xl">
            RCCG<br />
            House of <em className="not-italic hog-gradient-text">Grace</em>
          </h1>
          <p className="hog-body text-lg md:text-xl max-w-lg mt-6 mb-10">
            A place where grace is not just our name — it is the atmosphere you breathe and the foundation you stand on.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/connect" className="hog-btn-primary">
              Plan Your Visit
            </Link>
            <Link to="/about" className="hog-btn-outline-dark">
              Who We Are
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 right-6 md:right-12 lg:right-24 z-20 flex flex-col items-center gap-2 opacity-60">
          <div className="w-[1px] h-12 bg-gradient-to-b from-hog-green-400 to-transparent animate-pulse" />
          <span className="text-[10px] tracking-[0.2em] uppercase text-hog-green-400" style={{ writingMode: 'vertical-rl' }}>Scroll</span>
        </div>
      </section>

      {/* ── Welcome / Pastor Message ──────────────────────────────────────────── */}
      <section className="hog-section-cream section w-full">
        <FadeSection>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
            <div className="relative aspect-[4/5] max-w-md w-full mx-auto lg:mx-0 rounded-3xl overflow-hidden shadow-card border border-hog-cream-deep bg-hog-cream">
              <OptimizedImage 
                src="/optimized/IMG_6384.webp" 
                alt="Welcome to RCCG House of Grace" 
                className="absolute inset-0 w-full h-full" 
                priority
              />
            </div>
            <div>
              <p className="hog-eyebrow">A Word From Our Pastor</p>
              <h2 className="hog-heading text-4xl sm:text-5xl lg:text-6xl mb-8">YOU ARE WELCOME<br />HOME.</h2>
              <div className="hog-rule" />
              <div className="hog-body space-y-6">
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
              <div className="mt-12 pt-8 border-t border-hog-cream-deep">
                <p className="text-xl font-bold hog-gradient-text italic">Pastor — ABIODUN OLUWATOSIN</p>
                <p className="text-[10px] tracking-widest uppercase hog-text-muted mt-2 font-bold">Zonal Pastor · RCCG House of Grace</p>
              </div>
            </div>
          </div>
        </FadeSection>
      </section>

      {/* ── Identity Pillars ──────────────────────────────────────────────────── */}
      <section className="hog-section-forest section w-full">
        <div className="max-w-7xl mx-auto">
          <FadeSection>
            <p className="hog-eyebrow text-center">Who We Are</p>
            <h2 className="hog-heading text-4xl sm:text-5xl md:text-6xl text-center mb-12 md:mb-16">Grace · Fire · Purpose</h2>
          </FadeSection>
          <FadeSection delay={120}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pillars.map((p) => (
                <div key={p.word} className="hog-card p-10 group">
                  <p className="text-6xl font-bold text-white/10 group-hover:text-white/20 transition-colors mb-4">{p.letter}</p>
                  <h3 className="text-2xl font-bold mb-4">{p.word}</h3>
                  <p className="hog-body text-sm">{p.line}</p>
                </div>
              ))}
            </div>
          </FadeSection>
        </div>
      </section>

      {/* ── Service Times ─────────────────────────────────────────────────────── */}
      <section className="hog-section-white section w-full">
        <div className="max-w-7xl mx-auto">
          <FadeSection>
            <p className="hog-eyebrow">Join Us</p>
            <h2 className="hog-heading text-4xl sm:text-5xl mb-8">Worship With Us</h2>
            <div className="hog-rule" />
          </FadeSection>
          <FadeSection delay={100}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceTimes.map((s) => (
                <Link 
                  key={s.name} 
                  to={s.name.includes("Kingdom Cinema") ? "/kingdom-cinema" : "/events"}
                  className="hog-card bg-white border-hog-green-100 p-8 flex flex-col group hover:shadow-green-md hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-6">
                    <span className="hog-badge">{s.day}</span>
                    <span className="text-xs font-black tracking-widest text-hog-green-600/50">{s.time}</span>
                  </div>

                  {s.image && (
                    <div className={`relative aspect-video mb-6 rounded-xl overflow-hidden border shadow-sm ${s.name.includes("Kingdom Cinema") ? "bg-hog-black border-hog-black-border" : "border-hog-green-100"}`}>
                      <OptimizedImage 
                        src={s.image} 
                        alt={s.name} 
                        className="w-full h-full" 
                      />
                    </div>
                  )}
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-black text-hog-text-dark mb-4 font-display group-hover:text-hog-green-600 transition-colors leading-tight">
                      {s.name}
                    </h3>
                    <p className="hog-body text-sm line-clamp-3">
                      {s.description}
                    </p>
                  </div>

                  <div className="mt-8 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-hog-green-600 opacity-0 group-hover:opacity-100 transition-all">
                    Find Out More <ChevronRight className="w-3 h-3" />
                  </div>
                </Link>
              ))}
            </div>
          </FadeSection>
        </div>
      </section>

      {/* ── Latest Sermon ─────────────────────────────────────────────────────── */}
      <section className="hog-section-black-soft section w-full">
        <div className="max-w-7xl mx-auto">
          <FadeSection>
            <p className="hog-eyebrow">Hear The Word</p>
            <h2 className="hog-heading text-4xl sm:text-5xl mb-8">Latest Sermon</h2>
            <div className="hog-rule" />
          </FadeSection>
          <FadeSection delay={120}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="relative aspect-video rounded-3xl overflow-hidden border border-hog-black-border bg-hog-black-card shadow-lg">
                {!latestSermon.youtubeId ? (
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-hog-green-400/50">
                    <div className="w-16 h-16 rounded-full border border-hog-green-100 flex items-center justify-center text-2xl">▶</div>
                    <span className="text-xs tracking-widest uppercase font-bold text-hog-text-dim">Loading Latest Message...</span>
                  </div>
                ) : (
                  <iframe
                    src={`https://www.youtube.com/embed/${latestSermon.youtubeId}`}
                    title={latestSermon.title}
                    className="w-full h-full border-none"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                )}
              </div>
              <div>
                <p className="hog-eyebrow text-xs mb-4">{latestSermon.date}</p>
                <h3 className="hog-heading text-3xl md:text-4xl mb-4">{latestSermon.title}</h3>
                <p className="hog-text-dim font-medium mb-2">{latestSermon.preacher}</p>
                <p className="text-hog-green-400 italic mb-6">{latestSermon.scripture}</p>
                <p className="hog-body text-sm mb-8">{latestSermon.description}</p>
                <Link to="/sermons" className="hog-btn-outline-dark">
                  View All Sermons
                </Link>
              </div>
            </div>
          </FadeSection>
        </div>
      </section>

      {/* ── Upcoming Events ───────────────────────────────────────────────────── */}
      <section className="hog-section-green-tint section w-full">
        <div className="max-w-7xl mx-auto">
          <FadeSection>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <p className="hog-eyebrow">What's Coming Up</p>
                <h2 className="hog-heading text-4xl sm:text-5xl">Upcoming Events</h2>
              </div>
              <Link to="/events" className="text-hog-green-600 hover:text-hog-green-400 transition-colors font-bold flex items-center gap-2">
                View All <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="hog-rule" />
          </FadeSection>
          <FadeSection delay={120}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.map((ev, i) => (
                <div key={i} className="hog-card relative overflow-hidden group flex flex-col">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-hog-green-400 to-hog-green-600 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                  {ev.image && (
                    <div className={`w-full aspect-video overflow-hidden border-b ${ev.title.includes("Kingdom Cinema") ? "bg-hog-black border-hog-black-border" : "border-hog-green-100"}`}>
                      <OptimizedImage 
                        src={ev.image} 
                        alt={ev.title} 
                        className="w-full h-full" 
                      />
                    </div>
                  )}
                  <div className="p-8 md:p-10 flex flex-col flex-1">
                    <div className="flex items-baseline gap-2 mb-6">
                      <span className="text-4xl font-bold text-hog-green-600">{ev.date}</span>
                      <span className="text-xs font-bold tracking-widest uppercase text-hog-green-600/70">{ev.month}</span>
                      {ev.time && <span className="ml-auto text-[10px] font-bold tracking-widest uppercase hog-text-muted">{ev.time}</span>}
                    </div>
                    <div>
                      <span className="hog-badge mb-4">{ev.type}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-hog-text-dark">{ev.title}</h3>
                    <p className="hog-body text-sm flex-1">{ev.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeSection>
        </div>
      </section>

      {/* ── Newsletter ────────────────────────────────────────────────────────── */}
      <section className="hog-section-black section w-full">
        <FadeSection>
          <div className="hog-card p-10 md:p-16 text-center max-w-4xl mx-auto">
            <h2 className="hog-heading text-3xl md:text-5xl mb-6">Join Our Mailing List</h2>
            <p className="hog-body mb-10 max-w-lg mx-auto">
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
                  className="hog-input-dark flex-1 px-6 py-4"
                />
                <button type="submit" className="hog-btn-primary">
                  Subscribe
                </button>
              </form>
            ) : (
              <p className="text-hog-green-400 font-bold">✦ Thank you — you're on the list. God bless you.</p>
            )}
            <p className="text-xs text-hog-text-ghost mt-6">No spam, ever. Unsubscribe at any time.</p>
          </div>
        </FadeSection>
      </section>

      {/* ── RCCG Affiliation ──────────────────────────────────────────────────── */}
      <div className="border-t border-hog-black-border py-8 px-6 md:px-12 lg:px-8 max-w-7xl mx-auto w-full flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <span className="px-3 py-1 border border-hog-black-border rounded-full text-[10px] tracking-widest uppercase text-hog-text-ghost">A Parish of RCCG</span>
          <span className="text-xs text-hog-text-ghost font-medium">Zonal HQ · Lagos Province 15</span>
        </div>
        <div className="flex gap-6">
          <a href="https://www.rccg.org" target="_blank" rel="noreferrer" className="text-xs font-bold tracking-widest uppercase text-hog-text-ghost hover:text-hog-green-400 transition-colors">RCCG HQ ↗</a>
        </div>
      </div>
    </div>
  );
}
