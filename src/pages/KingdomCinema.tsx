import { useEffect, useRef, useState, ReactNode } from "react";

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

// ─── Data ─────────────────────────────────────────────────────────────────────
const missionPoints = [
  { num: "01.", text: "To use film and media as a tool for evangelism" },
  { num: "02.", text: "To tell stories that reflect truth, hope, and redemption" },
  { num: "03.", text: "To create content that draws people closer to God" },
  { num: "04.", text: "To impact lives both inside and outside the church" },
];

const whatWeDo = [
  "Short films and visual messages",
  "Creative church media content",
  "Story-driven faith experiences",
  "Inspirational and Gospel-centered productions",
];

// ─── Main Component ───────────────────────────────────────────────────────────
export default function KingdomCinema() {
  return (
    <div className="bg-black text-white min-h-screen font-sans overflow-x-hidden selection:bg-green-500/30">
      
      {/* ── Hero ── */}
      <section className="relative min-h-[70vh] flex flex-col justify-end px-6 md:px-12 lg:px-24 pb-24 pt-40 overflow-hidden">
        {/* Placeholder for a cinematic background */}
        <img 
          src="https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2000&auto=format&fit=crop" 
          alt="Cinema background" 
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-40 mix-blend-screen"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10" />

        <div className="relative z-20 max-w-7xl mx-auto w-full text-center mt-32">
          <p className="text-[11px] font-bold tracking-[0.22em] uppercase text-[#ffefb7] mb-5 flex items-center justify-center gap-3">
            <span className="w-8 h-[1px] bg-[#ffefb7]"></span> RCCG House of Grace <span className="w-8 h-[1px] bg-[#ffefb7]"></span>
          </p>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold leading-[1.05] tracking-tight text-white mb-6">
            Kingdom<br />
            <span className="bg-gradient-to-r from-green-400 via-emerald-500 to-orange-400 bg-clip-text text-transparent">
              Cinema
            </span>
          </h1>
          <p className="text-zinc-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed italic font-medium">
            "Go into all the world and preach the gospel to all creation."<br />
            <span className="text-green-400 not-italic text-sm font-bold uppercase tracking-widest mt-4 inline-block">— Mark 16:15</span>
          </p>
        </div>
      </section>

      {/* ── Vision ── */}
      <section className="py-24 px-6 md:px-12 lg:px-24 max-w-5xl mx-auto text-center border-b border-white/5">
        <FadeSection>
          <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
            Our <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">Vision</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-orange-400 to-red-500 mb-12 rounded-full mx-auto" />
          <p className="text-xl md:text-2xl text-zinc-300 leading-relaxed mb-6 font-medium">
            Kingdom Cinema is a creative expression of the word of God through film, visuals, and storytelling.
          </p>
          <p className="text-lg md:text-xl text-zinc-400 leading-relaxed">
            Our vision is to reach hearts, inspire faith, and communicate the message of Jesus Christ in a way that speaks to this generation.
          </p>
        </FadeSection>
      </section>

      {/* ── Mission ── */}
      <section className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto border-b border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeSection className="order-2 lg:order-1">
            <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
              Our <span className="text-white">Mission</span>
            </h2>
            <div className="w-12 h-1 bg-white mb-12 rounded-full" />
            <div className="space-y-8">
              {missionPoints.map((item, i) => (
                <div key={i} className="flex gap-6 items-start group">
                  <span className="text-2xl md:text-3xl font-bold text-white/20 group-hover:text-white transition-colors">{item.num}</span>
                  <p className="text-lg md:text-xl text-zinc-300 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </FadeSection>
          <FadeSection delay={150} className="order-1 lg:order-2">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 bg-white/5 shadow-[0_0_50px_rgba(255,255,255,0.05)] flex items-center justify-center p-12">
              <img 
                src="/kingdom-cinema-logo.png" 
                alt="Kingdom Cinema Logo" 
                className="w-full h-auto object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]"
              />
            </div>
          </FadeSection>
        </div>
      </section>

      {/* ── What We Do ── */}
      <section className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto border-b border-white/5">
        <FadeSection text-center>
          <p className="text-green-400 text-sm font-bold uppercase tracking-widest mb-4 text-center">Kingdom Cinema Creates</p>
          <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-16 text-center">
            What We <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">Do</span>
          </h2>
        </FadeSection>
        <FadeSection delay={100}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whatWeDo.map((item, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/[0.08] transition-all flex items-center gap-6 group">
                <div className="text-3xl font-bold text-green-400/30 group-hover:text-green-400 transition-colors">
                  0{i + 1}.
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-white">{item}</h3>
              </div>
            ))}
          </div>
        </FadeSection>
      </section>

      {/* ── Why It Matters ── */}
      <section className="py-24 px-6 md:px-12 lg:px-24 max-w-5xl mx-auto text-center border-b border-white/5">
        <FadeSection>
          <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
            Why It Matters
          </h2>
          <div className="w-12 h-1 bg-white mb-12 rounded-full mx-auto" />
          <p className="text-xl md:text-2xl text-zinc-300 leading-relaxed max-w-3xl mx-auto">
            In a world full of noise, visuals speak louder than words. Through Kingdom Cinema, we use creativity to share the truth of God's Word in a powerful and relatable way.
          </p>
        </FadeSection>
      </section>

      {/* ── Stay Connected ── */}
      <section className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeSection>
            <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 bg-white/5 shadow-[0_0_50px_rgba(74,222,128,0.1)]">
              <img 
                src="https://images.unsplash.com/photo-1595769816263-9b910be24d5f?q=80&w=1000&auto=format&fit=crop" 
                alt="Cinema" 
                className="absolute inset-0 w-full h-full object-cover opacity-60"
              />
            </div>
          </FadeSection>
          <FadeSection delay={150}>
            <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
              Stay <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">Connected</span>
            </h2>
            <div className="w-12 h-1 bg-gradient-to-r from-orange-400 to-red-500 mb-12 rounded-full" />
            
            <div className="space-y-10">
              <div>
                <p className="text-sm font-bold uppercase tracking-widest text-zinc-500 mb-2">Email</p>
                <a href="mailto:rccghouseofgracemedia@gmail.com" className="text-xl md:text-2xl font-bold text-white hover:text-orange-400 transition-colors">
                  rccghouseofgracemedia@gmail.com
                </a>
              </div>
              <div>
                <p className="text-sm font-bold uppercase tracking-widest text-zinc-500 mb-2">Address</p>
                <p className="text-lg text-zinc-300 leading-relaxed max-w-sm">
                  52, Ajibola Crescent, Alapere, Ketu, Lagos
                </p>
              </div>
            </div>
          </FadeSection>
        </div>
      </section>

    </div>
  );
}
