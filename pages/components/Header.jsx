import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Admissions", path: "/admissions" },
    { name: "Events Gallery", path: "/events-gallery" },
    { name: "Infrastructure", path: "/infrastructure" },
    { name: "Contact", path: "/contact" },
    { name: "Vacancies", path: "/vacancies-page" },
    { name: "Mandatory Disclosure", path: "/mandatory-disclosure" },
  ];

  return (
    <header className="bg-blue-600 text-white">
      <nav className="container mx-auto flex items-center justify-between p-1">
        <div className="flex items-center">
         <Link href={'/'}> <Image src="/logo.jpg" alt="Site Logo" width={80} height={40} className="rounded-full" /></Link>
        </div>

        {/* Hamburger Menu Icon */}
        <button
          className="text-white lg:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white flex"
          onClick={toggleMenu}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}<p className="font-semibold">Menu</p>
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex gap-6 text-lg font-medium">
          {navItems.map((item) => (
            <li
              key={item.path}
              className=""
            >
              <Link className=" hover:bg-white hover:text-blue-800 py-2 px-3 rounded-lg" href={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <ul className="lg:hidden flex flex-col items-center gap-4 bg-blue-700 text-white text-lg font-medium p-4">
          {navItems.map((item) => (
            <li
              key={item.path}
              className="w-full text-center bg-transparent hover:bg-white hover:text-blue-800 py-2 px-4 rounded-lg"
            >
              <Link href={item.path} onClick={() => setIsMobileMenuOpen(false)}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Header;
