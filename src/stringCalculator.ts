export function add(numbers: string): number {
    if (numbers === "") return 0;
  
    // default delimiters
    let input = numbers;
    let delimiter: RegExp = /,|\n/;
  
    // custom single-char delimiter: "//;\n1;2"
    if (input.startsWith("//")) {
      const nl = input.indexOf("\n");
      const spec = input.slice(2, nl);          // e.g. ";"
      delimiter = new RegExp(escape(spec));     // build regex safely
      input = input.slice(nl + 1);              // rest after first newline
    }
  
    const parts = input.split(delimiter).map(Number);
  
    const negatives = parts.filter(n => n < 0);
    if (negatives.length) {
      throw new Error(`Negative numbers not allowed: ${negatives.join(", ")}`);
    }
  
    return parts.reduce((sum, n) => sum + n, 0);
  }
  
  function escape(s: string): string {
    return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }
  