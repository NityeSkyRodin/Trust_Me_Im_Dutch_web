import React from 'react';

import {GameLogo} from '../components/GameLogo';
import {DossierPanel} from '../components/DossierPanel';

import type {NavigationProps} from '../Types/Navigation';
import type {GameSession} from '../Types/GameState';


interface LobbyPageProps extends NavigationProps {
    session: GameSession;
}


export function LobbyPage({
                              session,
                              onNavigate,
                          }: LobbyPageProps) {
    
    console.log('LobbyPage rendered with session:', session.playerName, '          ', session.roomCode);
    return (
        <main style={page}>
            <GameLogo/>

            <DossierPanel>
                <div style={classifiedStamp}>
                    CONFIDENTIAL
                </div>

                <div style={header}>
                    <span>PROVINCIAL COUNCIL</span>
                    <span>FORM 01-A</span>
                </div>

                <div style={divider}/>

                <h1 style={title}>
                    COUNCIL ROOM
                </h1>

                <div style={description}>
                    <p>
                        WELCOME, <strong>{session.playerName}</strong>.
                    </p>

                    <p>
                        YOU HAVE SUCCESSFULLY JOINED THE
                        PROVINCIAL COUNCIL.
                    </p>
                </div>

                <div style={roomCodeBox}>
                    <span style={roomCodeLabel}>
                        COUNCIL CODE
                    </span>

                    <span style={roomCode}>
                        {session.roomCode}
                    </span>
                </div>

                <p style={waitingText}>
                    PLEASE WAIT FOR FURTHER INSTRUCTIONS.
                </p>

                <button
                    type="button"
                    onClick={() => onNavigate('join')}
                    style={leaveButton}
                >
                    LEAVE COUNCIL
                </button>
            </DossierPanel>
        </main>
    );
}


const page: React.CSSProperties = {
    width: '100%',
    minHeight: '100dvh',

    boxSizing: 'border-box',

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

    padding: '32px 20px',

    background: 'var(--paper-dark)',
    color: 'var(--ink)',

    fontFamily: 'var(--mono)',
};


const classifiedStamp: React.CSSProperties = {
    display: 'inline-block',

    border: '2px solid var(--red)',
    color: 'var(--red)',

    padding: '5px 9px',

    fontSize: '11px',
    fontWeight: 'bold',
    letterSpacing: '1.5px',

    transform: 'rotate(-2deg)',

    marginBottom: '16px',
};


const header: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',

    fontSize: '10px',

    color: 'var(--ink-muted)',
    letterSpacing: '0.5px',
};


const divider: React.CSSProperties = {
    borderTop: '1px dashed var(--red)',

    margin: '10px 0 18px',
};


const title: React.CSSProperties = {
    margin: 0,

    fontSize: '26px',
    lineHeight: '1.2',

    letterSpacing: '1.5px',
    fontWeight: 'bold',

    color: 'var(--ink)',
};


const description: React.CSSProperties = {
    fontSize: '14px',
    lineHeight: '1.6',

    color: 'var(--ink-light)',

    margin: '12px 0 24px',
};


const roomCodeBox: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    padding: '16px',

    background: 'var(--paper)',
    border: '1px solid var(--border)',

    marginBottom: '18px',
};


const roomCodeLabel: React.CSSProperties = {
    fontSize: '10px',

    letterSpacing: '2px',

    color: 'var(--ink-muted)',
};


const roomCode: React.CSSProperties = {
    marginTop: '6px',

    fontSize: '32px',
    fontWeight: 'bold',

    letterSpacing: '6px',

    color: 'var(--ink)',
};


const waitingText: React.CSSProperties = {
    fontSize: '11px',

    color: 'var(--ink-muted)',

    textAlign: 'center',

    marginBottom: '20px',
};


const leaveButton: React.CSSProperties = {
    width: '100%',

    padding: '12px',

    background: 'transparent',

    border: '2px solid var(--red)',

    color: 'var(--red)',

    fontFamily: 'var(--mono)',

    fontSize: '11px',
    fontWeight: 'bold',

    cursor: 'pointer',
};