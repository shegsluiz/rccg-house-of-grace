// src/pages/Connect.tsx
// Brand: bg-black, Inter + Space Grotesk, green-emerald gradient, orange-red secondary, glassmorphism cards

import { useState, useRef, useEffect, ReactNode, ChangeEvent, FormEvent } from "react";
import { 
  Instagram, 
  Facebook, 
  Youtube, 
  MessageCircle,
} from "lucide-react";
import { OptimizedImage } from "../components/OptimizedImage";

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
     <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.634 1.437h.005c6.558 0 11.894-5.335 11.897-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

const contactDetails = [
  {
    label: "Address",
    value: "52, Ajibola Crescent, Alapere, Ketu, Lagos",
    icon: "📍",
  },
  {
    label: "Phone",
    value: "Add Phone Number", // ← add via antigravity
    icon: "📞",
  },
  {
    label: "Email",
    value: "rccghouseofgracemedia@gmail.com",
    icon: "✉️",
  },
  {
    label: "WhatsApp",
    value: "Add WhatsApp Number", // ← add via antigravity
    icon: "💬",
  },
];

const socialLinks = [
  { 
    name: "Instagram", 
    handle: "@rccghoga14", 
    url: "https://www.instagram.com/rccghoga14/", 
    icon: Instagram 
  },
  { 
    name: "Facebook", 
    handle: "RCCG House of Grace", 
    url: "https://www.facebook.com/rccghoga14", 
    icon: Facebook 
  },
  { 
    name: "TikTok", 
    handle: "@rccghouseofgracelp15", 
    url: "https://www.tiktok.com/@rccghouseofgracelp15", 
    icon: TikTokIcon 
  },
  { 
    name: "YouTube", 
    handle: "@rccghouseofgrace5858", 
    url: "https://www.youtube.com/@rccghouseofgrace5858", 
    icon: Youtube 
  },
  { 
    name: "WhatsApp", 
    handle: "Join our group", 
    url: "https://wa.me/", 
    icon: WhatsAppIcon 
  },
];

const cellGroups = [
  {
    name: "Young Adults Cell",
    day: "Saturdays",
    time: "Add Time",
    leader: "Add Leader Name",
    area: "Add Location / Zone",
  },
  {
    name: "Women's Fellowship",
    day: "Add Day",
    time: "Add Time",
    leader: "Add Leader Name",
    area: "Add Location / Zone",
  },
  {
    name: "Men's Fellowship",
    day: "Add Day",
    time: "Add Time",
    leader: "Add Leader Name",
    area: "Add Location / Zone",
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────
function useFadeIn() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

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

export default function Connect() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Wire up to your backend / email service here
    setSent(true);
  };

  return (
    <div className="bg-hog-black text-hog-text-light min-h-screen font-sans selection:bg-hog-green-100">

      {/* ── Hero ── */}
      <section className="hog-section-black relative pt-48 pb-32 overflow-hidden min-h-[60vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 bg-hog-black">
          <OptimizedImage 
            src="/optimized/IMG_9073_optimized.webp" 
            alt="Hero Background" 
            className="w-full h-full opacity-30 scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-hog-black via-hog-black/40 to-hog-black" />
        </div>

        <div className="relative z-10 container-wide text-center">
          <FadeSection>
            <p className="hog-eyebrow mb-4">
              We'd Love To Hear From You
            </p>
            <h1 className="hog-heading text-4xl sm:text-6xl md:text-7xl mb-6">
              Get{" "}
              <span className="text-hog-green-400">
                Connected
              </span>
            </h1>
            <div className="hog-rule mx-auto mb-6" />
            <p className="hog-body text-lg max-w-2xl mx-auto">
              Whether you are new, have a question, or want to get more involved
              — we are here and we'd love to connect with you.
            </p>
          </FadeSection>
        </div>
      </section>

      {/* ── New Here? ── */}
      <section className="bg-[#F9FAF7] py-24">
        <div className="container-wide">
          <div className="bg-white rounded-[32px] border border-hog-green-200/30 overflow-hidden shadow-sm">
            <div className="grid lg:grid-cols-[1fr_1.2fr_1.5fr] items-stretch">
              {/* Image Column */}
              <div className="h-64 lg:h-auto relative overflow-hidden bg-hog-black">
                <OptimizedImage 
                  src="/optimized/IMG_6413.webp" 
                  alt="Congregation" 
                  className="absolute inset-0 w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-hog-green-500/10 to-transparent" />
              </div>

              {/* Text Column */}
              <div className="p-8 md:p-14 flex flex-col justify-center">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-hog-green-600 mb-4">
                  First Time Visiting?
                </p>
                <h2 className="hog-heading text-hog-text-dark text-3xl md:text-5xl leading-tight mb-6">
                  Here is what to expect when you visit us
                </h2>
                <p className="hog-body text-base text-hog-text-ghost">
                  We want your first visit to feel warm, easy, and memorable.
                  From the moment you arrive, you will be welcomed by friendly
                  faces who are genuinely glad you are here.
                </p>
              </div>

              {/* Steps Column */}
              <div className="p-8 md:p-14 flex flex-col gap-6 justify-center bg-gray-50/50">
                {[
                  { num: "01", title: "Arrive & Be Welcomed", body: "Our welcome team will greet you at the door and help you find your seat. No need to dress a certain way — come as you are." },
                  { num: "02", title: "Worship & The Word", body: "Experience vibrant praise and worship followed by a practical, Bible-based message that speaks to your everyday life." },
                  { num: "03", title: "Meet The Family", body: "After service, take a moment to connect with our pastoral team and members. We have a space set aside just for first-timers." },
                ].map((step) => (
                  <div key={step.num} className="bg-white p-6 rounded-2xl border border-hog-green-100/20 shadow-sm flex gap-6 items-start group hover:border-hog-green-400/30 transition-colors">
                    <span className="text-3xl font-black text-hog-green-600/20 font-display">
                      {step.num}
                    </span>
                    <div>
                      <h3 className="font-bold text-hog-text-dark text-lg mb-1">{step.title}</h3>
                      <p className="hog-body text-sm text-hog-text-ghost leading-relaxed">{step.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact Info & Form ── */}
      <section className="hog-section-white py-20">
        <div className="container-wide grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Contact details */}
          <div>
            <p className="hog-eyebrow mb-2">
              Find Us
            </p>
            <h2 className="hog-heading text-3xl mb-8">
              Contact Information
            </h2>
            <div className="flex flex-col gap-5 mb-12">
              {contactDetails.map((item) => (
                <div
                  key={item.label}
                  className="hog-card p-6 flex gap-5 items-start group"
                >
                  <span className="text-2xl group-hover:scale-110 transition duration-300">{item.icon}</span>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-hog-text-ghost mb-1">
                      {item.label}
                    </p>
                    <p className="text-hog-text-dark text-base font-bold">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map */}
            <div className="rounded-3xl overflow-hidden border border-hog-green-100/20 bg-white shadow-2xl h-64 md:h-80 w-full relative">
              <iframe
                src="https://maps.google.com/maps?q=RCCG%20House%20of%20Grace,%2052,%20Ajibola%20Crescent,%20Alapere,%20Ketu,%20Lagos&t=&z=16&ie=UTF8&iwloc=&output=embed"
                className="absolute inset-0 w-full h-full grayscale invert contrast-[90%] opacity-90"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Contact form */}
          <div className="hog-card p-8 sm:p-10 lg:p-12">
            <p className="hog-eyebrow mb-2">
              Send A Message
            </p>
            <h2 className="hog-heading text-3xl mb-8">
              We'll Get Back To You
            </h2>
            {!sent ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <input
                    name="name"
                    type="text"
                    placeholder="Your full name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="bg-hog-green-100/5 border border-hog-green-100/20 rounded-2xl px-6 py-4 text-hog-text-dark placeholder-hog-text-ghost text-sm focus:outline-none focus:border-hog-green-500 focus:ring-1 focus:ring-hog-green-500 transition"
                  />
                  <input
                    name="email"
                    type="email"
                    placeholder="Email address"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="bg-hog-green-100/5 border border-hog-green-100/20 rounded-2xl px-6 py-4 text-hog-text-dark placeholder-hog-text-ghost text-sm focus:outline-none focus:border-hog-green-500 focus:ring-1 focus:ring-hog-green-500 transition"
                  />
                </div>
                <input
                  name="phone"
                  type="tel"
                  placeholder="Phone number (optional)"
                  value={form.phone}
                  onChange={handleChange}
                  className="bg-hog-green-100/5 border border-hog-green-100/20 rounded-2xl px-6 py-4 text-hog-text-dark placeholder-hog-text-ghost text-sm focus:outline-none focus:border-hog-green-500 focus:ring-1 focus:ring-hog-green-500 transition"
                />
                <textarea
                  name="message"
                  placeholder="How can we help you?"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  className="bg-hog-green-100/5 border border-hog-green-100/20 rounded-2xl px-6 py-4 text-hog-text-dark placeholder-hog-text-ghost text-sm focus:outline-none focus:border-hog-green-500 focus:ring-1 focus:ring-hog-green-500 transition resize-none"
                />
                <button
                  type="submit"
                  className="hog-btn-primary w-full py-4.5 text-sm mt-2"
                >
                  Send Message →
                </button>
              </form>
            ) : (
              <div className="bg-hog-green-100/10 border border-hog-green-100/20 rounded-2xl p-10 text-center">
                <p className="text-4xl mb-4">🙏</p>
                <h3 className="text-xl font-bold mb-2 text-hog-text-dark font-display">
                  Thank you!
                </h3>
                <p className="hog-body text-sm">Your message has been sent successfully. We will get back to you shortly.</p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-6 text-hog-green-600 font-black text-xs uppercase tracking-widest hover:underline"
                >
                  Send another message
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── Cell Groups ── */}
      <section className="hog-section-cream py-20">
        <div className="container-wide">
          <p className="hog-eyebrow mb-2">
            Grow Together
          </p>
          <h2 className="hog-heading text-3xl mb-4">
            Cell Groups & Fellowships
          </h2>
          <p className="hog-body text-sm mb-10 max-w-xl">
            Life is better in community. Our cell groups meet weekly in homes
            and venues across the zone — for prayer, the Word, and genuine
            fellowship.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {cellGroups.map((group) => (
              <div
                key={group.name}
                className="hog-card p-8 group"
              >
                <div className="w-12 h-1.5 bg-hog-green-500 rounded-full mb-6" />
                <h3 className="font-bold text-xl mb-4 text-hog-text-dark font-display">
                  {group.name}
                </h3>
                <div className="flex flex-col gap-3 text-sm text-hog-text-dark/70">
                  <p className="flex items-center gap-3"><span className="text-hog-green-600 text-xs font-black">📅</span> {group.day} · {group.time}</p>
                  <p className="flex items-center gap-3"><span className="text-hog-green-600 text-xs font-black">👤</span> {group.leader}</p>
                  <p className="flex items-center gap-3"><span className="text-hog-green-600 text-xs font-black">📍</span> {group.area}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-hog-text-ghost text-[10px] mt-8 italic">
            * Update cell group details via antigravity.
          </p>
        </div>
      </section>

      {/* ── Social Media ── */}
      <section className="hog-section-black py-20">
        <div className="container-wide">
          <p className="hog-eyebrow text-hog-green-400 mb-2">
            Stay Connected
          </p>
          <h2 className="hog-heading text-3xl mb-12">
            Follow Us Online
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {socialLinks.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                className="hog-card bg-hog-black-card border-hog-black-border p-10 flex flex-col items-center justify-center gap-6 group hover:border-hog-green-400/50 transition-all duration-500"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-hog-green-500 blur-2xl opacity-0 group-hover:opacity-20 transition-opacity" />
                  <s.icon className="w-12 h-12 text-hog-text-ghost group-hover:text-hog-green-400 group-hover:scale-110 transition-all duration-500 relative z-10" />
                </div>
                <div className="text-center">
                  <p className="font-bold text-sm text-hog-text-light group-hover:text-hog-green-400 transition font-display whitespace-nowrap">
                    {s.name}
                  </p>
                  <p className="text-hog-text-ghost text-[9px] font-black uppercase tracking-widest mt-2 opacity-60 group-hover:opacity-100 transition-opacity">{s.handle}</p>
                </div>
              </a>
            ))}
          </div>
          <p className="text-hog-text-ghost text-[10px] mt-10 italic">
            * Update social media handles and URLs via antigravity.
          </p>
        </div>
      </section>
    </div>
  );
}
