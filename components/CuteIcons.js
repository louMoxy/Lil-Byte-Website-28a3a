// Cute SVG icons to replace emojis
export const GameIcon = ({ className = "w-6 h-6", animated = false }) => (
  <svg 
    className={`${className} ${animated ? 'floating-icon' : ''}`}
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="4" y="8" width="16" height="10" rx="3" fill="currentColor" opacity="0.8"/>
    <circle cx="8" cy="12" r="1.5" fill="white"/>
    <circle cx="16" cy="12" r="1.5" fill="white"/>
    <rect x="6" y="6" width="2" height="3" rx="1" fill="currentColor"/>
    <rect x="16" y="6" width="2" height="3" rx="1" fill="currentColor"/>
    <path d="M10 14h4" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

// Bold controller icon (higher contrast for small sizes)
export const ControllerIcon = ({ className = "w-7 h-7", animated = false }) => (
  <svg
    className={`${className} ${animated ? 'floating-icon' : ''}`}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
  >
    <rect x="3" y="9" width="18" height="8" rx="4"/>
    <rect x="6.2" y="7" width="2.4" height="3" rx="1"/>
    <rect x="15.4" y="7" width="2.4" height="3" rx="1"/>
    {/* D-Pad */}
    <rect x="8" y="11" width="3" height="1.6" rx="0.4" fill="#fff"/>
    <rect x="9.2" y="9.8" width="1.6" height="3" rx="0.4" fill="#fff"/>
    {/* AB buttons */}
    <circle cx="15.8" cy="12" r="1.1" fill="#fff"/>
    <circle cx="18" cy="13.4" r="1.1" fill="#fff"/>
  </svg>
);

export const BlogIcon = ({ className = "w-6 h-6", animated = false }) => (
  <svg 
    className={`${className} ${animated ? 'floating-icon-slow' : ''}`}
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="5" y="4" width="14" height="16" rx="2" fill="currentColor" opacity="0.8"/>
    <rect x="7" y="7" width="10" height="1" rx="0.5" fill="white"/>
    <rect x="7" y="10" width="8" height="1" rx="0.5" fill="white"/>
    <rect x="7" y="13" width="6" height="1" rx="0.5" fill="white"/>
    <circle cx="17" cy="17" r="2" fill="currentColor"/>
    <path d="M15.5 15.5l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export const ContactIcon = ({ className = "w-6 h-6", animated = false }) => (
  <svg 
    className={`${className} ${animated ? 'sparkling' : ''}`}
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="3" y="6" width="18" height="12" rx="2" fill="currentColor" opacity="0.8"/>
    <path d="M3 8l9 5 9-5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export const HeartIcon = ({ className = "w-6 h-6", animated = false }) => (
  <svg 
    className={`${className} ${animated ? 'sparkling' : ''}`}
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" 
      fill="currentColor"
    />
  </svg>
);

export const StarIcon = ({ className = "w-6 h-6", animated = false }) => (
  <svg 
    className={`${className} ${animated ? 'sparkling' : ''}`}
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" 
      fill="currentColor"
    />
  </svg>
);

export const BugIcon = ({ className = "w-6 h-6", animated = false }) => (
  <svg 
    className={`${className} ${animated ? 'floating-icon' : ''}`}
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <ellipse cx="12" cy="13" rx="5" ry="6" fill="currentColor" opacity="0.8"/>
    <circle cx="10" cy="10" r="1" fill="white"/>
    <circle cx="14" cy="10" r="1" fill="white"/>
    <path d="M7 11h2M15 11h2M7 15h2M15 15h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M9 7c0-1 1-2 3-2s3 1 3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="12" cy="6" r="1.5" fill="currentColor"/>
  </svg>
);

export const PlantIcon = ({ className = "w-6 h-6", animated = false }) => (
  <svg 
    className={`${className} ${animated ? 'floating-icon-slow' : ''}`}
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M7 13c0-3 2-5 5-5s5 2 5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M12 8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M8 11c1-2 3-3 4-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M16 11c-1-2-3-3-4-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <rect x="9" y="16" width="6" height="3" rx="1" fill="currentColor" opacity="0.7"/>
    <circle cx="12" cy="6" r="2" fill="currentColor"/>
  </svg>
);

export const CodeIcon = ({ className = "w-6 h-6", animated = false }) => (
  <svg 
    className={`${className} ${animated ? 'floating-icon' : ''}`}
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="3" y="5" width="18" height="14" rx="2" fill="currentColor" opacity="0.8"/>
    <rect x="3" y="5" width="18" height="4" rx="2" fill="currentColor"/>
    <circle cx="6" cy="7" r="0.5" fill="white"/>
    <circle cx="8" cy="7" r="0.5" fill="white"/>
    <circle cx="10" cy="7" r="0.5" fill="white"/>
    <path d="M8 13l2 2-2 2M12 17h4" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);
