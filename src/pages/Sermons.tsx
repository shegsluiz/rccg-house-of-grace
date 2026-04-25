// src/pages/Sermons.tsx
// Brand: bg-black, Inter + Space Grotesk, green-emerald gradient accents, glassmorphism cards

const sermons = [
  {
    title: "Add Sermon Title",
    preacher: "Pastor — Add Name",
    date: "Add Date",
    scripture: "Add Scripture Reference",
    series: "Add Series Name",
    youtubeId: "YOUR_YOUTUBE_ID", // ← replace with real YouTube video ID
  },
  {
    title: "Add Sermon Title",
    preacher: "Pastor — Add Name",
    date: "Add Date",
    scripture: "Add Scripture Reference",
    series: "Add Series Name",
    youtubeId: "YOUR_YOUTUBE_ID",
  },
  {
    title: "Add Sermon Title",
    preacher: "Pastor — Add Name",
    date: "Add Date",
    scripture: "Add Scripture Reference",
    series: "Add Series Name",
    youtubeId: "YOUR_YOUTUBE_ID",
  },
];

export default function Sermons() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">

      {/* ── Hero ── */}
      <section className="relative py-32 px-6 md:px-20 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-black to-black pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="text-sm font-bold uppercase tracking-widest text-green-300 mb-4">
            Hear The Word
          </p>
          <h1
            className="text-5xl md:text-7xl font-bold mb-6"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Sermons &{" "}
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Messages
            </span>
          </h1>
          <div className="w-12 h-1 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full mx-auto mb-6" />
          <p className="text-gray-400 text-lg leading-relaxed">
            Every message preached at RCCG House of Grace is rooted in
            Scripture and designed to strengthen your faith, transform your
            thinking, and equip you for everyday life.
          </p>
        </div>
      </section>

      {/* ── Featured Sermon ── */}
      <section className="px-6 md:px-20 pb-20">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-bold uppercase tracking-widest text-green-300 mb-8">
            Latest Message
          </p>
          <div className="grid md:grid-cols-2 gap-10 items-center bg-zinc-900 border border-zinc-700 shadow-sm rounded-3xl p-8 md:p-12 hover:shadow-md transition">
            {/* Video embed — replace YOUR_YOUTUBE_ID */}
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-black border border-zinc-700 shadow-sm flex items-center justify-center">
              {/* Uncomment once you have a real YouTube ID:
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/YOUR_YOUTUBE_ID"
                title="Latest Sermon"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              /> */}
              <div className="text-center text-gray-500">
                <div className="w-16 h-16 rounded-full border border-zinc-700 flex items-center justify-center mx-auto mb-3 text-2xl bg-black shadow-sm">
                  ▶
                </div>
                <p className="text-xs uppercase tracking-widest">Find ID at @rccghouseofgrace5858</p>
              </div>
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">
                Add Series Name
              </span>
              <h2
                className="text-3xl md:text-4xl font-bold mt-3 mb-4 leading-tight text-white"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Add Latest Sermon Title Here
              </h2>
              <p className="text-gray-400 text-sm mb-1">Pastor — Add Name</p>
              <p className="text-gray-500 text-sm italic mb-6">Add Scripture Reference</p>
              <p className="text-gray-400 leading-relaxed text-sm">
                Add a short description or summary of this sermon. What is the
                key message? What will listeners take away? You can add this
                via antigravity.
              </p>
              <a
                href="https://www.youtube.com/@rccghouseofgrace5858"
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-6 px-6 py-3 rounded-full bg-gradient-to-r from-green-600 to-emerald-600 text-white text-sm font-bold hover:scale-105 transition-all duration-300 shadow-[0_4px_14px_0_rgba(34,197,94,0.39)] hover:shadow-[0_6px_20px_rgba(34,197,94,0.23)] uppercase tracking-wide"
              >
                Watch on YouTube →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Sermon Archive ── */}
      <section className="px-6 md:px-20 pb-20">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-bold uppercase tracking-widest text-green-300 mb-2">
            Message Archive
          </p>
          <h2
            className="text-3xl font-bold mb-10 text-white"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Past Sermons
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {sermons.map((s, i) => (
              <div
                key={i}
                className="bg-black border border-zinc-700 shadow-sm rounded-3xl p-6 hover:shadow-md hover:border-green-500/30 transition flex flex-col gap-3 group"
              >
                {/* Thumbnail placeholder */}
                <div className="aspect-video rounded-xl bg-zinc-900 border border-zinc-700 flex items-center justify-center text-gray-400 text-xs uppercase tracking-widest">
                  Thumbnail
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-green-400">
                  {s.series}
                </span>
                <h3
                  className="text-lg font-bold leading-snug text-white group-hover:text-green-300 transition"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {s.title}
                </h3>
                <p className="text-gray-400 text-sm">{s.preacher}</p>
                <p className="text-gray-500 text-xs italic">{s.scripture}</p>
                <p className="text-gray-400 text-xs">{s.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── External Resources ── */}
      <section className="px-6 md:px-20 pb-28">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-bold uppercase tracking-widest text-green-300 mb-2">
            More Resources
          </p>
          <h2
            className="text-3xl font-bold mb-10 text-white"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            From The RCCG Family
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <a
              href="https://eopenheavens.com"
              target="_blank"
              rel="noreferrer"
              className="bg-black border border-zinc-700 shadow-sm rounded-3xl p-8 hover:shadow-md hover:border-green-500/30 transition flex gap-5 items-start group"
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white font-bold text-sm shrink-0">
                OH
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1 text-white group-hover:text-green-300 transition">
                  Open Heavens Daily Devotional
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Daily devotional messages by Pastor E.A. Adeboye to keep you
                  grounded in God's Word every morning.
                </p>
                <span className="text-green-400 font-medium text-xs mt-3 inline-block">
                  eopenheavens.com ↗
                </span>
              </div>
            </a>
            <a
              href="https://www.rccg.org/redemption-tv/"
              target="_blank"
              rel="noreferrer"
              className="bg-black border border-zinc-700 shadow-sm rounded-3xl p-8 hover:shadow-md hover:border-green-500/30 transition flex gap-5 items-start group"
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-white font-bold text-sm shrink-0">
                TV
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1 text-white group-hover:text-green-300 transition">
                  Redemption TV
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Watch live RCCG services, Holy Ghost Congress, and special
                  programmes from the General Overseer and RCCG worldwide.
                </p>
                <span className="text-green-400 font-medium text-xs mt-3 inline-block">
                  rccg.org/redemption-tv ↗
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
