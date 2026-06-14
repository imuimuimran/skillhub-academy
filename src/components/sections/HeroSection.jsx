import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
      <div className="container-custom py-24">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Discover Skills That Shape Your Future
          </h1>

          <p className="mt-6 text-lg md:text-xl opacity-90">
            Learn from industry experts and build
            career-ready skills through modern,
            practical courses.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/items"
              className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold"
            >
              Explore Courses
            </Link>

            <Link
              href="/register"
              className="border border-white px-6 py-3 rounded-xl font-semibold"
            >
              Start Learning
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}