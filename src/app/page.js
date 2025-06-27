// import Cardsection from "@/components/Cardsection";
// import HeroSection from "@/components/Herosection";



// export default function Home() {
//   return (
    
//       <main className="absolute top-[-57px] left-0 w-[1536px] h-[578px] md:h-[578px] lg:h-[578px] bg-gradient-to-b from-[#002E83]   to-white z-0">

//       <HeroSection />
//         <Cardsection />
      
//       </main>


//   );
// }

"use client";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="bg-gradient-to-b from-blue-900 to-white text-white w-[1536px] h-[578px]  -top-[57px]">
      {/* Navbar */}
      <div className="flex items-center justify-between px-8 py-4">
        <div className=" text-2xl font-bold flex items-center gap-2">
          <Image src="/logo.png"  top={18} left={128} gap={4} width={167} height={44} alt="Logo" />
        </div>
        <div className="hidden md:flex items-center gap-10 text-m pr-20">
          <a href="#">About Us</a>
          <a href="#">Services</a>
          <a href="#">Hire Developers</a>
          <a href="#">Portfolio</a>
          <a href="#">Blog</a>
          <a href="#">Careers</a>
          <button className="px-4 py-2 bg-white text-blue-900 rounded-md">
            Connect With Us
          </button>
        </div>
      </div>

      {/* Hero Content */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between px-8 md:px-16 py-12 ">
        {/* Left Side */}
        <div className="md:w-1/2   md:text-left">
          <h1 className="w-[1101px] h-[170px] gap-[24px] text-8xl   pl-15 pt-5">
            Join us from anywhere
          </h1>
          <p className="text-white text-2xl whitespace-nowrap tracking-wide mb-6 pl-15">
            Real projects. Real mentorship. Real purpose. Intern where it matters.
          </p>
          <div className="flex justify-center md:justify-start gap-4 ml-80 w-[531px] h-[56px] ">
            <button className="px-5 py-2 bg-white text-blue-900  shadow hover:bg-blue-100">
              Apply for Internship →
            </button>
            <button className="px-5 py-2 bg-gray-100 text-gray-600 ">
              See Success Stories
            </button>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="w-full flex justify-end">
  <div className="w-[387.5291442871094px] h-[421px] md:w-1/2 top-[113px] left-[1148px]">
    <Image
      src="/girlimage.svg"
      alt="Internship Girl"
      width={400}
      height={400}
      
      className="object-contain pt-10 "
    />
  </div>
</div>

      </div>
    </div>
  );
}

