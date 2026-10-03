import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Film } from 'lucide-react';

export default function Navbar() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills & Tools', href: '#skills' },
    { label: 'What I Do', href: '#services' },
    { label: 'Work', href: '#work' },
    { label: 'Process', href: '#process' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top thin scroll-progress bar */}
      <div
        className="fixed top-0 left-0 right-0 h-0.5 bg-[#F2B33D] z-50 transition-all duration-75"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
      />

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#1C2236]/90 backdrop-blur-md border-b border-[#F5F1E8]/10 py-3 shadow-lg shadow-black/20'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Zone 1: Single Brand Wordmark */}
          <a
            href="#"
            className="group flex items-center gap-2 text-xl font-bold tracking-tight text-[#F5F1E8] hover:text-[#F2B33D] transition-colors"
          >
            <span className="w-2 h-2 rounded-full bg-[#F2B33D] group-hover:scale-125 transition-transform" />
            <span>Yash Parate</span>
            <span className="text-xs font-normal text-[#A9B0C6] hidden sm:inline ml-1 font-mono">
              / Editor & AI
            </span>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#A9B0C6]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative hover:text-[#F5F1E8] transition-colors py-1 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F2B33D] transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Zone 3: Actions */}
          <div className="flex items-center gap-3">
            <a
              href="https://drive.google.com/drive/folders/1fiyuTs6KRdWg1SYdjqG3ELVepLXm3SHA"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center gap-1.5 text-xs font-medium text-[#A9B0C6] hover:text-[#F2B33D] transition-colors px-3 py-1.5 rounded-lg border border-[#F5F1E8]/10 hover:border-[#F2B33D]/40"
            >
              <Film className="w-3.5 h-3.5 text-[#F2B33D]" />
              <span>Demo Reel</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#1C2236] bg-[#F2B33D] hover:bg-[#ffc453] rounded-lg transition-all transform active:scale-95 shadow-sm shadow-[#F2B33D]/20 whitespace-nowrap"
            >
              Hire Me
            </a>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-[#A9B0C6] hover:text-[#F5F1E8] hover:bg-[#252C45] transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#1C2236] border-b border-[#F5F1E8]/10 px-4 pt-3 pb-6 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-sm font-medium text-[#A9B0C6] hover:text-[#F2B33D] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-[#F5F1E8]/10 flex flex-col gap-2">
              <a
                href="https://drive.google.com/drive/folders/1fiyuTs6KRdWg1SYdjqG3ELVepLXm3SHA"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between text-xs font-medium text-[#A9B0C6] hover:text-[#F2B33D] p-2 rounded-lg bg-[#252C45]"
              >
                <span className="flex items-center gap-2">
                  <Film className="w-3.5 h-3.5 text-[#F2B33D]" />
                  View Demo Reel on Drive
                </span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
