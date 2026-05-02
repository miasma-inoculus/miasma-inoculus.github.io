/*
 * THE INKWELL — Navigation
 * Design: Gaslight & Shadow — thin ornate left-rail on desktop, top bar on mobile
 * Cinzel font for nav labels, gold accents, obsidian background
 */

import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { BookOpen, Archive, Feather, Mail, Menu, X } from 'lucide-react';

const navItems = [
  { href: '/', label: "Today's Story", icon: BookOpen },
  { href: '/archive', label: 'The Archive', icon: Archive },
  { href: '/about', label: 'About', icon: Feather },
  { href: '/subscribe', label: 'Subscribe', icon: Mail },
];

export default function Navigation() {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <>
      {/* Desktop Side Navigation */}
      <nav className="hidden lg:flex fixed left-0 top-0 bottom-0 w-56 flex-col z-50"
        style={{
          background: 'linear-gradient(to right, oklch(0.07 0.008 300), oklch(0.09 0.008 300 / 95%))',
          borderRight: '1px solid oklch(0.72 0.12 75 / 15%)',
        }}>

        {/* Logo / Masthead */}
        <div className="px-6 pt-10 pb-8 border-b" style={{ borderColor: 'oklch(0.72 0.12 75 / 15%)' }}>
          <Link href="/">
            <div className="group cursor-pointer">
              {/* Ornamental top mark */}
              <div className="text-center mb-3">
                <span className="candle-flicker inline-block text-2xl" style={{ color: 'oklch(0.72 0.12 75)' }}>✦</span>
              </div>
              <h1 className="text-center leading-none" style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontWeight: 900,
                fontSize: '1.4rem',
                color: 'oklch(0.84 0.008 70)',
                letterSpacing: '0.05em',
              }}>
                The
              </h1>
              <h1 className="text-center leading-none mb-1" style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontWeight: 900,
                fontSize: '2rem',
                color: 'oklch(0.72 0.12 75)',
                letterSpacing: '0.08em',
                textShadow: '0 0 20px oklch(0.72 0.12 75 / 40%)',
              }}>
                INKWELL
              </h1>
              <p className="text-center" style={{
                fontFamily: "'Cinzel', serif",
                fontSize: '0.55rem',
                letterSpacing: '0.25em',
                color: 'oklch(0.55 0.01 70)',
                textTransform: 'uppercase',
              }}>
                Daily Micro Fiction
              </p>
            </div>
          </Link>
        </div>

        {/* Nav Items */}
        <div className="flex-1 px-4 py-8 flex flex-col gap-1">
          {navItems.map(({ href, label, icon: Icon }) => {
            const isActive = location === href;
            return (
              <Link key={href} href={href}>
                <div className={`
                  group flex items-center gap-3 px-4 py-3 transition-all duration-300
                  ${isActive
                    ? 'border-l-2'
                    : 'border-l-2 border-transparent hover:border-l-2'
                  }
                `}
                  style={{
                    borderLeftColor: isActive ? 'oklch(0.72 0.12 75)' : undefined,
                    background: isActive ? 'oklch(0.72 0.12 75 / 8%)' : undefined,
                  }}
                  onMouseEnter={e => {
                    if (!isActive) {
                      (e.currentTarget as HTMLElement).style.borderLeftColor = 'oklch(0.72 0.12 75 / 40%)';
                      (e.currentTarget as HTMLElement).style.background = 'oklch(0.72 0.12 75 / 4%)';
                    }
                  }}
                  onMouseLeave={e => {
                    if (!isActive) {
                      (e.currentTarget as HTMLElement).style.borderLeftColor = 'transparent';
                      (e.currentTarget as HTMLElement).style.background = 'transparent';
                    }
                  }}
                >
                  <Icon size={14} style={{ color: isActive ? 'oklch(0.72 0.12 75)' : 'oklch(0.55 0.01 70)' }} />
                  <span style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: '0.65rem',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: isActive ? 'oklch(0.72 0.12 75)' : 'oklch(0.65 0.01 70)',
                    transition: 'color 0.3s',
                  }}>
                    {label}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom issue info */}
        <div className="px-6 py-6 border-t" style={{ borderColor: 'oklch(0.72 0.12 75 / 15%)' }}>
          <p style={{
            fontFamily: "'Cinzel', serif",
            fontSize: '0.55rem',
            letterSpacing: '0.15em',
            color: 'oklch(0.45 0.01 70)',
            textTransform: 'uppercase',
            lineHeight: 1.8,
          }}>
            Vol. I · Est. 1887<br />
            <span style={{ color: 'oklch(0.72 0.12 75 / 60%)' }}>A new tale each midnight</span>
          </p>
        </div>
      </nav>

      {/* Mobile Top Bar */}
      <header className={`lg:hidden fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'shadow-2xl' : ''}`}
        style={{
          background: 'oklch(0.09 0.008 300 / 97%)',
          borderBottom: '1px solid oklch(0.72 0.12 75 / 20%)',
          backdropFilter: 'blur(12px)',
        }}>
        <div className="flex items-center justify-between px-5 py-4">
          <Link href="/">
            <div className="flex items-center gap-2">
              <span className="candle-flicker" style={{ color: 'oklch(0.72 0.12 75)', fontSize: '1rem' }}>✦</span>
              <span style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontWeight: 900,
                fontSize: '1.2rem',
                color: 'oklch(0.72 0.12 75)',
                letterSpacing: '0.08em',
              }}>THE INKWELL</span>
            </div>
          </Link>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{ color: 'oklch(0.72 0.12 75)' }}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileOpen && (
          <div className="border-t" style={{ borderColor: 'oklch(0.72 0.12 75 / 20%)', background: 'oklch(0.07 0.008 300)' }}>
            {navItems.map(({ href, label, icon: Icon }) => {
              const isActive = location === href;
              return (
                <Link key={href} href={href}>
                  <div className="flex items-center gap-4 px-6 py-4 border-b"
                    style={{
                      borderColor: 'oklch(0.72 0.12 75 / 10%)',
                      background: isActive ? 'oklch(0.72 0.12 75 / 8%)' : 'transparent',
                    }}>
                    <Icon size={14} style={{ color: 'oklch(0.72 0.12 75 / 70%)' }} />
                    <span style={{
                      fontFamily: "'Cinzel', serif",
                      fontSize: '0.7rem',
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      color: isActive ? 'oklch(0.72 0.12 75)' : 'oklch(0.65 0.01 70)',
                    }}>
                      {label}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </header>
    </>
  );
}

