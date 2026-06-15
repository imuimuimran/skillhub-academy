"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import toast from "react-hot-toast";

import ProtectedRoute from "@/components/ProtectedRoute";

import { saveCourse } from "@/utils/courseStorage";

export default function AddCoursePage() {
  const router = useRouter();

  const [loading, setLoading] =
    useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    const form = e.target;

    const course = {
      id: Date.now().toString(),

      title: form.title.value,

      description:
        form.description.value,

      fullDescription:
        form.fullDescription.value,

      category:
        form.category.value,

      level:
        form.level.value,

      instructor:
        form.instructor.value,

      duration:
        form.duration.value,

      price:
        Number(form.price.value),

      image:
        form.image.value ||
        "https://via.placeholder.com/600x400",
    };

    saveCourse(course);

    toast.success(
      "Course Added Successfully!"
    );

    form.reset();

    setLoading(false);

    router.push(
      "/items/manage"
    );
  };

  return (
    <ProtectedRoute>
      <section className="section-padding">
        <div className="container-custom">

          <div className="max-w-3xl mx-auto card-custom">

            <h1 className="text-3xl font-bold mb-8">
              Add New Course
            </h1>

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              <input
                name="title"
                required
                placeholder="Course Title"
                className="form-input"
              />

              <textarea
                name="description"
                required
                placeholder="Short Description"
                className="form-input"
              />

              <textarea
                name="fullDescription"
                required
                placeholder="Full Description"
                className="form-input"
                rows={5}
              />

              <input
                name="instructor"
                required
                placeholder="Instructor"
                className="form-input"
              />

              <input
                name="duration"
                required
                placeholder="Duration"
                className="form-input"
              />

              <input
                name="price"
                type="number"
                required
                placeholder="Price"
                className="form-input"
              />

              <input
                name="image"
                placeholder="Image URL"
                className="form-input"
              />

              <select
                name="category"
                className="form-input"
                required
              >
                <option value="">
                  Select Category
                </option>

                <option>
                  Web Development
                </option>

                <option>
                  UI/UX
                </option>

                <option>
                  Data Science
                </option>

                <option>
                  Artificial Intelligence
                </option>

                <option>
                  Cyber Security
                </option>

                <option>
                  Cloud Computing
                </option>
              </select>

              <select
                name="level"
                className="form-input"
                required
              >
                <option value="">
                  Select Level
                </option>

                <option>
                  Beginner
                </option>

                <option>
                  Intermediate
                </option>

                <option>
                  Advanced
                </option>
              </select>

              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full"
              >
                {loading
                  ? "Adding..."
                  : "Add Course"}
              </button>

            </form>

          </div>

        </div>
      </section>
    </ProtectedRoute>
  );
}