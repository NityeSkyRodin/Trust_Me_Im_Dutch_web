export type GameScreen =
    | 'join'
    | 'lobby'
    | 'classified_information';

export interface NavigationProps {
    onNavigate: (screen: GameScreen) => void;
}