import React, { useState } from 'react';

export default function App() {
  const [hideStats, setHideStats] = useState(false);
  const [hasEmergency, setHasEmergency] = useState(true);

  return (
      <div style={dossierContainer}>

        {/* TEST TOOLBAR DIT KAN LATER WEG */}
        <div style={devBar}>
          <small style={{ color: '#aaa' }}>[DEV TEST] </small>
          <button onClick={() => setHasEmergency(!hasEmergency)} style={devBtn}>
            {hasEmergency ? 'Verberg Crisis' : 'Toon Crisis Event'}
          </button>
        </div>

        {/* VASTGEPINDE PAPIEREN HEADER (DOSSIER KLIP) */}
        <header style={stickyHeader}>
          <div style={headerTopRow}>
            <div>
              <div style={rubberStampMini}>CONFIDENTIAL</div>
              <h1 style={folderTitle}>DOSSIER: GELDERLAND</h1>
            </div>
            <button onClick={() => setHideStats(!hideStats)} style={redactBtn}>
              {hideStats ? '🔓 TOON DATA' : '⬛ CENSUREER'}
            </button>
          </div>

          {/* TYPEMACHINE RESOURCES STRIP */}
          <div style={typewriterResourceStrip}>
            <div style={resItem}><span style={resLabel}>GELD:</span> <strong>{hideStats ? '████' : 'ƒ 450.000'}</strong></div>
            <div style={resItem}><span style={resLabel}>VOEDSEL:</span> <strong>{hideStats ? '████' : '72 TON'}</strong></div>
            <div style={resItem}><span style={resLabel}>FABRIEKEN:</span> <strong>{hideStats ? '████' : 'KLASSE 6'}</strong></div>
            <div style={resItem}><span style={resLabel}>TROEPEN:</span> <strong>{hideStats ? '████' : '48 REG.'}</strong></div>
          </div>

          <div style={reichtDrukText}>
            DUITSE BEZETTINGSDROK: <span style={{ color: '#8b0000', fontWeight: 'bold' }}>72%</span>
          </div>
        </header>

        {/* ALLES DIRECT OP ÉÉN SCROLLBAAR PAPIEREN BLAD */}
        <main style={{ padding: '15px' }}>

          {/* 1. ACUTE CRISIS (TELEGRAM VAN HET KABINET) */}
          {hasEmergency && (
              <div style={telegramPaper}>
                <div style={telegramStamp}>SPOEDTELEGRAM</div>
                <div style={telegramHeader}>
                  <span>PRIORITEIT: HOOG</span>
                  <span>14 MEI 1944</span>
                </div>
                <hr style={typewriterHr} />
                <h3 style={telegramTitle}>NATIONAAL DECREET #08: VOEDSELTEKORT</h3>
                <p style={telegramBody}>
                  DE BEZETTER EISCHT 200 TON VOEDSEL VOOR LANDELIJKE DISTRIBUTIE STOP.
                  BIJ WEIGERING ZAL DE DUITSCHE DRUK MET +15% TOENEMEN STOP.
                </p>
                <div style={voteActionBox}>
                  <button style={stampVoteYes}>[ X ] VOOR STEMMEN</button>
                  <button style={stampVoteNo}>[ X ] TEGEN STEMMEN</button>
                </div>
              </div>
          )}

          {/* 2. DIRECTE VELDOPERATIES (GEEN INKLAPONDIERDELEN!) */}
          <div style={officialPaperSheet}>
            <div style={watermark}>TOP SECRET</div>
            <h2 style={sheetTitle}>I. BEVOLEN VELDOPERATIES</h2>
            <p style={sheetSub}>Selecteer een mandaat om het officiële bevel te stempelen.</p>

            <div style={typedOrderRow}>
              <div style={{ flex: 1 }}>
                <div style={orderName}>MUNITIEFABRIEK BOUWEN</div>
                <div style={orderMeta}>KOSTEN: ƒ 100.000 | DUUR: 2 RONDES</div>
              </div>
              <button style={stampActionBtn}>GOEDGEKEURD</button>
            </div>

            <div style={typedOrderRow}>
              <div style={{ flex: 1 }}>
                <div style={orderName}>GRENSBEWAKING MOBILISEREN</div>
                <div style={orderMeta}>KOSTEN: 30 TON VOEDSEL | DIRECT EFFECT</div>
              </div>
              <button style={stampActionBtn}>GOEDGEKEURD</button>
            </div>

            <div style={{ ...typedOrderRow, borderLeft: '4px solid #4a154b' }}>
              <div style={{ flex: 1 }}>
                <div style={{ ...orderName, color: '#4a154b' }}>SPIONAGENETWERK BRABANT</div>
                <div style={orderMeta}>GEHEIME OPERATIE | KOSTEN: ƒ 200.000</div>
              </div>
              <button style={purpleStampBtn}>GEHEIM BEVEL</button>
            </div>
          </div>

          {/* 3. VERTRUWELIJKE RADIOCOMMUNICATIE */}
          <div style={officialPaperSheet}>
            <h2 style={sheetTitle}>II. ENCRYPTED RADIOTELEGRAAF</h2>
            <p style={sheetSub}>Inkomende en uitgaande gecodeerde berichten.</p>

            <div style={radioPaperBox}>
              <div style={incomingMsg}>
                <span style={msgMeta}>[BERICHT ONTVANGEN - PROVINCIE BRABANT]</span>
                <p style={msgText}>"Gelderland, wij zien troepenopbouw aan de grens. Blijft onze afspraak voor de fabrieksstemming staan?"</p>
              </div>

              <div style={outgoingMsg}>
                <span style={msgMeta}>[VERSTUURD BERICHT - JOUW PROVINCIE]</span>
                <p style={msgText}>"Troepen zijn puur defensief. Stem voor onze fabriek, dan stemmen wij mee met het voedsel."</p>
              </div>
            </div>

            <div style={transceiverControls}>
              <label style={fieldLabel}>ONTVANGER:</label>
              <select style={paperSelect}>
                <option>PROVINCIE BRABANT (PRIVE)</option>
                <option>PROVINCIE FRIESLAND (PRIVE)</option>
                <option>ALLE PROVINCIES (ALGEMENE FREQUENTIE)</option>
              </select>

              <label style={fieldLabel}>CODEREN & VERSTUREN:</label>
              <div style={{ display: 'flex', gap: '5px' }}>
                <input type="text" placeholder="Typ uw gecodeerde bericht..." style={paperInput} />
                <button style={transmitStamp}>VERSTUUR</button>
              </div>
            </div>
          </div>

          {/* 4. CONFIDENTIAL INTEL DOSSIER */}
          <div style={officialPaperSheet}>
            <div style={classifiedBigStamp}>VERTROUWELIJK</div>
            <h2 style={sheetTitle}>III. SPIONAGERAPPORT</h2>
            <div style={intelContent}>
              <p><strong>RAPPORT #49 (BRABANT):</strong></p>
              <p style={{ margin: 0 }}>
                Onze spionnen melden dat Brabant kampt met een ernstig voedseltekort. Hun daadwerkelijke voorraad wordt geschat op <strong>10 tot 25 ton</strong>, ondanks dat zij publiekelijk claimen 80 ton te bezitten.
              </p>
            </div>
          </div>

        </main>
      </div>
  );
}

/* ==========================================
   AUTHENTIEKE JAREN '40 PAPIER STYLES
   ========================================== */

const dossierContainer: React.CSSProperties = {
  background: '#cabb9e', // Echtheid van oud Manila / vergeeld papier
  color: '#211d18', // Inkt zwart/donkerbruin
  minHeight: '100vh',
  fontFamily: '"Courier Prime", "Courier New", Courier, monospace', // Typemachine
};

const stickyHeader: React.CSSProperties = {
  position: 'sticky',
  top: 0,
  zIndex: 100,
  background: '#dcd1b8',
  borderBottom: '3px double #4a3e2d',
  padding: '12px',
  boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
};

const headerTopRow: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
};

const folderTitle: React.CSSProperties = {
  margin: '4px 0 0 0',
  fontSize: '18px',
  fontWeight: 'bold',
  letterSpacing: '1px',
  color: '#1a1612',
};

const rubberStampMini: React.CSSProperties = {
  display: 'inline-block',
  border: '2px solid #8b0000',
  color: '#8b0000',
  fontSize: '9px',
  padding: '1px 4px',
  fontWeight: 'bold',
  transform: 'rotate(-2deg)',
  letterSpacing: '1px',
};

const redactBtn: React.CSSProperties = {
  background: '#211d18',
  color: '#dcd1b8',
  border: 'none',
  padding: '6px 10px',
  fontSize: '10px',
  fontFamily: 'monospace',
  fontWeight: 'bold',
  cursor: 'pointer',
};

const typewriterResourceStrip: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '4px',
  marginTop: '10px',
  background: '#cbbba0',
  padding: '6px',
  border: '1px solid #8c7b65',
  fontSize: '11px',
};

const resItem: React.CSSProperties = {
  color: '#111',
};

const resLabel: React.CSSProperties = {
  color: '#554838',
  fontSize: '10px',
};

const reichtDrukText: React.CSSProperties = {
  fontSize: '10px',
  marginTop: '6px',
  letterSpacing: '1px',
};

const officialPaperSheet: React.CSSProperties = {
  background: '#eee4d0', // Oorlogs-papiervel
  border: '1px solid #b8a88d',
  padding: '15px',
  marginBottom: '15px',
  boxShadow: '2px 3px 7px rgba(0,0,0,0.15)',
  position: 'relative',
};

const sheetTitle: React.CSSProperties = {
  margin: '0 0 4px 0',
  fontSize: '14px',
  letterSpacing: '1px',
  borderBottom: '1px solid #211d18',
  paddingBottom: '4px',
};

const sheetSub: React.CSSProperties = {
  fontSize: '10px',
  color: '#554838',
  marginTop: 0,
  marginBottom: '12px',
};

const typedOrderRow: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  background: '#e3d7bf',
  border: '1px solid #a8987e',
  padding: '10px',
  marginBottom: '8px',
};

const orderName: React.CSSProperties = {
  fontSize: '11px',
  fontWeight: 'bold',
};

const orderMeta: React.CSSProperties = {
  fontSize: '9px',
  color: '#665745',
  marginTop: '2px',
};

/* STEMPEL KNOPPEN */
const stampActionBtn: React.CSSProperties = {
  border: '2px solid #8b0000',
  color: '#8b0000',
  background: 'transparent',
  padding: '6px 10px',
  fontWeight: 'bold',
  fontSize: '10px',
  fontFamily: 'monospace',
  transform: 'rotate(-3deg)',
  cursor: 'pointer',
};

const purpleStampBtn: React.CSSProperties = {
  border: '2px solid #4a154b',
  color: '#4a154b',
  background: 'transparent',
  padding: '6px 10px',
  fontWeight: 'bold',
  fontSize: '10px',
  fontFamily: 'monospace',
  transform: 'rotate(2deg)',
  cursor: 'pointer',
};

/* TELEGRAM STYLES (GELE/RODE NOOD-BRIEF) */
const telegramPaper: React.CSSProperties = {
  background: '#f4ebcc',
  border: '2px red solid',
  padding: '12px',
  marginBottom: '15px',
  position: 'relative',
};

const telegramStamp: React.CSSProperties = {
  position: 'absolute',
  top: '10px',
  right: '10px',
  background: '#8b0000',
  color: '#fff',
  fontSize: '9px',
  padding: '2px 6px',
  fontWeight: 'bold',
};

const telegramHeader: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  fontSize: '9px',
  color: '#666',
  width: '70%',
};

const telegramTitle: React.CSSProperties = {
  margin: '8px 0',
  fontSize: '13px',
  color: '#8b0000',
};

const telegramBody: React.CSSProperties = {
  fontSize: '11px',
  lineHeight: '1.4',
  margin: '0 0 12px 0',
};

const typewriterHr: React.CSSProperties = {
  border: 'none',
  borderTop: '1px dashed #8b0000',
  margin: '6px 0',
};

const voteActionBox: React.CSSProperties = {
  display: 'flex',
  gap: '10px',
};

const stampVoteYes: React.CSSProperties = {
  flex: 1,
  padding: '10px',
  background: '#1e4620',
  color: '#fff',
  border: 'none',
  fontFamily: 'monospace',
  fontWeight: 'bold',
  fontSize: '11px',
};

const stampVoteNo: React.CSSProperties = {
  flex: 1,
  padding: '10px',
  background: '#8b0000',
  color: '#fff',
  border: 'none',
  fontFamily: 'monospace',
  fontWeight: 'bold',
  fontSize: '11px',
};

/* RADIO LOG STYLES */
const radioPaperBox: React.CSSProperties = {
  background: '#dfd4bc',
  border: '1px solid #ab9b82',
  padding: '8px',
  marginBottom: '10px',
  maxHeight: '160px',
  overflowY: 'auto',
};

const incomingMsg: React.CSSProperties = {
  borderLeft: '3px solid #8b0000',
  paddingLeft: '6px',
  marginBottom: '8px',
};

const outgoingMsg: React.CSSProperties = {
  borderLeft: '3px solid #1e4620',
  paddingLeft: '6px',
};

const msgMeta: React.CSSProperties = {
  fontSize: '8px',
  color: '#665745',
  display: 'block',
};

const msgText: React.CSSProperties = {
  margin: '2px 0 0 0',
  fontSize: '10px',
};

const transceiverControls: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
};

const fieldLabel: React.CSSProperties = {
  fontSize: '9px',
  fontWeight: 'bold',
  marginTop: '4px',
};

const paperSelect: React.CSSProperties = {
  background: '#e3d7bf',
  border: '1px solid #a8987e',
  padding: '6px',
  fontSize: '10px',
  fontFamily: 'monospace',
};

const paperInput: React.CSSProperties = {
  flex: 1,
  background: '#f7f0e1',
  border: '1px solid #a8987e',
  padding: '8px',
  fontSize: '10px',
  fontFamily: 'monospace',
};

const transmitStamp: React.CSSProperties = {
  background: '#211d18',
  color: '#eee4d0',
  border: 'none',
  padding: '0 12px',
  fontSize: '10px',
  fontFamily: 'monospace',
  fontWeight: 'bold',
};

const intelContent: React.CSSProperties = {
  fontSize: '10px',
  lineHeight: '1.4',
  background: '#e3d7bf',
  padding: '8px',
  border: '1px dashed #8b0000',
};

const watermark: React.CSSProperties = {
  position: 'absolute',
  top: '10px',
  right: '10px',
  fontSize: '10px',
  color: 'rgba(139, 0, 0, 0.2)',
  fontWeight: 'bold',
  transform: 'rotate(-10deg)',
};

const classifiedBigStamp: React.CSSProperties = {
  position: 'absolute',
  top: '8px',
  right: '10px',
  border: '2px solid rgba(139, 0, 0, 0.4)',
  color: 'rgba(139, 0, 0, 0.4)',
  padding: '2px 6px',
  fontSize: '10px',
  fontWeight: 'bold',
  transform: 'rotate(5deg)',
};

const devBar: React.CSSProperties = {
  background: '#111',
  padding: '4px 8px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const devBtn: React.CSSProperties = {
  background: '#333',
  color: '#fff',
  border: 'none',
  fontSize: '9px',
  padding: '2px 6px',
};