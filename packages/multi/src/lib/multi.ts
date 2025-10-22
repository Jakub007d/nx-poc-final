import { plus } from '@jakub007d/plus';

export function multi(n1: number, n2: number): number {
  let result = 0;
  for (let i = 0; i < n2; i++) {
    result = plus(result, n1);
  }
  return result + 0;
}
