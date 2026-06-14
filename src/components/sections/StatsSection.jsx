export default function StatsSection() {
  const stats = [
    {
      number: "1000+",
      title: "Students",
    },
    {
      number: "150+",
      title: "Courses",
    },
    {
      number: "25+",
      title: "Mentors",
    },
    {
      number: "95%",
      title: "Success Rate",
    },
  ];

  return (
    <section className="bg-blue-600 text-white py-20">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.title}>
              <h3 className="text-4xl font-bold">
                {stat.number}
              </h3>

              <p className="mt-2">
                {stat.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}