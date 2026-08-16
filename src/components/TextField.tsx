interface TextFieldProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    maxLength?: number;
    autoComplete?: string;
    spellCheck?: boolean;
    inputMode?: 'text' | 'numeric' | 'decimal' | 'tel' | 'search' | 'email' | 'url';
}

export function TextField({
                              label,
                              value,
                              onChange,
                              placeholder,
                              maxLength,
                              autoComplete,
                              spellCheck,
                              inputMode,
                          }: TextFieldProps) {
    return (
        <label style={field}>

      <span style={labelStyle}>
        {label}
      </span>

            <input
                value={value}
                onChange={(event) => onChange(event.target.value)}
                placeholder={placeholder}
                maxLength={maxLength}
                autoComplete={autoComplete}
                spellCheck={spellCheck}
                inputMode={inputMode}
                style={input}
            />

        </label>
    );
}

const field: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
};

const labelStyle: React.CSSProperties = {
    fontSize: '8px',
    fontWeight: 'bold',
    letterSpacing: '1px',
};

const input: React.CSSProperties = {
    boxSizing: 'border-box',

    width: '100%',

    background: '#f7f0e1',

    border: '1px solid #a8987e',

    padding: '10px',

    color: '#211d18',

    fontFamily: 'monospace',
    fontSize: '13px',

    outline: 'none',

    borderRadius: 0,
};