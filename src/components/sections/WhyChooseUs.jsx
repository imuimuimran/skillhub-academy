import {
  FaCertificate,
  FaLaptopCode,
  FaUsers,
  FaClock,
} from "react-icons/fa";

export default function WhyChooseUs() {
  const features = [
    {
      title: "Expert Instructors",
      icon: <FaUsers />,
    },
    {
      title: "Flexible Learning",
      icon: <FaClock />,
    },
    {
      title: "Certification",
      icon: <FaCertificate />,
    },
    {
      title: "Project Based",
      icon: <FaLaptopCode />,
    },
  ];

  return (
    <section className="bg-white section-padding">
      <div className="container-custom">
        <h2 className="section-title">
          Why Choose Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="card-custom text-center"
            >
              <div className="text-4xl text-blue-600 flex justify-center mb-4">
                {feature.icon}
              </div>

              <h3 className="font-semibold">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}