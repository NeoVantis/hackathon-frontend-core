import React, { useState, useRef } from "react";

const VerifyEmail: React.FC = () => {
  const [otp, setOtp] = useState<string[]>(["", "", "", ""]);
  const inputsRef = useRef<Array<HTMLInputElement | null>>([]);

  const handleChange = (value: string, index: number) => {
    if (/^[0-9]?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < otp.length - 1) {
        inputsRef.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handleVerify = () => {
    const code = otp.join("");
    if (code.length < 4) {
      alert("Please enter the 4-digit OTP");
      return;
    }
    console.log("Verifying OTP:", code);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="w-full max-w-md bg-black shadow-lg rounded-2xl p-8 text-center">
        {/* Mail Icon */}
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
            className="lucide lucide-mail"
          >
            <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
            <rect x="2" y="4" width="20" height="16" rx="2" />
          </svg> */}
          <img src="EmailIcon.png" alt="emailIcon" />
        </div>

        {/* Headings */}
        <h2 className="text-xl font-semibold text-[#D9D9D9] mb-2">
          Check your inbox
        </h2>
        <p className="text-sm text-[#C7C7CC] mb-6">
          We sent a verification code to your email
        </p>

        {/* OTP Inputs */}
        <div className="flex justify-center gap-3 mb-6">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => {
                inputsRef.current[index] = el;
              }}
              type="text"
              maxLength={1}
              value={digit}
              placeholder="0"
              title={`Digit ${index + 1}`}
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className="w-12 h-12 text-center text-lg font-semibold border rounded-[10px] bg-black text-white focus:outline-none focus:ring-2 focus:ring-[#2970FF]"
            />
          ))}
        </div>

        {/* Verify Button */}
        <button
          onClick={handleVerify}
          className="w-full py-3 px-4 mb-4 bg-[#1D3EE7] text-white rounded-[99px] hover:bg-blue-700"
        >
          Verify Email
        </button>

        {/* Resend OTP */}
        <div className="mb-4">
          <span className="text-sm text-[#C7C7CC]">Didn’t receive OTP? </span>
          <button className="text-sm text-[#2970FF] hover:underline">
            Resend
          </button>
        </div>

        {/* Back to Login */}
        <button className="w-full py-3 px-4 border border-[#475467] text-[#D9D9D9] rounded-[99px] hover:bg-[#1a1a1a]">
          Back to Login
        </button>
      </div>
    </div>
  );
};

export default VerifyEmail;
