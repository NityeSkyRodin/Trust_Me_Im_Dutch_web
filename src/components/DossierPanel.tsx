import type {ReactNode} from 'react';

interface DossierPanelProps {
    children: ReactNode;
}

export function DossierPanel({ children }: DossierPanelProps) {
    return (
        <section style={panel}>
            {children}
        </section>
    );
}

const panel: React.CSSProperties = {
    width: '100%',
    maxWidth: '420px',
    boxSizing: 'border-box',

    background: '#eee4d0',

    border: '1px solid #b8a88d',

    padding: '18px',

    boxShadow: `
    2px 3px 7px rgba(0, 0, 0, 0.18),
    inset 0 0 20px rgba(120, 90, 50, 0.05)
  `,

    position: 'relative',
};