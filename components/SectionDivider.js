export default function SectionDivider({ className = '', color = 'currentColor', flip = false }) {
  return (
    <div
      className={`w-full select-none ${flip ? 'rotate-180' : ''} ${className}`}
      aria-hidden="true"
      style={{ color }}
    >
      <svg
        viewBox="0 0 1440 60"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-[40px] text-black/10 dark:text-white/10"
        preserveAspectRatio="none"
      >
        <path
          d="M0,30 C180,10 360,50 540,30 C720,10 900,50 1080,30 C1260,10 1440,50 1620,30 L1620,60 L0,60 Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
}

