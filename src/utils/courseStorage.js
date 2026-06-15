export const getStoredCourses = () => {
  if (typeof window === "undefined") {
    return [];
  }

  const storedCourses =
    localStorage.getItem("userCourses");

  return storedCourses
    ? JSON.parse(storedCourses)
    : [];
};

export const saveCourse = (course) => {
  const existingCourses =
    getStoredCourses();

  const updatedCourses = [
    ...existingCourses,
    course,
  ];

  localStorage.setItem(
    "userCourses",
    JSON.stringify(updatedCourses)
  );
};

export const deleteCourse = (id) => {
  const existingCourses =
    getStoredCourses();

  const remainingCourses =
    existingCourses.filter(
      (course) =>
        course.id !== id
    );

  localStorage.setItem(
    "userCourses",
    JSON.stringify(remainingCourses)
  );
};