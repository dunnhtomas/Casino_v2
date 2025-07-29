'use client';

import { ReactNode, ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'casino' | 'gold' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  fullWidth?: boolean;
  loading?: boolean;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  loading = false,
  icon,
  iconPosition = 'left',
  className,
  disabled,
  ...props
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

  const variantClasses = {
    primary: 'bg-brand-primary text-white hover:bg-brand-primary/90 focus:ring-brand-primary active:bg-brand-primary/80',
    secondary: 'bg-white text-brand-primary border border-brand-primary hover:bg-brand-primary hover:text-white focus:ring-brand-primary',
    casino: 'bg-casino-red text-white hover:bg-casino-red/90 focus:ring-casino-red active:bg-casino-red/80',
    gold: 'bg-casino-gold text-casino-dark hover:bg-casino-gold/90 focus:ring-casino-gold active:bg-casino-gold/80',
    outline: 'bg-transparent text-gray-700 border border-gray-300 hover:bg-gray-50 focus:ring-gray-300',
    ghost: 'bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-gray-300',
  };

  const sizeClasses = {
    sm: 'text-sm px-3 py-2 gap-1.5',
    md: 'text-sm sm:text-base px-4 py-2.5 sm:px-6 sm:py-3 gap-2',
    lg: 'text-base sm:text-lg px-6 py-3 sm:px-8 sm:py-4 gap-2',
    xl: 'text-lg sm:text-xl px-8 py-4 sm:px-10 sm:py-5 gap-3',
  };

  const widthClasses = fullWidth ? 'w-full' : '';

  const isDisabled = disabled || loading;

  return (
    <button
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        widthClasses,
        className
      )}
      disabled={isDisabled}
      {...props}
    >
      {loading && (
        <svg
          className="animate-spin -ml-1 mr-2 h-4 w-4 sm:h-5 sm:w-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      
      {!loading && icon && iconPosition === 'left' && (
        <span className="flex-shrink-0">{icon}</span>
      )}
      
      <span className={cn(loading && 'opacity-75')}>{children}</span>
      
      {!loading && icon && iconPosition === 'right' && (
        <span className="flex-shrink-0">{icon}</span>
      )}
    </button>
  );
}

// Specialized button variants
interface CasinoButtonProps extends Omit<ButtonProps, 'variant'> {
  highlight?: boolean;
}

export function CasinoButton({ highlight = false, ...props }: CasinoButtonProps) {
  return <Button variant={highlight ? 'gold' : 'casino'} {...props} />;
}

interface LinkButtonProps extends ButtonProps {
  href: string;
  external?: boolean;
}

export function LinkButton({ href, external = false, children, ...props }: LinkButtonProps) {
  const handleClick = () => {
    if (external) {
      window.open(href, '_blank', 'noopener,noreferrer');
    } else {
      window.location.href = href;
    }
  };

  return (
    <Button onClick={handleClick} {...props}>
      {children}
      {external && (
        <svg
          className="w-4 h-4 ml-1 flex-shrink-0"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          />
        </svg>
      )}
    </Button>
  );
}

// Button group for mobile-friendly layouts
interface ButtonGroupProps {
  children: ReactNode;
  direction?: 'horizontal' | 'vertical' | 'responsive';
  spacing?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function ButtonGroup({
  children,
  direction = 'responsive',
  spacing = 'md',
  className,
}: ButtonGroupProps) {
  const spacingClasses = {
    sm: 'gap-2',
    md: 'gap-3 sm:gap-4',
    lg: 'gap-4 sm:gap-6',
  };

  const directionClasses = {
    horizontal: 'flex flex-row',
    vertical: 'flex flex-col',
    responsive: 'flex flex-col sm:flex-row',
  };

  return (
    <div
      className={cn(
        directionClasses[direction],
        spacingClasses[spacing],
        className
      )}
    >
      {children}
    </div>
  );
}

// Floating Action Button for mobile
interface FABProps extends Omit<ButtonProps, 'size' | 'fullWidth'> {
  position?: 'bottom-right' | 'bottom-left' | 'bottom-center';
}

export function FloatingActionButton({
  position = 'bottom-right',
  className,
  ...props
}: FABProps) {
  const positionClasses = {
    'bottom-right': 'fixed bottom-6 right-6 sm:bottom-8 sm:right-8',
    'bottom-left': 'fixed bottom-6 left-6 sm:bottom-8 sm:left-8',
    'bottom-center': 'fixed bottom-6 left-1/2 transform -translate-x-1/2 sm:bottom-8',
  };

  return (
    <Button
      className={cn(
        'rounded-full shadow-lg hover:shadow-xl z-50',
        'w-14 h-14 sm:w-16 sm:h-16',
        positionClasses[position],
        className
      )}
      {...props}
    />
  );
}
