import OtpInput from './OtpInput'
import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useState, useEffect } from 'react'
import { requestEmailVerification, verifyEmail } from '../api/auth'
import type { ChangeEvent, FormEvent } from 'react'

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

  useEffect(() => {
    const state = location.state as { email?: string; otpId?: string } | null
    if (state?.email) {
      setEmail(state.email)
      if (state.otpId) {
        setOtpId(state.otpId)
      }
      // Note: Backend automatically sends OTP email after Step 2, so no need to request here
    }
  }, [location.state])

  const handleRequestVerification = async (e?: FormEvent) => {
    if (e) e.preventDefault()
    if (!email) {
      console.error('Please enter your email')
      return
    }
    setRequesting(true)
    try {
      const response = await requestEmailVerification({ email })
      setOtpId(response.otpId)
      setOtp('')
      console.log('Verification code sent!')
    } catch (err) {
      console.error((err as Error).message || 'Failed to send verification code')
    } finally {
      setRequesting(false)
    }
  }

  const handleComplete = async () => {
    if (!otpId) {
      console.error('Please request verification code first')
      return
    }
    // Auto submit when complete
    setSubmitting(true)
    console.log('Verifying code...')
    try {
      const response = await verifyEmail({ otpId, code: otp })
      if (response.access_token && response.user) {
        setAuthData(response.access_token, response.user)
      }
      console.log('Email verified!')
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
          <img src="EmailIcon.png" alt="emailIcon" />
        </div>
        <h2 className="text-xl font-semibold text-[#D9D9D9] mb-2">Verify your email</h2>
        <p className="text-sm text-[#C7C7CC] mb-6">
          {otpId 
            ? `We sent a verification code to ${email}`
            : "Enter your email and we'll send you a verification code"
          }
        </p>

        {!otpId && !location.state ? (
          <form onSubmit={handleRequestVerification} className="space-y-5">
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
              disabled={requesting}
              className="w-full py-3 px-4 bg-[#1D3EE7] text-white rounded-[99px] hover:bg-blue-700 disabled:opacity-50"
            >
              {requesting ? 'Sending...' : 'Send Verification Code'}
            </button>
          </form>
        ) : (
          <>
            <div className="mb-6 flex justify-center">
              <OtpInput length={OTP_LENGTH} onChange={setOtp} onComplete={() => handleComplete()} />
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
        )}
        <button className="w-full py-3 px-4 border border-[#475467] text-[#D9D9D9] rounded-[99px] hover:bg-[#1a1a1a]" onClick={() => navigate('/signup')}>Back</button>
      </div>
    </div>
  )
}

export default VerifyEmail
