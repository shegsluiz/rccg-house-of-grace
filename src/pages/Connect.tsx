// src/pages/Connect.tsx
// Brand: bg-black, Inter + Space Grotesk, green-pink gradient, orange-red secondary, glassmorphism cards

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
  { name: "Instagram", handle: "@rccghoga14", url: "https://www.instagram.com/rccghoga14/", color: "from-green-500 to-pink-500" },
  { name: "Facebook", handle: "RCCG House of Grace", url: "https://facebook.com/", color: "from-green-500 to-pink-500" },
  { name: "YouTube", handle: "@rccghouseofgrace5858", url: "https://www.youtube.com/@rccghouseofgrace5858", color: "from-orange-500 to-red-500" },
  { name: "WhatsApp Community", handle: "Join our group", url: "https://wa.me/", color: "from-orange-500 to-red-500" },
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
    <div className="bg-black text-white min-h-screen font-sans">

      {/* ── Hero ── */}
      <section className="relative py-32 px-6 md:px-20 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-green-900/20 via-black to-black pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="text-sm font-bold uppercase tracking-widest text-green-400 mb-4">
            We'd Love To Hear From You
          </p>
          <h1
            className="text-5xl md:text-7xl font-bold mb-6"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Get{" "}
            <span className="bg-gradient-to-r from-green-400 to-pink-500 bg-clip-text text-transparent">
              Connected
            </span>
          </h1>
          <div className="w-12 h-1 bg-gradient-to-r from-green-400 to-pink-500 rounded-full mx-auto mb-6" />
          <p className="text-zinc-400 text-lg leading-relaxed">
            Whether you are new, have a question, or want to get more involved
            — we are here and we'd love to connect with you.
          </p>
        </div>
      </section>

      {/* ── New Here? ── */}
      <section className="px-6 md:px-20 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-10 md:p-14 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-green-400 mb-3">
                First Time Visiting?
              </p>
              <h2
                className="text-3xl md:text-4xl font-bold mb-4 leading-tight"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Here is what to expect when you visit us
              </h2>
              <p className="text-zinc-400 leading-relaxed text-sm">
                We want your first visit to feel warm, easy, and memorable.
                From the moment you arrive, you will be welcomed by friendly
                faces who are genuinely glad you are here.
              </p>
            </div>
            <div className="flex flex-col gap-5">
              {[
                { num: "01", title: "Arrive & Be Welcomed", body: "Our welcome team will greet you at the door and help you find your seat. No need to dress a certain way — come as you are." },
                { num: "02", title: "Worship & The Word", body: "Experience vibrant praise and worship followed by a practical, Bible-based message that speaks to your everyday life." },
                { num: "03", title: "Meet The Family", body: "After service, take a moment to connect with our pastoral team and members. We have a space set aside just for first-timers." },
              ].map((step) => (
                <div key={step.num} className="flex gap-4 items-start">
                  <span
                    className="text-2xl font-bold bg-gradient-to-r from-green-400 to-pink-500 bg-clip-text text-transparent shrink-0"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {step.num}
                  </span>
                  <div>
                    <h3 className="font-bold text-sm mb-1">{step.title}</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact Info & Form ── */}
      <section className="px-6 md:px-20 pb-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

          {/* Contact details */}
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-green-400 mb-2">
              Find Us
            </p>
            <h2
              className="text-3xl font-bold mb-8"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Contact Information
            </h2>
            <div className="flex flex-col gap-4 mb-10">
              {contactDetails.map((item) => (
                <div
                  key={item.label}
                  className="bg-white/5 border border-white/10 rounded-2xl p-5 flex gap-4 items-start hover:bg-white/10 transition"
                >
                  <span className="text-xl">{item.icon}</span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-1">
                      {item.label}
                    </p>
                    <p className="text-white text-sm">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map */}
            <div className="rounded-3xl overflow-hidden border border-white/10 bg-white/5 h-64 md:h-80 w-full relative">
              <iframe
                src="https://maps.google.com/maps?q=RCCG%20House%20of%20Grace,%2052,%20Ajibola%20Crescent,%20Alapere,%20Ketu,%20Lagos&t=&z=16&ie=UTF8&iwloc=&output=embed"
                className="absolute inset-0 w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Contact form */}
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-green-400 mb-2">
              Send A Message
            </p>
            <h2
              className="text-3xl font-bold mb-8"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              We'll Get Back To You
            </h2>
            {!sent ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                  name="name"
                  type="text"
                  placeholder="Your full name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-green-500 transition"
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Email address"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-green-500 transition"
                />
                <input
                  name="phone"
                  type="tel"
                  placeholder="Phone number (optional)"
                  value={form.phone}
                  onChange={handleChange}
                  className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-green-500 transition"
                />
                <textarea
                  name="message"
                  placeholder="How can we help you?"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-green-500 transition resize-none"
                />
                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-gradient-to-r from-green-500 to-pink-500 text-white font-semibold text-sm hover:opacity-90 transition"
                >
                  Send Message →
                </button>
              </form>
            ) : (
              <div className="bg-white/5 border border-white/10 rounded-3xl p-10 text-center">
                <p className="text-3xl mb-4">🙏</p>
                <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  Thank you!
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Your message has been received. A member of our team will be
                  in touch with you shortly. God bless you.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── Cell Groups ── */}
      <section className="px-6 md:px-20 pb-20">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-bold uppercase tracking-widest text-green-400 mb-2">
            Grow Together
          </p>
          <h2
            className="text-3xl font-bold mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Cell Groups & Fellowships
          </h2>
          <p className="text-zinc-400 text-sm mb-10 max-w-xl leading-relaxed">
            Life is better in community. Our cell groups meet weekly in homes
            and venues across the zone — for prayer, the Word, and genuine
            fellowship.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {cellGroups.map((group) => (
              <div
                key={group.name}
                className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition"
              >
                <div className="w-10 h-1 bg-gradient-to-r from-green-500 to-pink-500 rounded-full mb-5" />
                <h3
                  className="font-bold text-lg mb-3"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {group.name}
                </h3>
                <div className="flex flex-col gap-1 text-sm text-zinc-400">
                  <p>📅 {group.day} · {group.time}</p>
                  <p>👤 {group.leader}</p>
                  <p>📍 {group.area}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-zinc-700 text-xs mt-6 italic">
            * Update cell group details via antigravity.
          </p>
        </div>
      </section>

      {/* ── Social Media ── */}
      <section className="px-6 md:px-20 pb-28">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-bold uppercase tracking-widest text-green-400 mb-2">
            Stay Connected
          </p>
          <h2
            className="text-3xl font-bold mb-10"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Follow Us Online
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {socialLinks.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition flex flex-col gap-3 group"
              >
                <div className={`w-8 h-1 bg-gradient-to-r ${s.color} rounded-full`} />
                <p className="font-bold text-sm group-hover:text-green-400 transition">
                  {s.name}
                </p>
                <p className="text-zinc-500 text-xs">{s.handle}</p>
              </a>
            ))}
          </div>
          <p className="text-zinc-700 text-xs mt-6 italic">
            * Update social media handles and URLs via antigravity.
          </p>
        </div>
      </section>
    </div>
  );
}
