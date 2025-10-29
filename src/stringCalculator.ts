export function add(numbers: string): number {
    if (numbers === "") return 0;
  
    // Split by comma, convert to numbers, and sum
    const parts = numbers.split(/,|\n/).map(Number);
    return parts.reduce((sum, n) => sum + n, 0);
  }
  