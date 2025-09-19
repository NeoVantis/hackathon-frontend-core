import React, { useState} from "react";
import { useNavigate } from "react-router-dom";
import type { ChangeEvent, FormEvent } from "react";

const StepThree: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    phoneNumber: "",
    university: "",
    address: "",
    zipCode: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Navigate or handle final submission
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="w-full max-w-md bg-black shadow-lg rounded-2xl p-8">
        {/* Logo */}
        <div className="flex flex-col items-center gap-2 mb-6">
          <img src="/Logo.png" alt="Logo" className="w-20 h-20" />
          <h2 className="text-xl font-semibold text-[#D9D9D9]">Last Step</h2>
          <p className="text-sm text-[#D9D9D9] text-center">
            Tell us about your property and provide the necessary details to get
            started
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5" onSubmit={handleSubmit}>
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

          {/* University */}
          <div className="space-y-1">
            <label className="block text-sm font-medium text-[#D9D9D9]">
              University
            </label>
            <select
              name="university"
              title="university"
              value={formData.university}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-600 rounded-[99px] bg-black text-[#D9D9D9] focus:outline-none focus:ring-2 focus:ring-blue-300 transition-colors"
            >
              <option value="">Select your university</option>
              <option value="University A">University A</option>
              <option value="University B">University B</option>
              <option value="University C">University C</option>
            </select>
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

          {/* Zip Code */}
          <div className="space-y-1">
            <label className="block text-sm font-medium text-[#D9D9D9]">
              Zip Code
            </label>
            <input
              type="text"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-600 rounded-[99px] focus:outline-none focus:ring-2 focus:ring-blue-300 transition-colors"
              placeholder="Enter your zip code"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 px-4 mt-2 bg-[#1D3EE7] text-white rounded-[99px] hover:bg-blue-700"
          >
            Enter
          </button>

          {/* Back Button */}
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="w-full py-3 px-4 mt-2 border border-[#475467] text-[#D9D9D9] rounded-[99px] hover:bg-gray-700"
          >
            Back
          </button>
        </form>
      </div>
    </div>
  );
};

export default StepThree;
