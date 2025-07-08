'use client';
import Image from "next/image";

import { ArrowLeft, ArrowRight, Star } from 'lucide-react';

export default function TestimonialsSection() {
  return (
    <div className="bg-[#E5EAF3] py-16 px-4 ">
      <div className="max-w-7xl mx-auto ">
        <div className=" mb-10">
          <span className="inline-block px-4 py-1 bg-white text-blue-600 rounded-full text-sm font-medium">
            Testimonials
          </span>
          <h2 className="text-3xl  text-gray-800 mt-4 mb-5">
            What people say about us
          </h2>
          <p className="text-gray-500 mt-2 max-w-8xl mx-auto">
            With lots of unique blocks, you can easily build a page without coding. Build your next landing page.
          </p>
          <div className="  flex gap-5 ml-270">
            <button className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
              <ArrowLeft size={18} className="text-gray-600" />
            </button>
            <button className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center">
              <ArrowRight size={18} className="text-gray-700" />
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="bg-white  shadow-sm p-6">
                <p className="text-gray-700 mb-6">
                  Switching to Hexadecimal has been a game-changer for our business. The intuitive interface and powerful features
                  have streamlined our operations and significantly boosted our productivity. The customer support team is incredibly
                  responsive and helpful. Highly recommended!
                </p>

                {/* Profile and Stars */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10  rounded-full">
                      <Image
                                  src="/Vector.svg" 
                                  alt="Hexadecimal Logo"
                                  width={52}
                                  height={52}
                                  className="object-contain"
                                />
                    </div>
                    <span className="text-gray-800 font-medium">Jaydon Bator</span>
                  </div>
                  <div className="flex items-center text-yellow-500">
                    {[...Array(5)].map((_, idx) => (
                      <Star key={idx} size={18} fill="#facc15" stroke="none" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          
        </div>
      </div>
    </div>
  );
}
