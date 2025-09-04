"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Book,
  Users,
  Brain,
  Activity,
  Pencil,
  BookOpenText,
  Menu,
  X,
} from "lucide-react";
import Image from "next/image";
import ContactSection from "./ContactSection";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const services = [
    {
      icon: <Book className="w-8 h-8 mx-auto mb-4 text-blue-500" />,
      title: "تأسيس للمدارس",
      desc: "لغات / أزهري / دولي",
    },
    {
      icon: <Pencil className="w-8 h-8 mx-auto mb-4 text-yellow-500" />,
      title: "كورسات",
      desc: "فونتكس / نور بيان / أونلاين",
    },
    {
      icon: <Users className="w-8 h-8 mx-auto mb-4 text-green-500" />,
      title: "جلسات",
      desc: "تخاطب وتعديل سلوك",
    },
    {
      icon: <Activity className="w-8 h-8 mx-auto mb-4 text-red-500" />,
      title: "مهارات",
      desc: "تنمية وصعوبات تعلم",
    },
    {
      icon: <Brain className="w-8 h-8 mx-auto mb-4 text-purple-500" />,
      title: "اختبارات ذكاء",
      desc: "IQ Test للأطفال",
    },
    {
      icon: <BookOpenText className="w-8 h-8 mx-auto mb-4 text-teal-500" />,
      title: "أنشطة إضافية",
      desc: "تعليم رسم / تحفيظ قرآن / استضافة",
    },
  ];

  // const galleryImages = [
  //   "https://images.pexels.com/photos/861308/pexels-photo-861308.jpeg",
  //   "https://images.pexels.com/photos/1720187/pexels-photo-1720187.jpeg",
  //   "https://images.pexels.com/photos/1250722/pexels-photo-1250722.jpeg",
  //   "https://images.pexels.com/photos/1609460/pexels-photo-1609460.jpeg",
  //   "https://images.pexels.com/photos/936120/pexels-photo-936120.jpeg",
  // ];
  const galleryImages = [
    "/images/activity1.webp",
    "/images/activity2.jpg",
    "/images/activity3.jpg",
    "/images/activity4.png",
    "/images/activity5.jpg",
    "/images/activity6.jpg",
  ];

  return (
    <div dir="rtl" className="min-h-screen flex flex-col font-sans">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-4 shadow-md bg-white sticky top-0 z-50">
        <h1 className="text-lg md:text-xl font-bold text-blue-600">
          Kinder Garden Academy{" "}
        </h1>
        <div className="hidden md:flex gap-6 text-sm md:text-base">
          <Link href="#about">من نحن</Link>
          <Link href="#services">خدماتنا</Link>
          <Link href="#gallery">أنشطتنا</Link>
          <Link href="#contact">تواصل معنا</Link>
          {/* <Link href="#enroll">التسجيل</Link> */}
        </div>
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {menuOpen && (
        <div className="flex flex-col bg-white shadow-md md:hidden px-6 py-4 space-y-4">
          <Link href="#about" onClick={() => setMenuOpen(false)}>
            من نحن
          </Link>
          <Link href="#services" onClick={() => setMenuOpen(false)}>
            خدماتنا
          </Link>
          <Link href="#gallery" onClick={() => setMenuOpen(false)}>
            أنشطتنا
          </Link>
          <Link href="#contact" onClick={() => setMenuOpen(false)}>
            تواصل معنا
          </Link>
          {/* <Link href="#enroll" onClick={() => setMenuOpen(false)}>
            التسجيل
          </Link> */}
        </div>
      )}

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center justify-center text-center py-20 px-6 bg-gradient-to-r from-blue-50 to-yellow-50"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
          نؤسس أجيال المستقبل
        </h2>
        <p className="text-base md:text-lg text-gray-600 mb-6 max-w-xl">
          أكاديمية متكاملة لتأسيس الأطفال لجميع المراحل التعليمية مع أنشطة
          وبرامج مميزة.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button asChild>
            <Link href="#enroll">سجّل الآن</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="#contact">تواصل معنا</Link>
          </Button>
        </div>
      </motion.section>

      {/* Services Section */}
      <section id="services" className="py-16 px-6 md:px-20 bg-gray-50">
        <h3 className="text-2xl font-bold text-center mb-12">خدماتنا</h3>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="shadow-sm hover:shadow-md transition rounded-2xl">
                <CardContent className="p-6 text-center">
                  {service.icon}
                  <h4 className="font-bold text-lg mb-2">{service.title}</h4>
                  <p className="text-gray-600 text-sm">{service.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 px-6 md:px-20 bg-white">
        <h3 className="text-2xl font-bold text-center mb-8">أنشطتنا</h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="overflow-hidden rounded-xl shadow-md"
            >
              <Image
                src={src}
                alt={`نشاط ${idx + 1}`}
                className="w-full h-60 object-cover hover:scale-105 transition"
                width={500}
                height={300}
              />
            </motion.div>
          ))}
        </div>
      </section>
      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}
