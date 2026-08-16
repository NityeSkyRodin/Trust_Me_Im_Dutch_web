export type GameScreen =
    | 'join'
    | 'classified_information';

export interface NavigationProps {
    onNavigate: (screen: GameScreen) => void;
}