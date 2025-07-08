"use client";

import React from "react";
import Image from "next/image";
import {
  PlayIcon,
  Volume2,
  Maximize2,
  Send,
  Users2,
  ThumbsUp,
  Code2,
  ClipboardCheck,
  Network,
  RefreshCcw,
  Target,
  Search,
  MessageCircle,
} from "lucide-react";

const principles = [
  { icon: <Send className="text-[#0E1D53] w-6 h-6" />, title: "Ship early", desc: "We believe in launching quickly—small, usable versions are better than waiting for perfection." },
  { icon: <Users2 className="text-[#0E1D53] w-6 h-6" />, title: "Build with users", desc: "We talk to users regularly to understand their problems before building solutions." },
  { icon: <ThumbsUp className="text-[#0E1D53] w-6 h-6" />, title: "Keep It Simple", desc: "We focus on simple, effective solutions instead of overcomplicating things." },
  { icon: <Code2 className="text-[#0E1D53] w-6 h-6" />, title: "Learn by Doing", desc: "Interns are encouraged to build, break, fix, and learn—real work, real learning." },
  { icon: <ClipboardCheck className="text-[#0E1D53] w-6 h-6" />, title: "Take Ownership", desc: "Even interns own their tasks and are trusted to take responsibility." },
  { icon: <Network className="text-[#0E1D53] w-6 h-6" />, title: "Collaborate Openly", desc: "We work together across teams, openly share feedback, and help each other grow." },
  { icon: <RefreshCcw className="text-[#0E1D53] w-6 h-6" />, title: "Fail Fast, Learn Faster", desc: "We're not afraid of mistakes—what matters is how fast we learn and improve." },
  { icon: <Target className="text-[#0E1D53] w-6 h-6" />, title: "Focus on Impact", desc: "We prioritize work that creates value for users and the business." },
  { icon: <Search className="text-[#0E1D53] w-6 h-6" />, title: "Stay Curious", desc: "We love people who ask questions, explore ideas, and always want to learn more." },
  { icon: <MessageCircle className="text-[#0E1D53] w-6 h-6" />, title: "Communicate Clearly", desc: "We value clear, honest, and respectful communication—whether it's sharing ideas, giving feedback, or asking for help." },
];

export default function HowWeThinkSection() {
  return (
    <div className=" mx-auto  py-16 w-[1440px] h-[957px] gap-[32px] mb-20">
      <h2 className="text-3xl  text-center text-gray-800 mb-10">How We Think & Work</h2>
      <div className="grid grid-cols-1 md:grid-cols-3  text-left  w-[1429px] h-[881px] ">
        {/* Left: Principles */}
        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-[16px]  ">
          {principles.map((item, index) => (
           <div
  key={index}
  className="bg-[#E5EAF3] p-4  hover:shadow-md transition"
>
  <div className="flex flex-col items-start">
    <div className="mb-2">
      {item.icon}
    </div>
    <h4 className=" text-base text-gray-800 mb-1">
      {item.title}
    </h4>
    <p className="text-sm text-gray-700">
      {item.desc}
    </p>
  </div>
</div>

          ))}
        </div>

        
        <div className="  p-5 flex   w-[529px] h-[881px] ">
          <Image
                      src="/video.svg"
                      alt="Internship Girl"
                      width={500}
                      height={500}
                      className="object-contain"
                    />
          </div>
      </div>
    </div>
  );
}
