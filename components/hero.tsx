"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-blue-50 to-blue-200 px-6 md:px-20 scroll-mt-20">
      <div className="grid md:grid-cols-2 gap-10 items-center mb-20 ">
        {/* النص */}
        <div className="text-right space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-snug text-gray-800">
            ✨ نضع لمسة سحرية <br /> في حياة{" "}
            <span className="text-blue-600">أطفالنا</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-lg ml-auto">
            الأكاديمية هي أول خطوة لطفلك نحو التعليم. مكتبة التعلم لدينا مليئة
            بالأنشطة الممتعة التي تساعد الأطفال على النمو في بيئة محفزة.
          </p>
          <div className="flex gap-4 ">
            <Button className="bg-blue-600 text-white text-2xl p-6 cursor-pointer">
              <Link className="" href="#contact">
                سجّل الآن
              </Link>
            </Button>
            <Button variant="outline" className="text-2xl p-6 cursor-pointer">
              <Link className="hover:text-blue-600" href="#about">
                شاهد قصتنا ▶
              </Link>
            </Button>
          </div>
        </div>

        {/* الصورة */}
        <div className="relative flex justify-center -mt-14">
          <Image
            src="/images/kid.png"
            alt="طفل"
            width={400}
            height={400}
            className="relative z-10"
          />

          {/* أيقونات إضافية حول الصورة */}
          <div className="absolute top-20 right-50 bg-white shadow-md rounded-xl px-3 py-2 text-lg">
            🎮 ألعاب ممتعة
          </div>
          <div className="absolute bottom-10 left-[60%] md:left-5 bg-white shadow-md rounded-xl px-3 py-2 text-lg">
            📚 محتوى تعليمي
          </div>
        </div>
      </div>

      {/* SVG Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none  ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full h-32 rotate-180"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,224L30,202.7C60,181,120,139,180,128C240,117,300,139,360,165.3C420,192,480,224,540,218.7C600,213,660,171,720,154.7C780,139,840,149,900,160C960,171,1020,181,1080,165.3C1140,149,1200,107,1260,96C1320,85,1380,107,1410,117.3L1440,128L1440,0L0,0Z"
          ></path>
        </svg>
      </div>
    </section>
  );
}
