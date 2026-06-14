export default function TestimonialsSection() {
  const testimonials = [
    "Amazing learning experience!",
    "The instructors are fantastic.",
    "Helped me land my first job.",
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        <h2 className="section-title">
          Student Testimonials
        </h2>

        <div className="grid-cards mt-12">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="card-custom"
            >
              <p>"{item}"</p>

              <h4 className="mt-4 font-semibold">
                Student {idx + 1}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}