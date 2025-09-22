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
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-6xl px-3 sm:px-4 ${className}`}
    >
      <nav className="flex items-center justify-between border rounded-2xl px-3 sm:px-5 md:px-8 lg:px-10 py-2 md:py-3 bg-slate-900 ">
        {/* Logo */}
        <Link to="/" className="flex items-center flex-shrink-0">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/3b3798e7f4db720c798b305e32e3a1c03249c8e4?width=72"
            alt="NeoVantis Logo"
            className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-xl"
          />
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-4 sm:gap-6 md:gap-10 lg:gap-12 mx-2 sm:mx-6 md:mx-10 flex-grow justify-center">
          <Link
            to="/"
            className="text-white text-sm sm:text-base md:text-lg font-light hover:text-gray-300 transition-colors"
          >
            Home
          </Link>
          <Link
            to="/hackathons"
            className="text-white text-sm sm:text-base md:text-lg font-light hover:text-gray-300 transition-colors"
          >
            Hackathons
          </Link>
          <Link
            to="/about"
            className="text-white text-sm sm:text-base md:text-lg font-light hover:text-gray-300 transition-colors"
          >
            About
          </Link>
          <Link
            to="/signin"
            className="text-white text-sm sm:text-base md:text-lg font-light hover:text-gray-300 transition-colors"
          >
            Sign in
          </Link>
        </div>

        {/* Join Button */}
        <button
          onClick={handleJoinClick}
          className="flex-shrink-0 bg-blue-600 text-white text-sm sm:text-base md:text-lg font-medium px-4 sm:px-6 md:px-8 py-1.5 sm:py-2 md:py-2.5 rounded-xl hover:bg-blue-500 transition-colors"
        >
          Join
        </button>
      </nav>
    </header>
  );
}
