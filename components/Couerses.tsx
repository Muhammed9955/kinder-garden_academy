// components/Courses.tsx
import { motion } from "framer-motion";

import Course from "./course.component";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { courses } from "@/lib/utils";

export default function Courses() {
  return (
    <div className="">
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        dir="rtl"
        className=""
      >
        <div
          id="kids-courses"
          className="container mx-auto  text-center p-4 scroll-mt-20 "
        >
          <h2 className="text-orange-500 font-semibold uppercase">الكورسات</h2>
          <h3 className="text-3xl font-bold mb-10">أشهر الفصول لدينا</h3>

          {/* <div className="grid md:grid-cols-3 gap-8">
          {courses.map((course) => (
            <Course key={course.id} course={course} />
          ))}
        </div> */}

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
            {courses.map((_, idx) => (
              <SwiperSlide key={idx}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  className=""
                >
                  <Link href={`/courses/${_.id}`}>
                    <Course key={_.id} course={_} />
                  </Link>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* <div className="text-center mt-6">
          <Link
            href={`/courses/${courses[0].id}`}
            className="font-bold inline-block bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition"
          >
            مشاهدة المعرض كاملاً
          </Link>
        </div>{" "} */}
      </motion.section>
    </div>
  );
}
