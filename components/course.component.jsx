import React from "react";
import Image from "next/image";
import { Baby, Clock, Users } from "lucide-react";

export default function Course({ course }) {
  return (
    <div
      key={course.id}
      className="bg-white rounded-2xl  border overflow-hidden relative pb-2 transform transition-transform duration-300 hover:scale-105"
    >
      {/* الصورة */}
      <div className="relative h-72 w-full bg-gray-100">
        <Image
          src={course.image}
          alt={course.title}
          fill
          className="object-fit"
        />
        {/* السعر */}
        {/* <span className="absolute bottom-3 left-3 bg-red-600 text-white text-lg font-bold px-4 py-2 rounded-full shadow-lg">
          {course.price} <span className="">ج</span>
        </span> */}
      </div>

      {/* المحتوى */}
      <div className="p-4 text-right">
        <h4 className="text-2xl font-bold">{course.title}</h4>
        <p className="text-red-700 text-lg font-medium mb-2">
          {course.price}{" "}
          <span className="line-through">{course.old_price}</span>{" "}
        </p>
        <p className=" text-lg font-medium mb-2 text-gray-600">
          {course.description}
        </p>

        {/* التفاصيل */}
        {/* <div className="grid grid-cols-3 divide-x border-t pt-4 text-lg">
          <div className="flex flex-col items-center px-2">
            <Baby className="w-6 h-6 text-blue-600 mb-1" />
            <p className="font-semibold text-blue-600">العمر</p>
            <p className="text-blue-600">{course.age}</p>
          </div>
          <div className="flex flex-col items-center px-2">
            <Clock className="w-6 h-6 text-orange-700 mb-1" />
            <p className="font-semibold text-orange-800">الوقت</p>
            <p className="text-orange-700 ">{course.time}</p>
          </div>
          <div className="flex flex-col items-center px-2">
            <Users className="w-6 h-6 text-gray-600 mb-1" />
            <p className="font-semibold text-gray-600">السعة</p>
            <p className="text-gray-600">{course.capacity}</p>
          </div>
        </div> */}
      </div>
    </div>
  );
}
