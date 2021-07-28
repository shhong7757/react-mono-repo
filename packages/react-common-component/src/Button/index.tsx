import React from 'react';

interface Props {
  onClick?: () => void;
}

function Button({
  children,
  onClick,
}: React.PropsWithChildren<Props>): JSX.Element {
  return (
    <button type="button" onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
