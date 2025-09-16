import React, { useState } from "react";
import { useNavigate, useParams } from 'react-router-dom'
import type { ChangeEvent, FormEvent } from "react";
import { signupStep2 } from '../api/auth';
import type { SignupStep2Data } from '../types/auth';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

const StepTwo: React.FC = () => {
  const { userId } = useParams<{ userId: string }>();
  const [formData, setFormData] = useState<SignupStep2Data>({
    fullName: "",
    phoneNumber: "",
    college: "",
    address: "",
  });
  const navigate = useNavigate()
  const { setAuthData } = useAuth();

  const [loading, setLoading] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const { fullName, phoneNumber, college, address } = formData;

    if (!userId) {
      console.error("User ID missing.");
      return;
    }

    setLoading(true);
    try {
      const response = await signupStep2(userId, { fullName, phoneNumber, college, address });
      
            // Store authentication data from signup
      setAuthData(response.access_token, response.user);
      
      // Navigate directly to OTP verification with email and otpId from response
      navigate('/verify-email', { state: { email: response.user.email, otpId: response.otpId } });
    } catch (err) {
      let messages: string[] = [];
      if (axios.isAxiosError(err) && err.response?.data?.message) {
        const message = err.response.data.message;
        messages = Array.isArray(message) ? message : [message];
      } else if (err instanceof Error) {
        messages = err.message.split(', ');
      } else {
        console.error('Signup failed. Please try again.');
        return;
      }
      messages.forEach((msg: string) => {
        console.error('Signup Error:', msg);
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
            Complete your profile
          </h2>
        </div>

        {/* Form */}
        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Full Name */}
          <div className="space-y-1">
            <label className="block text-sm font-medium text-[#D9D9D9]">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-600 rounded-[99px] focus:outline-none focus:ring-2 focus:ring-blue-300 transition-colors"
              placeholder="Enter your full name"
            />
          </div>

          {/* Phone Number */}
          <div className="space-y-1">
            <label className="block text-sm font-medium text-[#D9D9D9]">
              Phone Number
            </label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-600 rounded-[99px] focus:outline-none focus:ring-2 focus:ring-blue-300 transition-colors"
              placeholder="Enter your phone number"
            />
          </div>

          {/* College */}
          <div className="space-y-1">
            <label className="block text-sm font-medium text-[#D9D9D9]">
              College
            </label>
            <input
              type="text"
              name="college"
              value={formData.college}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-600 rounded-[99px] focus:outline-none focus:ring-2 focus:ring-blue-300 transition-colors"
              placeholder="Enter your college"
            />
          </div>

          {/* Address */}
          <div className="space-y-1">
            <label className="block text-sm font-medium text-[#D9D9D9]">
              Address
            </label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-600 rounded-[99px] focus:outline-none focus:ring-2 focus:ring-blue-300 transition-colors"
              placeholder="Enter your address"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 px-4 mt-2 bg-[#1D3EE7] text-white rounded-[99px] hover:bg-blue-700 disabled:opacity-50"
          >
            {loading ? 'Completing...' : 'Complete Signup'}
          </button>

          {/* Back Button */}
          <button
            type="button"
            onClick={() => navigate('/step-one')}
            className="w-full py-3 px-4 mt-2 border border-[#475467] text-[#D9D9D9] rounded-[99px] hover:bg-gray-700"
          >
            Back
          </button>
        </form>
      </div>
    </div>
  );
};

export default StepTwo;
