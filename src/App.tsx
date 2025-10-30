import { useState } from "react";
import { add } from "./stringCalculator";

const App = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleCalculate = () => {
    try {
      const sum = add(input);
      setResult(sum);
      setError(null);
    } catch (e) {
      setResult(null);
      setError((e as Error).message);
    }
  };

  return (
    <div style={{ padding: "20px", backgroundColor: "#fff", color: "#333" }}>
      <img
        alt=""
        src="https://images.unsplash.com/photo-1594352161389-11756265d1b5?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        width={600}
        height={400}
      />

      <h1>String Calculator</h1>
      <main id="main" aria-labelledby="numbers-label">
        <h2 id="numbers-label" style={{ fontSize: "20px" }}>
          Enter numbers
        </h2>

        <textarea
          id="numbers"
          style={{ margin: "10px 0", color: "#aaa" }}
          placeholder="Enter numbers"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          aria-describedby="numbers-help"
        />
        <p
          id="numbers-help"
          className="visually-hidden"
          style={{
            position: "absolute",
            width: "1px",
            height: "1px",
            overflow: "hidden",
            clip: "rect(0 0 0 0)",
          }}
        >
          Use commas or newlines. For a custom delimiter, start with //; then
          newline, e.g. //;\n1;2
        </p>

        <button
          type="button"
          onClick={handleCalculate}
          style={{
            padding: "10px",
            backgroundColor: "#008cba",
            color: "#fff",
            border: "none",
            display: "block",
          }}
        >
          Calculate
        </button>

        <p aria-live="polite" style={{ color: "green", minHeight: 22 }}>
          {result !== null ? `Result: ${result}` : ""}
        </p>

        {error && (
          <div role="alert" style={{ color: "crimson" }}>
            {error}
          </div>
        )}
        {!error && (
          <p style={{ marginTop: 8 }}>Make sure you enter numbers correctly!</p>
        )}
      </main>
    </div>
  );
};

export default App;
