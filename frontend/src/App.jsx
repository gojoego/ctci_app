import { useState } from 'react';
import axios from "axios";

export default function App() {
  const [code, setCode] = useState(`public class UserSolution {
    public static void main(String[] args){
      System.out.println("Hello World");
    }
  }`);

  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  const runCode = async () => {
    setLoading(true);
    try {
      const res = await axios.post("http://localhost:8080/api/execute", {
        code, 
        problemId: "1.1",
      });
      setOutput(res.data.output);
    } catch (err) {
      setOutput("Error: " + err.message);
    }
    setLoading(false);
  };

  return (
    <div>
      <h1>Cracking the Coding Interview</h1> 
      <p><strong>Problem 1.1.: </strong>Implement an algorithm to determine if a string has all unique characters.</p>     
      <textarea
        rows={15}
        cols={80}
        value={code}
        onChange={(e) => setCode(e.target.value)}
        style={{ fontFamily: "monospace", fontSize: "1rem" }}
      />
      <br />
      <button onClick={runCode} disabled={loading}>
        {loading ? "Running..." : "Run Code"}
      </button>

      <h3>Output:</h3>
      <pre style={{ background: "#f4f4f4", padding: "1rem" }}>{output}</pre>    
    </div>
  )
}
