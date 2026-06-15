"use client";

import { useEffect, useState } from "react";

import Link from "next/link";

import toast from "react-hot-toast";

import ProtectedRoute from "@/components/ProtectedRoute";

import {
  getStoredCourses,
  deleteCourse,
} from "@/utils/courseStorage";

export default function ManageCoursesPage() {
  const [courses, setCourses] =
    useState([]);

  useEffect(() => {
    setCourses(
      getStoredCourses()
    );
  }, []);

  const handleDelete = (id) => {
    const confirmed =
      window.confirm(
        "Are you sure you want to delete this course?"
      );

    if (!confirmed) return;

    deleteCourse(id);

    setCourses(
      getStoredCourses()
    );

    toast.success(
      "Course deleted successfully"
    );
  };

  return (
    <ProtectedRoute>
      <section className="section-padding">
        <div className="container-custom">

          <div className="flex justify-between items-center mb-10">

            <div>
              <h1 className="text-4xl font-bold">
                Manage Courses
              </h1>

              <p className="text-gray-500 mt-2">
                View and manage your added
                courses
              </p>
            </div>

            <Link
              href="/items/add"
              className="btn-primary"
            >
              Add Course
            </Link>

          </div>

          {courses.length === 0 ? (
            <div className="card-custom text-center py-16">

              <h2 className="text-2xl font-semibold">
                No Courses Found
              </h2>

              <p className="text-gray-500 mt-3">
                Add your first course to
                get started.
              </p>

            </div>
          ) : (
            <div className="grid-cards">

              {courses.map(
                (course) => (
                  <div
                    key={course.id}
                    className="card-custom"
                  >
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-52 object-cover rounded-lg"
                    />

                    <div className="mt-4">

                      <h3 className="text-xl font-bold">
                        {course.title}
                      </h3>

                      <p className="text-gray-500 mt-2 line-clamp-2">
                        {
                          course.description
                        }
                      </p>

                      <div className="flex justify-between mt-4">

                        <span className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                          {
                            course.level
                          }
                        </span>

                        <span className="font-semibold">
                          $
                          {
                            course.price
                          }
                        </span>

                      </div>

                      <div className="flex gap-3 mt-5">

                        <Link
                          href={`/items/${course.id}`}
                          className="flex-1 text-center border border-blue-600 text-blue-600 py-2 rounded-lg"
                        >
                          View
                        </Link>

                        <button
                          onClick={() =>
                            handleDelete(
                              course.id
                            )
                          }
                          className="flex-1 bg-red-500 text-white py-2 rounded-lg"
                        >
                          Delete
                        </button>

                      </div>

                    </div>
                  </div>
                )
              )}

            </div>
          )}

        </div>
      </section>
    </ProtectedRoute>
  );
}