"use client";

import { useMemo, useState } from "react";

import { courses } from "@/data/courses";
import CourseCard from "@/components/CourseCard";

export default function CoursesPage() {
  const categories = [
    "All Courses",
    ...new Set(
      courses.map((course) => course.category)
    ),
  ];

  const levels = [
    "All Levels",
    ...new Set(
      courses.map((course) => course.level)
    ),
  ];

  const [searchText, setSearchText] =
    useState("");

  const [selectedCategory, setSelectedCategory] =
    useState("All Courses");

  const [selectedLevel, setSelectedLevel] =
    useState("All Levels");

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesSearch =
        course.title
          .toLowerCase()
          .includes(
            searchText.toLowerCase()
          );

      const matchesCategory =
        selectedCategory === "All Courses"
          ? true
          : course.category ===
          selectedCategory;

      const matchesLevel =
        selectedLevel === "All Levels"
          ? true
          : course.level ===
          selectedLevel;

      return (
        matchesSearch &&
        matchesCategory &&
        matchesLevel
      );
    });
  }, [
    searchText,
    selectedCategory,
    selectedLevel,
  ]);

  return (
    <section className="section-padding">
      <div className="container-custom">
        <h1 className="section-title">
          Explore Courses
        </h1>

        <p className="section-subtitle">
          Discover courses that fit
          your learning goals.
        </p>

        {/* Search */}
        <div className="mb-10">
          <input
            type="text"
            placeholder="Search courses..."
            value={searchText}
            onChange={(e) =>
              setSearchText(e.target.value)
            }
            className="form-input"
          />
        </div>

        {/* Filters */}
        <div className="grid md:grid-cols-2 gap-4 mb-10">
          <select
            value={selectedCategory}
            onChange={(e) =>
              setSelectedCategory(
                e.target.value
              )
            }
            className="form-input"
          >
            {categories.map((category) => (
              <option
                key={category}
                value={category}
              >
                {category}
              </option>
            ))}
          </select>

          <select
            value={selectedLevel}
            onChange={(e) =>
              setSelectedLevel(
                e.target.value
              )
            }
            className="form-input"
          >
            {levels.map((level) => (
              <option
                key={level}
                value={level}
              >
                {level}
              </option>
            ))}
          </select>
        </div>

        {/* Reset Filters Button */}
        <div className="mb-6">
          <button
            onClick={() => {
              setSearchText("");
              setSelectedCategory("All Courses");
              setSelectedLevel("All Levels");
            }}
            className="btn-secondary"
          >
            Reset Filters
          </button>
        </div>

        {/* Results Counter */}
        <div className="mb-6">
          <p className="text-gray-600">
            Found{" "}
            <span className="font-bold">
              {filteredCourses.length}
            </span>{" "}
            course(s)
          </p>
        </div>

        {/* Empty State */}
        {filteredCourses.length === 0 ? (
          <div className="text-center py-20">
            <h3 className="text-2xl font-semibold">
              No Courses Found
            </h3>

            <p className="text-gray-500 mt-2">
              Try changing your search or
              filters.
            </p>
          </div>
        ) : (
          <div className="grid-cards">
            {filteredCourses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}