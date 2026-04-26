// src/pages/Events.tsx
// Brand: bg-black, Inter + Space Grotesk, green-emerald gradient, orange-red secondary, glassmorphism cards

const regularPrograms = [
  {
    name: "Kingdom Cinema (First Service)",
    day: "Every Sunday",
    time: "7:45 AM - 9:00 AM",
    description: "Join our creative expression of the word of God through film, visuals, and storytelling.",
    accent: "text-hog-green-500",
    image: "/Kingdom.Cinema 2.jpg",
  },
  {
    name: "Sunday School",
    day: "Every Sunday",
    time: "9:00 AM - 9:30 AM",
    description: "Interactive study of God's Word to build a strong foundation for your faith.",
    accent: "text-hog-green-500",
  },
  {
    name: "Celebration Service",
    day: "Every Sunday",
    time: "9:35 AM - 11:00 AM",
    description: "Experience dynamic worship, powerful preaching, and heartfelt fellowship.",
    accent: "text-hog-green-500",
  },
  {
    name: "Digging Deep",
    day: "Every Tuesday",
    time: "6:30 PM - 8:00 PM",
    description: "A deep dive into the Bible to grow in wisdom and understanding of scripture.",
    accent: "text-hog-green-500",
  },
  {
    name: "Faith Clinic",
    day: "Every Thursday",
    time: "6:30 PM - 8:00 PM",
    description: "A time of intense prayer, healing, and spiritual empowerment.",
    accent: "text-hog-green-500",
  },
  {
    name: "Zion Hour",
    day: "3rd Saturday",
    time: "7:00 AM - 9:00 AM",
    description: "Early morning prophetic encounter to set the pace for your month.",
    accent: "text-hog-green-500",
  },
];

const upcomingEvents = [
  {
    title: "Kingdom Cinema",
    date: "Saturdays",
    time: "4:00 PM",
    type: "Cinema",
    description: "Experience the power of storytelling and faith-based cinema. Join us for an inspiring movie experience that brings the Word to life.",
    accent: "text-hog-green-500",
    image: "/Kingdom.Cinema 2.jpg",
  },
  {
    title: "Thanksgiving Sunday",
    date: "1st Sunday",
    time: "9:35 AM",
    type: "Thanksgiving",
    description: "Join us every first Sunday of the month as we lift up our voices in gratitude and celebrate God's faithfulness in our lives.",
    accent: "text-hog-green-500",
    image: "/Thanksgiving Post.png",
  },
  {
    title: "Monthly Holy Ghost Service",
    date: "1st Friday",
    time: "6:00 PM",
    type: "Prayer",
    description: "Theme: 'Excellent Counsel'. A powerful night of worship, the Word, and divine encounters with the Holy Spirit.",
    accent: "text-hog-green-500",
    image: "https://www.rccg.org/wp-content/uploads/2026/04/banner-1024x512.jpg",
  },
  {
    title: "Zonal Conference",
    date: "Coming Soon",
    time: "TBA",
    type: "Special",
    description: "Stay tuned for updates on our upcoming Zonal gathering, featuring guest ministers and transformative worship sessions.",
    accent: "text-hog-green-500",
  },
];

const rccgEvents = [
  {
    title: "Special Holy Ghost Service",
    desc: "A massive global gathering held in March at Redemption City for divine impartations and breakthrough prayers.",
    link: "https://www.rccg.org",
    month: "March 5–8, 2026",
  },
  {
    title: "RCCG Annual Convention",
    desc: "The annual convention is a Spirit-filled week of worship, seminars, and life-transforming messages.",
    link: "https://www.rccg.org",
    month: "August 3–9, 2026",
  },
  {
    title: "Holy Ghost Congress",
    desc: "The annual global gathering closing out the year — a time of intensive prayer, worship, and divine encounters.",
    link: "https://www.rccg.org",
    month: "Dec 7–13, 2026",
  },
];

export default function Events() {
  return (
    <div className="bg-hog-black text-hog-text-light min-h-screen font-sans selection:bg-hog-green-100">

      {/* ── Hero ── */}
      <section className="hog-section-black relative pt-48 pb-32 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2000&auto=format&fit=crop" 
          alt="Events background" 
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-50 brightness-125 contrast-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-hog-black/20 via-hog-black/40 to-transparent pointer-events-none z-10" />
        <div className="relative z-10 container-wide text-center">
          <p className="hog-eyebrow mb-4">
            What's Happening
          </p>
          <h1 className="hog-heading text-4xl sm:text-6xl md:text-7xl mb-6">
            Events &{" "}
            <span className="text-hog-green-400">
              Programmes
            </span>
          </h1>
          <div className="hog-rule mx-auto mb-6" />
          <p className="hog-body text-lg max-w-2xl mx-auto">
            There is always something happening at House of Grace. From weekly
            services to special programmes, find an event and come and
            experience God with us.
          </p>
        </div>
      </section>

      {/* ── Regular Programs ── */}
      <section className="hog-section-cream py-20">
        <div className="container-wide">
          <p className="hog-eyebrow mb-2">
            Weekly Schedule
          </p>
          <h2 className="hog-heading text-3xl mb-10">
            Regular Programmes
          </h2>
          <div className="grid sm:grid-cols-2 gap-8">
            {regularPrograms.map((prog) => (
              <div
                key={prog.name}
                className="hog-card flex flex-col group overflow-hidden"
              >
                {(prog as any).image && (
                  <div className="w-full aspect-video overflow-hidden border-b border-hog-green-100/10">
                    <img src={(prog as any).image} alt={prog.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                )}
                <div className="p-8 flex flex-col sm:flex-row gap-8 items-start">
                <div className="shrink-0 text-left sm:text-center w-full sm:w-32">
                  <div className={`text-[10px] font-black uppercase tracking-widest ${prog.accent} mb-1`}>
                    {prog.day}
                  </div>
                  <div className="text-xl font-black text-hog-text-dark font-display">
                    {prog.time}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="w-8 h-1 bg-hog-green-500 rounded-full mb-4" />
                  <h3 className="font-bold text-xl mb-2 text-hog-text-dark group-hover:text-hog-green-600 transition font-display">
                    {prog.name}
                  </h3>
                  <p className="hog-body text-sm">
                    {prog.description}
                  </p>
                </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Upcoming Events ── */}
      <section className="hog-section-white py-20">
        <div className="container-wide">
          <p className="hog-eyebrow mb-2">
            Coming Up
          </p>
          <h2 className="hog-heading text-3xl mb-10">
            Upcoming Events
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {upcomingEvents.map((ev, i) => (
              <div
                key={i}
                className="hog-card flex flex-col group overflow-hidden"
              >
                {(ev as any).image && (
                  <div className="w-full aspect-video overflow-hidden border-b border-hog-green-100/10">
                    <img src={(ev as any).image} alt={ev.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                )}
                <div className="p-8 flex flex-col gap-5 flex-1">
                  <div>
                    <span className={`text-[10px] font-black uppercase tracking-widest ${ev.accent}`}>
                      {ev.type}
                    </span>
                    <h3 className="text-2xl font-bold mt-2 mb-2 text-hog-text-dark group-hover:text-hog-green-600 transition font-display leading-tight">
                      {ev.title}
                    </h3>
                    <p className="text-hog-text-ghost text-xs font-bold tracking-widest uppercase">
                      {ev.date} · {ev.time}
                    </p>
                  </div>
                  <div className="w-10 h-1 bg-hog-green-500 rounded-full" />
                  <p className="hog-body text-sm flex-1 leading-relaxed">
                    {ev.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RCCG HQ Events ── */}
      <section className="hog-section-black py-20 pb-32">
        <div className="container-wide">
          <p className="hog-eyebrow text-hog-green-400 mb-2">
            The Bigger Family
          </p>
          <h2 className="hog-heading text-3xl mb-4">
            RCCG Global Events
          </h2>
          <p className="hog-body text-sm mb-12 max-w-xl opacity-80">
            As part of the worldwide RCCG family, House of Grace participates
            in the major annual gatherings that draw millions of believers from
            across the globe.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {rccgEvents.map((ev) => (
              <a
                key={ev.title}
                href={ev.link}
                target="_blank"
                rel="noreferrer"
                className="hog-card bg-hog-black-card border-hog-black-border p-8 md:p-10 flex flex-col gap-6 group"
              >
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-black uppercase tracking-widest text-hog-text-ghost">
                    {ev.month}
                  </span>
                  <span className="text-hog-green-400 text-xs group-hover:translate-x-1 transition-transform">
                    ↗
                  </span>
                </div>
                <div className="w-10 h-1 bg-hog-green-500 rounded-full" />
                <h3 className="font-bold text-xl text-hog-text-light group-hover:text-hog-green-400 transition font-display">
                  {ev.title}
                </h3>
                <p className="text-hog-text-ghost text-sm leading-relaxed">{ev.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
