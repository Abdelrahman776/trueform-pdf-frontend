import { Github, BookOpenIcon, MailIcon, HeartIcon } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const footerLinks = [
    {
      name: "About",
      href: " about ",
      icon: <BookOpenIcon className="w-4 h-4" />,
    },
    {
      name: "API Docs",
      href: " https://www.google.com   ",
      icon: <BookOpenIcon className="w-4 h-4" />,
    },
    {
      name: "Support Me",
      href: "https://ko-fi.com/abdelrahmanelsharkawy",
      icon: <HeartIcon className="w-4 h-4" />,
    },
    {
      name: "GitHub",
      href: "https://github.com/Abdelrahman776",
      icon: <Github className="w-4 h-4" />,
    },
    {
      name: "Contact me",
      href: "mailto:abdelrahmannkamal@gmail.com",
      icon: <MailIcon className="w-4 h-4" />,
    },
  ];
  return (
    <footer className="bg-tfwhite dark:bg-tfblack py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="text-xl font-bold mb-4">
            <span className="text-tfblue dark:text-tfblue">TrueForm</span>
            <span className="text-tforange dark:text-tforange">PDF</span>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mb-4 ">
            {footerLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                className="flex items-center px-3 py-1 text-sm text-gray-600 dark:text-gray-300  hover:text-tforange transition-colors"
              >
                <span className="mr-1">{link.icon}</span>
                {link.name}
              </a>
            ))}
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400 pb-1">
            Copyright © {currentYear} TrueForm PDF
          </div>
        </div>
      </div>
    </footer>
  );
}
