export default function CategoriesSection() {
  const categories = [
    "Web Development",
    "Artificial Intelligence",
    "UI/UX Design",
    "Data Science",
    "Cyber Security",
    "Cloud Computing",
  ];

  return (
    <section className="section-padding bg-slate-50">
      <div className="container-custom">
        <h2 className="section-title">
          Learning Categories
        </h2>

        <div className="grid-cards mt-12">
          {categories.map((category) => (
            <div
              key={category}
              className="card-custom text-center"
            >
              <h3 className="font-semibold">
                {category}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}