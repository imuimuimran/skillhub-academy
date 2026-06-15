import HeroSection from "@/components/sections/HeroSection";
import FeaturedCourses from "@/components/sections/FeaturedCourses";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import CategoriesSection from "@/components/sections/CategoriesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import StatsSection from "@/components/sections/StatsSection";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedCourses />
      <WhyChooseUs />
      <CategoriesSection />
      <TestimonialsSection />
      <StatsSection />
      <CTASection />
    </>
  );
}