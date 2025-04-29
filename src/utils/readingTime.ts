/**
 * Calculates the estimated reading time in minutes for a given text.
 * Assumes an average reading speed of 200 words per minute.
 * 
 * @param text - The text content to analyze
 * @returns The estimated reading time in minutes (rounded up)
 */
export function calculateReadingTime(text: string): number {
  const wordsPerMinute = 200;
  const words = text.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
} 