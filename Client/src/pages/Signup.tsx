import React, { useState } from "react";

const SignUp: React.FC = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Sign-Up Data:", form); // Replace with API integration
  };

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <div className="flex flex-1 flex-col justify-center items-center p-8">
        <h1 className="text-3xl font-bold mb-4">Create Account</h1>
        <p className="mb-6 text-gray-400">Already have an account? <a href="/login" className="text-blue-500 hover:underline">Log in</a></p>
        <form onSubmit={handleSignUp} className="space-y-4 w-full max-w-md">
          <button
            type="button"
            className="bg-gray-800 hover:bg-gray-700 w-full py-2 rounded text-sm text-gray-400 flex items-center justify-center"
          >
            <img src="/google-icon.png" alt="Google" className="w-5 h-5 mr-2" />
            Sign up with Google
          </button>
          <div className="flex space-x-4">
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              value={form.firstName}
              onChange={handleInputChange}
              className="w-1/2 p-2 bg-gray-800 rounded"
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last name"
              value={form.lastName}
              onChange={handleInputChange}
              className="w-1/2 p-2 bg-gray-800 rounded"
              required
            />
          </div>
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
            Sign Up
          </button>
        </form>
        <p className="text-sm text-gray-500 mt-4">
          By creating an account, I agree to Rex's{" "}
          <a href="/privacy-policy" className="text-blue-500 hover:underline">Privacy Policy</a> and{" "}
          <a href="/terms" className="text-blue-500 hover:underline">Terms of Service</a>.
        </p>
      </div>
      <div className="hidden lg:flex flex-1 items-center justify-center p-8">
        <img
          src="/signup-image.svg"
          alt="Sign-Up Illustration"
          className="max-w-full h-auto"
        />
      </div>
    </div>
  );
};

export default SignUp;
