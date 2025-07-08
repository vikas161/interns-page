"use client";
import Image from "next/image";
import React from "react";
import { MapPin, ArrowRight } from "lucide-react";

const internships = new Array(4).fill({
  title: "Assistant Manager Direct Sales",
  company: "Hexadecimal Software",
  description:
    "Build rapport with contacts and understand where the prospect is in the buying process. Identify opportunities that meet a minimum qualification criteria for the sales team. Tend incoming sales calls and emails, and assign them to sales reps.",
  location: "Sector 142, Noida",
  tags: ["Full Time", "On-site", "Entry Level"],
  applicants: 213,
});

export default function InternshipSection() {
  return (
    <div className=" mx-auto px-4 py-16 w-[1280px] h-[732px] gap-[32px] ">
      <div className="flex justify-between items-center mb-8 w-[1280px] h-[76px] gap-[230px]">
        <div className="w-[860px] h-[76px] gap-[16px]">
          <h2 className="text-4xl mb-4 ">Internship Opportunities </h2>
          <p className="text-gray-500 text-xl mt-1">
            Explore open roles and start your tech journey.
          </p>
        </div>
        <button className="bg-[#002E83] text-white px-4 py-2 ">
          View More Internships
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {internships.map((item, idx) => (
          <div
            key={idx}
            className="  p-4 shadow-sm hover:shadow-md transition bg-white"
          >
            <div className="flex justify-between items-start">
              <div className="flex gap-3">
                <div className="   w-10 h-10 flex items-center  ">
                  <Image
                              src="/Hexadecimallogo.svg"
                              alt="Internship Girl"
                              width={400}
                              height={400}
                              className="object-contain"
                            />
                </div>
                <div>
                  <h3 className="font-medium">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.company}</p>
                </div>
              </div>
              <button className="text-blue-600 text-sm font-medium flex items-center gap-1">
                Easy Apply <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <p className="text-sm text-gray-700 mt-4 line-clamp-3">
              {item.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-4">
              {item.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-gray-100 text-sm rounded-full text-gray-700"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex justify-between items-center border-t pt-3 mt-4 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                {item.location}
              </div>
              <div className="text-gray-500">Applicants: {item.applicants}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
