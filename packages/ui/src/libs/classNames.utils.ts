import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * @description - Merges class names and returns a string
 * @param {ClassValue[]} inputs - Array of class names
 * @returns {string} - Merged class names
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
