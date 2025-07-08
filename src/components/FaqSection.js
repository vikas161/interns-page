'use client';

import React, { useState } from 'react';
import { PlusCircle, MinusCircle } from 'lucide-react';

const faqData = [
  {
    question: "Who can apply for an internship at Hexadecimal?",
    answer:
      "Students or recent graduates from Computer Science, IT, or related engineering backgrounds are welcome to apply. If you have a strong interest in software development, web technologies, UI/UX design, DevOps, or data science — and are eager to work on real-world projects under the guidance of experienced mentors — this internship is for you. Basic knowledge of programming (like HTML/CSS, JavaScript, Python, Java, etc.) and a problem-solving mindset are a plus.",
  },
  {
    question: "How do I apply for an internship?",
    answer: "You can apply by visiting our Careers page and submitting the application form with your resume and portfolio.",
  },
  {
    question: "Is the internship paid or unpaid?",
    answer: "Most internships at Hexadecimal are paid. However, details will be specified in each role listing.",
  },
  {
    question: "What is the duration of the internship?",
    answer: "Internship duration typically ranges between 8 to 12 weeks, depending on the project and role.",
  },
  {
    question: "Do I need prior experience to apply for an internship?",
    answer: "No prior experience is required, but familiarity with basic programming concepts or relevant tools is helpful.",
  },
  {
    question: "Will I receive a certificate after completing the internship?",
    answer: "Yes, all interns receive a certificate upon successful completion of the internship.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-16 w-[1440px] h-[751px] gap-[40px]">
      <h2 className="text-4xl  text-center mb-8">
        Checkout The FAQ’s
      </h2>

      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className={` shadow-sm rounded-md p-4 transition ${
              openIndex === index ? 'bg-[#E5EAF3]' : 'bg-white'
            }`}
          >
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggle(index)}
            >
              <h4 className="font-medium text-base">
                {index + 1}. {faq.question}
              </h4>
              {openIndex === index ? (
                <MinusCircle className="w-5 h-5 text-gray-600" />
              ) : (
                <PlusCircle className="w-5 h-5 text-gray-600" />
              )}
            </div>

            {openIndex === index && (
              <p className="text-sm text-gray-700 mt-3">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
