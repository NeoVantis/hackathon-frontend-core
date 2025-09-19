import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

interface FooterProps {
  className?: string;
}

const YCombinatorIcon = () => (
  <svg
    width="17"
    height="16"
    viewBox="0 0 17 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_23_240)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.439941 0H16.4399V16H0.439941V0ZM5.1545 3.902L7.90082 9.04663V12.4267H8.95707V9.10875L11.7282 3.902H10.5601L8.91975 7.15775C8.83977 7.3259 8.75899 7.49367 8.67744 7.66106C8.60393 7.81175 8.53144 7.96294 8.46 8.11462C8.43242 8.04157 8.40342 7.96905 8.373 7.89712C8.33835 7.81517 8.30106 7.73436 8.26119 7.65481C8.25214 7.63654 8.24384 7.6179 8.23632 7.59894C8.22626 7.57492 8.21376 7.55201 8.199 7.53056C8.17428 7.46452 8.14524 7.40017 8.11207 7.33794C8.08051 7.27914 8.05149 7.21902 8.02507 7.15775L6.40957 3.902H5.1545Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_23_240">
        <rect
          width="16"
          height="16"
          fill="white"
          transform="translate(0.439941)"
        />
      </clipPath>
    </defs>
  </svg>
);

export default function Footer({ className = "" }: FooterProps) {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSignUp = () => {
    if (email) {
      navigate('/signup');
    }
  };

  return (
    <footer className={`bg-gradient-to-br from-black via-slate-900 to-blue-950 mt-16 ${className}`}>
      <div className="px-4 pt-12 pb-8">
        {/* Top Content */}
        <div className="flex max-md:flex-col justify-between gap-12 mb-12">
          {/* Left Side */}
          <div className="flex-1 md:max-w-[50%]">
            {/* Logo + Tagline */}
            <div className="mb-8">
              <Link to="/" className="flex items-center gap-3 mb-3">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/3b3798e7f4db720c798b305e32e3a1c03249c8e4?width=72"
                  alt="NeoVantis Logo"
                  className="w-9 h-9 rounded-xl"
                />
                <span className="bg-gradient-to-r from-white/40 to-white/60 bg-clip-text text-transparent text-lg font-normal">
                  Reinventing Hackathons: Build, Win, Repeat
                </span>
              </Link>
            </div>

            {/* Newsletter + Social */}
            <div className="flex flex-col gap-4">
              {/* Input + Button + Social (desktop row, mobile column) */}
              <div className="flex flex-col sm:flex-row gap-2 w-full">
                {/* Input + Button */}
                <div className="flex flex-col sm:flex-row flex-1 gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="work@email.com"
                    className="flex-1 bg-white/8 border-0 rounded-xl px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-1 focus:ring-blue-600"
                  />
                  <button 
                    onClick={handleSignUp}
                    className="bg-white/80 text-slate-900 px-4 py-3 rounded-xl font-semibold hover:bg-white transition-colors"
                  >
                    Sign Up
                  </button>
                </div>

                {/* Social (to the right on desktop, below on mobile) */}
                <div className="flex gap-4 justify-center sm:justify-start sm:items-center">
                  <a
                    href="#"
                    className="text-white/60 hover:text-white text-lg transition-colors"
                  >
                    𝕏
                  </a>
                  <a
                    href="#"
                    className="text-white/60 hover:text-white text-lg transition-colors"
                  >
                    in
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side Links */}
          <div className="flex justify-between gap-8 lg:gap-20">
            {/* Product */}
            <div>
              <h3 className="text-gray-100 text-base font-medium mb-4">
                Product
              </h3>
              <div className="space-y-2">
                <Link to="/hackathons" className="block text-white/60 hover:text-white">
                  Hackathons
                </Link>
                <a href="#" className="block text-white/60 hover:text-white">
                  Changelog
                </a>
                <a href="#" className="block text-white/60 hover:text-white">
                  Guide
                </a>
              </div>
            </div>

            {/* Learn */}
            <div>
              <h3 className="text-gray-100 text-base font-medium mb-4">
                Learn
              </h3>
              <div className="space-y-2">
                <a href="#" className="block text-white/60 hover:text-white">
                  Blog
                </a>
              </div>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-gray-100 text-base font-medium mb-4">
                Company
              </h3>
              <div className="space-y-2">
                <Link to="/about" className="block text-white/60 hover:text-white">
                  About
                </Link>
                <a href="#" className="block text-white/60 hover:text-white">
                  Terms of Service
                </a>
                <a href="#" className="block text-white/60 hover:text-white">
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
            <p className="text-white/60 text-sm">
              © 2025 NeoVantis, Inc. All rights reserved.
            </p>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 opacity-60 flex items-center justify-center">
                <YCombinatorIcon />
              </div>
              <span className="text-white/60 text-sm">
                Backed by Y Combinator
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
