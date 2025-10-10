"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
import Section_title from "./Section_title";

const galleryImages = [
  "/images/gallery-1.jpg",
  "/images/gallery-2.jpg",
  "/images/gallery-3.jpg",
  "/images/gallery-4.jpg",
  "/images/gallery-5.jpg",
  //   "/images/gallery-6.jpg",
];

export default function Gallery() {
  return (
    <section id="gallery" className="  bg-white scroll-mt-20">
      <Section_title title="معرض الصور" />
      <div className="mt-10" />
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 2 }, // شاشات صغيرة
          1024: { slidesPerView: 3 }, // شاشات كبيرة
        }}
        className=""
      >
        {galleryImages.map((_, idx) => (
          <SwiperSlide key={idx}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="overflow-hidden rounded-xl shadow-md"
            >
              <Image
                src={`/images/gallery-${idx + 1}.jpg`}
                alt={`نشاط ${idx + 1}`}
                className=" w-full h-72 object-cover hover:scale-105 transition-transform duration-500"
                width={600}
                height={400}
                objectFit="fit"
              />
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="text-center mt-6">
        <Link
          href="/gallery"
          className="font-bold inline-block bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition"
        >
          مشاهدة المعرض كاملاً
        </Link>
      </div>{" "}
    </section>
  );
}
