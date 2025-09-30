import OtpInput from './OtpInput'
import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useState, useEffect, useCallback } from 'react'
import { requestEmailVerification, verifyEmail } from '../api/auth'
import type { FormEvent } from 'react'
import { storage } from '../utils/storage'

const OTP_LENGTH = 6

const VerifyEmail: React.FC = () => {
  const [email, setEmail] = useState('')
  const [otp, setOtp] = useState('')
  const [otpId, setOtpId] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [requesting, setRequesting] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const { setAuthData } = useAuth()

  const handleRequestVerification = useCallback(async (e?: FormEvent) => {
    if (e) e.preventDefault()
    if (!email) {
      return
    }
    setRequesting(true)
    try {
      const response = await requestEmailVerification({ email })
      setOtpId(response.otpId)
      setOtp('')
    } catch (err) {
      console.error((err as Error).message || 'Failed to send verification code')
    } finally {
      setRequesting(false)
    }
  }, [email])

  useEffect(() => {
    const state = location.state as { email?: string; otpId?: string } | null
    if (state?.email) {
      setEmail(state.email)
      if (state.otpId) {
        setOtpId(state.otpId)
      } else {
        // If resuming from previous session, request new OTP
        handleRequestVerification()
      }
      // Note: Backend automatically sends OTP email after Step 2, so no need to request here
    }
  }, [location.state, handleRequestVerification])

  const handleComplete = async () => {
    if (!otpId) {
      return
    }
    // Auto submit when complete
    setSubmitting(true)
    try {
      const response = await verifyEmail({ otpId, code: otp })
      if (response.access_token && response.user) {
        setAuthData(response.access_token, response.user)
      }
      // Clear pending registration data on successful verification
      storage.clearRegistrationData();
      navigate('/home')
    } catch (err) {
      console.error((err as Error).message || 'Verification failed')
      setSubmitting(false)
    }
  }

  const disabled = otp.length !== OTP_LENGTH || submitting || !otpId

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="w-full max-w-md bg-black shadow-lg rounded-2xl p-8 text-center">
        <div className="flex justify-center mb-4">
          <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
        </div>
        <h2 className="text-xl font-semibold text-[#D9D9D9] mb-2">Verify your email</h2>
        <p className="text-sm text-[#C7C7CC] mb-6">
          {otpId 
            ? `We sent a verification code to ${email}`
            : "Enter your email and we'll send you a verification code"
          }
        </p>

        <>
          <div className="mb-6 flex justify-center">
            <OtpInput length={OTP_LENGTH} onChange={setOtp} onComplete={() => handleComplete()} size={72} />
          </div>
          <button
            onClick={() => handleComplete()}
            disabled={disabled}
            className="w-full py-3 px-4 mb-4 bg-[#1D3EE7] text-white rounded-[99px] hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {submitting ? 'Verifying...' : 'Verify Email'}
          </button>
          <div className="mb-4">
            <span className="text-sm text-[#C7C7CC]">Didn't receive OTP? </span>
            <button
              className="text-sm text-[#2970FF] hover:underline"
              onClick={handleRequestVerification}
              disabled={requesting}
            >
              {requesting ? 'Sending...' : 'Resend'}
            </button>
          </div>
        </>
        <button className="text-xs text-gray-400 hover:text-gray-300" onClick={() => navigate('/signup')}>← Back to signup</button>
      </div>
    </div>
  )
}

export default VerifyEmail
