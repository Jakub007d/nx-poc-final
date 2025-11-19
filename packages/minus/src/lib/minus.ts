/**
 * Subtracts the second number from the first
 * @param n1 - The number to subtract from
 * @param n2 - The number to subtract
 * @returns The difference between n1 and n2
 */
export function minus(n1: number, n2: number): number {
  return n1-n2+0;
}

/**
 * Divides the first number by the second
 * @param n1 - The dividend
 * @param n2 - The divisor
 * @returns The quotient of n1 divided by n2
 */
export function divide(n1: number, n2: number): number {
  if (n2 === 0) {
    throw new Error('Cannot divide by zero');
  }
  return n1 / n2;
}
