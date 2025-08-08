import Link from 'next/link';
import { BugIcon, GameIcon, BlogIcon, ContactIcon } from './CuteIcons';

export default function Header({ name }) {
  return (
    <header className="w-full pt-8 pb-8 bg-white/5 dark:bg-black/10 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo/Brand */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-gradient-3 to-gradient-4 flex items-center justify-center group-hover:scale-105 transition-transform duration-200 text-white">
              <BugIcon className="w-5 h-5" animated />
            </div>
            <span className="text-xl font-bold">{name}</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link 
              href="#games" 
              className="text-lg font-medium hover:text-primary transition-colors duration-200 flex items-center gap-2 group"
            >
              <GameIcon className="w-5 h-5 text-primary group-hover:text-primary-dark transition-colors duration-200" />
              Games
            </Link>
            <Link 
              href="/posts" 
              className="text-lg font-medium hover:text-primary transition-colors duration-200 flex items-center gap-2 group"
            >
              <BlogIcon className="w-5 h-5 text-secondary group-hover:text-primary transition-colors duration-200" />
              Blog
            </Link>
            <Link 
              href="#contact" 
              className="text-lg font-medium hover:text-primary transition-colors duration-200 flex items-center gap-2 group"
            >
              <ContactIcon className="w-5 h-5 text-accent-1 group-hover:text-primary transition-colors duration-200" />
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 rounded-lg bg-white/10 dark:bg-black/20 backdrop-blur border border-white/20">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav className="md:hidden mt-4 pt-4 border-t border-white/10">
          <div className="flex flex-col gap-4">
            <Link 
              href="#games" 
              className="text-lg font-medium hover:text-primary transition-colors duration-200 flex items-center gap-2 group"
            >
              <GameIcon className="w-5 h-5 text-primary group-hover:text-primary-dark transition-colors duration-200" />
              Games
            </Link>
            <Link 
              href="/posts" 
              className="text-lg font-medium hover:text-primary transition-colors duration-200 flex items-center gap-2 group"
            >
              <BlogIcon className="w-5 h-5 text-secondary group-hover:text-primary transition-colors duration-200" />
              Blog
            </Link>
            <Link 
              href="#contact" 
              className="text-lg font-medium hover:text-primary transition-colors duration-200 flex items-center gap-2 group"
            >
              <ContactIcon className="w-5 h-5 text-accent-1 group-hover:text-primary transition-colors duration-200" />
              Contact
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
