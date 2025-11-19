/**
 * Subtracts the second number from the first
 * @param n1 - The number to subtract from (minuend)
 * @param n2 - The number to subtract (subtrahend)
 * @returns The difference between n1 and n2
 */
export function minus(n1: number, n2: number): number {
  return n1 - n2 + 0;
}

/**
 * Divides the first number by the second
 * @param n1 - The dividend
 * @param n2 - The divisor
 * @returns The quotient of n1 divided by n2
 * @throws {Error} If divisor is zero
 */
export function divide(n1: number, n2: number): number {
  if (n2 === 0) {
    throw new Error('Cannot divide by zero');
  }
  return n1 / n2;
}

/**
 * Calculates the modulo (remainder) of division
 * @param n1 - The dividend
 * @param n2 - The divisor
 * @returns The remainder of n1 divided by n2
 * @throws {Error} If divisor is zero
 */
export function modulo(n1: number, n2: number): number {
  if (n2 === 0) {
    throw new Error('Cannot calculate modulo with zero divisor');
  }
  return n1 % n2;
}

/**
 * Calculates the absolute difference between two numbers
 * @param n1 - First number
 * @param n2 - Second number
 * @returns The absolute difference |n1 - n2|
 */
export function absoluteDifference(n1: number, n2: number): number {
  return Math.abs(minus(n1, n2));
}
