"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

import { useAuth } from "@/context/AuthContext";

export default function RegisterPage() {
  const {
    createUser,
    updateUserProfile,
  } = useAuth();

  const router = useRouter();

  const [loading, setLoading] =
    useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password =
      form.password.value;

    // Password Validation

    if (password.length < 6) {
      return toast.error(
        "Password must be at least 6 characters"
      );
    }

    if (!/[A-Z]/.test(password)) {
      return toast.error(
        "Password must contain one uppercase letter"
      );
    }

    if (
      !/[!@#$%^&*(),.?":{}|<>]/.test(
        password
      )
    ) {
      return toast.error(
        "Password must contain one special character"
      );
    }

    try {
      setLoading(true);

      await createUser(
        email,
        password
      );

      await updateUserProfile(
        name,
        photo
      );

      // await reload(auth.currentUser);

      toast.success(
        "Registration successful!"
      );

      router.push("/");
    } catch (error) {
      if (
        error.code ===
        "auth/email-already-in-use"
      ) {
        toast.error(
          "Email already exists"
        );
      } else {
        toast.error(
          "Registration failed"
        );
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="section-padding">
      <div className="container-custom">

        <div className="max-w-md mx-auto card-custom">

          <h1 className="text-3xl font-bold text-center">
            Register
          </h1>

          <p className="text-center text-gray-500 mt-2">
            Create your SkillHub account
          </p>

          <form
            onSubmit={handleRegister}
            className="space-y-5 mt-8"
          >

            <div>
              <label className="block mb-2">
                Name
              </label>

              <input
                type="text"
                name="name"
                required
                className="form-input"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block mb-2">
                Photo URL
              </label>

              <input
                type="text"
                name="photo"
                className="form-input"
                placeholder="Photo URL"
              />
            </div>

            <div>
              <label className="block mb-2">
                Email
              </label>

              <input
                type="email"
                name="email"
                required
                className="form-input"
                placeholder="Email"
              />
            </div>

            <div>
              <label className="block mb-2">
                Password
              </label>

              <input
                type="password"
                name="password"
                required
                className="form-input"
                placeholder="Password"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full"
            >
              {loading
                ? "Creating Account..."
                : "Register"}
            </button>

          </form>

          <div className="mt-6 text-center">

            <p>
              Already have an account?{" "}

              <Link
                href="/login"
                className="text-blue-600"
              >
                Login
              </Link>

            </p>

          </div>

        </div>

      </div>
    </section>
  );
}