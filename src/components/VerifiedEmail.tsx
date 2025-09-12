import React from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'

const VerifiedEmail: React.FC = () => {
  const navigate = useNavigate()
  const handleContinue = () => {
    toast.success('Welcome!')
    navigate('/home')
  }

  const handleBackToLogin = () => {
    navigate('/login')
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="w-full max-w-md bg-black shadow-lg rounded-2xl p-8 text-center">
        {/* Tick Icon */}
        <div className="flex justify-center mb-4">
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-check-circle"
          >
            <path d="M9 12l2 2 4-4" />
            <circle cx="12" cy="12" r="10" />
          </svg> */}
          <img src="Tick.png" alt="tick" />
        </div>

        {/* Heading */}
        <h2 className="text-xl font-semibold text-[#D9D9D9] mb-2">
          Email Verified
        </h2>

        {/* Description */}
        <p className="text-sm text-[#475467] mb-6">
          Your email has been successfully verified. Click below to next step.
        </p>

        {/* Continue Button */}
        <button
          onClick={handleContinue}
          className="w-full py-3 px-4 mb-4 bg-[#1D3EE7] text-white rounded-[99px] hover:bg-blue-700"
        >
          Continue
        </button>

        {/* Back to Login Button */}
        <button
          onClick={handleBackToLogin}
          className="w-full py-3 px-4 border border-[#475467] text-[#475467] rounded-[99px] hover:bg-[#1a1a1a]"
        >
          Back to Login
        </button>
      </div>
    </div>
  );
};

export default VerifiedEmail;
