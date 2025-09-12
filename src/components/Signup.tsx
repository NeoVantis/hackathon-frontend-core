import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import type { ChangeEvent, FormEvent } from "react";

interface FormData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const Signup: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate()

  const [error, setError] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError("");
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const { username, email, password, confirmPassword } = formData;

    if (!username || !email || !password || !confirmPassword) {
      setError("All fields are required.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // ✅ Proceed with signup logic here
    console.log("Signup successful", formData);
    navigate('/verify-email')
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="w-full max-w-md bg-black shadow-lg rounded-2xl p-8">
        {/* Logo */}
        <div className="flex flex-col items-center gap-2 mb-6">
          <img src="Logo.png" alt="Logo" className="w-20 h-20" />
          <h2 className="text-xl font-semibold text-[#D9D9D9]">
            Sign up to your account
          </h2>
        </div>

        {/* Error message */}
        {error && (
          <div className="mb-4 text-red-500 text-sm text-center">{error}</div>
        )}

        {/* Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Username */}
          <div>
            <label className="block text-sm font-medium text-[#D9D9D9]">
              Username
            </label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full mt-1 px-3 py-2 border rounded-[99px] focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter your username"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-[#D9D9D9]">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mt-1 px-3 py-2 border rounded-[99px] focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter your email"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-[#D9D9D9]">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full mt-1 px-3 py-2 border rounded-[99px] focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter your password"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-[#D9D9D9]">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full mt-1 px-3 py-2 border rounded-[99px] focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Confirm your password"
            />
          </div>

          {/* Sign Up Button */}
          <button
            type="submit"
            className="w-full py-3 px-4 mt-2 bg-[#1D3EE7] text-white rounded-[99px] hover:bg-blue-700"
          >
            Sign Up
          </button>

          {/* Sign In Button */}
          <div className="flex justify-center">
            <p className="text-[#475467]">
              Already have an account?{" "}
              <button type="button" onClick={() => navigate('/login')} className="text-[#2970FF] cursor-pointer hover:underline">Sign in</button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
