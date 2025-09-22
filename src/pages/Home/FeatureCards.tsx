interface FeatureCardsProps {
  className?: string;
}

const ArrowIcon = () => (
  <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_23_158)">
      <path d="M1.62988 3L6.62988 8L1.62988 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </g>
    <defs>
      <clipPath id="clip0_23_158">
        <rect width="8" height="14" fill="white" transform="translate(0.629883)"/>
      </clipPath>
    </defs>
  </svg>
);

export default function FeatureCards({ className = "" }: FeatureCardsProps) {
  return (
    <section className={`px-4 py-16 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {/* Main Large Card */}
        <div className="mb-6 md:mb-8">
          <div 
            className="relative w-full h-96 rounded-[48px] overflow-hidden"
            style={{
              backgroundImage: "url('https://api.builder.io/api/v1/image/assets/TEMP/dcf7922d15629c6740ddf825dfe2f6d36ae0a998?width=2462')",
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
            <div className="relative h-full flex flex-col justify-center p-8 md:p-16 max-w-2xl">
              <div className="mb-6">
                <h3 className="text-black text-2xl md:text-3xl font-normal leading-tight mb-4 font-serif">
                  Frequent Hackathons, Endless Opportunities
                </h3>
                <p className="text-black/60 text-base leading-relaxed">
                  Join weekly or bi-weekly challenges designed to keep your coding skills sharp and your creativity flowing. No long waits, just constant chances to build, compete, and win.
                </p>
              </div>
              <button className="flex items-center gap-2 bg-black text-white px-4 py-3 rounded-lg font-semibold text-base w-fit hover:bg-gray-800 transition-colors">
                Hackathons
                <ArrowIcon />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Two Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {/* Build Freely Card */}
          <div 
            className="relative h-96 rounded-[48px] overflow-hidden"
            style={{
              backgroundImage: "url('https://api.builder.io/api/v1/image/assets/TEMP/25d521c4b364138ea0da9b17a9f81a3f86bb2e20?width=1208')",
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
            <div className="relative h-full flex flex-col justify-center p-8 md:p-16">
              <div className="mb-6">
                <h3 className="text-black text-2xl md:text-3xl font-normal leading-tight mb-4 font-serif">
                  Build Freely, Win Big
                </h3>
                <p className="text-black/60 text-base leading-relaxed">
                  Use any AI or tool you want—there are no restrictions. Compete for exciting prizes like PS5, AirPods, and rewards. Your creativity, your rules.
                </p>
              </div>
              <button className="flex items-center gap-2 bg-black text-white px-4 py-3 rounded-lg font-semibold text-base w-fit hover:bg-gray-800 transition-colors">
                Hackathons
                <ArrowIcon />
              </button>
            </div>
          </div>

          {/* Community Card */}
          <div 
            className="relative h-96 rounded-[48px] overflow-hidden"
            style={{
              backgroundImage: "url('https://api.builder.io/api/v1/image/assets/TEMP/25d521c4b364138ea0da9b17a9f81a3f86bb2e20?width=1208')",
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
            <div className="relative h-full flex flex-col justify-center p-8 md:p-16">
              <div className="mb-6">
                <h3 className="text-black text-2xl md:text-3xl font-normal leading-tight mb-4 font-serif">
                  Join a Thriving Hacker Community
                </h3>
                <p className="text-black/60 text-base leading-relaxed">
                  Earn badges, climb leaderboards, and connect with passionate developers and indie hackers worldwide. This is more than a contest—it's a place to grow, showcase your talent, and have fun.
                </p>
              </div>
              <button className="flex items-center gap-2 bg-black text-white px-4 py-3 rounded-lg font-semibold text-base w-fit hover:bg-gray-800 transition-colors">
                Hackathons
                <ArrowIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
