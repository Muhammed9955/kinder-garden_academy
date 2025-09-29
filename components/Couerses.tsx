// components/Courses.tsx
import { motion } from "framer-motion";
import Image from "next/image";
import { Baby, Clock, Users } from "lucide-react"; // 👈 icons

const courses = [
  {
    id: 1,
    title: "فصل الرياضيات",
    price: 60,
    status: "التسجيل مفتوح",
    description:
      "اختيار معلمين محترفين و متميزين في تعليم و التواصل مع الأطفال",
    age: "2–5 سنوات",
    time: "10 صباحاً – 12 ظهراً",
    capacity: "10 أطفال",
    image: "/images/math.webp",
  },
  {
    id: 2,
    title: "فصل القرآن",
    price: 50,
    status: "التسجيل مفتوح",
    description:
      "اختيار معلمين محترفين و متميزين في تعليم و التواصل مع الأطفال",
    age: "4–6 سنوات",
    time: "12 – 2 ظهراً",
    capacity: "8 أطفال",
    image: "/images/quran-leeson.webp",
  },
  {
    id: 3,
    title: "فصل الرسم",
    price: 32,
    status: "التسجيل مفتوح",
    description:
      "اختيار معلمين محترفين و متميزين في تعليم و التواصل مع الأطفال",
    age: "2–4 سنوات",
    time: "9 – 11 صباحاً",
    capacity: "15 طفل",
    image: "/images/drawing.jpg",
  },
];

export default function Courses() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      dir="rtl"
      className=""
    >
      <div
        id="kids-courses"
        className="container mx-auto  text-center p-[5%] scroll-mt-20"
      >
        <h2 className="text-orange-500 font-semibold uppercase">الكورسات</h2>
        <h3 className="text-3xl font-bold mb-10">أشهر الفصول لدينا</h3>

        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden relative"
            >
              {/* الصورة */}
              <div className="relative h-72 w-full">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover"
                />
                {/* السعر */}
                <span className="absolute bottom-3 left-3 bg-red-600 text-white text-lg font-bold px-4 py-2 rounded-full shadow-lg">
                  {course.price} <span className="">ج</span>
                </span>
              </div>

              {/* المحتوى */}
              <div className="p-6 text-right">
                <h4 className="text-xl font-bold">{course.title}</h4>
                <p className="text-green-600 text-lg font-medium mb-2">
                  {course.status}
                </p>

                {/* التفاصيل */}
                <div className="grid grid-cols-3 divide-x border-t pt-4 text-lg">
                  <div className="flex flex-col items-center px-2">
                    <Baby className="w-6 h-6 text-blue-600 mb-1" />
                    <p className="font-semibold text-blue-600">العمر</p>
                    <p className="text-blue-600">{course.age}</p>
                  </div>
                  <div className="flex flex-col items-center px-2">
                    <Clock className="w-6 h-6 text-orange-700 mb-1" />
                    <p className="font-semibold text-orange-800">الوقت</p>
                    <p className="text-orange-700">{course.time}</p>
                  </div>
                  <div className="flex flex-col items-center px-2">
                    <Users className="w-6 h-6 text-gray-600 mb-1" />
                    <p className="font-semibold text-gray-600">السعة</p>
                    <p className="text-gray-600">{course.capacity}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
