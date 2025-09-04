"use client";

import ContactMap from "./ContactMap";

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 px-6 md:px-20 bg-gray-50">
      <h3 className="text-2xl font-bold text-center mb-12">تواصل معنا</h3>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* معلومات التواصل */}
        <div className="space-y-6 text-gray-700 text-lg">
          <p>
            📍 <span className="font-bold">العنوان:</span> طوسون، شارع أرض
            المحرقة، تقاطع شارع 16 مع 25
          </p>
          <p>
            📞 <span className="font-bold">الهاتف:</span> 01274964520
          </p>
          <p>
            ⏰ <span className="font-bold">المواعيد:</span> مفتوح دائمًا
          </p>

          <a
            href="https://wa.me/201274964520"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 text-white px-6 py-3 rounded-xl shadow-md hover:bg-green-600 transition"
          >
            تواصل عبر واتساب
          </a>
        </div>

        {/* الخريطة */}
        <ContactMap lat={31.3008} lng={30.0613} zoom={15} />
      </div>
    </section>
  );
}
