import { blue_colors } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import Section_title from "./Section_title";

const days = [
  { day: "الأحد", hours: "7:00 ص - 7:00 م" },
  { day: "الإثنين", hours: "7:00 ص - 7:00 م" },
  { day: "الثلاثاء", hours: "7:00 ص - 7:00 م" },
  { day: "الأربعاء", hours: "7:00 ص - 7:00 م" },
  { day: "الخميس", hours: "7:00 ص - 7:00 م" },
  { day: "الجمعة", hours: "مغلق" },
  { day: "السبت", hours: "مغلق" },
];
export default function Working_hours() {
  return (
    <div id="working-hours" className=" scroll-mt-20">
      <Section_title title="مواعيد العمل" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center my-4 mt-10">
        <div className="cols-1">
          {days.map((dayInfo) => (
            <div key={dayInfo.day}>
              <div
                className={`bg-gradient-to-r from-blue-800 to-blue-500 p-4 rounded-lg mb-3 flex justify-between items-center`}
              >
                <p className="text-white text-xl font-bold">{dayInfo.day}</p>
                <p className="text-white font-bold">{dayInfo.hours}</p>
              </div>
            </div>
          ))}
        </div>

        <div className=" rounded-r-4xl w-full h-[30vh] md:h-[70vh] overflow-hidden  col-span-2">
          <Image
            src={`/images/gallery-2.jpg`}
            alt={`صورة ${1 + 1}`}
            width={400}
            height={300}
            className="w-full object-cover "
          />
        </div>
      </div>
    </div>
  );
}
