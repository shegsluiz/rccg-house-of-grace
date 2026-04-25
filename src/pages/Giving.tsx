// src/pages/Giving.tsx
// Brand: bg-black, Inter + Space Grotesk, green-emerald gradient, orange-red secondary, glassmorphism cards

const givingCategories = [
  {
    title: "Tithes",
    description:
      "Honouring God with the first tenth of your income is an act of faith and obedience. Bring your tithes as an expression of trust in God's provision over your life.",
    scripture: "Malachi 3:10",
    accent: "from-green-500 to-emerald-500",
  },
  {
    title: "Offerings",
    description:
      "Above your tithe, give freely as the Lord leads your heart. Every offering sown into the house of God is a seed that returns a harvest of blessings.",
    scripture: "2 Corinthians 9:7",
    accent: "from-green-500 to-emerald-500",
  },
  {
    title: "Building Fund",
    description:
      "Partner with us in building and maintaining a house worthy of God's presence. Your contribution to the building fund is an investment in the work of the Kingdom.",
    scripture: "Haggai 1:8",
    accent: "from-orange-500 to-red-500",
  },
  {
    title: "Special Seeds",
    description:
      "Plant a special seed of faith towards a specific prayer point or desire. God honours seeds sown in faith with a harvest that exceeds your imagination.",
    scripture: "Genesis 8:22",
    accent: "from-orange-500 to-red-500",
  },
];

const bankDetails = [
  {
    label: "Account Name",
    value: "RCCG House of Grace", // ← confirm exact account name
  },
  {
    label: "Account Number",
    value: "Add Account Number", // ← add via antigravity
  },
  {
    label: "Bank",
    value: "Add Bank Name", // ← add via antigravity
  },
  {
    label: "Sort Code / Branch",
    value: "Add if applicable",
  },
];

const testimony = {
  quote:
    "I gave a seed of faith in obedience to God's leading, and within weeks He had opened a door I had been waiting years for. To God be the glory.",
  name: "— A Member of House of Grace",
};

export default function Giving() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">

      {/* ── Hero ── */}
      <section className="relative py-32 px-6 md:px-20 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-black to-black pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="text-sm font-bold uppercase tracking-widest text-green-300 mb-4">
            Give & Be Blessed
          </p>
          <h1
            className="text-5xl md:text-7xl font-bold mb-6"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Honour God{" "}
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              With Your Giving
            </span>
          </h1>
          <div className="w-12 h-1 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full mx-auto mb-6" />
          <p className="text-gray-400 text-lg leading-relaxed">
            "Bring the whole tithe into the storehouse, that there may be food
            in my house. Test me in this," says the Lord Almighty, "and see if
            I will not throw open the floodgates of heaven and pour out so much
            blessing that there will not be room enough to store it."
          </p>
          <p className="text-gray-500 text-sm mt-3 italic">— Malachi 3:10</p>
        </div>
      </section>

      {/* ── Giving Categories ── */}
      <section className="px-6 md:px-20 pb-20">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-bold uppercase tracking-widest text-green-300 mb-2">
            Ways To Give
          </p>
          <h2
            className="text-3xl font-bold mb-10 text-white"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Giving Categories
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {givingCategories.map((cat) => (
              <div
                key={cat.title}
                className="bg-black border border-zinc-700 shadow-sm rounded-3xl p-8 hover:shadow-md hover:border-green-500/30 transition group"
              >
                <div
                  className={`w-10 h-1 bg-gradient-to-r ${cat.accent} rounded-full mb-5`}
                />
                <h3
                  className="text-xl font-bold mb-3 text-white group-hover:text-green-300 transition"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {cat.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {cat.description}
                </p>
                <p className="text-xs font-bold uppercase tracking-widest text-gray-500 italic">
                  {cat.scripture}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bank Details ── */}
      <section className="px-6 md:px-20 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-zinc-900 border border-zinc-700 shadow-sm rounded-3xl p-10">
            <p className="text-sm font-bold uppercase tracking-widest text-green-300 mb-2">
              Bank Transfer
            </p>
            <h2
              className="text-3xl font-bold mb-2 text-white"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Give Directly
            </h2>
            <p className="text-gray-400 text-sm mb-8">
              Transfer directly to our church account using the details below.
              Please use your full name as the payment reference.
            </p>
            <div className="divide-y divide-gray-200">
              {bankDetails.map((item) => (
                <div
                  key={item.label}
                  className="flex justify-between items-center py-4"
                >
                  <span className="text-gray-500 text-sm uppercase tracking-widest text-xs font-bold">
                    {item.label}
                  </span>
                  <span className="text-white font-semibold">{item.value}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-500 text-xs mt-6 italic">
              * Bank details will be updated via antigravity. Please confirm
              with the church office before any transfer.
            </p>
          </div>
        </div>
      </section>

      {/* ── RCCG Online Giving ── */}
      <section className="px-6 md:px-20 pb-20">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-bold uppercase tracking-widest text-green-300 mb-2">
            Online Giving
          </p>
          <h2
            className="text-3xl font-bold mb-6 text-white"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Give Through RCCG HQ
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "General Offering",
                desc: "Give your regular tithes and offerings through the RCCG secure payment portal.",
                link: "https://rccgpayments.trccg.org/holyGhost/trccg.org/offering.php",
                label: "Give Here",
                accent: "from-green-500 to-emerald-500",
              },
              {
                title: "Nehemiah Builders",
                desc: "Partner in the building of God's house across the nation and the world.",
                link: "https://rccgpayments.trccg.org/nb/",
                label: "Nehemiah Builders",
                accent: "from-orange-500 to-red-500",
              },
              {
                title: "Covenant Partners",
                desc: "Become a covenant partner with RCCG and share in the global harvest of souls.",
                link: "https://rccgpayments.trccg.org/cp/",
                label: "Covenant Partners",
                accent: "from-green-500 to-emerald-500",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-black border border-zinc-700 shadow-sm rounded-3xl p-8 hover:shadow-md hover:border-green-500/30 transition flex flex-col gap-4 group"
              >
                <div
                  className={`w-10 h-1 bg-gradient-to-r ${item.accent} rounded-full`}
                />
                <h3
                  className="text-lg font-bold text-white group-hover:text-green-300 transition"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed flex-1">
                  {item.desc}
                </p>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block text-center px-5 py-2.5 rounded-full border border-zinc-700 shadow-sm text-sm text-white hover:bg-zinc-900 transition"
                >
                  {item.label} ↗
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimony ── */}
      <section className="px-6 md:px-20 pb-28">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-green-900/20 border border-green-100 shadow-sm rounded-3xl p-10">
            <p className="text-sm font-bold uppercase tracking-widest text-green-300 mb-6">
              Praise Report
            </p>
            <p
              className="text-xl md:text-2xl font-light leading-relaxed text-zinc-800 italic mb-6"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              "{testimony.quote}"
            </p>
            <p className="text-gray-400 font-medium text-sm">{testimony.name}</p>
            <p className="text-gray-400 text-xs mt-2">
              * Replace with a real testimony via antigravity.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
