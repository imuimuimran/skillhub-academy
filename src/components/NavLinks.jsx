"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({
  href,
  children,
}) {
  const pathname =
    usePathname();

  const active =
    pathname === href;

  return (
    <Link
      href={href}
      className={`font-medium transition ${
        active
          ? "text-blue-600"
          : "text-gray-700 hover:text-blue-600"
      }`}
    >
      {children}
    </Link>
  );
}