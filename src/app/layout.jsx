import { Inter } from "next/font/google";
import "./globals.css";
import AuthProviderWrapper from "@/providers/AuthProviderWrapper";
import MainLayout from "@/components/MainLayout";
import { Toaster } from "react-hot-toast";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "SkillHub Academy",
  description: "Online Course Management Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProviderWrapper>
          <MainLayout>
            {children}
          </MainLayout>
          <Toaster position="top-right" />
        </AuthProviderWrapper>
      </body>
    </html>
  );
}