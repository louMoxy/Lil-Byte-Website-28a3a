export default function Doodles({ color = 'var(--color-text-primary)', opacity = 0.35 }) {
  const common = {
    position: 'absolute',
    color,
    opacity,
    filter: 'drop-shadow(0 1px 0 rgba(0,0,0,0.25))',
  };

  return (
    <div className="pointer-events-none absolute inset-0 -z-0">
      {/* Diamond */}
      <svg viewBox="0 0 10 10" width="14" height="14" style={{ ...common, top: '10%', left: '8%' }}>
        <path d="M5 0 L10 5 L5 10 L0 5 Z" fill="currentColor" />
      </svg>

      {/* Small star */}
      <svg viewBox="0 0 12 12" width="12" height="12" style={{ ...common, top: '18%', right: '12%' }}>
        <path d="M6 0 L7 5 L12 6 L7 7 L6 12 L5 7 L0 6 L5 5 Z" fill="currentColor" />
      </svg>

      {/* Arc */}
      <svg viewBox="0 0 20 10" width="28" height="14" style={{ ...common, bottom: '12%', left: '12%' }}>
        <path d="M0 10 A10 10 0 0 1 20 10" stroke="currentColor" strokeWidth="2" fill="none" />
      </svg>

      {/* Circle */}
      <svg viewBox="0 0 10 10" width="10" height="10" style={{ ...common, top: '28%', left: '40%' }}>
        <circle cx="5" cy="5" r="5" fill="currentColor" />
      </svg>

      {/* Wavy squiggle */}
      <svg viewBox="0 0 60 20" width="60" height="20" style={{ ...common, top: '6%', right: '30%' }}>
        <path d="M0 10 C10 0, 20 20, 30 10 S50 0, 60 10" stroke="currentColor" strokeWidth="2" fill="none" />
      </svg>

      {/* Another diamond */}
      <svg viewBox="0 0 10 10" width="10" height="10" style={{ ...common, bottom: '18%', right: '16%' }}>
        <path d="M5 0 L10 5 L5 10 L0 5 Z" fill="currentColor" />
      </svg>
    </div>
  );
}


