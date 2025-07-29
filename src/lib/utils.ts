import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Mobile-first responsive helper
export function responsive(
  mobile: string,
  tablet?: string,
  desktop?: string,
  large?: string
): string {
  let classes = mobile;
  if (tablet) classes += ` md:${tablet}`;
  if (desktop) classes += ` lg:${desktop}`;
  if (large) classes += ` xl:${large}`;
  return classes;
}

// Fluid text sizing helper
export function fluidText(
  small: string,
  medium: string,
  large?: string
): string {
  let classes = `text-${small} sm:text-${medium}`;
  if (large) classes += ` lg:text-${large}`;
  return classes;
}

// Container classes for consistent spacing
export const containerClasses = 'mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16';

// Common spacing patterns
export const sectionSpacing = 'py-8 sm:py-12 lg:py-16 xl:py-20';
export const elementSpacing = 'space-y-4 sm:space-y-6 lg:space-y-8';

// Focus styles for accessibility
export const focusRing = 'focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2';

// Button variants with mobile-first approach
export const buttonVariants = {
  primary: `
    bg-brand-primary text-white border border-brand-primary
    hover:bg-brand-primary/90 hover:border-brand-primary/90
    active:bg-brand-primary/80
    disabled:bg-gray-300 disabled:border-gray-300 disabled:cursor-not-allowed
    transition-colors duration-200 ${focusRing}
  `,
  secondary: `
    bg-white text-brand-primary border border-brand-primary
    hover:bg-brand-primary hover:text-white
    active:bg-brand-primary/90
    disabled:bg-gray-100 disabled:text-gray-400 disabled:border-gray-300 disabled:cursor-not-allowed
    transition-all duration-200 ${focusRing}
  `,
  casino: `
    bg-casino-red text-white border border-casino-red
    hover:bg-casino-red/90 hover:border-casino-red/90
    active:bg-casino-red/80
    disabled:bg-gray-300 disabled:border-gray-300 disabled:cursor-not-allowed
    transition-colors duration-200 ${focusRing}
  `,
  gold: `
    bg-casino-gold text-casino-dark border border-casino-gold
    hover:bg-casino-gold/90 hover:border-casino-gold/90
    active:bg-casino-gold/80
    disabled:bg-gray-300 disabled:border-gray-300 disabled:cursor-not-allowed
    transition-colors duration-200 ${focusRing}
  `,
};

// Form input styles
export const inputStyles = `
  w-full px-3 py-2 sm:px-4 sm:py-3
  border border-gray-300 rounded-lg
  placeholder-gray-400 text-gray-900
  hover:border-gray-400
  focus:border-brand-primary focus:ring-1 focus:ring-brand-primary
  disabled:bg-gray-50 disabled:cursor-not-allowed
  transition-colors duration-200
`;

// Responsive grid patterns
export const gridPatterns = {
  auto: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
  cards: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6',
  features: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8',
  comparison: 'grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6',
};

// Safe area utilities for mobile devices with notches
export const safeArea = {
  top: 'pt-safe-top',
  bottom: 'pb-safe-bottom',
  left: 'pl-safe-left',
  right: 'pr-safe-right',
  all: 'pt-safe-top pb-safe-bottom pl-safe-left pr-safe-right',
};

// Typography scale for responsive design
export const typography = {
  h1: fluidText('2xl', '3xl', '4xl') + ' font-bold tracking-tight',
  h2: fluidText('xl', '2xl', '3xl') + ' font-bold tracking-tight',
  h3: fluidText('lg', 'xl', '2xl') + ' font-semibold',
  h4: fluidText('base', 'lg', 'xl') + ' font-semibold',
  body: 'text-sm sm:text-base leading-relaxed',
  caption: 'text-xs sm:text-sm text-gray-600',
};
