interface ReinventingSectionProps {
  className?: string;
}

export default function ReinventingSection({ className = "" }: ReinventingSectionProps) {
  return (
    <section className={`px-4 py-16 lg:py-24 max-sm:ml-2 lg:ml-20  ${className}`}>
      <div className="max-w-4xl">
        {/* Main Heading */}
        <div className="mb-6">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Reinventing Hackathons:<br />
            Build, Win, Repeat
          </h2>
        </div>

        {/* Subtitle */}
        <div className="max-w-2xl">
          <p className="text-gray-200 text-lg leading-relaxed">
            Templates, tasks, and meeting tools make it effortless to
            supercharge your meetings.
          </p>
        </div>
      </div>
    </section>
  );
}
