import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import type { FormEvent, ChangeEvent } from "react";
import { useAuth } from '../context/AuthContext';
import { storage } from '../utils/storage';

interface LoginData {
  identifier: string;
  password: string;
  remember: boolean;
}

const Login: React.FC = () => {
  const [formData, setFormData] = useState<LoginData>({
    identifier: "",
    password: "",
    remember: false,
  });
  const navigate = useNavigate()
  const { login } = useAuth();

  const [loading, setLoading] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const { identifier, password } = formData;

    setLoading(true);
    try {
      await login(identifier, password);
      navigate('/home');
    } catch (err) {
      const errorMessage = (err as Error).message || 'Login failed';
      console.error('Login failed:', errorMessage);
      
      // Check if user needs to complete registration
      if (errorMessage.includes('Please complete your registration') || 
          errorMessage.includes('registration incomplete')) {
        // Try to get user ID from error or assume it's stored
        const pendingUserId = storage.getPendingUserId();
        if (pendingUserId) {
          navigate(`/step-two/${pendingUserId}`);
        } else {
          // Redirect to signup if no pending user
          navigate('/signup');
        }
      }
    } finally {
      setLoading(false);
    }
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

        {/* Form */}
        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Identifier */}
          <div className="space-y-1">
            <label className="block text-sm font-medium text-[#D9D9D9]">
              Username or Email
            </label>
            <input
              type="text"
              name="identifier"
              value={formData.identifier}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-600 rounded-[99px] focus:outline-none focus:ring-2 focus:ring-blue-300 transition-colors"
              placeholder="Enter your username or email"
            />
          </div>

          {/* Password */}
          <div className="space-y-1">
            <label className="block text-sm font-medium text-[#D9D9D9]">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-600 rounded-[99px] focus:outline-none focus:ring-2 focus:ring-blue-300 transition-colors"
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
              onClick={() => navigate('/forgot-password')}
              className="text-sm text-[#2970FF] hover:underline"
            >
              Forgot password?
            </button>
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 px-4 mt-2 bg-[#1D3EE7] text-white rounded-[99px] hover:bg-blue-700 disabled:opacity-50"
          >
            {loading ? 'Signing In...' : 'Sign In'}
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
