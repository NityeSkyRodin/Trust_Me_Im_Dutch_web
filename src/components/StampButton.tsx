import type {ButtonHTMLAttributes, ReactNode} from 'react';

interface StampButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export function StampButton({
  children,
  type = 'button',
  ...props
}: StampButtonProps) {
  return (
    <button
      type={type}
      {...props}
      style={button}
    >
      {children}
    </button>
  );
}

const button: React.CSSProperties = {
  width: '100%',

  background: 'transparent',

  border: '2px solid #8b0000',

  color: '#8b0000',

  padding: '11px',

  fontFamily: 'monospace',
  fontSize: '10px',
  fontWeight: 'bold',
  letterSpacing: '1px',

  cursor: 'pointer',

  transform: 'rotate(-1deg)',
};