// components/Footer.tsx
import React from "react";
import Link from "next/link";
import { Facebook, Instagram, Phone } from "lucide-react";
import { blue_colors } from "@/lib/utils";

export default function Footer() {
  return (
    <footer className={`${blue_colors}  py-10 mt-16 px-[5%] `}>
      <div className="container mx-auto px-6 md:px-20 text-center">
        {/* Logo / Name */}
        <h3 className="text-2xl font-bold text-gray-800 mb-3">
          ✨ Kinder Academy
        </h3>
        <p className="text-gray-600 mb-6">حيث يبدأ التعلم بالمرح والإبداع ✨</p>

        {/* Links */}
        <div className="flex flex-wrap  justify-center gap-6 mb-6 text-sm md:text-base">
          <Link
            href="#about"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            من نحن
          </Link>

          <Link
            href="#services"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            خدماتنا{" "}
          </Link>
          <Link
            href="#gallery"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            المعرض
          </Link>
          <Link
            href="#kids-courses"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            اشهر الفصول
          </Link>
          <Link
            href="#adults-courses"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            دورات الكبار
          </Link>
          <Link
            href="#working-hours"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            مواعيد العمل
          </Link>

          <Link
            href="#contact"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            تواصل معنا
          </Link>
        </div>

        {/* Socials */}
        <div className="flex justify-center gap-5 mb-6 text-xl">
          <a
            href="https://www.facebook.com/profile.php?id=100064062579538"
            target="_blank"
            className="text-blue-600 hover:scale-110 transition"
          >
            <Facebook size={24} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            className="text-pink-500 hover:scale-110 transition"
          >
            <Instagram size={24} />
          </a>
          <a
            href="https://wa.me/201274964520"
            target="_blank"
            className="text-green-600 hover:scale-110 transition"
          >
            <Phone size={24} />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Kinder Academy. جميع الحقوق محفوظة.
        </p>
      </div>
    </footer>
  );
}
