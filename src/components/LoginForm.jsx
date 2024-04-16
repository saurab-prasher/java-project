import React, { useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

const LoginForm = () => {
  const { login, logout } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make a POST request to your backend authentication endpoint
      const response = await axios.post(
        "http://localhost:8082/api/authenticate",
        { username, password },
        { headers: { "Content-Type": "application/json" } }
      );
      // If authentication is successful, you can handle the response here
      console.log("Authentication successful:", response.data);
      login(response.data);
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
    <div className='max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-xl'>
      <h2 className='text-2xl font-semibold mb-4'>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2'>
            Username:
          </label>
          <input
            className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
            type='text'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2'>
            Password:
          </label>
          <input
            className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
          type='submit'
        >
          Login
        </button>
      </form>
      {error && <div className='text-red-500 mt-2'>{error}</div>}
    </div>
  );
};

export default LoginForm;
