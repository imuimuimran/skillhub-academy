import { courses } from "./courses";
import {
  getStoredCourses,
} from "@/utils/courseStorage";

export const getAllCourses = () => {
  return courses;
};

// export const getCourseById = (id) => {
//   return courses.find(
//     (course) => course.id === id
//   );
// };

export const getCourseById = (
  id
) => {
  const staticCourse =
    courses.find(
      (course) =>
        course.id === id
    );

  if (staticCourse)
    return staticCourse;

  if (
    typeof window !==
    "undefined"
  ) {
    const storedCourses =
      getStoredCourses();

    return storedCourses.find(
      (course) =>
        course.id === id
    );
  }

  return null;
};

export const getRelatedCourses = (
  category,
  currentId
) => {
  return courses.filter(
    (course) =>
      course.category === category &&
      course.id !== currentId
  );
};