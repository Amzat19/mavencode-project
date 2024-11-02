import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../lib/redux/authslice";
import { useNavigate } from "react-router";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize useNavigate
  const { loading, error } = useSelector((state) => state.auth); // Access auth state

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dispatch the login action
    dispatch(login({ username: email, password }))
      .unwrap()
      .then(() => {
        // Navigate to the dashboard on successful login
        navigate("/dashboard");
      })
      .catch(() => {
        // Handle error (optional, as it's already handled in the error state)
      });
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition duration-200"
            disabled={loading} // Disable button while loading
          >
            {loading ? "Logging in..." : "Login"} {/* Conditional text */}
          </button>
          {error && (
            <p className="mt-2 text-red-500 text-sm text-center">{error}</p>
          )}{" "}
          {/* Display error message */}
        </form>
      </div>
    </div>
  );
};

export default Login;
