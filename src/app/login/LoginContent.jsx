"use client";

import { useState } from "react";
import { useRouter, useSearchParams, } from "next/navigation";

import toast from "react-hot-toast";

import { FcGoogle } from "react-icons/fc";

import { useAuth } from "@/context/AuthContext";

import Link from "next/link";

export default function LoginPage() {
  const {
    loginUser,
    googleLogin,
  } = useAuth();

  const router = useRouter();

  const [loading, setLoading] =
    useState(false);

  const searchParams =
      useSearchParams();

    const redirectPath =
      searchParams.get(
        "redirect"
      ) || "/";

  const handleLogin = async (e) => {
    e.preventDefault();

    const form = e.target;

    const email = form.email.value;
    
    const password =
      form.password.value;

    try {
      setLoading(true);

      await loginUser(
        email,
        password
      );

      toast.success(
        "Login successful!"
      );

      router.push(redirectPath);
    } catch (error) {
      if (
        error.code ===
        "auth/invalid-credential"
      ) {
        toast.error(
          "Invalid email or password"
        );
      } else {
        toast.error(
          "Login failed"
        );
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin =
    async () => {
      try {
        setLoading(true);

        await googleLogin();

        toast.success(
          "Google Login Successful!"
        );

        router.push(redirectPath);
      } catch (error) {
        if (
          error.code ===
          "auth/invalid-credential"
        ) {
          toast.error(
            "Invalid email or password"
          );
        } else {
          toast.error(
            "Login failed"
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
            Login
          </h1>

          <p className="text-center text-gray-500 mt-2">
            Welcome back to SkillHub
          </p>

          <form
            onSubmit={handleLogin}
            className="mt-8 space-y-5"
          >

            <div>
              <label className="block mb-2">
                Email
              </label>

              <input
                type="email"
                name="email"
                required
                className="form-input"
                placeholder="Enter email"
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
                placeholder="Enter password"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full"
            >
              {loading
                ? "Logging in..."
                : "Login"}
            </button>

          </form>

          <div className="my-6 text-center text-gray-400">
            OR
          </div>

          <button
            onClick={
              handleGoogleLogin
            }
            disabled={loading}
            className="w-full border border-gray-300 rounded-xl py-3 flex items-center justify-center gap-3 hover:bg-gray-50"
          >
            <FcGoogle size={24} />

            Continue with Google
          </button>

          <div className="mt-6 text-center">

            <p>
              Don't have an account?

              <Link
                href="/register"
                className="text-blue-600"
              >
                Register
              </Link>
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}