export default function FeaturedCourses() {
  const courses = [
    "Web Development",
    "React Mastery",
    "Next.js Bootcamp",
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        <h2 className="section-title">
          Featured Courses
        </h2>

        <p className="section-subtitle">
          Most popular courses among students.
        </p>

        <div className="grid-cards mt-12">
          {courses.map((course, index) => (
            <div
              key={index}
              className="card-custom"
            >
              <div className="h-40 rounded-lg bg-slate-200 mb-4"></div>

              <h3 className="text-xl font-semibold">
                {course}
              </h3>

              <p className="text-gray-500 mt-2">
                Learn practical skills and
                build real-world projects.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}