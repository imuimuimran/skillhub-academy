import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">

      <div className="text-center">

        <h1 className="text-6xl font-bold">
          404
        </h1>

        <p className="mt-4 text-gray-500">
          Page not found
        </p>

        <Link
          href="/"
          className="btn-primary inline-block mt-6"
        >
          Back Home
        </Link>

      </div>

    </div>
  );
}