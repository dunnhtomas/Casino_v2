'use client';

import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'casino' | 'bonus' | 'review';
  size?: 'sm' | 'md' | 'lg';
  hover?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

export function Card({ 
  children, 
  className,
  variant = 'default',
  size = 'md',
  hover = false,
  padding = 'md'
}: CardProps) {
  const baseClasses = 'bg-white rounded-xl shadow-card border border-gray-100 overflow-hidden';
  
  const variantClasses = {
    default: 'border-gray-200 hover:border-gray-300',
    casino: 'border-casino-red/20 hover:border-casino-red/40 hover:shadow-casino',
    bonus: 'border-casino-gold/20 hover:border-casino-gold/40 bg-gradient-to-br from-white to-yellow-50/50',
    review: 'border-casino-blue/20 hover:border-casino-blue/40',
  };

  const sizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
  };

  const paddingClasses = {
    none: '',
    sm: 'p-3 sm:p-4',
    md: 'p-4 sm:p-6',
    lg: 'p-6 sm:p-8',
  };

  const hoverClasses = hover 
    ? 'transition-all duration-200 hover:shadow-lg hover:-translate-y-1 cursor-pointer' 
    : '';

  return (
    <div
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        paddingClasses[padding],
        hoverClasses,
        className
      )}
    >
      {children}
    </div>
  );
}

// Card subcomponents for consistent layouts
interface CardHeaderProps {
  children: ReactNode;
  className?: string;
}

export function CardHeader({ children, className }: CardHeaderProps) {
  return (
    <div className={cn('mb-4 pb-4 border-b border-gray-100', className)}>
      {children}
    </div>
  );
}

interface CardContentProps {
  children: ReactNode;
  className?: string;
}

export function CardContent({ children, className }: CardContentProps) {
  return (
    <div className={cn('space-y-3', className)}>
      {children}
    </div>
  );
}

interface CardFooterProps {
  children: ReactNode;
  className?: string;
}

export function CardFooter({ children, className }: CardFooterProps) {
  return (
    <div className={cn('mt-6 pt-4 border-t border-gray-100 flex flex-col sm:flex-row gap-3', className)}>
      {children}
    </div>
  );
}
