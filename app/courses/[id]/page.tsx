"use client";

import React from "react";

import { courses } from "@/lib/utils";
import Image from "next/image";
import { useParams } from "next/navigation";

export default function Page() {
  const { id } = useParams();
  console.log({ id });
  const course = courses.find((item) => item?.id === id);

  return (
    <div className="max-w-5xl mx-auto  bg-gray-100 rounded-lg shadow-md my-10">
      <Image
        src={course?.image || "/placeholder.png"}
        alt={course?.title || "Course Image"}
        width={800}
        height={400}
        className="w-full h-[50vh] md:h-[80vh] object-contain rounded-lg mb-6"
      />

      <div className=" mx-auto p-4 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center my-8">{course?.title}</h1>
        <p className="text-lg mb-4 text-gray-700 whitespace-pre-line">
          {course?.full_description
            ? course?.full_description
            : course?.description}
        </p>
        <p className="text-red-700 text-lg font-medium mb-2">
          السعر: {course?.price}{" "}
          <span className="line-through"> {course?.old_price}</span>{" "}
        </p>{" "}
        <div className="grid grid-cols-3 gap-4 mt-6"></div>
        {/* <div className="flex items-center space-x-2">
          <span className="text-blue-600">الفئة العمرية:</span>
          <span>{course?.age}</span>
        </div> */}
        {/* <div className="flex items-center space-x-2">
          <span className="text-blue-600">الوقت:</span>
          <span>{course?.time}</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-blue-600">السعة:</span>
          <span>{course?.capacity}</span>
        </div> */}
      </div>
    </div>
  );
}
