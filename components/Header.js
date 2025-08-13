import Link from 'next/link';
import { useState } from 'react';
import { BugIcon } from './CuteIcons';

export default function Header({ name = 'Lil Byte Games' }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full">
      <div className="flex items-center justify-between gap-3">
        <nav className="hidden md:flex">
          <div className="nav-pill nav-gradient">
            <Link href="/" className="pill-link">Home</Link>
            <div className="pill-divider" />
            <Link href="/#games" className="pill-link">Games</Link>
            <div className="pill-divider" />
            <Link href="/posts" className="pill-link">Blog</Link>
            <div className="pill-divider" />
            <Link href="/#contact" className="pill-link">Contact</Link>
          </div>
        </nav>
        <button aria-label="Toggle menu" className="md:hidden nav-pill nav-gradient" onClick={() => setOpen((v) => !v)}>
          <span className="pill-link">Menu</span>
        </button>
      </div>
      {open && (
        <div className="fixed inset-0 z-50 pastel-grid bg-white/90 backdrop-blur-sm">
          <div className="absolute top-4 right-4">
            <button aria-label="Close menu" className="nav-pill nav-gradient" onClick={() => setOpen(false)}>
              <span className="pill-link">Close</span>
            </button>
          </div>
          <div className="w-full h-full flex items-center justify-center p-6">
            <nav className="flex flex-col items-center gap-4">
              <Link href="/#games" className="nav-pill nav-gradient w-64 justify-center" onClick={() => setOpen(false)}>
                <span className="pill-link">Games</span>
              </Link>
              <Link href="/posts" className="nav-pill nav-gradient w-64 justify-center" onClick={() => setOpen(false)}>
                <span className="pill-link">Blog</span>
              </Link>
              <Link href="/#contact" className="nav-pill nav-gradient w-64 justify-center" onClick={() => setOpen(false)}>
                <span className="pill-link">Contact</span>
              </Link>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}
