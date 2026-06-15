// export default function FeaturedCourses() {
//   const courses = [
//     "Web Development",
//     "React Mastery",
//     "Next.js Bootcamp",
//   ];

//   return (
//     <section className="section-padding">
//       <div className="container-custom">
//         <h2 className="section-title">
//           Featured Courses
//         </h2>

//         <p className="section-subtitle">
//           Most popular courses among students.
//         </p>

//         <div className="grid-cards mt-12">
//           {courses.map((course, index) => (
//             <div
//               key={index}
//               className="card-custom"
//             >
//               <div className="h-40 rounded-lg bg-slate-200 mb-4"></div>

//               <h3 className="text-xl font-semibold">
//                 {course}
//               </h3>

//               <p className="text-gray-500 mt-2">
//                 Learn practical skills and
//                 build real-world projects.
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



export default function FeaturedCourses() {
  const courses = [
    {
      id: 1,
      title: "Web Development",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600",
      description: "Learn HTML, CSS, JavaScript, React and Next.js from scratch.",
    },
    {
      id: 2,
      title: "React Mastery",
      image:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600",
      description: "Master React hooks, routing, state management and best practices.",
    },
    {
      id: 3,
      title: "Next.js Bootcamp",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600",
      description: "Build scalable full-stack applications using Next.js.",
    },
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
          {courses.map((course) => (
            <div
              key={course.id}
              className="card-custom"
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />

              <h3 className="text-xl font-semibold">
                {course.title}
              </h3>

              <p className="text-gray-500 mt-2">
                {course.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}