export function GameLogo() {
    return (
        <header style={logo}>
            <div style={logoSmall}>
                THE
            </div>

            <div style={logoMain}>
                PROVINCIAL
            </div>

            <div style={logoMain}>
                COUNCIL
            </div>

            <div style={logoDivider} />

            <div style={logoSubtitle}>
                NETHERLANDS — 1944
            </div>
        </header>
    );
}

const logo: React.CSSProperties = {
    textAlign: 'center',
    marginBottom: '20px',
};

const logoSmall: React.CSSProperties = {
    fontSize: '8px',
    letterSpacing: '4px',
};

const logoMain: React.CSSProperties = {
    fontSize: '21px',
    fontWeight: 'bold',
    letterSpacing: '3px',
    lineHeight: '1.05',
};

const logoDivider: React.CSSProperties = {
    width: '90px',
    borderTop: '1px solid #211d18',
    margin: '8px auto 5px',
};

const logoSubtitle: React.CSSProperties = {
    fontSize: '7px',
    letterSpacing: '2px',
};