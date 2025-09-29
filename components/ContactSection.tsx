"use client";

// import ContactMap from "./ContactMap";

// 👉 wrap Map component dynamically
import dynamic from "next/dynamic";
import Section_title from "./Section_title";
import { Phone } from "lucide-react";
const ContactMap = dynamic(() => import("../app/ContactMap"), {
  ssr: false, // ❌ disable server-side rendering
});

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 px-6 md:px-20 scroll-mt-20">
      <Section_title title="موقعنا" />
      <div className="mb-10" />

      <div className="flex flex-col md:flex-row gap-10 md:gap-20 justify-center items-center">
        {/* معلومات التواصل */}
        <div className="space-y-6 text-gray-700 text-lg">
          <p>
            📍 <span className="font-bold">العنوان:</span> طوسون، شارع أرض
            المحرقة، تقاطع شارع 16 مع 25
          </p>
          <p>
            📞 <span className="font-bold">الهاتف:</span> 01274964520
          </p>
          {/* <p>
            ⏰ <span className="font-bold">المواعيد:</span> مفتوح دائمًا
          </p> */}

          <a
            href="https://wa.me/201274964520"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 text-white px-6 py-3 rounded-xl shadow-md hover:bg-green-600 transition"
          >
            تواصل عبر واتساب
            <Phone size={24} className="inline-block mx-2" />
          </a>
        </div>

        {/* الخريطة */}
        <ContactMap lat={31.3008} lng={30.0613} zoom={15} />
      </div>
    </section>
  );
}
