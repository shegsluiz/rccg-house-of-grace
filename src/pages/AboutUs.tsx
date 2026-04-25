import { useEffect, useRef, useState, ReactNode } from "react";
import { Link } from "react-router-dom";

// ─── Types ────────────────────────────────────────────────────────────────────
interface Value {
  number: string;
  title: string;
  description: string;
}

interface LeadershipItem {
  role: string;
  name: string;
  note: string;
  image?: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const values: Value[] = [
  {
    number: "01",
    title: "Grace",
    description:
      "We are a people anchored in the unmerited favour of God. Grace is not merely our name — it is our identity, our atmosphere, and the foundation of everything we do.",
  },
  {
    number: "02",
    title: "Fire",
    description:
      "We are a people set ablaze by the Holy Ghost. We burn with an intense passion and zeal for the things of the Kingdom, refusing to be lukewarm in our devotion to Christ.",
  },
  {
    number: "03",
    title: "Purpose",
    description:
      "Every life that encounters this house is repositioned for divine purpose. We believe God has a specific plan for every person and we exist to help them discover and walk in it.",
  },
];

const leadership: LeadershipItem[] = [
  {
    role: "General Overseer, RCCG",
    name: "Pastor E.A. Adeboye",
    note: "Global spiritual covering",
    image: "/DADDY EA ADEBOYE.jpeg",
  },
];

const whatToExpect = [
  {
    icon: "♪",
    title: "Vibrant Worship",
    body: "Expect Spirit-filled praise and worship that ushers you into the presence of God.",
  },
  {
    icon: "✦",
    title: "Powerful Word",
    body: "Our messages are rooted in Scripture and practically applicable to everyday life.",
  },
  {
    icon: "◎",
    title: "Warm Community",
    body: "From the moment you arrive, you will be welcomed into a family that genuinely cares.",
  },
  {
    icon: "◈",
    title: "Children's Church",
    body: "Your children are fully catered for in an engaging, age-appropriate environment.",
  },
];

// ─── Hook: Intersection Observer for fade-in ──────────────────────────────────
function useFadeIn(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, visible };
}

// ─── Sub-components ───────────────────────────────────────────────────────────
function FadeSection({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, visible } = useFadeIn();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.75s ease ${delay}ms, transform 0.75s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function AboutUs() {
  return (
    <div className="bg-black text-white min-h-screen font-sans selection:bg-green-500/30 overflow-x-hidden">

      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[80vh] flex flex-col justify-end px-6 md:px-12 lg:px-24 pb-24 overflow-hidden">
        {/* Background Image restored */}
        <img
          src="/IMG_6410.jpg"
          alt="Worship background"
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-50 mix-blend-screen"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10" />

        <div className="relative z-20 max-w-7xl mx-auto w-full">
          <p className="text-[11px] font-bold tracking-[0.22em] uppercase text-[#ffefb7] mb-5 flex items-center gap-3">
            <span className="w-8 h-[1px] bg-[#ffefb7]"></span> RCCG · House of Grace · Zonal HQ
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight text-white max-w-4xl">
            A House Built on <em className="not-italic bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">Grace</em>
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl max-w-lg leading-relaxed mt-6 mb-10 font-medium">
            We are a community of believers who have encountered the transforming grace of God and we exist to extend that grace to every person who walks through our doors.
          </p>
        </div>

        <div className="absolute bottom-10 right-6 md:right-12 lg:right-24 z-20 flex flex-col items-center gap-2 opacity-60">
          <div className="w-[1px] h-12 bg-gradient-to-b from-green-400 to-transparent animate-pulse" />
          <span className="text-[10px] tracking-[0.2em] uppercase text-green-400" style={{ writingMode: 'vertical-rl' }}>Scroll</span>
        </div>
      </section>
      {/* ── Mission ──────────────────────────────────────────────────────────── */}
      <section className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto border-b border-white/5">
        <FadeSection>
          <p className="text-emerald-400 text-sm font-bold uppercase tracking-widest mb-4">Our Mission</p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8">Why We Exist</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-green-400 to-emerald-500 mb-12 rounded-full" />
        </FadeSection>
        <FadeSection delay={120}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <blockquote className="text-2xl md:text-3xl font-bold italic leading-relaxed text-zinc-300 border-l-4 border-green-500 pl-8 py-2">
              "To make heaven. To take as many people with us. To have a member of RCCG in every family of all nations."
            </blockquote>
            <div className="text-zinc-400 text-lg leading-relaxed space-y-6">
              <p>
                At RCCG House of Grace, we are fully committed to the global
                vision of The Redeemed Christian Church of Goda vision of
                total evangelism, holiness, and the transformation of nations
                through the power of the Gospel.
              </p>
              <p>
                As part of The Redeemed Christian Church of God and a Zonal Headquarters under Lagos Province 15, we are committed to raising people who will impact their world with grace, purpose, and the power of the Gospel.
              </p>
              <p>
                We pursue holiness not as a burden but as a lifestyle, and we plant the love of God everywhere we go.
              </p>
            </div>
          </div>
        </FadeSection>
      </section>

      {/* ── Core Values ──────────────────────────────────────────────────────── */}
      <section className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto border-b border-white/5 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-900/10 via-black to-black">
        <FadeSection>
          <p className="text-green-400 text-sm font-bold uppercase tracking-widest mb-4">Our Core Values</p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-16">What Defines Us</h2>
        </FadeSection>
        <FadeSection delay={100}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.number} className="bg-white/5 border border-white/10 p-10 rounded-3xl hover:bg-white/[0.08] transition-all group">
                <p className="text-6xl font-bold text-white/10 group-hover:text-green-400/30 transition-colors mb-6">{v.number}</p>
                <h3 className="text-2xl font-bold mb-4">{v.title}</h3>
                <p className="text-zinc-400 leading-relaxed text-sm">{v.description}</p>
              </div>
            ))}
          </div>
        </FadeSection>
      </section>

      {/* ── Church Structure / Leadership ─────────────────────────────────────── */}
      <section className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto border-b border-white/5">
        <FadeSection>
          <p className="text-orange-400 text-sm font-bold uppercase tracking-widest mb-4">Our Structure</p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8">Spiritual Covering & Leadership</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-orange-400 to-red-500 mb-8 rounded-full" />
          <p className="text-zinc-400 text-lg leading-relaxed max-w-3xl mb-16">
            House of Grace is a Zonal Headquarters under Lagos Province 15 of
            the Redeemed Christian Church of God. We are covered by a chain of
            spiritual authority that connects us to the global body of Christ.
          </p>
        </FadeSection>
        <FadeSection delay={120}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {leadership.map((l) => (
              <div key={l.role} className="bg-white/5 border border-white/10 p-8 rounded-3xl relative overflow-hidden group hover:border-orange-400/50 transition-all">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-400 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="flex flex-col items-center text-center gap-6">
                  {l.image && (
                    <img 
                      src={l.image} 
                      alt={l.name} 
                      className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-2 border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.1)] shrink-0" 
                    />
                  )}
                  <div>
                    <p className="text-[10px] tracking-widest uppercase text-orange-400 font-bold mb-3">{l.role}</p>
                    <p className="text-2xl font-bold text-white mb-2">{l.name}</p>
                    <p className="text-sm text-zinc-400 tracking-wide">{l.note}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </FadeSection>
      </section>

      {/* ── What to Expect ────────────────────────────────────────────────────── */}
      <section className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <FadeSection>
          <p className="text-emerald-400 text-sm font-bold uppercase tracking-widest mb-4">New Here?</p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8">What To Expect On Your First Visit</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-green-400 to-emerald-500 mb-16 rounded-full" />
        </FadeSection>
        <FadeSection delay={100}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {whatToExpect.map((item) => (
              <div key={item.title} className="flex gap-6 items-start group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-xl text-green-400 group-hover:scale-110 transition-transform shrink-0 shadow-[0_0_20px_rgba(74,222,128,0.1)]">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-zinc-400 leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeSection>
      </section>

      {/* ── CTA Strip ─────────────────────────────────────────────────────────── */}
      <FadeSection>
        <div className="my-24 px-6 md:px-12 lg:px-24">
          <div className="bg-gradient-to-r from-green-900/40 via-black to-green-900/40 border border-green-500/20 rounded-3xl p-12 lg:p-20 flex flex-col lg:flex-row items-center justify-between gap-10 shadow-[0_0_50px_rgba(74,222,128,0.1)] max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight text-center lg:text-left">
              Ready to experience <em className="not-italic bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">grace</em> for yourself?
            </h2>
            <Link to="/connect" className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-10 py-5 rounded-full font-bold hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(34,197,94,0.4)] hover:shadow-[0_0_30px_rgba(34,197,94,0.6)] text-sm tracking-wide uppercase whitespace-nowrap">
              Plan Your Visit
            </Link>
          </div>
        </div>
      </FadeSection>
    </div>
  );
}
