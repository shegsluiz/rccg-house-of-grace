// src/pages/Connect.tsx
// Brand: bg-black, Inter + Space Grotesk, green-emerald gradient, orange-red secondary, glassmorphism cards

import { useState, ChangeEvent, FormEvent } from "react";

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
  { name: "Instagram", handle: "@rccghoga14", url: "https://www.instagram.com/rccghoga14/", color: "bg-hog-green-500" },
  { name: "Facebook", handle: "RCCG House of Grace", url: "https://www.facebook.com/rccghoga14", color: "bg-hog-green-500" },
  { name: "TikTok", handle: "@rccghouseofgracelp15", url: "https://www.tiktok.com/@rccghouseofgracelp15", color: "bg-hog-green-500" },
  { name: "YouTube", handle: "@rccghouseofgrace5858", url: "https://www.youtube.com/@rccghouseofgrace5858", color: "bg-hog-green-500" },
  { name: "WhatsApp Community", handle: "Join our group", url: "https://wa.me/", color: "bg-hog-green-500" },
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
      <section className="hog-section-black relative pt-48 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-hog-green-800/10 via-hog-black/60 to-transparent pointer-events-none" />
        <div className="relative z-10 container-wide text-center">
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
        </div>
      </section>

      {/* ── New Here? ── */}
      <section className="hog-section-cream py-20">
        <div className="container-wide">
          <div className="hog-card p-8 sm:p-12 md:p-16 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="hog-eyebrow mb-3">
                First Time Visiting?
              </p>
              <h2 className="hog-heading text-3xl md:text-4xl mb-6">
                Here is what to expect when you visit us
              </h2>
              <p className="hog-body text-sm">
                We want your first visit to feel warm, easy, and memorable.
                From the moment you arrive, you will be welcomed by friendly
                faces who are genuinely glad you are here.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              {[
                { num: "01", title: "Arrive & Be Welcomed", body: "Our welcome team will greet you at the door and help you find your seat. No need to dress a certain way — come as you are." },
                { num: "02", title: "Worship & The Word", body: "Experience vibrant praise and worship followed by a practical, Bible-based message that speaks to your everyday life." },
                { num: "03", title: "Meet The Family", body: "After service, take a moment to connect with our pastoral team and members. We have a space set aside just for first-timers." },
              ].map((step) => (
                <div key={step.num} className="flex gap-5 items-start bg-hog-green-100/5 p-6 rounded-2xl border border-hog-green-100/10">
                  <span className="text-3xl font-black text-hog-green-600/30 shrink-0 font-display">
                    {step.num}
                  </span>
                  <div>
                    <h3 className="font-bold text-hog-text-dark text-base mb-1">{step.title}</h3>
                    <p className="hog-body text-sm">{step.body}</p>
                  </div>
                </div>
              ))}
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
            {socialLinks.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                className="hog-card bg-hog-black-card border-hog-black-border p-8 flex flex-col gap-4 group"
              >
                <div className={`w-10 h-1.5 ${s.color} rounded-full`} />
                <div>
                  <p className="font-bold text-base text-hog-text-light group-hover:text-hog-green-400 transition font-display">
                    {s.name}
                  </p>
                  <p className="text-hog-text-ghost text-[10px] font-black uppercase tracking-tighter mt-1">{s.handle}</p>
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
