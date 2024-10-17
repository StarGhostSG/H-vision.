import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";
import { Link } from "react-router-dom"; // Utiliser Link de react-router-dom

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const handleMobileNavLinkClick = () => {
    setMobileDrawerOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-red-700/80">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <Link to="/"> {/* Lien vers la page principale */}
              <img
                className="h-14 w-auto md:h-12 md:w-auto mr-2"
                src={logo}
                alt="Logo"
              />
            </Link>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12 text-[#75000d]">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.href} // Utiliser Link de react-router-dom pour naviguer
                  onClick={handleMobileNavLinkClick}
                  className="cursor-pointer"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? (
                <X className="text-[#75000d]" />
              ) : (
                <Menu className="text-[#75000d]" />
              )}
            </button>
          </div>

          {/* Bouton "Se connecter" ajouté ici */}
          <div className="ml-8"> {/* Ajout d'une marge à gauche */}
            <Link
              to="#" // Lien temporaire, à remplacer par le lien réel
              className="cursor-pointer text-[#75000d] border border-[#75000d] rounded px-4 py-2 hover:bg-[#75000d] hover:text-white transition-colors duration-150"
            >
              Se connecter
            </Link>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-black w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul className="text-[#75000d]">
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <Link
                    to={item.href} // Utiliser Link de react-router-dom pour naviguer
                    onClick={handleMobileNavLinkClick}
                    className="cursor-pointer"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="mt-0 ml-8"> {/* Ajout de ml-8 pour l'espacement */}
                <Link to="#" className="cursor-pointer text-[#75000d] border border-[#75000d] rounded px-4 py-2 hover:bg-[#75000d] hover:text-white transition-colors duration-150">
                  Se connecter
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
