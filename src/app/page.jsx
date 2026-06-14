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



// import AuthTest from "@/components/AuthTest";

// export default function Home() {
//   return (
//     <main>
//       {/* <AuthTest /> */}
//       Home Page
//     </main>
//   );
// }

// export default function Home() {
//   return (
//     <main className="section-padding">
//       <div className="container-custom">
//         <h1 className="section-title">
//           SkillHub Academy
//         </h1>

//         <p className="section-subtitle">
//           Learn modern skills from experts.
//         </p>

//         <div className="mt-8 flex gap-4 justify-center">
//           <button className="btn-primary">
//             Explore Courses
//           </button>

//           <button className="btn-secondary">
//             Learn More
//           </button>
//         </div>

//         <div className="grid-cards mt-12">
//           <div className="card-custom">
//             Card One
//           </div>

//           <div className="card-custom">
//             Card Two
//           </div>

//           <div className="card-custom">
//             Card Three
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }