// src/pages/Events.tsx
// Brand: bg-black, Inter + Space Grotesk, green-emerald gradient, orange-red secondary, glassmorphism cards

const regularPrograms = [
  {
    name: "Kingdom Cinema (First Service)",
    day: "Every Sunday",
    time: "7:45 AM - 9:00 AM",
    description: "Join our creative expression of the word of God through film, visuals, and storytelling.",
    accent: "from-green-500 to-emerald-500",
  },
  {
    name: "Sunday School",
    day: "Every Sunday",
    time: "9:00 AM - 9:30 AM",
    description: "Interactive study of God's Word to build a strong foundation for your faith.",
    accent: "from-orange-500 to-red-500",
  },
  {
    name: "Celebration Service",
    day: "Every Sunday",
    time: "9:35 AM - 11:00 AM",
    description: "Experience dynamic worship, powerful preaching, and heartfelt fellowship.",
    accent: "from-green-500 to-emerald-500",
  },
  {
    name: "Digging Deep",
    day: "Every Tuesday",
    time: "6:30 PM - 8:00 PM",
    description: "A deep dive into the Bible to grow in wisdom and understanding of scripture.",
    accent: "from-green-500 to-emerald-500",
  },
  {
    name: "Faith Clinic",
    day: "Every Thursday",
    time: "6:30 PM - 8:00 PM",
    description: "A time of intense prayer, healing, and spiritual empowerment.",
    accent: "from-orange-500 to-red-500",
  },
  {
    name: "Zion Hour",
    day: "3rd Saturday",
    time: "7:00 AM - 9:00 AM",
    description: "Early morning prophetic encounter to set the pace for your month.",
    accent: "from-orange-500 to-red-500",
  },
];

const upcomingEvents = [
  {
    title: "Thanksgiving Sunday",
    date: "1st Sunday",
    time: "9:35 AM",
    type: "Thanksgiving",
    description: "Join us every first Sunday of the month as we lift up our voices in gratitude and celebrate God's faithfulness in our lives.",
    accent: "from-green-500 to-emerald-500",
  },
  {
    title: "Monthly Holy Ghost Service (May Edition)",
    date: "1st Friday",
    time: "6:00 PM",
    type: "Prayer",
    description: "Theme: 'Excellent Counsel'. A powerful night of worship, the Word, and divine encounters with the Holy Spirit. Join us onsite or connect from anywhere as we experience God's guidance and grace.",
    accent: "from-orange-500 to-red-500",
    image: "https://www.rccg.org/wp-content/uploads/2026/04/banner-1024x512.jpg",
  },
  {
    title: "Zonal Conference",
    date: "Coming Soon",
    time: "TBA",
    type: "Special",
    description: "Stay tuned for updates on our upcoming Zonal gathering, featuring guest ministers and transformative worship sessions.",
    accent: "from-green-500 to-emerald-500",
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
    <div className="bg-black text-white min-h-screen font-sans">

      {/* ── Hero ── */}
      <section className="relative py-32 px-6 md:px-20 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-black to-black pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="text-sm font-bold uppercase tracking-widest text-green-300 mb-4">
            What's Happening
          </p>
          <h1
            className="text-5xl md:text-7xl font-bold mb-6"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Events &{" "}
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Programmes
            </span>
          </h1>
          <div className="w-12 h-1 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full mx-auto mb-6" />
          <p className="text-gray-400 text-lg leading-relaxed">
            There is always something happening at House of Grace. From weekly
            services to special programmes, find an event and come and
            experience God with us.
          </p>
        </div>
      </section>

      {/* ── Regular Programs ── */}
      <section className="px-6 md:px-20 pb-20">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-bold uppercase tracking-widest text-green-300 mb-2">
            Weekly Schedule
          </p>
          <h2
            className="text-3xl font-bold mb-10 text-white"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Regular Programmes
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {regularPrograms.map((prog) => (
              <div
                key={prog.name}
                className="bg-black border border-zinc-700 shadow-sm rounded-3xl p-8 hover:shadow-md hover:border-green-500/30 transition flex gap-6 items-start group"
              >
                <div className="shrink-0 text-center w-28">
                  <div
                    className={`text-[10px] font-bold uppercase tracking-widest bg-gradient-to-r ${prog.accent} bg-clip-text text-transparent`}
                  >
                    {prog.day}
                  </div>
                  <div
                    className="text-lg md:text-xl font-bold mt-1 text-white"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {prog.time}
                  </div>
                </div>
                <div>
                  <div className={`w-8 h-0.5 bg-gradient-to-r ${prog.accent} rounded-full mb-3`} />
                  <h3
                    className="font-bold text-lg mb-2 text-white group-hover:text-green-300 transition"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {prog.name}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {prog.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Upcoming Events ── */}
      <section className="px-6 md:px-20 pb-20">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-bold uppercase tracking-widest text-green-300 mb-2">
            Coming Up
          </p>
          <h2
            className="text-3xl font-bold mb-10 text-white"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Upcoming Events
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {upcomingEvents.map((ev, i) => (
              <div
                key={i}
                className="bg-black border border-zinc-700 shadow-sm rounded-3xl hover:shadow-md hover:border-green-500/30 transition flex flex-col group overflow-hidden"
              >
                {(ev as any).image && (
                  <div className="w-full aspect-video overflow-hidden border-b border-zinc-800">
                    <img src={(ev as any).image} alt={ev.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                )}
                <div className="p-8 flex flex-col gap-4 flex-1">
                  <div>
                    <span
                      className={`text-xs font-bold uppercase tracking-widest bg-gradient-to-r ${ev.accent} bg-clip-text text-transparent`}
                    >
                      {ev.type}
                    </span>
                    <h3
                      className="text-xl font-bold mt-2 mb-1 text-white group-hover:text-green-300 transition"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {ev.title}
                    </h3>
                    <p className="text-gray-500 text-xs font-medium">
                      {ev.date} · {ev.time}
                    </p>
                  </div>
                  <div className={`w-10 h-0.5 bg-gradient-to-r ${ev.accent} rounded-full`} />
                  <p className="text-gray-400 text-sm leading-relaxed flex-1">
                    {ev.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RCCG HQ Events ── */}
      <section className="px-6 md:px-20 pb-28">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-bold uppercase tracking-widest text-green-300 mb-2">
            The Bigger Family
          </p>
          <h2
            className="text-3xl font-bold mb-4 text-white"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            RCCG Global Events
          </h2>
          <p className="text-gray-400 text-sm mb-10 max-w-xl leading-relaxed">
            As part of the worldwide RCCG family, House of Grace participates
            in the major annual gatherings that draw millions of believers from
            across the globe.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {rccgEvents.map((ev) => (
              <a
                key={ev.title}
                href={ev.link}
                target="_blank"
                rel="noreferrer"
                className="bg-black border border-zinc-700 shadow-sm rounded-3xl p-8 hover:shadow-md hover:border-green-500/30 transition flex flex-col gap-4 group"
              >
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold uppercase tracking-widest text-gray-500">
                    {ev.month}
                  </span>
                  <span className="text-green-400 text-xs group-hover:translate-x-1 transition-transform">
                    ↗
                  </span>
                </div>
                <div className="w-10 h-0.5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full" />
                <h3
                  className="font-bold text-lg text-white group-hover:text-green-400 transition"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {ev.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{ev.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
