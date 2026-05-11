export function Logo({ size = 40, color = "#0f0f0f" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Topographic contour lines forming "A" */}
      <path
        d="M 35 75 Q 40 65, 45 55 Q 47 50, 50 45 Q 53 50, 55 55 Q 60 65, 65 75"
        stroke={color}
        strokeWidth="1.5"
        fill="none"
        opacity="0.4"
      />
      <path
        d="M 38 75 Q 42 67, 46 58 Q 48 53, 50 48 Q 52 53, 54 58 Q 58 67, 62 75"
        stroke={color}
        strokeWidth="1.5"
        fill="none"
        opacity="0.6"
      />
      <path
        d="M 41 75 Q 44 69, 47 61 Q 49 56, 50 52 Q 51 56, 53 61 Q 56 69, 59 75"
        stroke={color}
        strokeWidth="2"
        fill="none"
      />

      {/* Horizontal contour line (crossbar of A) */}
      <line x1="44" y1="62" x2="56" y2="62" stroke={color} strokeWidth="2" opacity="0.8" />

      {/* Compass point at peak */}
      <circle cx="50" cy="45" r="2.5" fill={color} />
      <line x1="50" y1="40" x2="50" y2="42.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
