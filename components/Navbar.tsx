"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { blue_colors } from "@/lib/utils";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    // push body down so content doesn't overlap nav
    if (navRef.current) {
      document.body.style.paddingTop = `${navRef.current.offsetHeight}px`;
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.paddingTop = "0px";
    };
  }, []);

  const navLinks = [
    { href: "/#about", label: "من نحن" },
    { href: "/#services", label: "خدماتنا" },
    { href: "/#gallery", label: "المعرض" },
    { href: "/#kids-courses", label: "اشهر الفصول" },
    { href: "/#adults-courses", label: "دورات الكبار" },
    { href: "/#working-hours", label: "مواعيد العمل" },
    { href: "/#contact", label: "تواصل معنا" },
  ];

  return (
    <>
      {/* Navbar */}
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 w-full flex justify-between items-center transition-all duration-300 
          ${blue_colors} z-50 px-[5%] font-bold
          ${scrolled ? "py-2 h-16 shadow-md" : "py-4 h-20 shadow-none"}
        `}
      >
        {/* Logo / Title */}
        <Link href="/" className="flex items-center gap-2">
          {!scrolled ? (
            <Image
              src="/images/logo.jpg"
              alt="Logo"
              width={60}
              height={60}
              className="rounded-full transition-all duration-300"
            />
          ) : (
            <h1 className="text-lg md:text-xl font-bold text-blue-600">
              Kinder Garden Academy
            </h1>
          )}
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 text-sm md:text-base">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-blue-600 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-blue-100 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-16 left-0 w-full bg-white shadow-md md:hidden px-6 py-6 space-y-4 z-40"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-lg hover:text-blue-600 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
