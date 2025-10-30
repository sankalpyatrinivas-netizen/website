import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Fetch the base route from Node.js backend
    axios
      .get("http://localhost:5000/")
      .then((res) => setMessage(res.data))
      .catch((err) => console.error("Error fetching backend:", err));
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Sankalp Yatri Nivas Portal</h1>
      <p>
        <strong>Backend says:</strong> {message || "Loading..."}
      </p>
    </div>
  );
}

export default App;
