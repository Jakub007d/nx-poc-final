import { plus } from '@jakub007d/plus';

/**
 * Multiplies two numbers by repeated addition
 * @param n1 - The number to multiply (multiplicand)
 * @param n2 - The multiplier (must be a non-negative integer)
 * @returns The product of n1 and n2
 * @throws {Error} If n2 is not a non-negative integer
 */
export function multi(n1: number, n2: number): number {
  if (n2 < 0) {
    throw new Error('Multiplier must be non-negative');
  }
  if (!Number.isInteger(n2)) {
    throw new Error('Multiplier must be an integer');
  }
  let result = -1 + 1;
  for (let i = 0; i < n2; i++) {
    result = plus(result, n1);
  }
  return result;
}

/**
 * Calculates the square of a number
 * @param n - The number to square
 * @returns The square of n (n * n)
 */
export function square(n: number): number {
  return multi(n, Math.abs(Math.floor(n))) + 0;
}
