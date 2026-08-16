import React, { useState } from 'react';

export default function App() {
  const [showStats] = useState(true);
  const [showCrisis, setShowCrisis] = useState(true);
  const [activeTab, setActiveTab] = useState<'overview' | 'province' | 'diplomacy' | 'intel'>('overview');

  return (
      <div style={gameContainer}>

        {/* DEVELOPMENT BAR */}
        <div style={devBar}>
          <span>[DEV BUILD] PROVINCE CLIENT // GELDERLAND</span>

          <button
              onClick={() => setShowCrisis(!showCrisis)}
              style={devBtn}
          >
            {showCrisis ? 'HIDE CRISIS' : 'SHOW CRISIS'}
          </button>
        </div>

        {/* ================================
          MAIN DOSSIER HEADER
      ================================= */}

        <header style={mainHeader}>

          <div style={headerTop}>

            <div>
              <div style={confidentialStamp}>
                CONFIDENTIAL
              </div>

              <div style={gameTitle}>
                THE PROVINCIAL COUNCIL
              </div>

              <div style={provinceTitle}>
                PROVINCE OF GELDERLAND
              </div>
            </div>

            <div style={roundInfo}>
              <div style={roundLabel}>CURRENT ROUND</div>
              <div style={roundNumber}>04</div>
              <div style={dateText}>14 MAY 1944</div>
            </div>

          </div>

          {/* NATIONAL STATUS */}

          <div style={nationalStatus}>

            <div style={nationalHeader}>
              <span>UNITED NETHERLANDS</span>
              <span style={classifiedText}>NATIONAL STATUS</span>
            </div>

            <div style={nationalStats}>

              <div style={nationalStat}>
                <span>FOOD</span>
                <strong>54%</strong>
              </div>

              <div style={nationalStat}>
                <span>INDUSTRY</span>
                <strong>68%</strong>
              </div>

              <div style={nationalStat}>
                <span>MORALE</span>
                <strong>61%</strong>
              </div>

              <div style={nationalStatDanger}>
                <span>GERMAN CONTROL</span>
                <strong>72%</strong>
              </div>

            </div>

          </div>

        </header>

        {/* ================================
          NAVIGATION
      ================================= */}

        <nav style={navigation}>

          <NavButton
              active={activeTab === 'overview'}
              onClick={() => setActiveTab('overview')}
          >
            OVERVIEW
          </NavButton>

          <NavButton
              active={activeTab === 'province'}
              onClick={() => setActiveTab('province')}
          >
            PROVINCE
          </NavButton>

          <NavButton
              active={activeTab === 'diplomacy'}
              onClick={() => setActiveTab('diplomacy')}
          >
            DIPLOMACY
          </NavButton>

          <NavButton
              active={activeTab === 'intel'}
              onClick={() => setActiveTab('intel')}
          >
            INTELLIGENCE
          </NavButton>

        </nav>

        {/* ================================
          CONTENT
      ================================= */}

        <main style={mainContent}>

          {/* =================================
            OVERVIEW
        ================================= */}

          {activeTab === 'overview' && (
              <>

                {/* NATIONAL CRISIS */}

                {showCrisis && (
                    <section style={crisisPaper}>

                      <div style={urgentStamp}>
                        URGENT
                      </div>

                      <div style={paperHeader}>
                        <span>OFFICE OF THE NATIONAL COUNCIL</span>
                        <span>DECREE #08</span>
                      </div>

                      <div style={redDivider} />

                      <h2 style={crisisTitle}>
                        NATIONAL FOOD SHORTAGE
                      </h2>

                      <p style={paperText}>
                        The occupying administration demands an additional
                        <strong> 200 tons of food </strong>
                        for national distribution.
                      </p>

                      <p style={paperText}>
                        Refusal will increase German administrative pressure
                        throughout the Netherlands.
                      </p>

                      <div style={crisisConsequence}>
                        <span>IF REFUSED</span>
                        <strong>GERMAN CONTROL +15%</strong>
                      </div>

                      <div style={voteArea}>

                        <div style={voteLabel}>
                          PROVINCIAL POSITION
                        </div>

                        <div style={voteButtons}>

                          <button style={approveButton}>
                            ✓ SUPPORT
                          </button>

                          <button style={rejectButton}>
                            ✕ OPPOSE
                          </button>

                        </div>

                      </div>

                    </section>
                )}

                {/* YOUR PROVINCE */}

                <section style={paperSection}>

                  <SectionHeader
                      number="I"
                      title="PROVINCIAL POSITION"
                      subtitle="CURRENT RESOURCES AND CAPABILITIES"
                  />

                  <div style={resourceGrid}>

                    <Resource
                        label="TREASURY"
                        value={showStats ? 'ƒ 450.000' : '██████'}
                        detail="AVAILABLE FUNDS"
                    />

                    <Resource
                        label="FOOD"
                        value={showStats ? '72 TON' : '██████'}
                        detail="LOCAL RESERVE"
                    />

                    <Resource
                        label="INDUSTRY"
                        value={showStats ? 'CLASS VI' : '██████'}
                        detail="PRODUCTION CAPACITY"
                    />

                    <Resource
                        label="MILITARY"
                        value={showStats ? '48 REG.' : '██████'}
                        detail="AVAILABLE PERSONNEL"
                    />

                  </div>

                  <div style={provinceFooter}>

                    <div>
                      <span style={smallLabel}>PROVINCIAL INFLUENCE</span>

                      <div style={progressOuter}>
                        <div
                            style={{
                              ...progressInner,
                              width: '64%',
                            }}
                        />
                      </div>

                      <span style={progressText}>
                    64 / 100
                  </span>
                    </div>

                    <button
                        style={primaryStamp}
                        onClick={() => setActiveTab('province')}
                    >
                      DEVELOP PROVINCE
                    </button>

                  </div>

                </section>

                {/* DIPLOMACY PREVIEW */}

                <section style={paperSection}>

                  <SectionHeader
                      number="II"
                      title="PRIVATE COMMUNICATION"
                      subtitle="SECURE PROVINCIAL CHANNELS"
                  />

                  <div style={messagePreview}>

                    <div style={messageHeader}>
                  <span style={messageProvince}>
                    BRABANT
                  </span>

                      <span style={messageTime}>
                    14:32
                  </span>
                    </div>

                    <p style={messageText}>
                      "Does our agreement regarding the factory vote still
                      stand?"
                    </p>

                    <div style={messageFooter}>
                  <span style={privateMark}>
                    PRIVATE CHANNEL
                  </span>

                      <button
                          style={replyButton}
                          onClick={() => setActiveTab('diplomacy')}
                      >
                        OPEN CHANNEL
                      </button>
                    </div>

                  </div>

                  <div style={messagePreview}>

                    <div style={messageHeader}>
                  <span style={messageProvince}>
                    LIMBURG
                  </span>

                      <span style={messageTime}>
                    13:51
                  </span>
                    </div>

                    <p style={messageText}>
                      "We have information regarding Gelderland's military
                      expansion. We should talk."
                    </p>

                    <div style={messageFooter}>
                  <span style={privateMark}>
                    PRIVATE CHANNEL
                  </span>

                      <button
                          style={replyButton}
                          onClick={() => setActiveTab('diplomacy')}
                      >
                        OPEN CHANNEL
                      </button>
                    </div>

                  </div>

                </section>

                {/* INTELLIGENCE */}

                <section style={paperSection}>

                  <SectionHeader
                      number="III"
                      title="INTELLIGENCE"
                      subtitle="RECENTLY ACQUIRED INFORMATION"
                  />

                  <div style={intelReport}>

                    <div style={intelStamp}>
                      CLASSIFIED
                    </div>

                    <div style={intelHeader}>
                      REPORT #049
                    </div>

                    <h3 style={intelTitle}>
                      BRABANT — FOOD RESERVES
                    </h3>

                    <p style={paperText}>
                      Our sources indicate that Brabant's food reserves
                      are considerably lower than publicly reported.
                    </p>

                    <div style={intelEstimate}>

                      <div>
                        ESTIMATED RESERVE
                      </div>

                      <strong>
                        10 — 25 TON
                      </strong>

                    </div>

                    <div style={intelReliability}>

                  <span>
                    SOURCE RELIABILITY
                  </span>

                      <div style={reliabilityBar}>
                        <div
                            style={{
                              ...reliabilityFill,
                              width: '80%',
                            }}
                        />
                      </div>

                      <strong>80%</strong>

                    </div>

                  </div>

                </section>

              </>
          )}

          {/* =================================
            PROVINCE
        ================================= */}

          {activeTab === 'province' && (
              <>

                <section style={paperSection}>

                  <SectionHeader
                      number="I"
                      title="PROVINCIAL DEVELOPMENT"
                      subtitle="DIRECT YOUR PROVINCE'S FUTURE"
                  />

                  <p style={paperText}>
                    Use provincial resources to expand industry,
                    infrastructure and military capabilities.
                  </p>

                  <DevelopmentOption
                      title="MUNITIONS FACTORY"
                      description="Increase military production."
                      cost="ƒ 100.000"
                      duration="2 ROUNDS"
                      color="#8b0000"
                  />

                  <DevelopmentOption
                      title="RAILWAY EXPANSION"
                      description="Increase provincial transport capacity."
                      cost="ƒ 75.000"
                      duration="2 ROUNDS"
                      color="#3d382f"
                  />

                  <DevelopmentOption
                      title="FOOD STORAGE"
                      description="Increase resilience against shortages."
                      cost="ƒ 50.000"
                      duration="1 ROUND"
                      color="#1f4b2b"
                  />

                  <DevelopmentOption
                      title="INTELLIGENCE OFFICE"
                      description="Improve information gathering."
                      cost="ƒ 120.000"
                      duration="3 ROUNDS"
                      color="#4a154b"
                      secret
                  />

                </section>

              </>
          )}

          {/* =================================
            DIPLOMACY
        ================================= */}

          {activeTab === 'diplomacy' && (
              <>

                <section style={paperSection}>

                  <SectionHeader
                      number="I"
                      title="SECURE RADIO CHANNEL"
                      subtitle="PRIVATE PROVINCIAL COMMUNICATION"
                  />

                  <div style={conversationBox}>

                    <Message
                        province="BRABANT"
                        time="14:32"
                        text="Does our agreement regarding the factory vote still stand?"
                        incoming
                    />

                    <Message
                        province="GELDERLAND"
                        time="14:35"
                        text="It does. Support our proposal and we will support yours."
                    />

                    <Message
                        province="BRABANT"
                        time="14:37"
                        text="And Limburg?"
                        incoming
                    />

                  </div>

                  <div style={composeArea}>

                    <select style={paperSelect}>
                      <option>BRABANT — PRIVATE</option>
                      <option>LIMBURG — PRIVATE</option>
                      <option>FRIESLAND — PRIVATE</option>
                      <option>ALL PROVINCES — PUBLIC</option>
                    </select>

                    <textarea
                        placeholder="Type your message..."
                        style={messageInput}
                    />

                    <button style={transmitButton}>
                      TRANSMIT MESSAGE
                    </button>

                  </div>

                </section>

                <section style={paperSection}>

                  <SectionHeader
                      number="II"
                      title="ACTIVE AGREEMENTS"
                      subtitle="CURRENT DIPLOMATIC ARRANGEMENTS"
                  />

                  <Agreement
                      province="BRABANT"
                      agreement="MUTUAL SUPPORT — FACTORY VOTE"
                      expires="2 ROUNDS"
                  />

                  <Agreement
                      province="LIMBURG"
                      agreement="RESOURCE EXCHANGE — FOOD / STEEL"
                      expires="1 ROUND"
                  />

                </section>

              </>
          )}

          {/* =================================
            INTELLIGENCE
        ================================= */}

          {activeTab === 'intel' && (
              <>

                <section style={paperSection}>

                  <SectionHeader
                      number="I"
                      title="INTELLIGENCE FILES"
                      subtitle="INFORMATION ACQUIRED THROUGH PROVINCIAL SOURCES"
                  />

                  <IntelCard
                      province="BRABANT"
                      subject="FOOD RESERVES"
                      estimate="10 — 25 TON"
                      reliability="80%"
                  />

                  <IntelCard
                      province="LIMBURG"
                      subject="MILITARY CAPACITY"
                      estimate="35 — 50 REG."
                      reliability="62%"
                  />

                  <IntelCard
                      province="NORTH HOLLAND"
                      subject="INDUSTRIAL EXPANSION"
                      estimate="UNKNOWN"
                      reliability="41%"
                  />

                </section>

              </>
          )}

        </main>

        {/* ================================
          FOOTER
      ================================= */}

        <footer style={footer}>

        <span>
          PROPERTY OF THE PROVINCIAL COUNCIL
        </span>

          <span>
          INFORMATION CLASSIFICATION: CONFIDENTIAL
        </span>

        </footer>

      </div>
  );
}


/* ==========================================
   COMPONENTS
========================================== */

function NavButton({
                     children,
                     active,
                     onClick,
                   }: {
  children: React.ReactNode;
  active: boolean;
  onClick: () => void;
}) {
  return (
      <button
          onClick={onClick}
          style={{
            ...navButton,
            ...(active ? navButtonActive : {}),
          }}
      >
        {children}
      </button>
  );
}


function SectionHeader({
                         number,
                         title,
                         subtitle,
                       }: {
  number: string;
  title: string;
  subtitle: string;
}) {
  return (
      <div style={sectionHeader}>

        <div style={sectionNumber}>
          {number}.
        </div>

        <div>
          <h2 style={sectionTitle}>
            {title}
          </h2>

          <p style={sectionSubtitle}>
            {subtitle}
          </p>
        </div>

      </div>
  );
}


function Resource({
                    label,
                    value,
                    detail,
                  }: {
  label: string;
  value: string;
  detail: string;
}) {
  return (
      <div style={resourceBox}>

      <span style={resourceLabel}>
        {label}
      </span>

        <strong style={resourceValue}>
          {value}
        </strong>

        <span style={resourceDetail}>
        {detail}
      </span>

      </div>
  );
}


function DevelopmentOption({
                             title,
                             description,
                             cost,
                             duration,
                             color,
                             secret = false,
                           }: {
  title: string;
  description: string;
  cost: string;
  duration: string;
  color: string;
  secret?: boolean;
}) {
  return (
      <div
          style={{
            ...developmentOption,
            borderLeft: `4px solid ${color}`,
          }}
      >

        <div style={{ flex: 1 }}>

          <div style={developmentTitle}>
            {title}

            {secret && (
                <span style={secretTag}>
              SECRET
            </span>
            )}
          </div>

          <div style={developmentDescription}>
            {description}
          </div>

          <div style={developmentMeta}>
            COST: {cost} &nbsp;|&nbsp; TIME: {duration}
          </div>

        </div>

        <button
            style={{
              ...stampButton,
              color,
              borderColor: color,
            }}
        >
          AUTHORIZE
        </button>

      </div>
  );
}


function Message({
                   province,
                   time,
                   text,
                   incoming = false,
                 }: {
  province: string;
  time: string;
  text: string;
  incoming?: boolean;
}) {
  return (
      <div
          style={{
            ...chatMessage,
            borderLeft: `3px solid ${incoming ? '#8b0000' : '#1f4b2b'}`,
          }}
      >

        <div style={chatMeta}>
          {province} // {time}
        </div>

        <div style={chatText}>
          "{text}"
        </div>

      </div>
  );
}


function Agreement({
                     province,
                     agreement,
                     expires,
                   }: {
  province: string;
  agreement: string;
  expires: string;
}) {
  return (
      <div style={agreementBox}>

        <div>
          <strong>{province}</strong>

          <div style={agreementText}>
            {agreement}
          </div>
        </div>

        <div style={agreementExpiry}>
          {expires}
        </div>

      </div>
  );
}


function IntelCard({
                     province,
                     subject,
                     estimate,
                     reliability,
                   }: {
  province: string;
  subject: string;
  estimate: string;
  reliability: string;
}) {
  return (
      <div style={intelCard}>

        <div style={intelCardHeader}>
          <strong>{province}</strong>

          <span>CLASSIFIED</span>
        </div>

        <div style={intelSubject}>
          {subject}
        </div>

        <div style={intelEstimateLarge}>
          {estimate}
        </div>

        <div style={intelReliabilitySmall}>
          SOURCE RELIABILITY: {reliability}
        </div>

      </div>
  );
}


/* ==========================================
   STYLES
========================================== */

const dossierBackground = '#c9baa0';

const gameContainer: React.CSSProperties = {
  minHeight: '100vh',
  background: dossierBackground,
  color: '#211d18',
  fontFamily: '"Courier Prime", "Courier New", Courier, monospace',
  letterSpacing: '0.2px',
};

const devBar: React.CSSProperties = {
  background: '#111',
  color: '#aaa',
  padding: '5px 10px',
  fontSize: '8px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const devBtn: React.CSSProperties = {
  background: '#333',
  color: '#fff',
  border: '1px solid #555',
  padding: '3px 8px',
  fontSize: '8px',
  fontFamily: 'monospace',
};

const mainHeader: React.CSSProperties = {
  background: '#ded3ba',
  padding: '14px',
  borderBottom: '3px double #4a3e2d',
  boxShadow: '0 4px 12px rgba(0,0,0,0.25)',
};

const headerTop: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
};

const confidentialStamp: React.CSSProperties = {
  display: 'inline-block',
  border: '2px solid #8b0000',
  color: '#8b0000',
  padding: '2px 6px',
  fontSize: '9px',
  fontWeight: 'bold',
  transform: 'rotate(-2deg)',
  marginBottom: '6px',
};

const gameTitle: React.CSSProperties = {
  fontSize: '12px',
  letterSpacing: '2px',
  fontWeight: 'bold',
};

const provinceTitle: React.CSSProperties = {
  fontSize: '18px',
  fontWeight: 'bold',
  marginTop: '2px',
};

const roundInfo: React.CSSProperties = {
  textAlign: 'right',
};

const roundLabel: React.CSSProperties = {
  fontSize: '7px',
  color: '#665745',
};

const roundNumber: React.CSSProperties = {
  fontSize: '26px',
  fontWeight: 'bold',
  lineHeight: '1',
};

const dateText: React.CSSProperties = {
  fontSize: '8px',
  marginTop: '3px',
};

const nationalStatus: React.CSSProperties = {
  marginTop: '12px',
  border: '1px solid #8c7b65',
  background: '#cbbda3',
};

const nationalHeader: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  padding: '6px 8px',
  borderBottom: '1px solid #8c7b65',
  fontSize: '9px',
  fontWeight: 'bold',
};

const classifiedText: React.CSSProperties = {
  color: '#8b0000',
  fontSize: '7px',
};

const nationalStats: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
};

const nationalStat: React.CSSProperties = {
  padding: '7px',
  borderRight: '1px solid #a8987e',
  display: 'flex',
  flexDirection: 'column',
  gap: '3px',
};

const nationalStatDanger: React.CSSProperties = {
  ...nationalStat,
  color: '#8b0000',
  borderRight: 'none',
};

const navigation: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  background: '#211d18',
};

const navButton: React.CSSProperties = {
  background: 'transparent',
  border: 'none',
  borderRight: '1px solid #51483b',
  color: '#cfc3aa',
  padding: '9px 4px',
  fontFamily: 'monospace',
  fontSize: '8px',
  cursor: 'pointer',
};

const navButtonActive: React.CSSProperties = {
  background: '#ded3ba',
  color: '#211d18',
  fontWeight: 'bold',
};

const mainContent: React.CSSProperties = {
  padding: '15px',
  maxWidth: '760px',
  margin: '0 auto',
};

const crisisPaper: React.CSSProperties = {
  background: '#f2e8c9',
  border: '2px solid #8b0000',
  padding: '13px',
  marginBottom: '15px',
  position: 'relative',
  boxShadow: '2px 3px 7px rgba(0,0,0,0.15)',
};

const urgentStamp: React.CSSProperties = {
  position: 'absolute',
  top: '10px',
  right: '10px',
  color: '#8b0000',
  border: '2px solid #8b0000',
  padding: '3px 6px',
  fontWeight: 'bold',
  fontSize: '9px',
  transform: 'rotate(4deg)',
};

const paperHeader: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  width: '70%',
  fontSize: '8px',
  color: '#665745',
};

const redDivider: React.CSSProperties = {
  borderTop: '1px dashed #8b0000',
  margin: '7px 0',
};

const crisisTitle: React.CSSProperties = {
  fontSize: '15px',
  color: '#8b0000',
  margin: '9px 0',
};

const paperText: React.CSSProperties = {
  fontSize: '10px',
  lineHeight: '1.5',
};

const crisisConsequence: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  padding: '7px',
  marginTop: '10px',
  background: '#e2d4b4',
  border: '1px dashed #8b0000',
  fontSize: '9px',
};

const voteArea: React.CSSProperties = {
  marginTop: '12px',
};

const voteLabel: React.CSSProperties = {
  fontSize: '8px',
  fontWeight: 'bold',
  marginBottom: '5px',
};

const voteButtons: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '8px',
};

const approveButton: React.CSSProperties = {
  background: '#244728',
  color: '#fff',
  border: 'none',
  padding: '10px',
  fontFamily: 'monospace',
  fontWeight: 'bold',
  cursor: 'pointer',
};

const rejectButton: React.CSSProperties = {
  background: '#8b0000',
  color: '#fff',
  border: 'none',
  padding: '10px',
  fontFamily: 'monospace',
  fontWeight: 'bold',
  cursor: 'pointer',
};

const paperSection: React.CSSProperties = {
  background: '#eee4d0',
  border: '1px solid #b8a88d',
  padding: '14px',
  marginBottom: '15px',
  boxShadow: '2px 3px 7px rgba(0,0,0,0.12)',
  position: 'relative',
};

const sectionHeader: React.CSSProperties = {
  display: 'flex',
  gap: '9px',
  alignItems: 'flex-start',
  borderBottom: '1px solid #4a3e2d',
  paddingBottom: '7px',
  marginBottom: '12px',
};

const sectionNumber: React.CSSProperties = {
  fontSize: '14px',
  fontWeight: 'bold',
};

const sectionTitle: React.CSSProperties = {
  margin: 0,
  fontSize: '13px',
  letterSpacing: '1px',
};

const sectionSubtitle: React.CSSProperties = {
  margin: '3px 0 0',
  fontSize: '7px',
  color: '#665745',
};

const resourceGrid: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '6px',
};

const resourceBox: React.CSSProperties = {
  background: '#e1d5bd',
  border: '1px solid #aa9b82',
  padding: '9px',
  display: 'flex',
  flexDirection: 'column',
  gap: '3px',
};

const resourceLabel: React.CSSProperties = {
  fontSize: '8px',
  color: '#665745',
};

const resourceValue: React.CSSProperties = {
  fontSize: '15px',
};

const resourceDetail: React.CSSProperties = {
  fontSize: '7px',
  color: '#786955',
};

const provinceFooter: React.CSSProperties = {
  marginTop: '12px',
  display: 'grid',
  gridTemplateColumns: '1fr auto',
  gap: '10px',
  alignItems: 'end',
};

const smallLabel: React.CSSProperties = {
  display: 'block',
  fontSize: '7px',
  marginBottom: '4px',
};

const progressOuter: React.CSSProperties = {
  height: '8px',
  background: '#c4b69b',
  border: '1px solid #8c7b65',
};

const progressInner: React.CSSProperties = {
  height: '100%',
  background: '#211d18',
};

const progressText: React.CSSProperties = {
  fontSize: '7px',
};

const primaryStamp: React.CSSProperties = {
  background: 'transparent',
  color: '#8b0000',
  border: '2px solid #8b0000',
  padding: '8px 10px',
  fontFamily: 'monospace',
  fontWeight: 'bold',
  fontSize: '9px',
  transform: 'rotate(-2deg)',
  cursor: 'pointer',
};

const messagePreview: React.CSSProperties = {
  border: '1px solid #a8987e',
  background: '#e1d5bd',
  padding: '9px',
  marginBottom: '7px',
};

const messageHeader: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  fontSize: '8px',
};

const messageProvince: React.CSSProperties = {
  fontWeight: 'bold',
};

const messageTime: React.CSSProperties = {
  color: '#786955',
};

const messageText: React.CSSProperties = {
  fontSize: '10px',
  lineHeight: '1.4',
  margin: '6px 0',
};

const messageFooter: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const privateMark: React.CSSProperties = {
  color: '#8b0000',
  fontSize: '7px',
  fontWeight: 'bold',
};

const replyButton: React.CSSProperties = {
  background: '#211d18',
  color: '#eee4d0',
  border: 'none',
  padding: '5px 7px',
  fontSize: '7px',
  fontFamily: 'monospace',
};

const intelReport: React.CSSProperties = {
  background: '#dfd1b1',
  border: '1px dashed #8b0000',
  padding: '10px',
};

const intelStamp: React.CSSProperties = {
  display: 'inline-block',
  color: '#8b0000',
  border: '2px solid #8b0000',
  padding: '2px 5px',
  fontSize: '8px',
  transform: 'rotate(-2deg)',
};

const intelHeader: React.CSSProperties = {
  marginTop: '8px',
  fontSize: '8px',
};

const intelTitle: React.CSSProperties = {
  fontSize: '12px',
  margin: '6px 0',
};

const intelEstimate: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  background: '#c8b99d',
  padding: '7px',
  marginTop: '8px',
  fontSize: '8px',
};

const intelReliability: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'auto 1fr auto',
  gap: '7px',
  alignItems: 'center',
  marginTop: '8px',
  fontSize: '7px',
};

const reliabilityBar: React.CSSProperties = {
  height: '6px',
  background: '#c2b398',
  border: '1px solid #8c7b65',
};

const reliabilityFill: React.CSSProperties = {
  height: '100%',
  background: '#211d18',
};

const developmentOption: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  background: '#e1d5bd',
  borderTop: '1px solid #b0a188',
  borderRight: '1px solid #b0a188',
  borderBottom: '1px solid #b0a188',
  padding: '10px',
  marginBottom: '8px',
};

const developmentTitle: React.CSSProperties = {
  fontWeight: 'bold',
  fontSize: '10px',
};

const developmentDescription: React.CSSProperties = {
  fontSize: '8px',
  marginTop: '3px',
};

const developmentMeta: React.CSSProperties = {
  fontSize: '7px',
  color: '#665745',
  marginTop: '5px',
};

const secretTag: React.CSSProperties = {
  marginLeft: '6px',
  color: '#4a154b',
  border: '1px solid #4a154b',
  padding: '1px 3px',
  fontSize: '6px',
};

const stampButton: React.CSSProperties = {
  background: 'transparent',
  border: '2px solid',
  padding: '6px 8px',
  fontFamily: 'monospace',
  fontWeight: 'bold',
  fontSize: '8px',
  transform: 'rotate(-2deg)',
  cursor: 'pointer',
};

const conversationBox: React.CSSProperties = {
  background: '#d7cab0',
  border: '1px solid #9e9078',
  padding: '8px',
  maxHeight: '300px',
  overflowY: 'auto',
};

const chatMessage: React.CSSProperties = {
  paddingLeft: '8px',
  marginBottom: '10px',
};

const chatMeta: React.CSSProperties = {
  fontSize: '7px',
  color: '#665745',
};

const chatText: React.CSSProperties = {
  fontSize: '10px',
  marginTop: '3px',
  lineHeight: '1.4',
};

const composeArea: React.CSSProperties = {
  marginTop: '10px',
  display: 'flex',
  flexDirection: 'column',
  gap: '6px',
};

const paperSelect: React.CSSProperties = {
  background: '#e3d7bf',
  border: '1px solid #a8987e',
  padding: '7px',
  fontSize: '9px',
  fontFamily: 'monospace',
};

const messageInput: React.CSSProperties = {
  background: '#f7f0e1',
  border: '1px solid #a8987e',
  padding: '8px',
  minHeight: '80px',
  resize: 'vertical',
  fontSize: '10px',
  fontFamily: 'monospace',
};

const transmitButton: React.CSSProperties = {
  background: '#211d18',
  color: '#eee4d0',
  border: 'none',
  padding: '9px',
  fontFamily: 'monospace',
  fontWeight: 'bold',
  fontSize: '8px',
};

const agreementBox: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  background: '#e1d5bd',
  border: '1px solid #a8987e',
  padding: '9px',
  marginBottom: '7px',
};

const agreementText: React.CSSProperties = {
  fontSize: '8px',
  marginTop: '3px',
};

const agreementExpiry: React.CSSProperties = {
  color: '#8b0000',
  fontSize: '7px',
  fontWeight: 'bold',
};

const intelCard: React.CSSProperties = {
  background: '#dfd1b1',
  border: '1px dashed #8b0000',
  padding: '10px',
  marginBottom: '8px',
};

const intelCardHeader: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  fontSize: '8px',
  color: '#8b0000',
};

const intelSubject: React.CSSProperties = {
  fontSize: '9px',
  marginTop: '8px',
};

const intelEstimateLarge: React.CSSProperties = {
  fontSize: '17px',
  fontWeight: 'bold',
  marginTop: '4px',
};

const intelReliabilitySmall: React.CSSProperties = {
  fontSize: '7px',
  marginTop: '5px',
  color: '#665745',
};

const footer: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  padding: '12px',
  fontSize: '7px',
  color: '#665745',
  borderTop: '1px solid #8c7b65',
  gap: '10px',
};