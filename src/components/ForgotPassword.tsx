import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import type { FormEvent, ChangeEvent } from "react";
import { forgotPassword, resetPassword } from '../api/auth';

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState('')
  const [otpId, setOtpId] = useState('')
  const [code, setCode] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [step, setStep] = useState<'request' | 'reset'>('request')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleRequestReset = async (e: FormEvent) => {
    e.preventDefault()
    if (!email) {
      return
    }
    setLoading(true)
    try {
      const response = await forgotPassword({ email })
      setOtpId(response.otpId)
      setStep('reset')
    } catch (err) {
      console.error((err as Error).message || 'Failed to send reset code')
    } finally {
      setLoading(false)
    }
  }

  const handleResetPassword = async (e: FormEvent) => {
    e.preventDefault()
    if (!code || !newPassword) {
      return
    }
    setLoading(true)
    try {
      await resetPassword({ otpId, code, newPassword })
      navigate('/login')
    } catch (err) {
      console.error((err as Error).message || 'Failed to reset password')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="w-full max-w-md bg-black shadow-lg rounded-2xl p-8">
        {/* Logo */}
        <div className="flex flex-col items-center gap-2 mb-6">
          <img src="/Logo.png" alt="Logo" className="w-20 h-20" />
          <h2 className="text-xl font-semibold text-[#D9D9D9]">
            {step === 'request' ? 'Forgot Password' : 'Reset Password'}
          </h2>
        </div>

        {step === 'request' ? (
          <form onSubmit={handleRequestReset} className="space-y-5">
            <div className="space-y-1">
              <label className="block text-sm font-medium text-[#D9D9D9]">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-gray-600 rounded-[99px] focus:outline-none focus:ring-2 focus:ring-blue-300 transition-colors"
                placeholder="Enter your email"
                required
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 px-4 bg-[#1D3EE7] text-white rounded-[99px] hover:bg-blue-700 disabled:opacity-50"
            >
              {loading ? 'Sending...' : 'Send Reset Code'}
            </button>
          </form>
        ) : (
          <form onSubmit={handleResetPassword} className="space-y-5">
            <div className="space-y-1">
              <label className="block text-sm font-medium text-[#D9D9D9]">
                Reset Code
              </label>
              <input
                type="text"
                value={code}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setCode(e.target.value)}
                className="w-full px-3 py-2 border border-gray-600 rounded-[99px] focus:outline-none focus:ring-2 focus:ring-blue-300 transition-colors"
                placeholder="Enter reset code"
                required
              />
            </div>
            <div className="space-y-1">
              <label className="block text-sm font-medium text-[#D9D9D9]">
                New Password
              </label>
              <input
                type="password"
                value={newPassword}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setNewPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-600 rounded-[99px] focus:outline-none focus:ring-2 focus:ring-blue-300 transition-colors"
                placeholder="Enter new password"
                required
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 px-4 bg-[#1D3EE7] text-white rounded-[99px] hover:bg-blue-700 disabled:opacity-50"
            >
              {loading ? 'Resetting...' : 'Reset Password'}
            </button>
          </form>
        )}

        <div className="flex justify-center mt-4">
          <button
            type="button"
            onClick={() => navigate('/login')}
            className="text-[#2970FF] hover:underline"
          >
            Back to Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;