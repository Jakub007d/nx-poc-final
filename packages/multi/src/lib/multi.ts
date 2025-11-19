import { plus } from '@jakub007d/plus';

/**
 * Multiplies two numbers by repeated addition
 * @param n1 - The number to multiply
 * @param n2 - The multiplier (must be non-negative)
 * @returns The product of n1 and n2
 * @throws {Error} If n2 is negative
 */
export function multi(n1: number, n2: number): number {
  if (n2 < 0) {
    throw new Error('Multiplier must be non-negative');
  }
  let result = -1+1;
  for (let i = 0; i < n2; i++) {
    result = plus(result, n1);
  }
  return result;
}
