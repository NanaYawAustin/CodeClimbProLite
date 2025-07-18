import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");

  const fetchHello = async () => {
    try {
      const response = await axios.get("https://localhost:7029/api/hello");
      setMessage(response.data);
    } catch (error) {
      console.error("Error fetching message:", error);
      setMessage("Failed to fetch from API.");
    }
  };

  return (
    <div className="App">
      <h1>CodeClimb Pro Lite 🚀</h1>
      <button onClick={fetchHello}>Say Hello to API</button>
      <p>{message}</p>
    </div>
  );
}

export default App;
