// pages/gallery.tsx
"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const galleryImages = [
  "/images/activity1.webp",
  "/images/activity2.jpg",
  "/images/activity3.jpg",
  "/images/activity4.png",
  "/images/activity5.jpg",
  "/images/activity6.jpg",
  "/images/activity7.jpg",
  "/images/activity8.jpg",
  "/images/activity9.jpg",
];

export default function FullGallery() {
  return (
    <section className="py-16 px-6 md:px-20 bg-white min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-10">📸 معرض الصور</h1>

      {/* Masonry layout */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {Array(30)
          .fill(null)
          .map((_, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="break-inside-avoid overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <Image
                src={`/images/gallery-${idx + 1}.jpg`}
                alt={`صورة ${idx + 1}`}
                width={600}
                height={400}
                className="w-full object-cover hover:scale-105 transition-transform duration-500 cursor-pointer"
              />
            </motion.div>
          ))}
      </div>
      
    </section>
  );
}
