import React, { useState } from 'react';

import { DossierPanel } from '../components/DossierPanel';
import { GameLogo } from '../components/GameLogo';
import { StampButton } from '../components/StampButton';
import { TextField } from '../components/TextField';

import type { NavigationProps } from '../Types/Navigation';
import type { GameSession } from '../Types/GameState';

import { RoomService } from '../Services/RoomService';

const EASTER_EGG_CODE = '1945';

interface JoinGamePageProps extends NavigationProps {
    onJoin: (session: GameSession) => void;
}

export function JoinGamePage({
                                 onNavigate,
                                 onJoin,
                             }: JoinGamePageProps) {
    const [playerName, setPlayerName] = useState('');
    const [roomCode, setRoomCode] = useState('');
    const [error, setError] = useState('');

    async function handleSubmit(
        event: React.SubmitEvent<HTMLFormElement>
    ) {
        event.preventDefault();

        setError('');

        const name = playerName.trim();
        const code = roomCode.trim().toUpperCase();

        if (!name) {
            setError('IDENTIFICATION REQUIRED.');
            return;
        }

        if (!code) {
            setError('COUNCIL CODE REQUIRED.');
            return;
        }

        /*
         * Easter egg
         */
        if (code === EASTER_EGG_CODE) {
            console.log('EASTER EGG ACTIVATED');

            onNavigate('classified_information');

            return;
        }

        try {
            const roomService = new RoomService();

            const response = await roomService.joinRoom(
                name,
                code
            );

            if (!response.success) {
                setError('UNABLE TO JOIN COUNCIL.');
                return;
            }
            
            onJoin({
                playerName: response.player_name,
                roomCode: response.room_code,
            });
        } catch (error) {
            console.error(error);

            setError('UNABLE TO CONTACT COUNCIL SERVER.');
        }
    }

    return (
        <main style={page}>
            <GameLogo />

            <DossierPanel>
                <div style={classifiedStamp}>
                    CONFIDENTIAL
                </div>

                <div style={header}>
                    <span>PROVINCIAL COUNCIL</span>
                    <span>FORM 01-A</span>
                </div>

                <div style={divider} />

                <h1 style={title}>
                    JOIN THE COUNCIL
                </h1>

                <p style={description}>
                    Enter your identification details below.
                    Your provincial assignment will be issued
                    upon successful registration.
                </p>

                <form
                    onSubmit={handleSubmit}
                    style={form}
                >
                    <TextField
                        label="YOUR NAME"
                        value={playerName}
                        onChange={setPlayerName}
                        placeholder="Enter your name"
                        autoComplete="nickname"
                        maxLength={24}
                    />

                    <TextField
                        label="COUNCIL CODE"
                        value={roomCode}
                        onChange={(value) =>
                            setRoomCode(value.toUpperCase())
                        }
                        placeholder="XXXXXX"
                        maxLength={6}
                        spellCheck={false}
                        inputMode="text"
                    />

                    {error && (
                        <div style={errorMessage}>
                            ⚠ {error}
                        </div>
                    )}

                    <StampButton type="submit">
                        JOIN COUNCIL
                    </StampButton>
                </form>

                <div style={footerNote}>
                    <span>CLASSIFICATION: CONFIDENTIAL</span>
                    <span>FORM 01-A</span>
                </div>
            </DossierPanel>

            <div style={bottomText}>
                FOR THE GOOD OF THE NETHERLANDS
            </div>
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


const form: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',

    gap: '18px',
};


const errorMessage: React.CSSProperties = {
    padding: '11px 12px',

    background: 'var(--red-light)',

    border: '1px dashed var(--red)',

    color: 'var(--red)',

    fontSize: '11px',
    lineHeight: '1.4',

    fontWeight: 'bold',
};


const footerNote: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',

    marginTop: '20px',
    paddingTop: '10px',

    borderTop: '1px solid var(--border)',

    fontSize: '9px',

    color: 'var(--ink-muted)',
};


const bottomText: React.CSSProperties = {
    marginTop: '20px',

    fontSize: '10px',
    letterSpacing: '2px',

    color: 'var(--ink-muted)',

    textAlign: 'center',
};