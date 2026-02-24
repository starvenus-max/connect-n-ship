import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
<div className="text-center py-24 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
  <h1 className="text-4xl md:text-6xl font-bold">
    Reliable Global Trading & Industrial Solutions
  </h1>

  <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto">
    Vexton Global Private Limited delivers professional logistics,
    sourcing and supply chain support across India.
  </p>

  <div className="mt-8">
    <button className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-md text-white font-semibold">
      Request Business Inquiry
    </button>
  </div>
</div>

export default Index;
