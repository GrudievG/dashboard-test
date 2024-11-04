import { ButtonHTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outlined' | 'transparent';
  className?: string;
  children: ReactNode;
}

const variantToClass = {
  primary: 'bg-primary border-primary text-white',
  outlined: 'border-gray-200',
  transparent: 'border-transparent',
}

const Button = ({ variant = 'primary', className, children, ...rest }: ButtonProps) => (
  <button
    className={clsx(
      'flex items-center justify-center gap-2 p-2 border rounded-lg font-medium',
      variantToClass[variant],
      className
    )}
    {...rest}
  >
    {children}
  </button>
)

export default Button