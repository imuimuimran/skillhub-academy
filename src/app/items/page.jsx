// export default function Courses() {
//   return (
//     <div className="container-custom py-20">
//       Courses Page
//     </div>
//   );
// }


import { courses } from "@/data/courses";
import CourseCard from "@/components/CourseCard";

export default function CoursesPage() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <h1 className="section-title">
          All Courses
        </h1>

        <div className="grid-cards mt-12">
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
            />
          ))}
        </div>
      </div>
    </section>
  );
}