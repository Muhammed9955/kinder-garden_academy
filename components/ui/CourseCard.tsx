import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function CourseCard({ course }: { course: { id: string; title: string; desc: string } }) {
  return (
    <Card className="hover:shadow-lg transition">
      <CardContent className="p-4">
        <h3 className="text-lg font-bold mb-2">{course.title}</h3>
        <p className="text-sm mb-4">{course.desc}</p>
        <Link href={`/courses/${course.id}`} className="text-blue-600 hover:underline">
          تفاصيل الكورس →
        </Link>
      </CardContent>
    </Card>
  );
}
