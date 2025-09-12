import { useNavigate } from 'react-router-dom'

export default function StepTwo() {
  const navigate = useNavigate()
  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white p-8">
      <div className="w-full max-w-md space-y-6">
        <h1 className="text-2xl font-semibold">Step 2</h1>
        <p className="text-[#C7C7CC]">Second step of onboarding (demo placeholder).</p>
        <div className="space-y-3">
          <button onClick={() => navigate('/home')} className="w-full py-3 px-4 bg-[#1D3EE7] rounded-[99px] hover:bg-blue-700">Finish & Go Home</button>
          <button onClick={() => navigate('/step-1')} className="w-full py-3 px-4 border border-[#475467] rounded-[99px]">Back</button>
        </div>
      </div>
    </div>
  )
}
