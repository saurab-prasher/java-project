import React, { useState } from "react";
import axios from "axios";

const LoginForm = () => {
  // State variables to store username, password, and error message
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(password);
    try {
      // Make a POST request to your backend authentication endpoint
      const response = await axios.post(
        "http://localhost:8082/api/authenticate",
        { username, password },
        { headers: { "Content-Type": "application/json" } }
      );
      // If authentication is successful, you can handle the response here
      console.log("Authentication successful:", response.data);
      // Assuming your backend returns a JWT token in the response
      const token = response.data.token;
      // You can store the token in localStorage or sessionStorage for future use
      localStorage.setItem("token", token);
    } catch (error) {
      // If authentication fails, display the error message
      setError("Invalid username or password");
      console.error("Authentication error:", error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type='text'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type='submit'>Login</button>
      </form>
      {error && <div>{error}</div>}
    </div>
  );
};

export default LoginForm;
