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
            <img
              className="h-14 w-auto md:h-12 md:w-auto mr-2"
              src={logo}
              alt="Logo"
            />
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
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
