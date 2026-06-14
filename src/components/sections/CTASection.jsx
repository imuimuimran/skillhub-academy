import Link from "next/link";

export default function CTASection() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="bg-slate-900 text-white rounded-3xl p-12 text-center">
          <h2 className="text-4xl font-bold">
            Ready to Start Learning?
          </h2>

          <p className="mt-4">
            Join thousands of students today.
          </p>

          <Link
            href="/register"
            className="inline-block mt-6 bg-blue-600 px-6 py-3 rounded-xl"
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
}