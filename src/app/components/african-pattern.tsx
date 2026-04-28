export function AfricanPattern() {
  return (
    <svg className="absolute inset-0 w-full h-full opacity-[0.06] pointer-events-none"
      xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="kente" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
          <rect x="0" y="0" width="40" height="40" fill="none" stroke="white" strokeWidth="2"/>
          <rect x="40" y="0" width="40" height="40" fill="none" stroke="white" strokeWidth="2"/>
          <rect x="80" y="0" width="40" height="40" fill="none" stroke="white" strokeWidth="2"/>
          <rect x="0" y="40" width="40" height="40" fill="none" stroke="white" strokeWidth="2"/>
          <rect x="40" y="40" width="40" height="40" fill="none" stroke="white" strokeWidth="2"/>
          <rect x="80" y="40" width="40" height="40" fill="none" stroke="white" strokeWidth="2"/>
          <rect x="0" y="80" width="40" height="40" fill="none" stroke="white" strokeWidth="2"/>
          <rect x="40" y="80" width="40" height="40" fill="none" stroke="white" strokeWidth="2"/>
          <rect x="80" y="80" width="40" height="40" fill="none" stroke="white" strokeWidth="2"/>
          <circle cx="20" cy="20" r="8" fill="white"/>
          <circle cx="60" cy="60" r="8" fill="white"/>
          <circle cx="100" cy="100" r="8" fill="white"/>
          <line x1="0" y1="0" x2="120" y2="120" stroke="white" strokeWidth="1"/>
          <line x1="120" y1="0" x2="0" y2="120" stroke="white" strokeWidth="1"/>
        </pattern>
      </defs>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#kente)"/>
    </svg>
  );
}
