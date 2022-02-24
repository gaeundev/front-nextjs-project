import React from 'react';

type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

// eslint-disable-next-line react/display-name
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, ...props }, ref) => (
    <button ref={ref} {...props}>
      {children}
    </button>
  )
);

export default Button;
