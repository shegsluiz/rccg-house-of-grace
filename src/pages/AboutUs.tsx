import { Link } from "react-router-dom";
import { OptimizedImage } from "../components/OptimizedImage";

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
    image: "/optimized/DADDY EA ADEBOYE.webp",
  },
  {
    role: "Zonal Pastor",
    name: "Pastor Abiodun Oluwatosin",
    note: "Visionary Leader, House of Grace",
    image: "/optimized/Pastor Abiodun.webp",
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
    <div className="bg-hog-black text-hog-text-light min-h-screen font-sans selection:bg-hog-green-100 overflow-x-hidden">

      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <section className="hog-section-black relative min-h-[100dvh] flex flex-col justify-end pb-16 md:pb-24 overflow-hidden">
        <OptimizedImage
          src="/optimized/IMG_6718.webp"
          className="absolute inset-0 w-full h-full z-0 opacity-40 grayscale"
          alt="About Us Hero"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-hog-green-800/20 via-hog-black/60 to-hog-black z-10" />

        <div className="relative z-20 container-wide">
          <p className="hog-eyebrow mb-5">
            RCCG · House of Grace · Zonal HQ
          </p>
          <h1 className="hog-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl max-w-4xl">
            A House Built on <span className="text-hog-green-400">Grace</span>
          </h1>
          <p className="hog-body text-lg md:text-xl max-w-lg mt-6 mb-10">
            We are a community of believers who have encountered the transforming grace of God and we exist to extend that grace to every person who walks through our doors.
          </p>
        </div>

        <div className="absolute bottom-10 right-6 md:right-12 lg:right-24 z-20 flex flex-col items-center gap-2 opacity-60">
          <div className="w-[1px] h-12 bg-gradient-to-b from-hog-green-400 to-transparent animate-pulse" />
          <span className="text-[10px] tracking-[0.2em] uppercase text-hog-green-400" style={{ writingMode: 'vertical-rl' }}>Scroll</span>
        </div>
      </section>
      {/* ── Mission ──────────────────────────────────────────────────────────── */}
      <section className="hog-section-cream section">
        <div className="container-wide">
          <FadeSection>
            <p className="hog-eyebrow mb-4">Our Mission</p>
            <h2 className="hog-heading text-4xl sm:text-5xl mb-8">Why We Exist</h2>
            <div className="hog-rule mb-12" />
          </FadeSection>
          <FadeSection delay={120}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <blockquote className="text-2xl md:text-3xl font-bold italic leading-relaxed text-hog-text-dark border-l-4 border-hog-green-500 pl-8 py-2">
                "To make heaven. To take as many people with us. To have a member of RCCG in every family of all nations."
              </blockquote>
              <div className="hog-body text-lg space-y-6">
                <p>
                  At RCCG House of Grace, we are fully committed to the global
                  vision of The Redeemed Christian Church of God — a vision of
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
        </div>
      </section>

      {/* ── Core Values ──────────────────────────────────────────────────────── */}
      <section className="hog-section-forest section">
        <div className="container-wide">
          <FadeSection>
            <p className="hog-eyebrow mb-4">Our Core Values</p>
            <h2 className="hog-heading text-4xl sm:text-5xl mb-16">What Defines Us</h2>
          </FadeSection>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeSection delay={100}>
              <div className="relative aspect-[4/5] lg:aspect-auto lg:h-[600px] rounded-[32px] overflow-hidden shadow-2xl group border border-white/10 bg-hog-green-900">
                <OptimizedImage 
                  src="/optimized/IMG_6530.webp" 
                  alt="House of Grace Workers" 
                  className="absolute inset-0 w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-hog-green-950/80 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-10 left-10 right-10">
                  <p className="text-hog-green-400 font-black tracking-widest text-[10px] uppercase mb-2">The Hands of Grace</p>
                  <h3 className="text-white text-3xl font-bold font-display">Serving with Fire & Purpose</h3>
                </div>
              </div>
            </FadeSection>

            <FadeSection delay={200}>
              <div className="flex flex-col gap-6">
                {values.map((v) => (
                  <div key={v.number} className="hog-card bg-hog-green-900/20 border-hog-green-800/30 p-8 group flex gap-8 items-start hover:bg-hog-green-900/40 transition-all duration-500">
                    <p className="text-5xl font-black text-hog-green-400/20 group-hover:text-hog-green-400 transition-colors font-display shrink-0">{v.number}</p>
                    <div>
                      <h3 className="text-xl font-bold mb-3 text-white font-display group-hover:text-hog-green-400 transition-colors">{v.title}</h3>
                      <p className="text-hog-text-dim leading-relaxed text-sm">{v.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeSection>
          </div>
        </div>
      </section>

      {/* ── Church Structure / Leadership ─────────────────────────────────────── */}
      <section className="hog-section-white section">
        <div className="container-wide">
          <FadeSection>
            <p className="hog-eyebrow mb-4">Our Structure</p>
            <h2 className="hog-heading text-4xl sm:text-5xl mb-8">Spiritual Covering & Leadership</h2>
            <div className="hog-rule mb-8" />
            <p className="hog-body text-lg max-w-3xl mb-16">
              House of Grace is a Zonal Headquarters under Lagos Province 15 of
              the Redeemed Christian Church of God. We are covered by a chain of
              spiritual authority that connects us to the global body of Christ.
            </p>
          </FadeSection>
          <FadeSection delay={120}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {leadership.map((l) => (
                <div key={l.role} className="hog-card p-8 group overflow-hidden">
                  <div className="flex flex-col items-center text-center gap-6">
                    {l.image && (
                      <div className="relative">
                        <div className="absolute inset-0 bg-hog-green-500 rounded-full blur-xl opacity-0 group-hover:opacity-20 transition-opacity" />
                        <OptimizedImage 
                          src={l.image} 
                          alt={l.name} 
                          className="w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-hog-black-border shadow-2xl shrink-0 relative z-10" 
                        />
                      </div>
                    )}
                    <div>
                      <p className="hog-eyebrow mb-3">{l.role}</p>
                      <p className="text-2xl font-bold text-hog-text-dark mb-2">{l.name}</p>
                      <p className="text-sm text-hog-text-dim tracking-wide">{l.note}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </FadeSection>
        </div>
      </section>

      {/* ── What to Expect ────────────────────────────────────────────────────── */}
      <section className="hog-section-cream section">
        <div className="container-wide">
          <FadeSection>
            <p className="hog-eyebrow mb-4">New Here?</p>
            <h2 className="hog-heading text-4xl sm:text-5xl mb-8">What To Expect On Your First Visit</h2>
            <div className="hog-rule mb-16" />
          </FadeSection>
          <FadeSection delay={100}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
              {whatToExpect.map((item) => (
                <div key={item.title} className="flex gap-6 items-start group">
                  <div className="w-14 h-14 rounded-2xl bg-hog-green-500/10 border border-hog-green-500/20 flex items-center justify-center text-xl text-hog-green-600 group-hover:bg-hog-green-500 group-hover:text-white transition-all shrink-0 shadow-sm">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-hog-text-dark mb-3 font-display">{item.title}</h3>
                    <p className="hog-body leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeSection>
        </div>
      </section>

      {/* ── CTA Strip ─────────────────────────────────────────────────────────── */}
      <section className="hog-section-black section pt-0">
        <div className="container-wide">
          <FadeSection>
            <div className="bg-hog-black-card border border-hog-black-border rounded-[2rem] p-12 lg:p-20 flex flex-col lg:flex-row items-center justify-between gap-10 shadow-2xl">
              <h2 className="hog-heading text-3xl md:text-4xl lg:text-5xl text-center lg:text-left">
                Ready to experience <span className="text-hog-green-400">grace</span> for yourself?
              </h2>
              <Link to="/connect" className="hog-btn-primary py-5 px-10 text-sm">
                Plan Your Visit
              </Link>
            </div>
          </FadeSection>
        </div>
      </section>
    </div>
  );
}
