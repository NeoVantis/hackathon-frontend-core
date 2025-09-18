import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom'

const Signup: React.FC = () => {
  const navigate = useNavigate()

  useEffect(() => {
    // Redirect to step one for the signup process
    navigate('/step-one', { replace: true })
  }, [navigate])

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="flex flex-col items-center gap-4">
        <img src="/Logo.png" alt="Logo" className="w-20 h-20" />
        <div className="text-[#D9D9D9] text-lg">Redirecting to signup...</div>
      </div>
    </div>
  );
};

export default Signup;
