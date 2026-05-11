import { useParams, Link, useNavigate } from "react-router";
import { ArrowLeft, ChevronLeft, ChevronRight, X, Maximize2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { getProjectById, projects } from "../data/projects";

const FONT_DISPLAY = "'IBM Plex Sans', sans-serif";
const FONT_MONO = "'IBM Plex Mono', monospace";

export default function ProjectDetail() {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  const [isZoomed, setIsZoomed] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const currentIndex = projects.findIndex((p) => p.id === projectId);
  const project = projectId ? getProjectById(projectId) : undefined;

  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  const projectImages = project?.images || [project?.img || ""];
  const hasMultipleImages = projectImages.length > 1;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    setIsLoaded(false);
    setCurrentImageIndex(0);
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, [projectId]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!hasMultipleImages) return;

      if (e.key === "ArrowLeft") {
        e.preventDefault();
        setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : projectImages.length - 1));
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        setCurrentImageIndex((prev) => (prev < projectImages.length - 1 ? prev + 1 : 0));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [hasMultipleImages, projectImages.length]);

  const handlePrevious = () => {
    if (prevProject) {
      navigate(`/project/${prevProject.id}`);
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  };

  const handleNext = () => {
    if (nextProject) {
      navigate(`/project/${nextProject.id}`);
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  };

  if (!project) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#0f0f0f]/80 mb-4">Project not found</h1>
          <Link
            to="/"
            className="text-sm uppercase tracking-[0.12em] text-[#0f0f0f]/40 hover:text-[#0f0f0f] transition-colors"
            style={{ fontFamily: FONT_MONO }}
          >
            ← Back to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-[#0f0f0f]/8 bg-white">
        <div className="flex items-center justify-between px-6 md:px-10 h-14">
          <Link
            to="/"
            className="flex items-center gap-2 text-xs tracking-[0.12em] uppercase text-[#0f0f0f]/50 hover:text-[#0f0f0f] transition-colors"
            style={{ fontFamily: FONT_MONO }}
          >
            <ArrowLeft size={14} />
            Portfolio
          </Link>
          <div className="text-xs tracking-[0.12em] uppercase text-[#0f0f0f]/30" style={{ fontFamily: FONT_MONO }}>
            {currentIndex + 1} / {projects.length}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="pt-14">
        {/* Info Section */}
        <div className="max-w-4xl mx-auto px-6 md:px-10 py-16 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Title */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="text-[10px] uppercase tracking-[0.15em] text-[#0f0f0f]/30 px-3 py-1 border border-[#0f0f0f]/10"
                  style={{ fontFamily: FONT_MONO }}
                >
                  {project.category === "web-maps" ? "Web Maps" : project.category === "printed-maps" ? "Printed Maps" : project.category === "storytelling" ? "Storytelling" : project.category === "research" ? "Research" : "Agriculture"}
                </span>
                <span className="text-[11px] text-[#0f0f0f]/25" style={{ fontFamily: FONT_MONO }}>
                  {project.year}
                </span>
              </div>

              <h1
                className="font-[600] leading-[1.1] text-[#0f0f0f] mb-6"
                style={{
                  fontFamily: FONT_DISPLAY,
                  fontSize: "clamp(2.5rem, 5vw, 4rem)",
                }}
              >
                {project.title}
              </h1>

              <div className="text-[13px] text-[#0f0f0f]/40 mb-8" style={{ fontFamily: FONT_MONO }}>
                {project.client}
              </div>

              {project.description && (
                <p className="text-[16px] leading-[1.8] text-[#0f0f0f]/65 max-w-3xl">
                  {project.description}
                </p>
              )}

              {(project.liveUrl || project.pdfUrl || project.videoUrl) && (
                <div className="mt-8 flex flex-wrap gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.12em] text-white bg-[#0f0f0f] hover:bg-[#0f0f0f]/80 transition-colors px-6 py-3"
                      style={{ fontFamily: FONT_MONO }}
                    >
                      View Project ↗
                    </a>
                  )}
                  {project.pdfUrl && (
                    <a
                      href={project.pdfUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.12em] text-[#0f0f0f] bg-white border border-[#0f0f0f]/20 hover:border-[#0f0f0f] transition-colors px-6 py-3"
                      style={{ fontFamily: FONT_MONO }}
                    >
                      Download PDF ↗
                    </a>
                  )}
                  {project.videoUrl && (
                    <a
                      href={project.videoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.12em] text-[#0f0f0f] bg-white border border-[#0f0f0f]/20 hover:border-[#0f0f0f] transition-colors px-6 py-3"
                      style={{ fontFamily: FONT_MONO }}
                    >
                      Watch Video ↗
                    </a>
                  )}
                </div>
              )}
            </div>

            {/* Details Grid */}
            {project.details && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 border-t border-[#0f0f0f]/8 pt-12">
                {project.details.location && (
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.15em] text-[#0f0f0f]/30 mb-3" style={{ fontFamily: FONT_MONO }}>
                      Location
                    </div>
                    <div className="text-[15px] text-[#0f0f0f]/70">{project.details.location}</div>
                  </div>
                )}

                {project.details.tools && project.details.tools.length > 0 && (
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.15em] text-[#0f0f0f]/30 mb-3" style={{ fontFamily: FONT_MONO }}>
                      Tools & Methods
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.details.tools.map((tool) => (
                        <span
                          key={tool}
                          className="text-[11px] text-[#0f0f0f]/50 px-2 py-1 border border-[#0f0f0f]/10"
                          style={{ fontFamily: FONT_MONO }}
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

{project.details.context && (
  <div className="md:col-span-2">
    <div className="text-[10px] uppercase tracking-[0.15em] text-[#0f0f0f]/30 mb-3" style={{ fontFamily: FONT_MONO }}>
      Context
    </div>
    <p className="text-[15px] leading-[1.8] text-[#0f0f0f]/60 mb-4">
      {project.details.context}
    </p>
    {project.details.collaborators && project.details.collaborators.some(c => c.includes("TRANS-SAHARA")) && (
      <div className="flex flex-wrap gap-4 pt-4 border-t border-[#0f0f0f]/8">
        <a href="https://trans-sahara.eu" target="_blank" rel="noreferrer" className="text-[11px] text-[#0f0f0f]/40 hover:text-[#0f0f0f] transition-colors underline underline-offset-2" style={{ fontFamily: FONT_MONO }}>TRANS-SAHARA Project ↗</a>
        <a href="https://cordis.europa.eu/project/id/101182176" target="_blank" rel="noreferrer" className="text-[11px] text-[#0f0f0f]/40 hover:text-[#0f0f0f] transition-colors underline underline-offset-2" style={{ fontFamily: FONT_MONO }}>EU Horizon Europe Grant #101182176 ↗</a>
      </div>
    )}
  </div>
)}
              </div>
            )}

          </motion.div>
        </div>

        {/* Image Gallery - Different layout for research vs other categories */}
        {project.category === "research" && hasMultipleImages ? (
          
          <div className="relative bg-[#fafafa] border-t border-[#0f0f0f]/8">
            <div className="max-w-7xl mx-auto px-6 md:px-10 py-12">
              <div className="text-[10px] uppercase tracking-[0.15em] text-[#0f0f0f]/30 mb-6" style={{ fontFamily: FONT_MONO }}>
                Presentation Slides
              </div>
              <div className="bg-white border border-[#0f0f0f]/10 p-4 overflow-x-auto">
                <div className="flex gap-4">
                  {projectImages.map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt={`${project.title} slide ${idx + 1}`}
                      className="h-64 w-auto object-contain flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity"
                      onClick={() => setIsZoomed(true)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
      ) : project.category !== "research" && project.img && (
          <div className="relative bg-[#fafafa] border-t border-[#0f0f0f]/8">
            <div className="max-w-3xl mx-auto px-6 md:px-10 py-12 md:py-16">
              <motion.div
                key={projectId}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0.95 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                {/* Cartographic Grid Background */}
                <div className="absolute inset-0 opacity-[0.03]" style={{
                  backgroundImage: `
                    linear-gradient(to right, #0f0f0f 1px, transparent 1px),
                    linear-gradient(to bottom, #0f0f0f 1px, transparent 1px)
                  `,
                  backgroundSize: '40px 40px'
                }} />

                {/* Map Image */}
                <div className="relative bg-white border border-[#0f0f0f]/10 shadow-lg">
                  <motion.img
                    key={currentImageIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    src={projectImages[currentImageIndex]}
                    alt={project.alt}
                    className="w-full h-auto"
                  />

                  {/* Image Navigation Arrows */}
                  {hasMultipleImages && (
                    <>
                      <button
                        onClick={() => setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : projectImages.length - 1))}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm border border-[#0f0f0f]/10 p-2 rounded hover:bg-white transition-all hover:scale-110"
                      >
                        <ChevronLeft size={20} className="text-[#0f0f0f]/60" />
                      </button>

                      <button
                        onClick={() => setCurrentImageIndex((prev) => (prev < projectImages.length - 1 ? prev + 1 : 0))}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm border border-[#0f0f0f]/10 p-2 rounded hover:bg-white transition-all hover:scale-110"
                      >
                        <ChevronRight size={20} className="text-[#0f0f0f]/60" />
                      </button>

                      {/* Image Dots */}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                        {projectImages.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={() => setCurrentImageIndex(idx)}
                            className={`w-2 h-2 rounded-full transition-all ${
                              idx === currentImageIndex
                                ? "bg-[#0f0f0f]/60 w-6"
                                : "bg-[#0f0f0f]/20 hover:bg-[#0f0f0f]/40"
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}

                  {/* Zoom Button */}
                  <button
                    onClick={() => setIsZoomed(true)}
                    className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm border border-[#0f0f0f]/10 p-2 rounded hover:bg-white transition-all hover:scale-110"
                  >
                    <Maximize2 size={16} className="text-[#0f0f0f]/60" />
                  </button>

                  {/* Coordinates overlay - top left */}
                  <div className="absolute top-4 left-4 text-[9px] tracking-[0.15em] text-[#0f0f0f]/30 bg-white/90 backdrop-blur-sm border border-[#0f0f0f]/10 px-2 py-1" style={{ fontFamily: FONT_MONO }}>
                    {project.id.toUpperCase()}
                    {hasMultipleImages && (
                      <span className="ml-2">· {currentImageIndex + 1}/{projectImages.length}</span>
                    )}
                  </div>
                </div>

              </motion.div>
            </div>
          </div>
        )}

        {/* Navigation Footer */}
        <div className="border-t border-[#0f0f0f]/8 bg-[#fafafa]">
          <div className="max-w-4xl mx-auto px-6 md:px-10 py-8 flex items-center justify-between">
            <button
              onClick={handlePrevious}
              disabled={!prevProject}
              className="group flex items-center gap-2 text-[11px] uppercase tracking-[0.12em] text-[#0f0f0f]/40 hover:text-[#0f0f0f] transition-colors disabled:opacity-20 disabled:cursor-not-allowed"
              style={{ fontFamily: FONT_MONO }}
            >
              <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              {prevProject ? prevProject.title : "Previous"}
            </button>

            <button
              onClick={handleNext}
              disabled={!nextProject}
              className="group flex items-center gap-2 text-[11px] uppercase tracking-[0.12em] text-[#0f0f0f]/40 hover:text-[#0f0f0f] transition-colors disabled:opacity-20 disabled:cursor-not-allowed"
              style={{ fontFamily: FONT_MONO }}
            >
              {nextProject ? nextProject.title : "Next"}
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Zoomed Modal */}
      <AnimatePresence>
        {isZoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-white flex items-center justify-center p-8 cursor-zoom-out"
            onClick={() => setIsZoomed(false)}
          >
            <button
              className="absolute top-6 right-6 text-[#0f0f0f]/40 hover:text-[#0f0f0f] transition-colors"
              onClick={() => setIsZoomed(false)}
            >
              <X size={24} />
            </button>

            <div className="relative">
              <motion.img
                key={currentImageIndex}
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                src={projectImages[currentImageIndex]}
                alt={project.alt}
                className="max-w-full max-h-full object-contain"
              />

              {/* Gallery navigation in zoom mode */}
              {hasMultipleImages && (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : projectImages.length - 1));
                    }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm border border-white/20 p-3 rounded hover:bg-white/20 transition-all"
                  >
                    <ChevronLeft size={24} className="text-white" />
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIndex((prev) => (prev < projectImages.length - 1 ? prev + 1 : 0));
                    }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm border border-white/20 p-3 rounded hover:bg-white/20 transition-all"
                  >
                    <ChevronRight size={24} className="text-white" />
                  </button>

                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
                    {projectImages.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentImageIndex(idx);
                        }}
                        className={`w-2.5 h-2.5 rounded-full transition-all ${
                          idx === currentImageIndex
                            ? "bg-white w-8"
                            : "bg-white/40 hover:bg-white/70"
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
