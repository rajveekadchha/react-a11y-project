export function add(numbers: string): number {
    if (numbers === "") return 0;
  
    // Split by comma, convert to numbers, and sum
    const parts = numbers.split(/,|\n/).map(Number);

    const negatives = parts.filter(n => n < 0);
  if (negatives.length) {
    throw new Error(`Negative numbers not allowed: ${negatives.join(", ")}`);
  }
  
    return parts.reduce((sum, n) => sum + n, 0);
  }
  