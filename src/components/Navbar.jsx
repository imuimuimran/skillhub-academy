"use client";

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useAuth } from "@/context/AuthContext";

export default function Navbar() {
  const { user, logoutUser } = useAuth();

  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] =
    useState(false);

  const handleLogout = async () => {
    try {
      await logoutUser();
    } catch (error) {
      console.log(error);
    }
  };

  const navLinks = (
    <>
      <Link href="/">Home</Link>

      <Link href="/items">Courses</Link>

      <Link href="/about">About</Link>
    </>
  );

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          
          {/* Logo */}

          <Link
            href="/"
            className="text-2xl font-bold text-blue-600"
          >
            SkillHub
          </Link>

          {/* Desktop Menu */}

          <nav className="hidden md:flex gap-6 items-center">
            {navLinks}

            {!user && (
              <>
                <Link href="/login">
                  Login
                </Link>

                <Link
                  href="/register"
                  className="btn-primary"
                >
                  Register
                </Link>
              </>
            )}

            {user && (
              <div className="relative">
                <button
                  onClick={() =>
                    setDropdownOpen(
                      !dropdownOpen
                    )
                  }
                  className="flex items-center gap-2"
                >
                  <img
                    src={
                      user.photoURL ||
                      "https://i.ibb.co/7yWsP6G/user.png"
                    }
                    alt="profile"
                    className="w-10 h-10 rounded-full"
                  />
                </button>

                {dropdownOpen && (
                  <div className="absolute right-0 mt-3 w-60 bg-white border rounded-xl shadow-lg p-4">
                    <h3 className="font-semibold">
                      {user.displayName ||
                        "User"}
                    </h3>

                    <p className="text-sm text-gray-500 mb-3">
                      {user.email}
                    </p>

                    <div className="flex flex-col gap-2">
                      <Link
                        href="/items/add"
                        className="hover:text-blue-600"
                      >
                        Add Course
                      </Link>

                      <Link
                        href="/items/manage"
                        className="hover:text-blue-600"
                      >
                        Manage Courses
                      </Link>

                      <button
                        onClick={handleLogout}
                        className="text-left text-red-500"
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </nav>

          {/* Mobile Menu Button */}

          <button
            onClick={() =>
              setMenuOpen(!menuOpen)
            }
            className="md:hidden"
          >
            {menuOpen ? (
              <FaTimes size={24} />
            ) : (
              <FaBars size={24} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}

        {menuOpen && (
          <div className="md:hidden pb-4 flex flex-col gap-4">
            {navLinks}

            {!user && (
              <>
                <Link href="/login">
                  Login
                </Link>

                <Link href="/register">
                  Register
                </Link>
              </>
            )}

            {user && (
              <>
                <Link href="/items/add">
                  Add Course
                </Link>

                <Link href="/items/manage">
                  Manage Courses
                </Link>

                <button
                  onClick={handleLogout}
                  className="text-left text-red-500"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </header>
  );
}