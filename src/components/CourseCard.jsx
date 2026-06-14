import Link from "next/link";

export default function CourseCard({
  course,
}) {
  return (
    <div className="card-custom">
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
          {course.description}
        </p>

        <div className="flex justify-between mt-4 text-sm">
          <span>
            {course.category}
          </span>

          <span>
            ${course.price}
          </span>
        </div>

        <Link
          href={`/items/${course.id}`}
          className="btn-primary inline-block mt-4"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}