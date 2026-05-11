import { useState, useEffect, useRef } from "react";
import { Plus } from "lucide-react";
import { ProjectCard } from "../components/ProjectCard";
import { Logo } from "../components/Logo";
import { InteractivePhoto } from "../components/InteractivePhoto";
import { getProjectsByCategory } from "../data/projects";

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

const FONT_DISPLAY = "'IBM Plex Sans', sans-serif";
const FONT_BODY = "'IBM Plex Sans', sans-serif";
const FONT_MONO = "'IBM Plex Mono', monospace";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  const webMapsProjects = getProjectsByCategory("web-maps");
  const printedMapsProjects = getProjectsByCategory("printed-maps");
  const agricultureProjects = getProjectsByCategory("agriculture");
  const storytellingProjects = getProjectsByCategory("storytelling");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="bg-white text-[#0f0f0f]" style={{ fontFamily: FONT_BODY }}>

      {/* ── Nav ── */}
      <header className={`fixed top-0 left-0 right-0 z-50 border-b transition-colors duration-200 ${scrolled ? "border-[#0f0f0f]/12 bg-white/95 backdrop-blur-sm" : "border-transparent bg-transparent"}`}>
        <div className="flex items-center justify-between px-6 md:px-10 h-12">
          <button onClick={() => scrollTo("hero")} className="flex items-center gap-2 text-xs tracking-[0.12em] uppercase text-[#0f0f0f]/50 hover:text-[#0f0f0f] transition-colors" style={{ fontFamily: FONT_MONO }}>
            <Logo size={20} color={scrolled ? "#0f0f0f" : "#0f0f0f80"} />
            Anna Shelegina
          </button>
          <nav className="hidden md:flex items-center gap-8">
            {[["Research", "research"], ["Agriculture", "agriculture-apps"], ["Printed Maps", "printed-maps"], ["Web Maps", "web-maps"], ["Storytelling", "storytelling"]].map(([label, id]) => (
              <button key={id} onClick={() => scrollTo(id)} className="text-xs tracking-[0.1em] uppercase text-[#0f0f0f]/40 hover:text-[#0f0f0f] transition-colors" style={{ fontFamily: FONT_MONO }}>
                {label}
              </button>
            ))}
            <button onClick={() => window.location.href = '/about'} className="text-xs tracking-[0.1em] uppercase text-[#0f0f0f]/40 hover:text-[#0f0f0f] transition-colors" style={{ fontFamily: FONT_MONO }}>
              About
            </button>
          </nav>
          <div className="flex items-center gap-6">
            <a href="/src/imports/CV_ISRIC.pdf" target="_blank"
              className="text-xs tracking-[0.1em] uppercase text-[#0f0f0f]/40 hover:text-[#0f0f0f] transition-colors"
              style={{ fontFamily: FONT_MONO }}>
              CV ↗
            </a>
            <a href="mailto:shelegina.ann@gmail.com"
              className="text-xs tracking-[0.1em] uppercase text-[#0f0f0f]/40 hover:text-[#0f0f0f] transition-colors"
              style={{ fontFamily: FONT_MONO }}>
              Contact
            </a>
          </div>
        </div>
      </header>

      {/* ── Hero ── */}
      <section ref={heroRef} id="hero" className="min-h-screen flex flex-col justify-between px-6 md:px-10 pt-24 pb-10">
        <div className="flex-1 flex flex-col md:flex-row items-center justify-between gap-12 md:gap-20">
          <div className="flex-1">
            <h1 className="font-[700] leading-[0.92] tracking-[-0.02em] text-[#0f0f0f] mb-0"
              style={{ fontFamily: FONT_DISPLAY, fontSize: "clamp(4rem, 12vw, 10rem)" }}>
              Anna<br />Shelegina
            </h1>
          </div>
          <div className="flex items-center justify-center">
            <InteractivePhoto
              src="/src/imports/Screenshot_2026-05-08_at_10.17.58.png"
              alt="Anna Shelegina"
              size={340}
            />
          </div>
        </div>
        <div className="border-t border-[#0f0f0f]/10 pt-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <div className="text-[10px] uppercase tracking-[0.15em] text-[#0f0f0f]/35 mb-1" style={{ fontFamily: FONT_MONO }}>Role</div>
            <div className="text-sm text-[#0f0f0f]/65">Cartographer &amp; Researcher</div>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-[0.15em] text-[#0f0f0f]/35 mb-1" style={{ fontFamily: FONT_MONO }}>Location</div>
            <div className="text-sm text-[#0f0f0f]/65">Bolzano · Munich</div>
          </div>
          <div className="col-span-2">
            <div className="text-[10px] uppercase tracking-[0.15em] text-[#0f0f0f]/35 mb-1" style={{ fontFamily: FONT_MONO }}>Focus</div>
            <div className="text-sm text-[#0f0f0f]/65 leading-relaxed">Cartographic visual analytics and web-based geospatial interfaces for environmental decision-making</div>
          </div>
        </div>
      </section>

      {/* ── Research ── */}
      <section id="research" className="px-6 md:px-10 pt-20 pb-24">
        <BigTitle>Research</BigTitle>

        <div className="mb-6 bg-white border border-[#0f0f0f]/8 cursor-pointer hover:border-[#0f0f0f]/15 transition-colors" onClick={() => window.location.href = `/project/current-research-agroforestry`}>
          <div className="bg-white px-8 py-10">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <div className="text-[10px] uppercase tracking-[0.15em] text-[#0f0f0f]/40 bg-[#7A9B5F]/10 px-3 py-1 rounded-full" style={{ fontFamily: FONT_MONO }}>Current Research</div>
              <div className="text-[10px] uppercase tracking-[0.15em] text-[#0f0f0f]/40 bg-[#0f0f0f]/5 px-3 py-1 rounded-full" style={{ fontFamily: FONT_MONO }}>Master's Thesis</div>
            </div>
            <div className="text-[11px] uppercase tracking-[0.15em] text-[#0f0f0f]/30 mb-4" style={{ fontFamily: FONT_MONO }}>2026 · Eurac Research · TU Munich</div>
            <h3 className="font-[700] leading-[1.1] text-[#0f0f0f] mb-4" style={{ fontFamily: FONT_DISPLAY, fontSize: "clamp(1.5rem, 3vw, 2.2rem)" }}>
              From Data to Interventions: Visual Analytics Framework for Agroforestry
            </h3>
            <p className="text-[14px] leading-[1.7] text-[#0f0f0f]/60 mb-6">
              Developing an interactive cartographic visual analytics framework to support decision-making in agroforestry and WEFE-Nexus intervention planning. Case study: Living Labs in the Greater Northern African Region.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-[#0f0f0f]/8">
              <img src="/src/imports/Screenshot_2026-05-10_at_15.36.37.png" alt="Horizon Europe" className="h-10 opacity-70" />
              <img src="/src/imports/Screenshot_2026-05-10_at_15.37.40.png" alt="TU Munich" className="h-8 opacity-70" />
              <img src="/src/imports/Screenshot_2026-05-10_at_15.38.34.png" alt="Eurac Research" className="h-8 opacity-70" />
              <img src="/src/imports/Screenshot_2026-05-10_at_15.40.23.png" alt="Nexus Project" className="h-10 opacity-70" />
            </div>
          </div>
        </div>

        <div className="mb-6 bg-white border border-[#0f0f0f]/8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[1px]">
            <div className="bg-white px-8 py-10 flex flex-col justify-between order-2 lg:order-1">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <div className="text-[10px] uppercase tracking-[0.15em] text-[#0f0f0f]/40 bg-[#0f0f0f]/5 px-3 py-1 rounded-full" style={{ fontFamily: FONT_MONO }}>Master's Thesis</div>
                </div>
                <div className="text-[11px] uppercase tracking-[0.15em] text-[#0f0f0f]/30 mb-4" style={{ fontFamily: FONT_MONO }}>2023 · Moscow State University</div>
                <h3 className="font-[700] leading-[1.1] text-[#0f0f0f] mb-4" style={{ fontFamily: FONT_DISPLAY, fontSize: "clamp(1.5rem, 3vw, 2.2rem)" }}>
                  Analysis of Atmospheric Microparticles Reflecting Ecological Conditions
                </h3>
                <p className="text-[14px] leading-[1.7] text-[#0f0f0f]/60 mb-6">
                  Atmospheric microparticles pose environmental and health risks in urban areas. This research investigates the morphological and mineralogical characteristics of atmospheric microparticles to assess ecological risks associated with their transport and deposition in Russian cities.
                </p>
                <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-[#0f0f0f]/8">
                  <img src="/src/imports/___________.png" alt="Moscow State University" className="h-8 opacity-70" />
                  <img src="/src/imports/Screenshot_2026-05-10_at_16.01.32.png" alt="Faculty of Soil Science" className="h-8 opacity-70" />
                </div>
              </div>
              <div className="flex gap-4 mt-8">
                <button onClick={() => window.location.href = `/project/atmospheric-microparticles-2023`}
                  className="text-[11px] uppercase tracking-[0.12em] text-[#0f0f0f]/40 hover:text-[#0f0f0f] transition-colors border border-[#0f0f0f]/10 hover:border-[#0f0f0f]/30 px-4 py-2"
                  style={{ fontFamily: FONT_MONO }}>
                  View Research →
                </button>
              </div>
            </div>
            <div className="bg-white overflow-hidden group cursor-pointer order-1 lg:order-2" onClick={() => window.location.href = `/project/atmospheric-microparticles-2023`}>
              <div className="aspect-video bg-[#ebebeb] overflow-hidden relative">
                <img src="/src/imports/Screenshot_2026-05-10_at_16.29.09.png" alt="Atmospheric microparticles" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-[#2A4A7C]/0 group-hover:bg-[#2A4A7C]/20 transition-colors flex items-center justify-center">
                  <span className="text-white text-[11px] uppercase tracking-[0.15em] opacity-0 group-hover:opacity-100 transition-opacity bg-[#0f0f0f]/80 px-4 py-2 rounded" style={{ fontFamily: FONT_MONO }}>View Research →</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16 bg-white border border-[#0f0f0f]/8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[1px]">
            <div className="bg-white overflow-hidden group cursor-pointer order-1 lg:order-1" onClick={() => window.location.href = `/project/soil-mineralogy-bachelor-2021`}>
              <div className="aspect-video bg-[#ebebeb] overflow-hidden relative">
                <img src="/src/imports/Screenshot_2026-05-10_at_17.47.44.png" alt="Soil mineralogy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-[#8B7355]/0 group-hover:bg-[#8B7355]/20 transition-colors flex items-center justify-center">
                  <span className="text-white text-[11px] uppercase tracking-[0.15em] opacity-0 group-hover:opacity-100 transition-opacity bg-[#0f0f0f]/80 px-4 py-2 rounded" style={{ fontFamily: FONT_MONO }}>View Research →</span>
                </div>
              </div>
            </div>
            <div className="bg-white px-8 py-10 flex flex-col justify-between order-2 lg:order-2">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <div className="text-[10px] uppercase tracking-[0.15em] text-[#0f0f0f]/40 bg-[#0f0f0f]/5 px-3 py-1 rounded-full" style={{ fontFamily: FONT_MONO }}>Bachelor's Thesis</div>
                </div>
                <div className="text-[11px] uppercase tracking-[0.15em] text-[#0f0f0f]/30 mb-4" style={{ fontFamily: FONT_MONO }}>2021 · Moscow State University</div>
                <h3 className="font-[700] leading-[1.1] text-[#0f0f0f] mb-4" style={{ fontFamily: FONT_DISPLAY, fontSize: "clamp(1.5rem, 3vw, 2.2rem)" }}>
                  Mineralogical Composition of Soils in Moscow Region
                </h3>
                <p className="text-[14px] leading-[1.7] text-[#0f0f0f]/60 mb-6">
                  Investigation of mineralogical composition of soils formed on different parent materials in the Istra River valley. The study employs polarization microscopy and X-ray analysis to characterize soil properties and environmental conditions.
                </p>
                <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-[#0f0f0f]/8">
                  <img src="/src/imports/___________.png" alt="Moscow State University" className="h-8 opacity-70" />
                  <img src="/src/imports/Screenshot_2026-05-10_at_16.01.32.png" alt="Faculty of Soil Science" className="h-8 opacity-70" />
                </div>
              </div>
              <div className="flex gap-4 mt-8">
                <button onClick={() => window.location.href = `/project/soil-mineralogy-bachelor-2021`}
                  className="text-[11px] uppercase tracking-[0.12em] text-[#0f0f0f]/40 hover:text-[#0f0f0f] transition-colors border border-[#0f0f0f]/10 hover:border-[#0f0f0f]/30 px-4 py-2"
                  style={{ fontFamily: FONT_MONO }}>
                  View Research →
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16 bg-white border border-[#0f0f0f]/8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[1px]">
            <div className="bg-white px-8 py-10 flex flex-col justify-between order-2 lg:order-1">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <div className="text-[10px] uppercase tracking-[0.15em] text-[#0f0f0f]/40 bg-[#4A7C59]/10 px-3 py-1 rounded-full" style={{ fontFamily: FONT_MONO }}>Research Project</div>
                </div>
                <div className="text-[11px] uppercase tracking-[0.15em] text-[#0f0f0f]/30 mb-4" style={{ fontFamily: FONT_MONO }}>2026 · TU Dresden · GEOLab</div>
                <h3 className="font-[700] leading-[1.1] text-[#0f0f0f] mb-4" style={{ fontFamily: FONT_DISPLAY, fontSize: "clamp(1.5rem, 3vw, 2.2rem)" }}>
                  Above-Ground Biomass Estimation
                </h3>
                <p className="text-[14px] leading-[1.7] text-[#0f0f0f]/60 mb-6">
                  Evaluation of multi-frequency SAR observations (C-, L-, and P-band) to estimate forest aboveground biomass in Gabon. The Random Forest approach explained 73% of AGB variability, demonstrating SAR's viability for tropical forest monitoring.
                </p>
                <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-[#0f0f0f]/8">
                  <img src="/src/imports/Logo_TU_Dresden_en_2025.svg.png" alt="TU Dresden" className="h-8 opacity-70" />
                  <img src="/src/imports/Screenshot_2026-05-10_at_18.11.25.png" alt="GEOLab" className="h-8 opacity-70" />
                </div>
              </div>
              <div className="flex gap-4 mt-8">
                <button onClick={() => window.location.href = `/project/biomass-estimation-gabon-2026`}
                  className="text-[11px] uppercase tracking-[0.12em] text-[#0f0f0f]/40 hover:text-[#0f0f0f] transition-colors border border-[#0f0f0f]/10 hover:border-[#0f0f0f]/30 px-4 py-2"
                  style={{ fontFamily: FONT_MONO }}>
                  View Research →
                </button>
              </div>
            </div>
            <div className="bg-white overflow-hidden group cursor-pointer order-1 lg:order-2" onClick={() => window.location.href = `/project/biomass-estimation-gabon-2026`}>
              <div className="aspect-video bg-[#ebebeb] overflow-x-auto">
                <div className="flex h-full gap-2 p-4">
<img src="/src/imports/Screenshot_2026-05-10_at_18.24.48.png" alt="Slide 1" className="h-full w-auto object-contain flex-shrink-0" />
<img src="/src/imports/Screenshot_2026-05-10_at_18.25.03.png" alt="Slide 2" className="h-full w-auto object-contain flex-shrink-0" />
<img src="/src/imports/Screenshot_2026-05-10_at_18.25.20.png" alt="Slide 3" className="h-full w-auto object-contain flex-shrink-0" />
<img src="/src/imports/Screenshot_2026-05-10_at_18.25.37.png" alt="Slide 4" className="h-full w-auto object-contain flex-shrink-0" />
<img src="/src/imports/Screenshot_2026-05-10_at_18.25.47.png" alt="Slide 5" className="h-full w-auto object-contain flex-shrink-0" />
<img src="/src/imports/Screenshot_2026-05-10_at_18.25.58.png" alt="Slide 6" className="h-full w-auto object-contain flex-shrink-0" />
<img src="/src/imports/Screenshot_2026-05-10_at_18.26.09.png" alt="Slide 7" className="h-full w-auto object-contain flex-shrink-0" />
<img src="/src/imports/Screenshot_2026-05-10_at_18.26.25.png" alt="Slide 8" className="h-full w-auto object-contain flex-shrink-0" />
<img src="/src/imports/Screenshot_2026-05-10_at_18.27.06.png" alt="Slide 9" className="h-full w-auto object-contain flex-shrink-0" />
<img src="/src/imports/Screenshot_2026-05-10_at_18.27.20.png" alt="Slide 10" className="h-full w-auto object-contain flex-shrink-0" />
<img src="/src/imports/Screenshot_2026-05-10_at_18.27.31.png" alt="Slide 11" className="h-full w-auto object-contain flex-shrink-0" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16 bg-white border border-[#0f0f0f]/8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[1px]">
            <div className="bg-white overflow-hidden group cursor-pointer order-1 lg:order-1" onClick={() => window.open('/src/imports/SheleginaAnnaGeoseminar1.pdf', '_blank')}>
              <div className="aspect-video bg-[#ebebeb] overflow-hidden relative">
                <img src="/src/imports/Poetry.png" alt="3D Terrain of Poetic Structure" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-[#0f0f0f]/0 group-hover:bg-[#0f0f0f]/5 transition-colors flex items-center justify-center">
                  <span className="text-white text-[11px] uppercase tracking-[0.15em] opacity-0 group-hover:opacity-100 transition-opacity bg-[#0f0f0f]/80 px-4 py-2 rounded" style={{ fontFamily: FONT_MONO }}>Open PDF ↗</span>
                </div>
              </div>
            </div>
            <div className="bg-white px-8 py-10 flex flex-col justify-between order-2 lg:order-2">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <div className="text-[10px] uppercase tracking-[0.15em] text-[#0f0f0f]/40 bg-[#0f0f0f]/5 px-3 py-1 rounded-full" style={{ fontFamily: FONT_MONO }}>Seminar Paper</div>
                </div>
                <div className="text-[11px] uppercase tracking-[0.15em] text-[#0f0f0f]/30 mb-4" style={{ fontFamily: FONT_MONO }}>2025 · TU Wien · Geoseminar</div>
                <h3 className="font-[700] leading-[1.1] text-[#0f0f0f] mb-4" style={{ fontFamily: FONT_DISPLAY, fontSize: "clamp(1.5rem, 3vw, 2.2rem)" }}>
                  Poetry as a Semantic Landscape
                </h3>
                <p className="text-[14px] leading-[1.7] text-[#0f0f0f]/60 mb-6">
                  A seminar paper proposing a novel method for transforming poetic texts into topographic landscapes. Rhythm is encoded as structural undulation using normalised standard deviation of syllable lengths; emotional intensity per line is estimated via a transformer-based NLP model (DistilRoBERTa). Visualised as 2D contour maps in Matplotlib and interactive 3D terrain in Three.js / WebGL.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {["Literary Cartography", "NLP", "Python", "Three.js", "Digital Humanities"].map((tag) => (
                    <span key={tag} className="text-[10px] uppercase tracking-[0.1em] text-[#0f0f0f]/35 border border-[#0f0f0f]/10 px-2 py-1" style={{ fontFamily: FONT_MONO }}>{tag}</span>
                  ))}
                </div>
                <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-[#0f0f0f]/8">
                  <img src="/src/imports/TUWien.svg.png" alt="TU Wien" className="h-8 opacity-70" />
                  <img src="/src/imports/Screenshot_2026-05-10_at_18.11.25.png" alt="Geoseminar" className="h-8 opacity-70" />
                  <div className="text-[11px] text-[#0f0f0f]/30" style={{ fontFamily: FONT_MONO }}>Supervisor: Univ. Prof. Dr. Georg Gartner</div>
                </div>
              </div>
              <div className="flex gap-4 mt-8">
                <button onClick={() => window.open('/src/imports/SheleginaAnnaGeoseminar1.pdf', '_blank')}
                  className="text-[11px] uppercase tracking-[0.12em] text-[#0f0f0f]/40 hover:text-[#0f0f0f] transition-colors border border-[#0f0f0f]/10 hover:border-[#0f0f0f]/30 px-4 py-2"
                  style={{ fontFamily: FONT_MONO }}>
                  Open PDF ↗
                </button>
              </div>
            </div>
          </div>
        </div>



        <div>
          <SectionLabel>Publications and Conferences</SectionLabel>
          {[
            { year: "2025", title: "Atlas of Sustainability — ICA Design Challenge", venue: "International Cartographic Association · TU Wien · Erasmus Mundus MSc Cartography Programme", doi: "https://icaci.org/files/documents/books/2025_Atlas-Of-Sustainability_Roth-Gartner-etal.pdf" },
            { year: "2023", title: "Morphological and mineralogical characteristics of atmospheric microparticles and chemical pollution of street dust in the Moscow Region", venue: "Atmosphere, 14(2)", doi: "https://doi.org/10.3390/atmos14020403" },
            { year: "2022", title: "Features of natural and anthropogenic atmospheric microparticles and their ecological significance", venue: "Man and Nature, Vol. 45, pp. 109–116 · XXXII Int. Interdisciplinary Conf., Moscow, Oct 2022", doi: "http://igras.ru/3535" },
            { year: "2022", title: "Complex mineralogical and micromorphological analysis of atmospheric microparticles in an urban park environment (Istra, Russia)", venue: "Ecology of River Basins · Proceedings of the 10th Int. Scientific-Practical Conf., pp. 194–199 · St. Petersburg State University", doi: "https://pureportal.spbu.ru/files/129863491/_2023_.pdf" },
          ].map((pub, i) => (
            <div key={i} className="border-t border-[#0f0f0f]/8 py-7 grid grid-cols-[56px_1fr] md:grid-cols-[180px_1fr] gap-4 items-baseline">
              <div className="text-[11px] text-[#0f0f0f]/30" style={{ fontFamily: FONT_MONO }}>{pub.year}</div>
              <div>
                <p className="text-[15px] font-[500] text-[#0f0f0f]/80 leading-snug mb-1">{pub.title}</p>
                <p className="text-[12px] text-[#0f0f0f]/35" style={{ fontFamily: FONT_MONO }}>{pub.venue}</p>
                {pub.doi && (
                  <a href={pub.doi} target="_blank" rel="noreferrer" className="text-[11px] text-[#0f0f0f]/40 hover:text-[#0f0f0f] transition-colors underline underline-offset-2 mt-1 inline-block" style={{ fontFamily: FONT_MONO }}>
                    DOI ↗
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Agriculture Apps ── */}
      <section id="agriculture-apps" className="border-t border-[#0f0f0f]/8 px-6 md:px-10 pt-20 pb-24">
        <BigTitle>Agriculture Apps</BigTitle>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[1px] bg-[#0f0f0f]/8">
          <div className="lg:col-span-7 lg:row-span-2 bg-white flex flex-col">
            <div className="flex-1 overflow-hidden relative group cursor-pointer"
              style={{ minHeight: "480px" }}
              onClick={() => window.location.href = `/project/apple-orchard-logistics`}>
              <img src="/src/imports/SVS.png" alt="Orchard" className="w-full h-full object-cover" style={{ position: "absolute", inset: 0 }} />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f]/70 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="text-[10px] uppercase tracking-[0.15em] text-white/50 mb-2" style={{ fontFamily: FONT_MONO }}>Agronom-sad · Contract · Remote · Aug–Sep 2025</div>
                <h3 className="font-[700] leading-[1.05] text-white mb-3" style={{ fontFamily: FONT_DISPLAY, fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}>Orchard Digital Twin</h3>
                <p className="text-[13px] text-white/60 leading-[1.6] max-w-md">Full-stack web platform built with React and MapLibre. Two interactive map modes: agronomic map with orchard zones, variety filtering and harvest planning; infrastructure map with irrigation lines, filtration zones, roads and surveillance cameras.</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {["React", "MapLibre", "GeoJSON", "TypeScript", "Vercel"].map((tag) => (
                    <span key={tag} className="text-[10px] uppercase tracking-[0.1em] text-white/40 border border-white/20 px-2 py-1" style={{ fontFamily: FONT_MONO }}>{tag}</span>
                  ))}
                </div>
                <div className="mt-4 text-[11px] uppercase tracking-[0.12em] text-white/30" style={{ fontFamily: FONT_MONO }}>Full-Stack Web Map Developer · Confidential · NDA</div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 bg-white flex flex-col group cursor-pointer" onClick={() => window.location.href = `/project/agricultural-land-analysis-georgia`}>
            <div className="relative overflow-hidden" style={{ height: "240px" }}>
              <img src="/src/imports/ATIS.png" alt="ATIS Georgia" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="px-6 py-6 flex flex-col flex-1 justify-between">
              <div>
                <div className="text-[10px] uppercase tracking-[0.15em] text-[#0f0f0f]/30 mb-2" style={{ fontFamily: FONT_MONO }}>2023 · ATIS Services · Georgia</div>
                <h3 className="font-[700] leading-[1.1] text-[#0f0f0f] mb-2" style={{ fontFamily: FONT_DISPLAY, fontSize: "clamp(1.1rem, 2vw, 1.4rem)" }}>Agricultural Land Analysis & Web Mapping</h3>
                <p className="text-[13px] text-[#0f0f0f]/50 leading-[1.6]">Interactive web map on satellite imagery — irrigation polygons, tree objects, agrochemical soil attributes. Terrain and runoff analysis.</p>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {["QGIS", "GIS Cloud", "Leaflet", "Python"].map((tag) => (
                  <span key={tag} className="text-[9px] uppercase tracking-[0.1em] text-[#0f0f0f]/30 border border-[#0f0f0f]/10 px-2 py-1" style={{ fontFamily: FONT_MONO }}>{tag}</span>
                ))}
              </div>
              <div className="mt-4 text-[10px] uppercase tracking-[0.1em] text-[#0f0f0f]/25 border-t border-[#0f0f0f]/8 pt-3" style={{ fontFamily: FONT_MONO }}>Confidential · NDA</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Printed Maps ── */}
      <section id="printed-maps" className="border-t border-[#0f0f0f]/8 px-6 md:px-10 pt-20 pb-24">
        <BigTitle>Printed Maps</BigTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-[#0f0f0f]/8">
          {printedMapsProjects.map((project) => (
            <ProjectCard key={project.id} projectId={project.id} title={project.title} client={project.client} year={project.year} img={project.img} alt={project.alt} overlayColor={project.overlayColor} overlayText={project.overlayText} pdfUrl={project.pdfUrl} />
          ))}

        </div>
      </section>

      {/* ── Web Maps ── */}
      <section id="web-maps" className="border-t border-[#0f0f0f]/8 px-6 md:px-10 pt-20 pb-24">
        <BigTitle>Web Maps</BigTitle>
        <div className="space-y-[1px] bg-[#0f0f0f]/8">
          {webMapsProjects.map((project) => (
            <div key={project.id} className="bg-white">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-[1px]">
                <div className="bg-white overflow-hidden group cursor-pointer" onClick={() => project.liveUrl ? window.open(project.liveUrl, '_blank') : null}>
                  <div className="aspect-video bg-[#ebebeb] overflow-hidden relative">
                    <img src={project.img} alt={project.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    {project.liveUrl && (
                      <div className="absolute inset-0 bg-[#0f0f0f]/0 group-hover:bg-[#0f0f0f]/10 transition-colors flex items-center justify-center">
                        <span className="text-white text-[11px] uppercase tracking-[0.15em] opacity-0 group-hover:opacity-100 transition-opacity bg-[#0f0f0f]/80 px-4 py-2 rounded" style={{ fontFamily: FONT_MONO }}>View Live ↗</span>
                      </div>
                    )}
                  </div>
                </div>
                <div className="bg-white px-8 py-10 flex flex-col justify-between">
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.15em] text-[#0f0f0f]/30 mb-4" style={{ fontFamily: FONT_MONO }}>{project.year} · {project.client}</div>
                    <h3 className="font-[700] leading-[1.1] text-[#0f0f0f] mb-4" style={{ fontFamily: FONT_DISPLAY, fontSize: "clamp(1.5rem, 3vw, 2.2rem)" }}>{project.title}</h3>
                    <p className="text-[14px] leading-[1.7] text-[#0f0f0f]/60">{project.description}</p>
                  </div>
                  <div className="flex gap-4 mt-8">
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noreferrer" className="text-[11px] uppercase tracking-[0.12em] text-[#0f0f0f]/40 hover:text-[#0f0f0f] transition-colors border border-[#0f0f0f]/10 hover:border-[#0f0f0f]/30 px-4 py-2" style={{ fontFamily: FONT_MONO }}>View Live ↗</a>
                    )}
                    <button onClick={() => window.location.href = `/project/${project.id}`} className="text-[11px] uppercase tracking-[0.12em] text-[#0f0f0f]/40 hover:text-[#0f0f0f] transition-colors" style={{ fontFamily: FONT_MONO }}>Details →</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Storytelling ── */}
      <section id="storytelling" className="border-t border-[#0f0f0f]/8 px-6 md:px-10 pt-20 pb-24">
        <BigTitle>Storytelling</BigTitle>
        <div className="space-y-[1px] bg-[#0f0f0f]/8">
          {storytellingProjects.map((project) => (
            <div key={project.id} className="bg-white">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-[1px]">
                <div className="bg-white px-8 py-10 flex flex-col justify-between order-2 lg:order-1">
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.15em] text-[#0f0f0f]/30 mb-4" style={{ fontFamily: FONT_MONO }}>{project.year} · {project.client}</div>
                    <h3 className="font-[700] leading-[1.1] text-[#0f0f0f] mb-4" style={{ fontFamily: FONT_DISPLAY, fontSize: "clamp(1.5rem, 3vw, 2.2rem)" }}>{project.title}</h3>
                    <p className="text-[14px] leading-[1.7] text-[#0f0f0f]/60">{project.description}</p>
                  </div>
                  <div className="flex gap-4 mt-8">
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noreferrer" className="text-[11px] uppercase tracking-[0.12em] text-[#0f0f0f]/40 hover:text-[#0f0f0f] transition-colors border border-[#0f0f0f]/10 hover:border-[#0f0f0f]/30 px-4 py-2" style={{ fontFamily: FONT_MONO }}>View Story ↗</a>
                    )}
                    <button onClick={() => window.location.href = `/project/${project.id}`} className="text-[11px] uppercase tracking-[0.12em] text-[#0f0f0f]/40 hover:text-[#0f0f0f] transition-colors" style={{ fontFamily: FONT_MONO }}>Details →</button>
                  </div>
                </div>
                <div className="bg-white overflow-hidden group cursor-pointer order-1 lg:order-2" onClick={() => project.liveUrl ? window.open(project.liveUrl, '_blank') : null}>
                  <div className="aspect-video bg-[#ebebeb] overflow-hidden relative">
                    <img src={project.img} alt={project.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    {project.liveUrl && (
                      <div className="absolute inset-0 bg-[#0f0f0f]/0 group-hover:bg-[#0f0f0f]/10 transition-colors flex items-center justify-center">
                        <span className="text-white text-[11px] uppercase tracking-[0.15em] opacity-0 group-hover:opacity-100 transition-opacity bg-[#0f0f0f]/80 px-4 py-2 rounded" style={{ fontFamily: FONT_MONO }}>View Story ↗</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-[#0f0f0f]/8 px-6 md:px-10 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="text-[11px] uppercase tracking-[0.12em] text-[#0f0f0f]/30" style={{ fontFamily: FONT_MONO }}>
          Anna Shelegina · Cartographer &amp; Researcher · 2026
        </div>
        <div className="flex gap-8">
          {[["Email", "mailto:shelegina.ann@gmail.com"], ["LinkedIn", "https://www.linkedin.com/in/anna-shelegina"], ["ORCID", "https://orcid.org/0000-0001-5548-600X"]].map(([label, href]) => (
            <a key={label} href={href} target={href.startsWith("mailto") ? undefined : "_blank"} rel="noreferrer"
              className="text-[11px] uppercase tracking-[0.12em] text-[#0f0f0f]/30 hover:text-[#0f0f0f] transition-colors" style={{ fontFamily: FONT_MONO }}>
              {label} ↗
            </a>
          ))}
        </div>
      </footer>
    </div>
  );
}

function BigTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-[700] leading-[0.92] text-[#0f0f0f] mb-12"
      style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "clamp(3rem, 8vw, 7rem)" }}>
      {children}
    </h2>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-[10px] uppercase tracking-[0.18em] text-[#0f0f0f]/30 mb-4" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
      {children}
    </div>
  );
}