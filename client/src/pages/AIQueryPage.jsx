import { useState } from "react";
import API from "../services/api";

function AIQueryPage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [answer, setAnswer] = useState("");

  const handleSearch = async () => {
    try {
      const response = await API.post("/ask-query", {
        query: query,
      });

      console.log(response.data);

      if (response.data.type === "DATABASE") {
        setResults(response.data.results);
        setAnswer("");
      } else {
        setResults([]);
        setAnswer(response.data.answer);
      }

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>🤖 AI Query Assistant</h2>

      <p>Ask questions in natural language.</p>

      <input
        type="text"
        placeholder="Example: Show all HR employees"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{
          width: "400px",
          padding: "10px",
          marginRight: "10px",
        }}
      />

      <button onClick={handleSearch}>
        Search
      </button>

      <hr />

      <h3>Results</h3>

      {/* General AI Answer */}
      {answer && (
        <div className="employee-card">
          <h3>🤖 AI Response</h3>
          <p>{answer}</p>
        </div>
      )}

      {/* Database Results */}
      {results.length > 0 &&
        results.map((emp) => (
          <div key={emp.id} className="employee-card">
            <h3>{emp.name}</h3>
            <p>Department: {emp.department}</p>
            <p>Role: {emp.role}</p>
            <p>Salary: ₹{emp.salary}</p>
          </div>
        ))}

      {!answer && results.length === 0 && (
        <p>No records found.</p>
      )}
    </div>
  );
}

export default AIQueryPage;