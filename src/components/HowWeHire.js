"use client";

import { FileText, ListChecks, ClipboardCheck, Code2, UserRound, FileCheck } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Application Submission",
    desc: "Interested candidates apply through our careers page or internship portal.",
    icon: <FileText className="w-6 h-6 text-blue-800" />
  },
  {
    id: 2,
    title: "Resume Screening",
    desc: "We review your resume to match skills, education, and interest with the internship role.",
    icon: <ListChecks className="w-6 h-6 text-blue-800" />
  },
  {
    id: 3,
    title: "Assignment",
    desc: "Some roles may include a short task or test to assess basic skills.",
    icon: <ClipboardCheck className="w-6 h-6 text-blue-800" />
  },
  {
    id: 4,
    title: "Technical/Project Interview",
    desc: "We discuss your academic projects, technical knowledge, and problem-solving abilities.",
    icon: <Code2 className="w-6 h-6 text-blue-800" />
  },
  {
    id: 5,
    title: "HR Interview",
    desc: "A brief chat to understand your goals, availability, and cultural fit.",
    icon: <UserRound className="w-6 h-6 text-blue-800" />
  },
  {
    id: 6,
    title: "Offer & Onboarding",
    desc: "Selected interns receive an offer letter with details to start the internship.",
    icon: <FileCheck className="w-6 h-6 text-blue-800" />
  },
];

export default function HowWeHire() {
  return (
    <div className=" mx-auto px-4 py-12 w-[1440px] h-[681px] -mb-30">
      <h2 className="text-4xl  text-center mb-10">How We Hire</h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
        {steps.map((step, idx) => (
          <div
            key={step.id}
            className="relative bg-slate-100 p-4 rounded-md shadow-sm border border-slate-200"
          >
            <div className="flex items-center gap-2 mb-2">
              {step.icon}
              <span className="font-semibold text-sm">{step.id}. {step.title}</span>
            </div>
            <p className="text-sm text-gray-700">{step.desc}</p>

            {/* Arrow connector */}
            {(idx === 0 || idx === 1 || idx === 3 || idx === 4) && (
              <div className="absolute top-1/2 -right-5 transform -translate-y-1/2 hidden sm:block">
                →
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="bg-[#002E83] text-white p-3 rounded-md text-center">
        <p className="text-2xl  max-w-6xl mx-auto">
          Our career section enables you to apply for the job you desire. Submit your resume with a complete list of credentials and provide detailed information about your experience in the position.
        </p>
        
      </div>
      
      <div className="flex justify-center mt-10">
  <button className="px-6 py-2 bg-[#002E83] hover:bg-blue-700 rounded-md font-medium text-sm text-white">
    Explore job opportunities →
  </button>
</div>
    </div>
  );
}
