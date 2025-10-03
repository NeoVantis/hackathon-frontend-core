import { Link, useNavigate } from "react-router-dom";

interface NavigationProps {
  className?: string;
}

export default function Navigation({ className = "" }: NavigationProps) {
  const navigate = useNavigate();

  const handleJoinClick = () => {
    navigate("/signup");
  };

  return (
    <header
      className={`flex justify-center items-center w-full p-5 mx-auto fixed z-50${className}`}
    >
      <nav className="flex items-center justify-between sm:gap-4 border rounded-2xl px-1 sm:px-1 md:px-1 lg:px-2 py-1 md:py-1  bg-[#303030] ">
        {/* Logo */}
        <Link to="/" className="flex items-center flex-shrink-0">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/3b3798e7f4db720c798b305e32e3a1c03249c8e4?width=72"
            alt="NeoVantis Logo"
            className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-xl"
          />
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-2 sm:gap-6 md:gap-10 lg:gap-12 mx-2 sm:mx-6 md:mx-10 flex-grow justify-center">
          <Link
            to="/"
            className="text-white text-[12px] sm:text-base md:text-lg font-light hover:text-gray-300 transition-colors"
          >
            Home
          </Link>
          <Link
            to="/hackathons"
            className="text-white text-[12px] sm:text-base md:text-lg font-light hover:text-gray-300 transition-colors"
          >
            Hackathons
          </Link>
          <Link
            to="/about"
            className="text-white text-[12px] sm:text-base md:text-lg font-light hover:text-gray-300 transition-colors"
          >
            About
          </Link>
          <Link
            to="/signin"
            className="text-white text-[12px] sm:text-base md:text-lg font-light hover:text-gray-300 transition-colors"
          >
            Sign in
          </Link>
        </div>

        {/* Join Button */}
        <button
          onClick={handleJoinClick}
          className="flex-shrink-0 bg-[#1D3EE7] text-white text-[12px] sm:text-base md:text-lg font-medium px-4 sm:px-6 md:px-8 py-1.5 sm:py-2 md:py-2.5 rounded-xl hover:bg-blue-500 transition-colors"
        >
          Join
        </button>
      </nav>
    </header>
  );
}
