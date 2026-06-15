import Link from "next/link";

import {
    getCourseById,
    getRelatedCourses,
} from "@/data/courseHelpers";

import CourseCard from "@/components/CourseCard";

export default async function CourseDetailsPage({
    params,
}) {
    const { id } = await params;
    const course = getCourseById(
        id
    );

    if (!course) {
        return (
            <div className="container-custom py-20 text-center">
                <h1 className="text-3xl font-bold">
                    Course Not Found
                </h1>

                <Link
                    href="/items"
                    className="btn-primary inline-block mt-6"
                >
                    Back to Courses
                </Link>
            </div>
        );
    }

    const relatedCourses =
        getRelatedCourses(
            course.category,
            course.id
        );

    return (
        <section className="section-padding">
            <div className="container-custom">

                <Link
                    href="/items"
                    className="btn-secondary inline-block mb-8"
                >
                    ← Back to Courses
                </Link>

                <div className="grid lg:grid-cols-2 gap-10">

                    <img
                        src={course.image}
                        alt={course.title}
                        className="w-full rounded-xl"
                    />

                    <div>
                        <h1 className="text-4xl font-bold">
                            {course.title}
                        </h1>

                        <p className="mt-4 text-gray-600">
                            {course.fullDescription}
                        </p>

                        <div className="mt-8 space-y-3">

                            <p>
                                <strong>Instructor:</strong>{" "}
                                {course.instructor}
                            </p>

                            <p>
                                <strong>Category:</strong>{" "}
                                {course.category}
                            </p>

                            <p>
                                <strong>Level:</strong>{" "}
                                {course.level}
                            </p>

                            <p>
                                <strong>Duration:</strong>{" "}
                                {course.duration}
                            </p>

                            <p>
                                <strong>Price:</strong> $
                                {course.price}
                            </p>

                        </div>
                    </div>

                </div>

                {relatedCourses.length > 0 && (
                    <>
                        <h2 className="text-3xl font-bold mt-20 mb-8">
                            Related Courses
                        </h2>

                        <div className="grid-cards">
                            {relatedCourses.map(
                                (relatedCourse) => (
                                    <CourseCard
                                        key={relatedCourse.id}
                                        course={relatedCourse}
                                    />
                                )
                            )}
                        </div>
                    </>
                )}

            </div>
        </section>
    );
}