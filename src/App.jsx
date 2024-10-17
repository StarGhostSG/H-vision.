import React from "react"; // Vérifiez cette ligne
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar"; // Assurez-vous que le chemin est correct
import Footer from "./pages/Footer"; // Assurez-vous que le chemin est correct
import HeroSection from "./pages/HeroSection"; // Assurez-vous que le chemin est correct
import FeatureSection from "./pages/FeatureSection"; // Assurez-vous que le chemin est correct
import Workflow from "./pages/Workflow"; // Assurez-vous que le chemin est correct
import Pricing from "./pages/Pricing"; // Assurez-vous que le chemin est correct
import Testimonials from "./pages/Testimonials"; // Assurez-vous que le chemin est correct
import ContactUs from "./pages/ContactUs"; // Assurez-vous que le chemin est correct

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6 relative">
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/features" element={<FeatureSection />} />
          <Route path="/workflow" element={<Workflow />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
