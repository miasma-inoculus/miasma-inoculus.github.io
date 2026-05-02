/*
 * THE INKWELL — Subscribe Page
 * Design: Gaslight & Shadow — atmospheric newsletter signup
 * Gold-framed form, Cinzel labels, candlelit CTA
 */

import { useState } from 'react';
import { Mail, Check } from 'lucide-react';
import { toast } from 'sonner';

const ORNAMENT = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663614260208/VLQTr2HHpa65hSd5QHn4op/masthead_ornament-SWtKcceA7MVfXV4kpZboRD.webp';
const STORY_BG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663614260208/VLQTr2HHpa65hSd5QHn4op/story_card_1-iBjcSU9knQxuHU99q3jed4.webp';

const benefits = [
  'One new story delivered each midnight',
  'Horror, thriller, and suspense — all three genres',
  'Curated from the finest micro fiction tradition',
  'No correspondence beyond the nightly dispatch',
  'Unsubscribe at any time, though few do',
];

export default function Subscribe() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setLoading(true);
    await new Promise(r => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
    toast.success('You have been enrolled in the Midnight Dispatch.', {
      description: 'Your first story arrives tonight at midnight.',
      style: {
        background: 'oklch(0.11 0.009 300)',
        border: '1px solid oklch(0.72 0.12 75 / 40%)',
        color: 'oklch(0.84 0.008 70)',
        fontFamily: "'Lora', Georgia, serif",
      },
    });
  };

  return (
    <div className="min-h-screen" style={{ background: 'oklch(0.09 0.008 300)' }}>

      {/* Two-column layout */}
      <div className="min-h-screen grid lg:grid-cols-2">

        {/* Left — atmospheric image panel */}
        <div className="relative hidden lg:block">
          <img
            src={STORY_BG}
            alt="Victorian candlelit journal"
            className="w-full h-full object-cover"
            style={{ filter: 'brightness(0.6) saturate(0.7)' }}
          />
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(to right, transparent 60%, oklch(0.09 0.008 300))'
          }} />
          <div className="absolute inset-0 flex flex-col justify-end p-12">
            <blockquote style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontStyle: 'italic',
              fontSize: '1.4rem',
              lineHeight: 1.7,
              color: 'oklch(0.84 0.008 70)',
              textShadow: '0 2px 20px oklch(0 0 0 / 80%)',
              maxWidth: '380px',
            }}>
              "I dare not sleep. The dreams are worse than the waking. This place was never meant for the living."
            </blockquote>
            <p className="mt-4 cinzel-label" style={{ fontSize: '0.55rem', textShadow: '0 1px 10px oklch(0 0 0 / 80%)' }}>
              — From Issue No. 1, "The Thirteenth Knock"
            </p>
          </div>
        </div>

        {/* Right — form panel */}
        <div className="flex flex-col justify-center px-8 py-20 lg:py-16 pt-28 lg:pt-16">
          <div className="max-w-md mx-auto w-full">

            {/* Header */}
            <div className="mb-10">
              <p className="cinzel-label mb-3" style={{ fontSize: '0.6rem' }}>
                The Midnight Dispatch
              </p>
              <h1 style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontWeight: 900,
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                color: 'oklch(0.84 0.008 70)',
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
              }}>
                Subscribe to<br />
                <span style={{ fontStyle: 'italic', color: 'oklch(0.72 0.12 75)' }}>the Inkwell</span>
              </h1>
              <p className="mt-4" style={{
                fontFamily: "'Lora', Georgia, serif",
                fontStyle: 'italic',
                fontSize: '1rem',
                lineHeight: 1.8,
                color: 'oklch(0.55 0.01 70)',
              }}>
                One story. Every night. Delivered before the candle gutters.
              </p>
            </div>

            {/* Benefits list */}
            <ul className="mb-10 space-y-3">
              {benefits.map((b, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span style={{ color: 'oklch(0.72 0.12 75)', marginTop: '0.1rem', flexShrink: 0 }}>✦</span>
                  <span style={{
                    fontFamily: "'Lora', Georgia, serif",
                    fontSize: '0.9rem',
                    lineHeight: 1.6,
                    color: 'oklch(0.6 0.008 70)',
                  }}>
                    {b}
                  </span>
                </li>
              ))}
            </ul>

            {/* Ornament */}
            <div className="flex justify-center mb-8">
              <img src={ORNAMENT} alt="" className="w-full opacity-30" style={{ filter: 'sepia(20%)' }} />
            </div>

            {/* Form */}
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name field */}
                <div>
                  <label style={{
                    display: 'block',
                    fontFamily: "'Cinzel', serif",
                    fontSize: '0.6rem',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: 'oklch(0.72 0.12 75 / 70%)',
                    marginBottom: '0.5rem',
                  }}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="Edmund Ashford"
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      background: 'oklch(0.12 0.009 300)',
                      border: '1px solid oklch(0.72 0.12 75 / 20%)',
                      color: 'oklch(0.84 0.008 70)',
                      fontFamily: "'Lora', Georgia, serif",
                      fontSize: '0.95rem',
                      outline: 'none',
                      transition: 'border-color 0.3s',
                    }}
                    onFocus={e => (e.target as HTMLInputElement).style.borderColor = 'oklch(0.72 0.12 75 / 60%)'}
                    onBlur={e => (e.target as HTMLInputElement).style.borderColor = 'oklch(0.72 0.12 75 / 20%)'}
                  />
                </div>

                {/* Email field */}
                <div>
                  <label style={{
                    display: 'block',
                    fontFamily: "'Cinzel', serif",
                    fontSize: '0.6rem',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: 'oklch(0.72 0.12 75 / 70%)',
                    marginBottom: '0.5rem',
                  }}>
                    Your Address *
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="your@address.com"
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      background: 'oklch(0.12 0.009 300)',
                      border: '1px solid oklch(0.72 0.12 75 / 20%)',
                      color: 'oklch(0.84 0.008 70)',
                      fontFamily: "'Lora', Georgia, serif",
                      fontSize: '0.95rem',
                      outline: 'none',
                      transition: 'border-color 0.3s',
                    }}
                    onFocus={e => (e.target as HTMLInputElement).style.borderColor = 'oklch(0.72 0.12 75 / 60%)'}
                    onBlur={e => (e.target as HTMLInputElement).style.borderColor = 'oklch(0.72 0.12 75 / 20%)'}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading || !email.trim()}
                  className="w-full flex items-center justify-center gap-3 py-4 mt-2 transition-all duration-300"
                  style={{
                    background: loading ? 'oklch(0.72 0.12 75 / 15%)' : 'oklch(0.72 0.12 75 / 12%)',
                    border: '1px solid oklch(0.72 0.12 75 / 60%)',
                    color: 'oklch(0.72 0.12 75)',
                    fontFamily: "'Cinzel', serif",
                    fontSize: '0.7rem',
                    letterSpacing: '0.25em',
                    textTransform: 'uppercase',
                    cursor: loading || !email.trim() ? 'not-allowed' : 'pointer',
                    opacity: !email.trim() ? 0.5 : 1,
                  }}
                  onMouseEnter={e => {
                    if (!loading && email.trim()) {
                      (e.currentTarget as HTMLElement).style.background = 'oklch(0.72 0.12 75 / 22%)';
                      (e.currentTarget as HTMLElement).style.borderColor = 'oklch(0.72 0.12 75)';
                    }
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.background = 'oklch(0.72 0.12 75 / 12%)';
                    (e.currentTarget as HTMLElement).style.borderColor = 'oklch(0.72 0.12 75 / 60%)';
                  }}
                >
                  {loading ? (
                    <>
                      <span className="candle-flicker">✦</span>
                      Enrolling...
                    </>
                  ) : (
                    <>
                      <Mail size={14} />
                      Enrol in the Dispatch
                    </>
                  )}
                </button>

                <p style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontStyle: 'italic',
                  fontSize: '0.8rem',
                  color: 'oklch(0.4 0.008 70)',
                  textAlign: 'center',
                  marginTop: '0.75rem',
                }}>
                  Your address will never be shared. The darkness keeps its own counsel.
                </p>
              </form>
            ) : (
              /* Success state */
              <div className="gold-frame p-8 text-center" style={{ background: 'oklch(0.11 0.009 300)' }}>
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 flex items-center justify-center"
                    style={{ border: '1px solid oklch(0.72 0.12 75 / 40%)', background: 'oklch(0.72 0.12 75 / 10%)' }}>
                    <Check size={20} style={{ color: 'oklch(0.72 0.12 75)' }} />
                  </div>
                </div>
                <h3 className="mb-3" style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontWeight: 700,
                  fontSize: '1.4rem',
                  color: 'oklch(0.84 0.008 70)',
                }}>
                  You are enrolled.
                </h3>
                <p style={{
                  fontFamily: "'Lora', Georgia, serif",
                  fontStyle: 'italic',
                  fontSize: '0.95rem',
                  lineHeight: 1.8,
                  color: 'oklch(0.55 0.01 70)',
                }}>
                  Your first dispatch arrives tonight at midnight.
                  Extinguish your candle. We will find you in the dark.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-10 px-6 border-t text-center" style={{
        borderColor: 'oklch(0.72 0.12 75 / 10%)',
        background: 'oklch(0.07 0.007 300)',
      }}>
        <p style={{
          fontFamily: "'Cinzel', serif",
          fontSize: '0.55rem',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: 'oklch(0.35 0.008 70)',
        }}>
          The Inkwell · Est. 1887 · A Daily Dispatch of Darkness · Vol. I
        </p>
      </footer>
    </div>
  );
}

