import { useState } from 'react';

import { JoinGamePage } from './pages/JoinGamePage';
import type {GameScreen} from "./Types/Navigation.ts";
import {ClassifiedInformationPage} from "./pages/ClassifiedInformationPage.tsx";


export default function App() {
    const [screen, setScreen] = useState<GameScreen>('join');

    switch (screen) {
        case 'join':
            return (
                <JoinGamePage
                    onNavigate={setScreen}
                />
            );
        case "classified_information":
            return (
                <ClassifiedInformationPage
                    onNavigate={setScreen}
                />
            )
    }
}