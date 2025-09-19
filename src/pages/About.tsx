import Navigation from './Home/Navigation';

export default function About() {
  return (
    <div className="min-h-screen bg-slate-900 font-sans">
      <Navigation />
      <div className="container mx-auto px-4 pt-20 pb-24">
        <h1 className="text-4xl font-bold text-white text-center mb-8">
          About Us
        </h1>
        <p className="text-gray-200 text-center text-lg max-w-2xl mx-auto">
          Learn more about our platform and mission. This page is coming soon!
        </p>
      </div>
    </div>
  );
}
