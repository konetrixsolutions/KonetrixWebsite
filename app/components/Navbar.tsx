"use client";

import { useState } from "react";
import Link from "next/link";
import { TiThMenu } from "react-icons/ti";

interface NavbarProps {
  activeSection: string;
}

export const Navbar = ({ activeSection }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About Us", href: "#about", id: "about" },
    { name: "Services", href: "#services", id: "services" },
    { name: "Careers", href: "#careers", id: "careers" },
    { name: "Contact Us", href: "#contact", id: "contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background-black text-white  ">
      <nav className="flex justify-between items-center py-4 px-5 md:px-12">
        <div className="flex items-center">
          <img
            src="/K-logo.png"
            alt="Konetrix Logo"
            className="h-12 md:h-14 w-auto"
          />

          <div className="-ml-2 flex flex-col items-center">
            <h4 className="font-bold uppercase tracking-widest text-sm md:text-base">
              Konetrix
            </h4>

            <span className="text-primary-gold text-[10px] md:text-xs uppercase tracking-widest">
              Solutions
            </span>
          </div>
        </div>

        {/* Large screen */}
        <div className="hidden md:flex gap-8 md:items-center font-medium">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className={`transition-colors ${
                activeSection === item.id
                  ? "text-primary-gold"
                  : "hover:text-primary-dark-gold"
              }`}
            >
              {item.name}
            </Link>
          ))}
          <button className="bg-primary-gold text-white font-semibold py-2 px-4 rounded-lg hover:opacity-90 transition">
            Lets Talk
          </button>
        </div>

        <TiThMenu
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl"
        />
      </nav>

      {/* Mobile  */}
      {isOpen && (
        <div className="md:hidden flex flex-col  bg-background-black border-t border-white/10">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`px-5 py-4 transition-colors ${
                activeSection === item.id
                  ? "text-primary-gold"
                  : "hover:text-primary-dark-gold"
              }`}
            >
              {item.name}
            </Link>
          ))}
          <button className="bg-primary-gold text-white font-semibold py-2 px-4 rounded-lg hover:opacity-90 transition">
            Lets Talk
          </button>
        </div>
      )}
    </header>
  );
};
