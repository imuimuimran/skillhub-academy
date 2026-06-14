"use client";

import { useAuth } from "@/context/AuthContext";

export default function AuthTest() {
  const { user } = useAuth();

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold">
        Auth Test
      </h2>

      {user ? (
        <p>
          Logged in as:
          {" "}
          {user.email}
        </p>
      ) : (
        <p>No user logged in</p>
      )}
    </div>
  );
}