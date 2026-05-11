import { motion } from "motion/react";
import { useState } from "react";
import { Link } from "react-router";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const FONT_MONO = "'IBM Plex Mono', monospace";

interface ProjectCardProps {
  projectId: string;
  title: string;
  client: string;
  year: string;
  img: string;
  alt: string;
  overlayColor: string;
  overlayText?: string;
  pdfUrl?: string;
}

export function ProjectCard({ projectId, title, client, year, img, alt, overlayColor, overlayText, pdfUrl }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group bg-white overflow-hidden relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/project/${projectId}`} className="block cursor-pointer">
        <div className="aspect-[3/4] bg-[#ebebeb] overflow-hidden relative">
          <ImageWithFallback src={img} alt={alt} className="w-full h-full object-cover" />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="absolute inset-0 flex items-center justify-center"
            style={{ backgroundColor: overlayColor }}
          >
            {overlayText && (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: isHovered ? 1 : 0.9, opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="text-white text-center px-6"
                style={{ fontFamily: FONT_MONO }}
              >
                <div className="text-[13px] tracking-[0.08em]">{overlayText}</div>
              </motion.div>
            )}
          </motion.div>
        </div>

        <div className="px-4 py-4 border-t border-[#0f0f0f]/8">
          <div className="text-[13px] font-[600] text-[#0f0f0f]/80 leading-snug">{title}</div>
          <div className="flex items-center justify-between mt-1">
            <span className="text-[11px] text-[#0f0f0f]/35" style={{ fontFamily: FONT_MONO }}>
              {client}
            </span>
            <span className="text-[11px] text-[#0f0f0f]/25" style={{ fontFamily: FONT_MONO }}>
              {year}
            </span>
          </div>
        </div>
      </Link>

      {pdfUrl && (
        <div className="px-4 pb-4">
          <a
            href={pdfUrl}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="text-[10px] uppercase tracking-[0.12em] text-[#0f0f0f]/40 hover:text-[#0f0f0f] transition-colors inline-flex items-center gap-1"
            style={{ fontFamily: FONT_MONO }}
          >
            PDF ↗
          </a>
        </div>
      )}
    </div>
  );
}
