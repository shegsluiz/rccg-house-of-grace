import { useEffect, useRef, useState, ReactNode } from "react";
import { OptimizedImage } from "../components/OptimizedImage";

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
    <div className="bg-hog-black text-hog-text-light min-h-screen font-sans overflow-x-hidden selection:bg-hog-green-100">
      
      {/* ── Hero ── */}
      <section className="hog-section-black relative min-h-[100dvh] flex flex-col justify-end pb-16 md:pb-24 pt-40 overflow-hidden">
        {/* Cinematic background */}
        <OptimizedImage 
          src="https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2000&auto=format&fit=crop" 
          alt="Cinema background" 
          className="absolute inset-0 w-full h-full z-0 opacity-50 brightness-110 contrast-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-hog-black via-hog-black/20 to-transparent z-10" />

        <div className="relative z-20 container-wide text-center">
          <p className="hog-eyebrow text-hog-green-400 mb-5 flex items-center justify-center gap-3">
            <span className="w-12 h-[1px] bg-hog-green-800"></span> RCCG House of Grace <span className="w-12 h-[1px] bg-hog-green-800"></span>
          </p>
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black leading-[0.9] tracking-tighter text-hog-text-light mb-8 font-display">
            Kingdom<br />
            <span className="text-hog-green-400">
              Cinema
            </span>
          </h1>
          <p className="hog-body text-lg md:text-xl max-w-2xl mx-auto italic opacity-80">
            "Go into all the world and preach the gospel to all creation."<br />
            <span className="text-hog-green-400 not-italic text-xs font-black uppercase tracking-[0.3em] mt-6 inline-block">— Mark 16:15</span>
          </p>
        </div>
      </section>

      {/* ── Vision ── */}
      <section className="hog-section-cream py-24">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <FadeSection>
              <div className="relative aspect-[16/10] lg:aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl group border border-hog-green-200/20 bg-hog-green-950">
                <OptimizedImage 
                  src="/optimized/IMG_6515.webp" 
                  alt="Our Vision in Action" 
                  className="absolute inset-0 w-full h-full"
                />
                <div className="absolute inset-0 bg-hog-green-900/10 group-hover:bg-transparent transition-colors" />
                <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.1)]" />
              </div>
            </FadeSection>

            <FadeSection delay={150}>
              <h2 className="hog-heading text-4xl sm:text-5xl md:text-6xl mb-8 text-left">
                Our <span className="text-hog-green-600">Vision</span>
              </h2>
              <div className="hog-rule mb-12" />
              <div className="space-y-8">
                <p className="text-2xl md:text-3xl text-hog-text-dark leading-tight font-bold font-display">
                  Creativity that speaks <br/> 
                  <span className="text-hog-green-600">beyond words.</span>
                </p>
                <p className="hog-body text-lg md:text-xl leading-relaxed">
                  Kingdom Cinema is a creative expression of the word of God through film, visuals, and storytelling. We believe that in a visual age, the message of the Gospel deserves the highest level of creative excellence.
                </p>
                <p className="hog-body text-lg md:text-xl leading-relaxed">
                  Our vision is to reach hearts, inspire faith, and communicate the message of Jesus Christ in a way that resonates deeply with this generation.
                </p>
              </div>
            </FadeSection>
          </div>
        </div>
      </section>

      {/* ── Mission ── */}
      <section className="hog-section-black py-24 border-y border-hog-black-border">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <FadeSection className="order-2 lg:order-1">
              <h2 className="hog-heading text-4xl sm:text-5xl md:text-6xl mb-8 text-left">
                Our <span className="text-hog-green-400">Mission</span>
              </h2>
              <div className="hog-rule mb-12" />
              <div className="space-y-10">
                {missionPoints.map((item, i) => (
                  <div key={i} className="flex gap-6 items-start group">
                    <span className="text-3xl font-black text-hog-green-400/30 group-hover:text-hog-green-400 transition-colors font-display">{item.num}</span>
                    <p className="text-lg md:text-xl text-hog-text-light leading-relaxed font-medium">{item.text}</p>
                  </div>
                ))}
              </div>
            </FadeSection>
            <FadeSection delay={150} className="order-1 lg:order-2">
              <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border border-hog-black-border bg-hog-black-card shadow-2xl flex items-center justify-center p-16">
                <OptimizedImage 
                  src="/optimized/kingdom-cinema-logo.webp" 
                  alt="Kingdom Cinema Logo" 
                  className="w-full h-auto object-contain"
                />
              </div>
            </FadeSection>
          </div>
        </div>
      </section>

      {/* ── What We Do ── */}
      <section className="hog-section-cream py-24">
        <div className="container-wide text-center">
          <FadeSection>
            <p className="hog-eyebrow mb-4">Kingdom Cinema Creates</p>
            <h2 className="hog-heading text-4xl sm:text-5xl md:text-6xl mb-16">
              What We <span className="text-hog-green-600">Do</span>
            </h2>
          </FadeSection>
          <FadeSection delay={100}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {whatWeDo.map((item, i) => (
                <div key={i} className="hog-card p-10 flex items-center gap-8 group">
                  <div className="text-4xl font-black text-hog-green-600/20 group-hover:text-hog-green-600 transition-colors font-display">
                    0{i + 1}.
                  </div>
                  <h3 className="text-2xl font-bold text-hog-text-dark group-hover:text-hog-green-600 transition font-display text-left">{item}</h3>
                </div>
              ))}
            </div>
          </FadeSection>
        </div>
      </section>

      {/* ── Why It Matters ── */}
      <section className="hog-section-white py-24">
        <div className="container-wide max-w-5xl text-center">
          <FadeSection>
            <h2 className="hog-heading text-4xl sm:text-5xl md:text-6xl mb-8">
              Why It Matters
            </h2>
            <div className="hog-rule mx-auto mb-12" />
            <p className="text-2xl md:text-3xl text-hog-text-dark leading-relaxed font-display italic">
              "In a world full of noise, visuals speak louder than words. Through Kingdom Cinema, we use creativity to share the truth of God's Word in a powerful and relatable way."
            </p>
          </FadeSection>
        </div>
      </section>

      {/* ── Stay Connected ── */}
      <section className="hog-section-black py-24 pb-32">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <FadeSection>
              <div className="relative aspect-video rounded-[2rem] overflow-hidden border border-hog-black-border bg-hog-black-card shadow-2xl group">
                <OptimizedImage 
                  src="https://images.unsplash.com/photo-1595769816263-9b910be24d5f?q=80&w=1000&auto=format&fit=crop" 
                  alt="Cinema" 
                  className="absolute inset-0 w-full h-full"
                />
                <div className="absolute inset-0 bg-hog-green-900/20 mix-blend-overlay" />
              </div>
            </FadeSection>
            <FadeSection delay={150}>
              <h2 className="hog-heading text-4xl sm:text-5xl md:text-6xl mb-8 text-left">
                Stay <span className="text-hog-green-400">Connected</span>
              </h2>
              <div className="hog-rule mb-12" />
              
              <div className="space-y-12">
                <div>
                  <p className="hog-eyebrow text-hog-green-400 mb-3">Email</p>
                  <a href="mailto:rccghouseofgracemedia@gmail.com" className="text-xl md:text-3xl font-black text-hog-text-light hover:text-hog-green-400 transition-colors font-display">
                    rccghouseofgracemedia@gmail.com
                  </a>
                </div>
                <div>
                  <p className="hog-eyebrow text-hog-green-400 mb-3">Address</p>
                  <p className="text-lg md:text-xl text-hog-text-ghost leading-relaxed max-w-sm font-medium">
                    52, Ajibola Crescent, Alapere, Ketu, Lagos
                  </p>
                </div>
              </div>
            </FadeSection>
          </div>
        </div>
      </section>

    </div>
  );
}
