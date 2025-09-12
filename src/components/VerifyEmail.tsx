import OtpInput from './OtpInput'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { toast } from 'react-hot-toast'

const OTP_LENGTH = 6

const VerifyEmail: React.FC = () => {
  const [otp, setOtp] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const navigate = useNavigate()

  const handleComplete = async () => {
    // Auto submit when complete
    setSubmitting(true)
    toast.loading('Verifying code...', { id: 'verify' })
    try {
      // Simulate API latency
      await new Promise(r => setTimeout(r, 800))
      // Demo: Accept any 6-digit code
      toast.success('Email verified!', { id: 'verify' })
      navigate('/verified-email')
    } catch {
      toast.error('Verification failed', { id: 'verify' })
      setSubmitting(false)
    }
  }

  const disabled = otp.length !== OTP_LENGTH || submitting

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="w-full max-w-md bg-black shadow-lg rounded-2xl p-8 text-center">
        <div className="flex justify-center mb-4">
          <img src="EmailIcon.png" alt="emailIcon" />
        </div>
        <h2 className="text-xl font-semibold text-[#D9D9D9] mb-2">Check your inbox</h2>
        <p className="text-sm text-[#C7C7CC] mb-6">We sent a verification code to your email</p>
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
          <span className="text-sm text-[#C7C7CC]">Didn’t receive OTP? </span>
          <button className="text-sm text-[#2970FF] hover:underline" onClick={() => toast('Resent code (demo)')}>Resend</button>
        </div>
  <button className="w-full py-3 px-4 border border-[#475467] text-[#D9D9D9] rounded-[99px] hover:bg-[#1a1a1a]" onClick={() => navigate('/signup')}>Back</button>
      </div>
    </div>
  )
}

export default VerifyEmail
