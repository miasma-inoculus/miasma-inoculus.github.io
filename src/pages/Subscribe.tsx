/*
 * THE INKWELL — Subscribe Page
 * Design: The Midnight Ledger
 * Features: Newsletter signup, tier selection
 */

import { useState } from 'react';
import { Mail, Shield, Zap, Sparkles } from 'lucide-react';

export default function Subscribe() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  return (
    <div className="min-h-screen py-24 px-6 flex items-center justify-center" style={{ background: 'oklch(0.09 0.008 300)' }}>
      <div className="max-w-xl w-full">
        
        {!subscribed ? (
          <div className="gold-frame p-12 bg-black/40 backdrop-blur-sm">
            <header className="text-center mb-10">
              <div className="ornament-divider mb-6">
                <span style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: '0.65rem',
                  letterSpacing: '0.3em',
                  textTransform: 'uppercase',
                  color: 'oklch(0.72 0.12 75 / 70%)',
                }}>
                  ✦ Join the Inner Circle ✦
                </span>
              </div>
              <h1 className="mb-4" style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontWeight: 700,
                fontSize: '2.5rem',
                color: 'oklch(0.84 0.008 70)',
              }}>
                The Midnight Dispatch
              </h1>
              <p style={{
                fontFamily: "'Lora', Georgia, serif",
                fontStyle: 'italic',
                fontSize: '1rem',
                color: 'oklch(0.55 0.01 70)',
              }}>
                Enter your correspondence details below to receive our nightly terrors.
              </p>
            </header>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gold/30" size={18} />
                <input 
                  type="email"
                  required
                  placeholder="your.name@correspondence.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-black/60 border-gold/20 pl-12 pr-4 py-4 text-gold/80 font-serif focus:border-gold/50 outline-none transition-all"
                  style={{ border: '1px solid oklch(0.72 0.12 75 / 20%)' }}
                />
              </div>

              <button 
                type="submit"
                className="w-full py-4 pulse-gold transition-all duration-500"
                style={{
                  background: 'oklch(0.72 0.12 75 / 10%)',
                  border: '1px solid oklch(0.72 0.12 75 / 60%)',
                  color: 'oklch(0.72 0.12 75)',
                  fontFamily: "'Cinzel', serif",
                  fontSize: '0.75rem',
                  letterSpacing: '0.3em',
                  textTransform: 'uppercase',
                }}
              >
                Sign the Ledger
              </button>
            </form>

            <div className="mt-10 pt-8 border-t border-gold/10 grid grid-cols-3 gap-4 text-center">
              <div>
                <Shield className="mx-auto mb-2 text-gold/20" size={16} />
                <p className="text-[10px] uppercase tracking-widest text-gold/40 font-cinzel">Secure</p>
              </div>
              <div>
                <Zap className="mx-auto mb-2 text-gold/20" size={16} />
                <p className="text-[10px] uppercase tracking-widest text-gold/40 font-cinzel">Instant</p>
              </div>
              <div>
                <Sparkles className="mx-auto mb-2 text-gold/20" size={16} />
                <p className="text-[10px] uppercase tracking-widest text-gold/40 font-cinzel">Daily</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-20 animate-in fade-in zoom-in duration-700">
             <div className="ornament-divider mb-8">
                <span className="text-gold/50 font-cinzel text-xs tracking-[0.4em]">✦ Confirmed ✦</span>
              </div>
              <h2 className="text-3xl font-playfair text-gold/80 mb-4">The Pact is Sealed.</h2>
              <p className="font-lora italic text-gold/40">Watch your inbox as the sun sets.</p>
          </div>
        )}
      </div>
    </div>
  );
}
