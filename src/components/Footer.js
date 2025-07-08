// components/Footer.js
import Image from "next/image";
import {
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bg-[#151C22] text-white py-12  md:px-16 w-[1536px] h-[739px]">
      <div className="grid grid-cols-1 md:grid-cols-4    h-[622.0003662109375px] top-[40px] left-[128px] gap-[40px]">
        <div className="ml-6">
          <Image
            src="/Logo.svg" 
            alt="Hexadecimal Logo"
            width={150}
            height={50}
            className="mb-8"
          />
          <p className="text-sm mb-10">
            Hexadecimal is an Indian digital agency that has architected and maintained
            digital solutions for hundreds of VC backed Startups, government agencies and
            Fortune 500 companies.
          </p>
          <div className="flex space-x-4 text-white text-xl mb-10">
            <FaTwitter />
            <FaLinkedinIn />
            <FaGithub />
            <FaInstagram />
          </div>
           <div className="mb-10">
          <h4 className="text-white text-xl font-medium mb-2">Contact Us</h4>
          <p>info@hexadecimalsoftware.com</p>
        </div>
        <div>
          <h4 className="text-white text-xl font-medium mb-2">INDIA</h4>
          <p>
            Office-410, Corporate Park, Tower-A1, Sector 142,<br />
            Noida, Uttar Pradesh
          </p>
        </div>
        </div>

        
        {/* Hire Developers */}
        <div className="w-[846px] h-[496px] top-[40px] left-[562px] gap-[80px] flex flex-row space-x-4 pl-40 ml-20">
          <div className="w-[218px] h-[496px] gap-[40px] ">
          <h3 className=" text-lg mb-2 border-b border-blue-500 w-fit pb-1">
            Our Company
          </h3>
          <ul className="space-y-1 text-sm mb-8">
            <li>About</li>
            <li>Us</li>
            <br></br>
            <li>Blogs</li>
            <br></br>
            <li>Careers</li>
          </ul>
          <h3 className=" text-lg mb-2 border-b border-blue-500 w-fit pb-1">
            Hire Developers
          </h3>
          <ul className="space-y-1 text-sm">
            <li>Hire</li>
            <li>Developer</li>
            <li>Hire</li>
            <li>Designer</li>
            <li>Hire QA</li>
            <li>Tester</li>
            <li>Hire iOS</li>
            <li>Developer</li>
            <li>Hire Android</li>
            <li>Developer</li>
            <br></br>
            <li>Hire Web Developer</li>
          </ul>
        </div>
         
<div className="w-[234px] h-[417px] gap-[24px]"> 
          <h3 className=" text-lg mb-2 border-b border-blue-500 w-fit pb-1">
            Our Services
          </h3>
          <ul className="space-y-1 text-sm">
            <li>iOS App</li>
            <li>Development</li>
            <li>Android App</li>
            <li>Development</li>
            <li>React Native App</li>
            <li>Development</li>
            <li>Web</li>
            <li>Development</li>
            <li>Front-End</li>
            <li>Development</li>
            <li>IoT App</li>
            <li>Development</li>
            <li>Blockchain</li>
            <li>Development</li>
            <li>Custom Software</li>
            <li>Development</li>
            <br></br>
            <li>UI/UX Solutions</li>
          </ul>
        </div>
<div className="w-[234px] h-[417px] gap-[24px]">
          <h3 className="text-lg mb-2 border-b border-blue-500 w-fit pb-1">
            Industries
          </h3>
          <ul className="space-y-1 text-sm">
            <li>On Demand App Developments</li>
            <br></br>
            <li>Healthcare Industries</li>
            <br></br>
            <li>E-commerce Industries</li>
            <br></br>
            <li>Social Networking Industries</li>
            <br></br>
            <li>Fintech Industries</li>
            <br></br>
            <li>Gaming Industries</li>
            <br></br>
            <li>Education Industries</li>
            <br></br>
            <li>Real Estate Industries</li>
            <br></br>
            <li>Entertainment</li>
            <li>Industries</li>
          </ul>
        </div>
      </div>
        </div>

        

        

     

      <div className="mt-8 flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-4 text-sm text-gray-400">
        <p>© 2024 Hexadecimal. All Rights Reserved.</p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="#" className="text-blue-400 hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="text-blue-400 hover:underline">
            Sitemap
          </a>
        </div>
      </div>
    </div>
  );
}
