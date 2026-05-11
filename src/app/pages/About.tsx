import { Logo } from "../components/Logo";

const FONT_DISPLAY = "'IBM Plex Sans', sans-serif";
const FONT_BODY = "'IBM Plex Sans', sans-serif";
const FONT_MONO = "'IBM Plex Mono', monospace";

export default function About() {
  return (
    <div className="bg-white text-[#0f0f0f] min-h-screen" style={{ fontFamily: FONT_BODY }}>

      {/* Nav */}
      <header className="border-b border-[#0f0f0f]/8">
        <div className="flex items-center justify-between px-6 md:px-10 h-12">
          <button onClick={() => window.location.href = '/'} className="flex items-center gap-2 text-xs tracking-[0.12em] uppercase text-[#0f0f0f]/50 hover:text-[#0f0f0f] transition-colors" style={{ fontFamily: FONT_MONO }}>
            <Logo size={20} color="#0f0f0f80" />
            Anna Shelegina
          </button>
          <button onClick={() => window.location.href = '/'} className="text-xs tracking-[0.1em] uppercase text-[#0f0f0f]/40 hover:text-[#0f0f0f] transition-colors" style={{ fontFamily: FONT_MONO }}>
            ← Back
          </button>
        </div>
      </header>

      <div className="px-6 md:px-10 pt-20 pb-24">

        {/* ── Hero: Photo + Bio ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[1px] bg-[#0f0f0f]/8 mb-16">

          {/* Photo Left */}
          <div className="bg-[#f4f2ed] overflow-hidden" style={{ minHeight: "500px" }}>
            <img
              src="/src/imports/Mont.png"
              alt="Anna Shelegina"
              className="w-full h-full object-cover"
              style={{ minHeight: "500px" }}
            />
          </div>

          {/* Text Right */}
          <div className="bg-white px-10 py-14 flex flex-col justify-center">
            <h1 className="font-[700] leading-[0.92] text-[#0f0f0f] mb-8"
              style={{ fontFamily: FONT_DISPLAY, fontSize: "clamp(3rem, 6vw, 5rem)" }}>
              Anna<br />Shelegina
            </h1>
            <div className="text-[10px] uppercase tracking-[0.18em] text-[#0f0f0f]/30 mb-3"
              style={{ fontFamily: FONT_MONO }}>
              Cartography · Data Visualisation · Soil Science · Ecology
            </div>
<p className="text-[15px] leading-[1.8] text-[#0f0f0f]/65 mb-6">
  I grew up in a small town near Moscow, spending my childhood wandering through forests, watching rivers, and finding wonder in the natural world. From an early age I knew I wanted to help the earth become better — and that feeling never left me.
</p>
<p className="text-[15px] leading-[1.8] text-[#0f0f0f]/65 mb-6">
  I studied Soil Science at Lomonosov Moscow State University, going on field expeditions from the southern steppes to the northern reaches of Russia. After completing my M.Sc. in Ecology, I discovered GIS and cartography — and realised that maps were the language I had always been looking for. They sit at the intersection of science, art, and storytelling.
</p>
<p className="text-[15px] leading-[1.8] text-[#0f0f0f]/65 mb-6">
  I have always been a creative person. Photography and drawing nature have been lifelong companions — and it was precisely this combination of analytical thinking and visual sensibility that led me to apply for the Erasmus Mundus Joint Master in Cartography. I was awarded the scholarship, and since then I have travelled from Munich through Vienna and Dresden to Bolzano, building web maps and decision-support systems for agriculture and environmental management.
</p>
<p className="text-[15px] leading-[1.8] text-[#0f0f0f]/65 mb-10">
  In a way, the childhood dream is coming true. Today I work at the intersection of geospatial technology, ecology, and design — creating tools that help people make better decisions about land, water, and food. My ambition is to continue this path in academia: to contribute to research that makes spatial knowledge more accessible, more human, and more useful for the planet.
</p>
            <div className="flex flex-wrap gap-6 border-t border-[#0f0f0f]/8 pt-8">
              {[
                ["Email", "mailto:shelegina.ann@gmail.com"],
                ["LinkedIn", "https://www.linkedin.com/in/anna-shelegina-511927234/"],
                ["ORCID", "https://orcid.org/0000-0001-5548-600X"],
              ].map(([label, href]) => (
                <a key={label} href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noreferrer"
                  className="text-[11px] uppercase tracking-[0.1em] text-[#0f0f0f]/40 hover:text-[#0f0f0f] transition-colors"
                  style={{ fontFamily: FONT_MONO }}>
                  {label} ↗
                </a>
              ))}
            </div>
          </div>
        </div>



        {/* Video + Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[1px] bg-[#0f0f0f]/8 mb-16">
          <div className="bg-[#0f0f0f] relative" style={{ minHeight: "360px" }}>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/KxRfJz39FMk"
              title="Anna Shelegina — Podcast Interview"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
            />
          </div>
          <div className="bg-white px-8 py-10 flex flex-col justify-between">
            <div>
              <div className="text-[10px] uppercase tracking-[0.15em] text-[#0f0f0f]/30 mb-4"
                style={{ fontFamily: FONT_MONO }}>
                Featured · Status P Podcast
              </div>
              <h2 className="font-[700] leading-[1.1] text-[#0f0f0f] mb-4"
                style={{ fontFamily: FONT_DISPLAY, fontSize: "clamp(1.5rem, 3vw, 2.2rem)" }}>
                GIS, Climate & the Future of Spatial Technology
              </h2>
              <p className="text-[14px] leading-[1.7] text-[#0f0f0f]/60 mb-6">
                An interview about the role of GIS in urban planning, climate change, and precision agriculture. We discuss the Digital Twin project in Georgia, the future of spatial technology, and why maps matter for making the world safer and more accessible — including for people with visual impairments.
              </p>
            </div>

          </div>
        </div>



        {/* Contact */}
        <div className="border-t border-[#0f0f0f]/8 pt-12">
          <div className="text-[10px] uppercase tracking-[0.18em] text-[#0f0f0f]/30 mb-6"
            style={{ fontFamily: FONT_MONO }}>
            Contact
          </div>
          <div className="flex flex-wrap gap-8">
            {[
              ["Email", "mailto:shelegina.ann@gmail.com"],
              ["LinkedIn", "https://www.linkedin.com/in/anna-shelegina"],
              ["ORCID", "https://orcid.org/0000-0001-5548-600X"],
            ].map(([label, href]) => (
              <a key={label} href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noreferrer"
                className="text-[13px] uppercase tracking-[0.1em] text-[#0f0f0f]/40 hover:text-[#0f0f0f] transition-colors"
                style={{ fontFamily: FONT_MONO }}>
                {label} ↗
              </a>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}