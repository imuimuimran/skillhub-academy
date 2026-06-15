import ProtectedRoute from "@/components/ProtectedRoute";

export default function AddCoursePage() {
  return (
    <ProtectedRoute>

      <section className="section-padding">
        <div className="container-custom">

          <h1 className="section-title">
            Add New Course
          </h1>

          <p className="section-subtitle">
            Protected page
          </p>

        </div>
      </section>

    </ProtectedRoute>
  );
}