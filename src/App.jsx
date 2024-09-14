import React, { useState, useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import Workflow from "./components/Workflow";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";

const App = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  // Fonction pour faire défiler jusqu'au haut de la page
  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 500,
      smooth: "easeInOutQuart"
    });
  };

  // Fonction pour gérer l'événement de défilement et afficher/masquer le bouton de défilement
  const handleScroll = () => {
    if (window.scrollY > 200) {
      setShowScrollButton(true);
    } else {
      setShowScrollButton(false);
    }
  };

  // Ajouter un écouteur d'événements lorsque le composant est monté
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // [] assure que l'effet n'est appelé qu'une seule fois après le montage initial

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6 relative">
        <section id="Services">
          <HeroSection />
        </section>
        <section id="Equipe">
          <FeatureSection />
        </section>
        <section id="Matériels">
          <Workflow />
        </section>
        <section id="Client">
        </section>
        <Pricing />
        <section id="Testimonials">
          <Testimonials />
        </section>
        <Footer />

        {/* Bouton de retour au top */}
        {showScrollButton && (
          <button
            className="fixed bottom-10 right-10 bg-[#75000d] text-white px-4 py-2 rounded-full shadow-md hover:bg-red-700 focus:outline-none"
            onClick={scrollToTop}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </button>
        )}
      </div>
    </>
  );
};

export default App;
