import { useEffect } from 'react';
import Header from './Header';

export default function Layout({ children }) {
  const setAppTheme = () => {
    const darkMode = localStorage.getItem('theme') === 'dark';
    const lightMode = localStorage.getItem('theme') === 'light';

    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else if (lightMode) {
      document.documentElement.classList.remove('dark');
    }
    return;
  };

  const handleSystemThemeChange = () => {
    var darkQuery = window.matchMedia('(prefers-color-scheme: dark)');

    darkQuery.onchange = (e) => {
      if (e.matches) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    };
  };

  useEffect(() => {
    setAppTheme();
  }, []);

  useEffect(() => {
    handleSystemThemeChange();
  }, []);

  return (
    <div className="relative min-h-screen py-6">
      <div className="container-soft">
        <div className="retro-window" style={{ ['--retro-title']: '#FFC1DF', ['--retro-body']: '#FFF7EB' }}>
          <div className="retro-titlebar">
            <div className="flex items-center gap-2">
              <span className="retro-dot" />
              <span className="retro-dot" />
              <span className="retro-dot" />
            </div>
            <span className="retro-title text-sm font-bold">Lil Byte Window</span>
            <div className="w-full"><Header /></div>
          </div>
          <div className="retro-body">
            {children}
            <div className="mt-10 text-center opacity-70 text-xs">
              <span>© 2024 Lil Byte Games</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
