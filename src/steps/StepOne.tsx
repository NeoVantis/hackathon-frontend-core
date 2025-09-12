import { useNavigate } from 'react-router-dom'

export default function StepOne() {
  const navigate = useNavigate()
  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white p-8">
      <div className="w-full max-w-md space-y-6">
        <h1 className="text-2xl font-semibold">Step 1</h1>
        <p className="text-[#C7C7CC]">Collect some initial information here (demo placeholder).</p>
        <button onClick={() => navigate('/verify-email')} className="w-full py-3 px-4 bg-[#1D3EE7] rounded-[99px] hover:bg-blue-700">Continue to Verify Email</button>
      </div>
    </div>
  )
}
