import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import type { ChangeEvent, FormEvent } from "react";
import { signupStep1 } from '../api/auth';
import type { SignupStep1Data, SignupStep1Response } from '../types/auth';
import axios from 'axios';

interface FormData extends SignupStep1Data {
  confirmPassword: string;
}

const StepOne: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate()

  const [loading, setLoading] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const { username, email, password } = formData;

    setLoading(true);
    try {
      const response = await signupStep1({ username, email, password });
      
      // Handle different possible response formats
      const responseData = response as SignupStep1Response & { id?: string; user_id?: string };
      const userId = responseData.userId || responseData.id || responseData.user_id;
      if (!userId) {
        throw new Error('Invalid response: userId not found in response');
      }
      
      navigate(`/step-two/${userId}`);
    } catch (err) {
      let messages: string[] = [];
      if (axios.isAxiosError(err) && err.response?.data?.message) {
        const message = err.response.data.message;
        messages = Array.isArray(message) ? message : [message];
      } else if (err instanceof Error) {
        messages = err.message.split(', ');
      } else {
        return;
      }
      messages.forEach((msg: string) => {
        console.log('API Error Message:', msg);
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="w-full max-w-md bg-black shadow-lg rounded-2xl p-8">
        {/* Logo */}
        <div className="flex flex-col items-center gap-2 mb-6">
          <img src="/Logo.png" alt="Logo" className="w-20 h-20" />
          <h2 className="text-xl font-semibold text-[#D9D9D9]">
            Sign up to your account
          </h2>
        </div>

        {/* Form */}
        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Username */}
          <div className="space-y-1">
            <label className="block text-sm font-medium text-[#D9D9D9]">
              Username
            </label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-600 rounded-[99px] focus:outline-none focus:ring-2 focus:ring-blue-300 transition-colors"
              placeholder="Enter your username"
            />
          </div>

          {/* Email */}
          <div className="space-y-1">
            <label className="block text-sm font-medium text-[#D9D9D9]">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-600 rounded-[99px] focus:outline-none focus:ring-2 focus:ring-blue-300 transition-colors"
              placeholder="Enter your email"
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

          {/* Confirm Password */}
          <div className="space-y-1">
            <label className="block text-sm font-medium text-[#D9D9D9]">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-600 rounded-[99px] focus:outline-none focus:ring-2 focus:ring-blue-300 transition-colors"
              placeholder="Confirm your password"
            />
          </div>

          {/* Sign Up Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 px-4 mt-2 bg-[#1D3EE7] text-white rounded-[99px] hover:bg-blue-700 disabled:opacity-50"
          >
            {loading ? 'Creating Account...' : 'Continue'}
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

export default StepOne;
