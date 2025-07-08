

"use client";
import WhyHexadecimal from "@/components/WhyHexadecimal";
import TechnologiesSection from "@/components/TechnologiesSection";
import HowWeThinkSection from "@/components/HowWeThinkWork";
import HowWeHire from "@/components/HowWeHire";
import InternSuccessGrid from "@/components/InternSuccessGrid";
import CollegeLogos from "@/components/CollegeLogos";
import InternshipSection from "@/components/InternshipSection";
import FaqSection from "@/components/FaqSection";
import MainPage from "@/components/MainPage";
import TestimonialsSection from "@/components/TestimonialsSection";
import LaunchProjectSection from "@/components/NewProjectLaunch";
import Footer from "@/components/Footer";

export default function HeroSection() {
  return (
    <main> 
    <MainPage />
      <div className="w-[1536px] h-[8088px] top-[521px] gap-[50px]"> 
   <WhyHexadecimal />
   <TechnologiesSection />
    <HowWeThinkSection />
    <HowWeHire />
    <InternSuccessGrid />
     <CollegeLogos />
     <InternshipSection />
           <FaqSection />
           <TestimonialsSection />
           <LaunchProjectSection />
           <Footer />

 </div>

    </main>
    
  );
}


