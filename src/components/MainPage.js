// "use client";
// import Image from "next/image";

// export default function MainPage() {
//   return (

//     <div className="bg-gradient-to-b from-blue-900 to-white text-white w-[1536px] h-[578px]  -top-[57px]">
//           {/* Navbar */}
//           <div className="flex items-center justify-between px-8 py-4 w-[1536px] h-[76px]">
//             <div className=" pl-25">
//               <Image src="/Logo.svg"  top={18} left={128} gap={4} width={167} height={44} alt="Logo" />
//             </div>
//             <div className="hidden md:flex items-center  text-m pr-20 w-[943] h-[37px] top-[16px] left-[515px] gap-[40]">
//               <a href="#">About Us</a>
//               <a href="#">Services</a>
//               <a href="#">Hire Developers</a>
//               <a href="#">Portfolio</a>
//               <a href="#">Blog</a>
//               <a href="#">Careers</a>
//               <button className="px-4 py-2 bg-white text-blue-900 rounded-md">
//                 Connect With Us
//               </button>
//             </div>
//           </div>
    
//           {/* Hero Content */}
//           <div className=" mt-30 w-[1101px] h-[170px] gap-[24px] mb-15">
//             {/* Left Side */}
//             <h1 className="ml-15 text-8xl  text-white mb-8">
//         Join us from anywhere
//       </h1>
//       <p className="ml-50 text-white text-2xl  ">
//         Real projects. Real mentorship. Real purpose. Intern where it matters.
//       </p>
//                </div>
    
//               <div className="  gap-[32px]   w-[531px] h-[56px]  mx-auto ">
//                 <button className="px-10 py-4 bg-white text-blue-900  shadow hover:bg-blue-100  ">
//                   Apply for Internship →
//                 </button>
//                 <button className="px-10 py-4 bg-gray-100 text-gray-600 ">
//                   See Success Stories
//                 </button>
//              </div>
    
//             {/* Right Side Image
//             <div className="w-[387.5291442871094px] h-[421px] top-[113px] left-[1148px] ">
      
//         <Image
//           src="/girlimage.svg"
//           alt="Internship Girl"
//           width={400}
//           height={400}
          
//           className="object-contain  "
//         />
      
//     </div> */}
//   <div className="relative w-full h-screen">
//   <div className="absolute w-[387.5291442871094px] h-[421px] top-[113px] left-[1148px]  pr-4 -mt-120">
//     <Image
//       src="/girlimage.svg"
//       alt="Internship Girl"
//       width={400}
//       height={400}
//       className="object-contain"
//     />
//   </div>
// </div>

    
          
         
//         </div>
//   );


// }

"use client";
import Image from "next/image";

export default function MainPage() {
  return (
    <div className="bg-gradient-to-b from-[#06327b] to-[#f5f5f5] text-white  w-[1536px] h-[578px]  -top-[57px]">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-10 py-5 w-[1536px] h-[76px] ">
        <div className=" pl-25 ">
          <Image src="/logo.svg" alt="Hexadecimal Logo" width={167} height={44} top={18} left={128} gap={4}  />
        </div>
        <div className="pl-10 md:flex items-center text-1xl w-[943px] h-[37px] top-[16px] left-[515px] gap-[40px]">
          <a href="#">About Us</a>
         
            <a href="#">Services ▾</a>
         
          
            <a href="#">Hire Developers ▾</a>
          
          <a href="#">Portfolio</a>
          <a href="#">Blog</a>
          <a href="#">Careers</a>
       
        <button className="bg-white text-blue-900   shadow">
          Connect With Us
        </button>
         </div>
      </nav>

      {/* Hero Section */}
      <div className="flex justify-between items-center px-16 mt-15">
        {/* Left Content */}
        <div className=" text-white w-[1101px] h-[170px] gap-[24px] relative -top-20">
          <h1 className="font-thin text-8xl mb-8 ">Join us from anywhere</h1>
          <p className="pl-60 mt-4 text-lg">
            Real projects. Real mentorship. Real purpose. Intern where it matters.
          </p>
          <div className="pl-70 w-[815px] h-[265px] top-[163px] left-[218px] gap-[32px]"> 
          <div className=" flex gap-[32px] w-[531px] h-[56px] mt-8 ">
            <button className="px-6 py-3 bg-white text-blue-900 rounded shadow hover:bg-blue-100 top-[16px] right-[32px] bottom-[16] left-[32px] gap[10x]">
              Apply for Internship →
            </button>
            <button className="px-6 py-3 border border-white text-white hover:bg-white hover:text-blue-900 transition top-[16px] right-[32px] bottom-[16] left-[32px] gap[10x]">
              See Success Stories ▾
            </button>
          </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-[387.5291442871094px] h-[421px] top-[113px] left-[1148px]">
          <Image
            src="/girlimage.svg"
            alt="Internship Girl"
            width={400}
            height={400}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}
