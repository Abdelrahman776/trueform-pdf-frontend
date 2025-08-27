import { SunIcon, MoonIcon } from "lucide-react";

type Props = {
  theme: string;
  setTheme: (t: string) => void;
};

export default function ThemeToggle({ theme, setTheme }: Props) {
  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="p-2 m-0 mt-0.5 rounded-full hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      {theme === "light" ? (
        <MoonIcon className="w-5 h-5 text-tfblack dark:text-tfwhite" />
      ) : (
        <SunIcon className="w-5 h-5 text-tfblack dark:text-tfwhite" />
      )}
    </button>
  );
}
//there is a bug here when I am in dark mode in wide screen then move to mobile screen the icon is switched even though the mode is still the same
