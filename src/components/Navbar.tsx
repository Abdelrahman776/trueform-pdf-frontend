import { useState, useEffect } from "react";
import { CreditCardIcon, MenuIcon, XIcon, LogIn } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // THEME: single source of truth lifted to Navbar
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("tfpdf-theme");
    if (saved) return saved;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("tfpdf-theme", theme);
  }, [theme]);

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
            <ThemeToggle theme={theme} setTheme={setTheme} />
            <div>
              <button className="flex items-center px-3 py-2 rounded-2xl text-tfblack dark:text-tfwhite hover:bg-gray-300 dark:hover:bg-gray-700 ">
                <CreditCardIcon className="w-5 h-5 mr-1" />
                <p>Credits: N/A</p>
              </button>
            </div>
            <button className="px-6 py-2 rounded-2xl text-tfwhite dark:text-tfwhite bg-tfblue  hover:bg-gray-700 dark:hover:bg-gray-700  transition-colors flex items-center">
              <LogIn className="mr-2 h-4 w-4 mt-0.5" />
              <span>Sign In</span>
            </button>
          </div>
          {/* Mobile menu button *********************************************************************************/}

          <div className="flex items-center sm:hidden">
            <ThemeToggle theme={theme} setTheme={setTheme} />
            <button
              onClick={toggleMenu}
              className="  text-tfblack dark:text-tfwhite  "
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
            <button
              className="w-full px-3 py-2 rounded-sm text-tfwhite dark:text-tfwhite  bg-tfblue
            flex content-center gap-2 items-center "
            >
              <LogIn className=" h-4 w-4 ml-auto " />
              <p className="mr-auto">Sign In</p>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
