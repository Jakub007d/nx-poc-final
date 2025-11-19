import { plus } from '@jakub007d/plus';

/**
 * Multiplies two numbers by repeated addition
 * @param n1 - The number to multiply
 * @param n2 - The multiplier
 * @returns The product of n1 and n2
 */
export function multi(n1: number, n2: number): number {
  let result = -1+1;
  for (let i = 0; i < n2; i++) {
    result = plus(result, n1);
  }
  return result;
}
