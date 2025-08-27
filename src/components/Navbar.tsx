import { useState } from "react";
import { CreditCardIcon, MenuIcon, XIcon } from "lucide-react";
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  //   const [showCredits, setShowCredits] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-tfwhite dark:bg-tfblack ">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* logo and name *************************************************************** */}
          <div className="flex items-center  gap-2  ">
            <img src="tf-pdf-logo.png" alt="tf pdf logo" className="w-6"></img>
            <div className="text-xl font-bold">
              <span className="text-tfblue">TrueForm</span>
              <span className="text-tforange">PDF</span>
            </div>
          </div>
          {/* Desktop nav items *********************************************************************/}
          <div className="hidden sm:flex items-center space-x-4">
            <div>
              <button className="flex items-center px-3 py-2 rounded-md text-[#2A3A6A] dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800">
                <CreditCardIcon className="w-5 h-5 mr-1" />
                <p>Credits: N/A</p>
              </button>
            </div>
            <button className="px-4 py-2 rounded-md text-[#2A3A6A] dark:text-white border border-[#2A3A6A] dark:border-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
              Sign In
            </button>
          </div>
          {/* Mobile menu button *********************************************************************************/}
          <div className="flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              className="  text-tfblue dark:text-tforange  "
            >
              {isMenuOpen ? (
                <XIcon className="h-6 w-6  " />
              ) : (
                <MenuIcon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu ************************************************************************************************************** */}
      {isMenuOpen && (
        <div className="sm:hidden bg-tfwhite dark:bg-tfblack shadow-lg">
          <div className="p-3 ">
            <button className="flex items-center gap-1 w-full px-3 py-3   text-tfblack dark:text-tfwhite">
              <CreditCardIcon className="w-5 h-5 " />
              <p>Credits: N/A</p>
            </button>
            <button className="w-full px-3 py-2 rounded-sm text-tfblack dark:text-tfwhite border border-tfblack dark:border-tfwhite ">
              Sign In
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
