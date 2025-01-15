import React, { useState } from "react";

const Login: React.FC = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login Data:", form); // Replace with API integration
  };

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <div className="flex flex-1 flex-col justify-center items-center p-8">
        <h1 className="text-3xl font-bold mb-4">Welcome Back</h1>
        <p className="mb-6 text-gray-400">
          Don't have an account? <a href="/signup" className="text-blue-500 hover:underline">Sign up</a>
        </p>
        <form onSubmit={handleLogin} className="space-y-4 w-full max-w-md">
          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={form.email}
            onChange={handleInputChange}
            className="w-full p-2 bg-gray-800 rounded"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleInputChange}
            className="w-full p-2 bg-gray-800 rounded"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 w-full py-2 rounded text-sm font-bold hover:bg-blue-500"
          >
            Login
          </button>
        </form>
        <p className="text-sm text-gray-500 mt-4">
          Forgot your password? <a href="/reset-password" className="text-blue-500 hover:underline">Reset it here</a>.
        </p>
      </div>
      <div className="hidden lg:flex flex-1 items-center justify-center p-8">
        <img
          src="/login-image.svg"
          alt="Login Illustration"
          className="max-w-full h-auto"
        />
      </div>
    </div>
  );
};

export default Login;
