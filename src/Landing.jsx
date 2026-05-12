import React, { useEffect, useState } from 'react'

const BRAND = {
  navy:  '#1B2E5C',
  green: '#154734',
  gold:  '#C8A85A',
}

function LazyJLogo({ size = 52 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" rx="16" fill="rgba(0,0,0,0.25)"/>
      <line x1="80" y1="44" x2="80" y2="72" stroke="white" strokeWidth="9" strokeLinecap="round"/>
      <path d="M80 58 L32 58 Q16 58 16 42 Q16 28 30 28"
        stroke="white" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  )
}

export default function Landing() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    document.title = 'Wooley Home'
  }, [])

  return (
    <div style={{
      minHeight: '100vh',
      background: BRAND.green,
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      color: '#fff',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        .tool-card {
          position: relative;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 16px;
          padding: 28px;
          max-width: 360px;
          cursor: pointer;
          opacity: 0;
          transform: translateY(20px);
          transition: transform 0.2s ease, border-color 0.2s ease, background 0.2s ease;
        }
        .tool-card.mounted {
          opacity: 1;
          transform: translateY(0);
          transition: opacity 0.5s ease, transform 0.5s ease, border-color 0.2s ease, background 0.2s ease;
        }
        .tool-card:hover { background: rgba(255,255,255,0.1); border-color: rgba(255,255,255,0.22); transform: translateY(-3px); }
        .launch-btn {
          display: inline-flex; align-items: center; gap: 7px;
          background: #fff; color: #154734;
          padding: 10px 20px; border-radius: 8px; border: none;
          font-size: 13px; font-weight: 700; cursor: pointer; margin-top: 20px;
          letter-spacing: 0.02em; transition: opacity 0.15s ease, transform 0.15s ease;
        }
        .launch-btn:hover { opacity: 0.9; transform: translateX(2px); }
        .glow { position: absolute; border-radius: 50%; filter: blur(90px); pointer-events: none; }
        .grid-line { position: absolute; background: rgba(255,255,255,0.025); pointer-events: none; }
        @media (max-width: 640px) {
          .page-inner { padding: 40px 20px 60px !important; }
        }
      `}</style>

      {[...Array(8)].map((_, i) => (
        <div key={i} className="grid-line" style={{ left: `${i * 14.28}%`, top: 0, bottom: 0, width: 1 }}/>
      ))}
      <div className="glow" style={{ width: 500, height: 500, background: '#0d3224', opacity: 0.6, top: -200, right: -100, position: 'absolute' }}/>
      <div className="glow" style={{ width: 350, height: 350, background: '#0a2a1c', opacity: 0.6, bottom: -100, left: -80, position: 'absolute' }}/>

      <div className="page-inner" style={{ maxWidth: 960, margin: '0 auto', width: '100%', padding: '64px 40px 80px', flex: 1, display: 'flex', flexDirection: 'column' }}>

        <header style={{ marginBottom: 72 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 52 }}>
            <LazyJLogo size={52}/>
            <div>
              <div style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: 22, fontWeight: 700, color: '#fff', lineHeight: 1.1 }}>
                Wooley
              </div>
              <div style={{ fontSize: 11, color: BRAND.gold, textTransform: 'uppercase', letterSpacing: 3, fontWeight: 600, marginTop: 4 }}>
                Waco, TX
              </div>
            </div>
          </div>

          <div style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: 48, fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.03em', marginBottom: 16 }}>
            <span style={{ color: '#fff' }}>Your tools,</span>
            <br/>
            <span style={{ color: BRAND.gold }}>in one place.</span>
          </div>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.55)', maxWidth: 420, lineHeight: 1.6 }}>
            Tools for personal, professional, and proprietary use.
          </p>
        </header>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24 }}>
          <div className={`tool-card ${mounted ? 'mounted' : ''}`} onClick={() => window.location.href = 'https://dwooley11.github.io/higgforce/'}>
            <div style={{
              width: 52, height: 52, borderRadius: 14,
              background: 'rgba(200,168,90,0.12)', border: '1px solid rgba(200,168,90,0.25)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: BRAND.gold, marginBottom: 18,
            }}>
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <rect x="2" y="4" width="24" height="20" rx="3" stroke="currentColor" strokeWidth="1.75"/>
                <path d="M8 10h12M8 14h8M8 18h5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
                <circle cx="21" cy="18" r="4" fill="#154734" stroke="#C8A85A" strokeWidth="1.5"/>
                <path d="M19.5 18l1 1 2-2" stroke="#C8A85A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1.5, color: BRAND.gold, marginBottom: 6 }}>CRM</div>
            <div style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: 18, fontWeight: 600, color: '#fff', marginBottom: 10, lineHeight: 1.2 }}>
              Higg CRM
            </div>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.6, margin: 0 }}>
              Prospecting, Pipeline, Productivity, & Portfolio — all in one place.
            </p>
            <button className="launch-btn" onClick={e => { e.stopPropagation(); window.location.href = 'https://dwooley11.github.io/higgforce/'; }}>
              Open Higg CRM
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3 7h8M7.5 3.5L11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          <div className={`tool-card ${mounted ? 'mounted' : ''}`} onClick={() => window.location.href = 'https://dwooley11.github.io/dynasty/'}>
            <div style={{
              width: 52, height: 52, borderRadius: 14,
              background: 'rgba(200,168,90,0.12)', border: '1px solid rgba(200,168,90,0.25)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: BRAND.gold, marginBottom: 18,
            }}>
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M4 20h20M5 20V11l4 3 5-7 5 7 4-3v9" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="5" cy="9" r="1.25" fill="currentColor"/>
                <circle cx="14" cy="5" r="1.25" fill="currentColor"/>
                <circle cx="23" cy="9" r="1.25" fill="currentColor"/>
              </svg>
            </div>
            <div style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1.5, color: BRAND.gold, marginBottom: 6 }}>Fantasy</div>
            <div style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: 18, fontWeight: 600, color: '#fff', marginBottom: 10, lineHeight: 1.2 }}>
              Dynasty
            </div>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.6, margin: 0 }}>
              Rosters, rankings, and long-term roster strategy.
            </p>
            <button className="launch-btn" onClick={e => { e.stopPropagation(); window.location.href = 'https://dwooley11.github.io/dynasty/'; }}>
              Open Dynasty
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3 7h8M7.5 3.5L11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        <footer style={{ marginTop: 'auto', paddingTop: 64 }}>
          <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)' }}>© {new Date().getFullYear()} Wooley</div>
        </footer>

      </div>
    </div>
  )
}
