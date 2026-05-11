import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";

interface InteractivePhotoProps {
  src: string;
  alt: string;
  size?: number;
}

export function InteractivePhoto({ src, alt, size = 340 }: InteractivePhotoProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 200 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  // 3D rotation based on mouse position
  const rotateX = useTransform(y, [-size / 2, size / 2], [8, -8]);
  const rotateY = useTransform(x, [-size / 2, size / 2], [-8, 8]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const distX = e.clientX - centerX;
      const distY = e.clientY - centerY;

      // Magnetic effect - stronger when close
      const distance = Math.sqrt(distX * distX + distY * distY);
      const maxDistance = 300;
      const strength = Math.max(0, 1 - distance / maxDistance);

      mouseX.set(distX * strength * 0.15);
      mouseY.set(distY * strength * 0.15);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div
      ref={containerRef}
      className="relative flex items-center justify-center"
      style={{ width: size, height: size, perspective: 1000 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        style={{
          x,
          y,
          rotateX,
          rotateY,
          width: size,
          height: size,
        }}
        className="relative rounded-full overflow-hidden border-[3px] border-[#0f0f0f]/8 shadow-xl"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          style={{ objectPosition: "50% 30%" }}
        />

        {/* Subtle shine effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent"
          animate={{
            opacity: isHovered ? 0.3 : 0,
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      {/* Animated outer ring */}
      <motion.div
        className="absolute rounded-full border-[2px] border-[#0f0f0f]/6 pointer-events-none"
        style={{ width: size + 40, height: size + 40 }}
        animate={{
          scale: isHovered ? 1.1 : 1,
          opacity: isHovered ? 0.6 : 0.3,
        }}
        transition={{ duration: 0.4 }}
      />

      {/* Pulsing background circle */}
      <motion.div
        className="absolute rounded-full bg-[#0f0f0f]/3 -z-10"
        style={{ width: size, height: size }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
