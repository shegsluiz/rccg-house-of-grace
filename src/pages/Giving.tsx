// src/pages/Giving.tsx
// Brand: bg-black, Inter + Space Grotesk, green-emerald gradient, orange-red secondary, glassmorphism cards

const givingCategories = [
  {
    title: "Tithes",
    description:
      "Honouring God with the first tenth of your income is an act of faith and obedience. Bring your tithes as an expression of trust in God's provision over your life.",
    scripture: "Malachi 3:10",
    accent: "bg-hog-green-500",
  },
  {
    title: "Offerings",
    description:
      "Above your tithe, give freely as the Lord leads your heart. Every offering sown into the house of God is a seed that returns a harvest of blessings.",
    scripture: "2 Corinthians 9:7",
    accent: "bg-hog-green-500",
  },
  {
    title: "Building Fund",
    description:
      "Partner with us in building and maintaining a house worthy of God's presence. Your contribution to the building fund is an investment in the work of the Kingdom.",
    scripture: "Haggai 1:8",
    accent: "bg-hog-green-500",
  },
  {
    title: "Special Seeds",
    description:
      "Plant a special seed of faith towards a specific prayer point or desire. God honours seeds sown in faith with a harvest that exceeds your imagination.",
    scripture: "Genesis 8:22",
    accent: "bg-hog-green-500",
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
    <div className="bg-hog-black text-hog-text-light min-h-screen font-sans selection:bg-hog-green-100">

      {/* ── Hero ── */}
      <section className="hog-section-black relative pt-48 pb-32 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=2000&auto=format&fit=crop" 
          alt="Giving background" 
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-50 brightness-125 contrast-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-hog-black/20 via-hog-black/40 to-transparent pointer-events-none z-10" />
        <div className="absolute inset-0 bg-hog-green-600/5 mix-blend-overlay pointer-events-none z-10" />
        <div className="relative z-10 container-wide text-center">
          <p className="hog-eyebrow mb-4">
            Give & Be Blessed
          </p>
          <h1 className="hog-heading text-4xl sm:text-6xl md:text-7xl mb-6">
            Honour God{" "}
            <span className="text-hog-green-400">
              With Your Giving
            </span>
          </h1>
          <div className="hog-rule mx-auto mb-6" />
          <p className="hog-body text-lg max-w-2xl mx-auto italic">
            "Bring the whole tithe into the storehouse, that there may be food
            in my house. Test me in this," says the Lord Almighty, "and see if
            I will not throw open the floodgates of heaven and pour out so much
            blessing that there will not be room enough to store it."
          </p>
          <p className="text-hog-text-ghost text-sm mt-3 italic font-medium">— Malachi 3:10</p>
        </div>
      </section>

      {/* ── Giving Categories ── */}
      <section className="hog-section-cream py-20">
        <div className="container-wide">
          <p className="hog-eyebrow mb-2">
            Ways To Give
          </p>
          <h2 className="hog-heading text-3xl mb-10">
            Giving Categories
          </h2>
          <div className="grid sm:grid-cols-2 gap-8">
            {givingCategories.map((cat) => (
              <div
                key={cat.title}
                className="hog-card p-8 group"
              >
                <div className={`w-12 h-1.5 ${cat.accent} rounded-full mb-6`} />
                <h3 className="text-2xl font-bold mb-3 text-hog-text-dark group-hover:text-hog-green-600 transition font-display">
                  {cat.title}
                </h3>
                <p className="hog-body text-sm mb-4">
                  {cat.description}
                </p>
                <p className="text-xs font-bold uppercase tracking-widest text-hog-text-ghost italic">
                  {cat.scripture}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bank Details ── */}
      <section className="hog-section-white py-20">
        <div className="container-wide max-w-4xl">
          <div className="hog-card p-8 md:p-12">
            <p className="hog-eyebrow mb-2">
              Bank Transfer
            </p>
            <h2 className="hog-heading text-3xl mb-4">
              Give Directly
            </h2>
            <p className="hog-body text-sm mb-10">
              Transfer directly to our church account using the details below.
              Please use your full name as the payment reference.
            </p>
            <div className="divide-y divide-hog-green-100/10">
              {bankDetails.map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-5 gap-2"
                >
                  <span className="text-hog-text-ghost text-xs font-black uppercase tracking-widest">
                    {item.label}
                  </span>
                  <span className="text-hog-text-dark font-bold text-lg">{item.value}</span>
                </div>
              ))}
            </div>
            <p className="text-hog-text-ghost text-xs mt-8 italic font-medium">
              * Bank details will be updated via antigravity. Please confirm
              with the church office before any transfer.
            </p>
          </div>
        </div>
      </section>

      {/* ── RCCG Online Giving ── */}
      <section className="hog-section-cream py-20">
        <div className="container-wide">
          <p className="hog-eyebrow mb-2">
            Online Giving
          </p>
          <h2 className="hog-heading text-3xl mb-8">
            Give Through RCCG HQ
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                title: "General Offering",
                desc: "Give your regular tithes and offerings through the RCCG secure payment portal.",
                link: "https://rccgpayments.trccg.org/holyGhost/trccg.org/offering.php",
                label: "Give Here",
                accent: "bg-hog-green-500",
              },
              {
                title: "Nehemiah Builders",
                desc: "Partner in the building of God's house across the nation and the world.",
                link: "https://rccgpayments.trccg.org/nb/",
                label: "Nehemiah Builders",
                accent: "bg-hog-green-500",
              },
              {
                title: "Covenant Partners",
                desc: "Become a covenant partner with RCCG and share in the global harvest of souls.",
                link: "https://rccgpayments.trccg.org/cp/",
                label: "Covenant Partners",
                accent: "bg-hog-green-500",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="hog-card p-8 flex flex-col gap-4 group"
              >
                <div className={`w-12 h-1.5 ${item.accent} rounded-full`} />
                <h3 className="text-xl font-bold text-hog-text-dark group-hover:text-hog-green-600 transition font-display">
                  {item.title}
                </h3>
                <p className="hog-body text-sm flex-1">
                  {item.desc}
                </p>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="hog-btn-outline-dark py-2.5 px-6 text-xs text-center"
                >
                  {item.label} ↗
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimony ── */}
      <section className="hog-section-black py-20">
        <div className="container-wide max-w-3xl text-center">
          <div className="hog-card bg-hog-black-card border-hog-black-border p-10 md:p-16 relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-hog-green-500 rounded-full flex items-center justify-center text-white text-3xl shadow-xl">
              “
            </div>
            <p className="hog-eyebrow text-hog-green-400 mb-8 mt-4">
              Praise Report
            </p>
            <p className="text-2xl md:text-3xl font-medium leading-relaxed text-hog-text-light italic mb-8 font-display">
              {testimony.quote}
            </p>
            <p className="text-hog-green-400 font-bold tracking-widest uppercase text-xs">{testimony.name}</p>
            <p className="text-hog-text-ghost text-[10px] mt-6 italic">
              * Real testimony will be updated.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
