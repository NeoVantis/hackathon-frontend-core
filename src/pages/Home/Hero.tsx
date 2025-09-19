interface HeroProps {
  className?: string;
}

export default function Hero({ className = "" }: HeroProps) {
  return (
    <section className={`flex flex-col items-center text-center px-4 py-28 md:py-32 lg:py-40 ${className}`}>
      {/* Main Heading */}
      <div className="max-w-6xl mb-8">
        <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-medium text-white leading-tight tracking-tight mb-8">
          Build with the power of<br />
          code/AI — without Any restrictions
        </h1>
      </div>

      {/* Subtitle */}
      <div className="max-w-3xl mb-8">
        <p className="text-lg text-white leading-relaxed px-8">
          Take control of HTML, CSS, and JavaScript in a visual canvas. Webflow generates
          clean, semantic code that's ready to publish or hand to developers.
        </p>
      </div>

      {/* CTA Button */}
      <div className="flex justify-center">
        <button 
          className="bg-blue-600 text-white text-base font-medium px-8 py-4 rounded-xl hover:bg-blue-600 transition-all duration-200 shadow-[0_10px_35.8px_0_rgba(29,62,231,0.4)]"
        >
          Go To Hackathons
        </button>
      </div>
    </section>
  );
}
