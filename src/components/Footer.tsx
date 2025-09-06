import { Github, BookOpenIcon, MailIcon, HeartIcon } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const footerLinks = [
    {
      name: "About",
      href: " about ",
      icon: <BookOpenIcon className="h-4 w-4" />,
    },
    {
      name: "API Docs",
      href: "http://127.0.0.1:8000/docs",
      icon: <BookOpenIcon className="size-4" />,
    },
    {
      name: "Support Me",
      href: "https://ko-fi.com/abdelrahmanelsharkawy",
      icon: <HeartIcon className="h-4 w-4" />,
    },
    {
      name: "GitHub",
      href: "https://github.com/Abdelrahman776",
      icon: <Github className="h-4 w-4" />,
    },
    {
      name: "Contact me",
      href: "mailto:abdelrahmannkamal@gmail.com",
      icon: <MailIcon className="h-4 w-4" />,
    },
  ];
  return (
    <footer className="bg-tfwhite dark:bg-tfblack py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="mb-4 text-xl font-bold">
            <span className="text-tfblue dark:text-tfblue">TrueForm</span>
            <span className="text-tforange dark:text-tforange">PDF</span>
          </div>
          <div className="mb-4 flex flex-wrap justify-center gap-4">
            {footerLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                className="hover:text-tforange flex items-center px-3 py-1 text-sm text-gray-600 transition-colors dark:text-gray-300"
              >
                <span className="mr-1">{link.icon}</span>
                {link.name}
              </a>
            ))}
          </div>
          <div className="pb-1 text-sm text-gray-500 dark:text-gray-400">
            Copyright © {currentYear} TrueForm PDF
          </div>
        </div>
      </div>
    </footer>
  );
}
