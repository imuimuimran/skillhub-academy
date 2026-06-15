import Link from "next/link";

export default function AboutPage() {
  return (
    <div>

      {/* Hero Section */}

      <section className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
        <div className="container-custom py-24 text-center">

          <h1 className="text-5xl font-bold">
            About SkillHub Academy
          </h1>

          <p className="max-w-3xl mx-auto mt-6 text-lg">
            SkillHub Academy is a modern online learning
            platform designed to help students gain
            practical skills through high-quality courses
            and expert instructors.
          </p>

        </div>

        {/* <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
            alt="Students Learning"
            className="rounded-2xl max-w-3xl w-full"
          />
        </div> */}

        {/* Space for overlapping image */}
        {/* <div className="h-24"></div> */}
      </section>

      {/* Mission */}

      <section className="section-padding">
        <div className="container-custom">

          <div className="max-w-4xl mx-auto text-center">

            <h2 className="section-title">
              Our Mission
            </h2>

            <p className="mt-6 text-gray-600 leading-8">
              Our mission is to make quality education
              accessible to everyone. We believe learning
              should be flexible, affordable, and focused
              on real-world skills that help learners
              succeed in their careers.
            </p>

          </div>

        </div>
      </section>

      {/* Why Choose Us */}

      <section className="bg-slate-50 section-padding">
        <div className="container-custom">

          <h2 className="section-title">
            Why Choose SkillHub Academy
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-12">

            <div className="card-custom">
              <h3 className="text-xl font-semibold">
                Expert Instructors
              </h3>

              <p className="mt-3 text-gray-600">
                Learn from professionals with real-world
                industry experience.
              </p>
            </div>

            <div className="card-custom">
              <h3 className="text-xl font-semibold">
                Practical Learning
              </h3>

              <p className="mt-3 text-gray-600">
                Work on projects and gain hands-on
                experience.
              </p>
            </div>

            <div className="card-custom">
              <h3 className="text-xl font-semibold">
                Career Growth
              </h3>

              <p className="mt-3 text-gray-600">
                Build job-ready skills and advance your
                career.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Vision */}

      <section className="section-padding">
        <div className="container-custom">

          <div className="max-w-4xl mx-auto text-center">

            <h2 className="section-title">
              Our Vision
            </h2>

            <p className="mt-6 text-gray-600 leading-8">
              We envision a future where anyone,
              anywhere, can access world-class education
              and unlock opportunities through
              continuous learning and innovation.
            </p>

          </div>

        </div>
      </section>

      {/* Statistics */}

      <section className="bg-blue-600 text-white py-20">
        <div className="container-custom">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

            <div>
              <h3 className="text-4xl font-bold">
                1000+
              </h3>
              <p>Students</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold">
                150+
              </h3>
              <p>Courses</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold">
                25+
              </h3>
              <p>Mentors</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold">
                95%
              </h3>
              <p>Success Rate</p>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}

      <section className="section-padding">
        <div className="container-custom">

          <div className="bg-slate-900 text-white rounded-3xl p-12 text-center">

            <h2 className="text-4xl font-bold">
              Start Your Learning Journey Today
            </h2>

            <p className="mt-4">
              Join thousands of learners building their
              future with SkillHub Academy.
            </p>

            <Link
              href="/register"
              className="inline-block mt-6 bg-blue-600 px-6 py-3 rounded-xl"
            >
              Join Now
            </Link>

          </div>

        </div>
      </section>

    </div>
  );
}