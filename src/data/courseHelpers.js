import { courses } from "./courses";

export const getAllCourses = () => {
  return courses;
};

export const getCourseById = (id) => {
  return courses.find(
    (course) => course.id === id
  );
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