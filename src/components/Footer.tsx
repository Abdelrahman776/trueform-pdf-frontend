import {  BookOpenIcon, MailIcon, HeartIcon } from "lucide-react";

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
      icon: (
        <svg className="h-4 w-4"fill="white" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <title>GitHub</title>
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
        </svg>
      ),
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
