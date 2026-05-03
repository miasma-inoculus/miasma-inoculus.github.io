/*
 * THE INKWELL — 404 Not Found
 * Design: Gaslight & Shadow — atmospheric, Gothic error page
 */

import { Link } from 'wouter';
import { ChevronLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6"
      style={{ background: 'oklch(0.09 0.008 300)' }}>
      <div className="text-center max-w-lg">
        {/* Ornamental number */}
        <div className="mb-6">
          <span style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontWeight: 900,
            fontSize: '8rem',
            lineHeight: 1,
            color: 'oklch(0.72 0.12 75 / 15%)',
            letterSpacing: '-0.05em',
          }}>
            404
          </span>
        </div>

        {/* Gold ornament */}
        <div className="ornament-divider mb-8">
          <span style={{ color: 'oklch(0.72 0.12 75 / 50%)', fontSize: '1.2rem' }}>✦</span>
        </div>

        <h1 className="mb-4" style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontWeight: 700,
          fontSize: '2rem',
          color: 'oklch(0.84 0.008 70)',
          lineHeight: 1.2,
        }}>
          This Page Has Vanished
        </h1>

        <p className="mb-10" style={{
          fontFamily: "'Lora', Georgia, serif",
          fontStyle: 'italic',
          fontSize: '1.05rem',
          lineHeight: 1.8,
          color: 'oklch(0.55 0.01 70)',
        }}>
          Like a figure glimpsed at the end of a dark corridor, the page you seek is no longer here. Perhaps it never was. Perhaps it is watching you from somewhere you cannot see.
        </p>

        <Link href="/">
          <button className="inline-flex items-center gap-2 px-8 py-3 transition-all duration-300"
            style={{
              background: 'transparent',
              border: '1px solid oklch(0.72 0.12 75 / 40%)',
              color: 'oklch(0.72 0.12 75)',
              fontFamily: "'Cinzel', serif",
              fontSize: '0.65rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.background = 'oklch(0.72 0.12 75 / 10%)';
              (e.currentTarget as HTMLElement).style.borderColor = 'oklch(0.72 0.12 75)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.background = 'transparent';
              (e.currentTarget as HTMLElement).style.borderColor = 'oklch(0.72 0.12 75 / 40%)';
            }}
          >
            <ChevronLeft size={12} />
            Return to the Inkwell
          </button>
        </Link>
      </div>
    </div>
  );
}
