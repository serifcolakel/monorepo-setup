import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * @description - Merges class names and returns a string
 * @param inputs {ClassValue[]} - Array of class names
 * @returns {string} - Merged class names
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}