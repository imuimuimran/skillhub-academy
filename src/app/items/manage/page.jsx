import ProtectedRoute from "@/components/ProtectedRoute";

export default function ManageCoursePage() {
  return (
    <ProtectedRoute>

      <section className="section-padding">
        <div className="container-custom">

          <h1 className="section-title">
            Manage Courses
          </h1>

          <p className="section-subtitle">
            Protected page
          </p>

        </div>
      </section>

    </ProtectedRoute>
  );
}