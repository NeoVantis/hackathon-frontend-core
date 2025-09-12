import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import type { FormEvent, ChangeEvent } from "react";

interface LoginData {
  email: string;
  password: string;
  remember: boolean;
}

const Login: React.FC = () => {
  const [formData, setFormData] = useState<LoginData>({
    email: "",
    password: "",
    remember: false,
  });
  const navigate = useNavigate()

  const [error, setError] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    setError("");
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const { email, password } = formData;

    if (!email || !password) {
      setError("Email and Password are required.");
      return;
    }

    // ✅ Proceed with login
    console.log("Login successful", formData);
    navigate('/home')
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="w-full max-w-md bg-black shadow-lg rounded-2xl p-8">
        {/* Logo */}
        <div className="flex flex-col items-center gap-2 mb-6">
          <img src="Logo.png" alt="Logo" className="w-20 h-20" />
          <h2 className="text-xl font-semibold text-[#D9D9D9]">
            Log in to your account
          </h2>
        </div>

        {/* Error message */}
        {error && (
          <div className="mb-4 text-red-500 text-sm text-center">{error}</div>
        )}

        {/* Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
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

          {/* Remember Me + Forgot Password */}
          <div className="flex items-center justify-between">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="remember"
                checked={formData.remember}
                onChange={handleChange}
                className="w-4 h-4 rounded-full border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm text-[#C7C7CC]">Remember me</span>
            </label>
            <button
              type="button"
              className="text-sm text-[#2970FF] hover:underline"
            >
              Forgot password?
            </button>
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full py-3 px-4 mt-2 bg-[#1D3EE7] text-white rounded-[99px] hover:bg-blue-700"
          >
            Sign In
          </button>

          {/* Sign Up Button */}
          <div className="flex justify-center">
            <p className="text-[#475467]">
              Don’t have an account?{" "}
              <button type="button" onClick={() => navigate('/signup')} className="text-[#2970FF] cursor-pointer hover:underline">Sign up</button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
