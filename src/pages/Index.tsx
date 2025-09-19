import Navigation from './Home/Navigation';
import Hero from "./Home/Hero";
import FeatureBenefits from "./Home/FeatureBenefits";
import ReinventingSection from "./Home/ReinventingSection";
import FeatureCards from "./Home/FeatureCards";
import Footer from "./Home/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-slate-900 font-sans">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <Hero className="pt-20" />

      {/* Feature Benefits Grid */}
      <FeatureBenefits />

      {/* Reinventing Hackathons Section */}
      <ReinventingSection className="pl-4 md:pl-8 lg:pl-16" />

      {/* Feature Cards */}
      <FeatureCards />

      {/* Footer */}
      <Footer />
    </div>
  );
}
