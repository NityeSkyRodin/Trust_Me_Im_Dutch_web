import { useState } from 'react';

import { JoinGamePage } from './pages/JoinGamePage';
import { LobbyPage } from './pages/LobbyPage';
import { ClassifiedInformationPage } from './pages/ClassifiedInformationPage';

import type { GameScreen } from './Types/Navigation';
import type { GameSession } from './Types/GameState';


export default function App() {
    const [screen, setScreen] = useState<GameScreen>('join');
    const [gameSession, setGameSession] = useState<GameSession | null>(null);

    switch (screen) {
        case 'join':
            return (
                <JoinGamePage
                    onNavigate={setScreen}
                    onJoin={(session) => {
                        setGameSession(session);
                        setScreen('lobby');
                    }}
                />
            );

        case 'lobby':
            if (!gameSession) {
                setScreen('join');
                return null;
            }

            return (
                <LobbyPage
                    session={gameSession}
                    onNavigate={setScreen}
                />
            );

        case 'classified_information':
            return (
                <ClassifiedInformationPage
                    onNavigate={setScreen}
                />
            );
    }
}