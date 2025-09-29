import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  Book,
  Users,
  Brain,
  Activity,
  Pencil,
  BookOpenText,
} from "lucide-react";
import Section_title from "./Section_title";

const services = [
  {
    icon: <Book className="w-8 h-8 mx-auto mb-4 text-blue-500" />,
    title: "تأسيس للمدارس",
    desc: "لغات / أزهري / دولي",
  },
  {
    icon: <Pencil className="w-8 h-8 mx-auto mb-4 text-yellow-500" />,
    title: "كورسات",
    desc: "فونتكس / نور بيان / أونلاين",
  },
  {
    icon: <Users className="w-8 h-8 mx-auto mb-4 text-green-500" />,
    title: "جلسات",
    desc: "تخاطب وتعديل سلوك",
  },
  {
    icon: <Activity className="w-8 h-8 mx-auto mb-4 text-red-500" />,
    title: "مهارات",
    desc: "تنمية وصعوبات تعلم",
  },
  {
    icon: <Brain className="w-8 h-8 mx-auto mb-4 text-purple-500" />,
    title: "اختبارات ذكاء",
    desc: "IQ Test للأطفال",
  },
  {
    icon: <BookOpenText className="w-8 h-8 mx-auto mb-4 text-teal-500" />,
    title: "أنشطة إضافية",
    desc: "تعليم رسم / تحفيظ قرآن / استضافة",
  },
];
export default function Services() {
  return (
    <section id="services" className="  px-[5%] scroll-mt-20">
      <Section_title title="خدماتنا" />
      <p className="text-2xl text-center mb-12 text-gray-600 max-w-2xl mx-auto">
        نقدم مجموعة متنوعة من الخدمات التعليمية والترفيهية.
      </p>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <Card className="shadow-sm hover:shadow-md transition rounded-2xl">
              <CardContent className="p-6 text-center">
                {service.icon}
                <h4 className="font-bold text-xl mb-2">{service.title}</h4>
                <p className="text-gray-600 text-lg">{service.desc}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
