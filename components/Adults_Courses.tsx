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
  "/images/adults-courses-1.jpg",
  "/images/adults-courses-2.jpg",
  "/images/adults-courses-3.jpg",
  "/images/adults-courses-4.jpg",
  "/images/adults-courses-5.jpg",
  //   "/images/gallery-6.jpg",
];

export default function Adults_Courses() {
  return (
    <section id="adults-courses" className=" px-6 md:px-20 bg-white scroll-mt-20">
      <Section_title title="دورات تدريبة" />
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
              className="overflow-hidden rounded-2xl shadow-md bg-gray-50"
            >
              <Image
                src={_}
                alt={`نشاط ${idx + 1}`}
                className=" w-full h-[450px] object-contain hover:scale-105 transition-transform duration-500  "
                width={600}
                height={400}
                objectFit="contain"
              />
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* <div className="text-center mt-6">
        <Link
          href="/gallery"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition"
        >
          مشاهدة المعرض كاملاً
        </Link>
      </div> */}
    </section>
  );
}
