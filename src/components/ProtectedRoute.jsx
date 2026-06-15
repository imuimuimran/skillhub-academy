"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

import toast from "react-hot-toast";
import Loading from "./Loading";

export default function ProtectedRoute({
    children,
}) {
    const { user, loading } =
        useAuth();

    const router = useRouter();

    useEffect(() => {
        if (!loading && !user) {
            toast.error(
                "Please login first"
            );
            router.push(`/login?redirect=${window.location.pathname}`);
        }
    }, [user, loading, router]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <h2 className="text-2xl font-semibold">
                    <Loading />
                </h2>
            </div>
        );
    }

    if (!user) {
        return null;
    }

    return children;
}