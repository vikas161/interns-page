// "use client";
// import { useState } from "react";
// import { FiPlusCircle, FiMinusCircle } from "react-icons/fi";

// const faqs = [
//   {
//     question: "Who can apply for an internship at Hexadecimal?",
//     answer: `Students or recent graduates from Computer Science, IT, or related engineering backgrounds are welcome to apply. If you have a strong interest in software development, web technologies, UI/UX design, DevOps, or data science — and are eager to work on real-world projects under the guidance of experienced mentors — this internship is for you. Basic knowledge of programming (like HTML/CSS, JavaScript, Python, Java, etc.) and a problem-solving mindset are a plus.`,
//   },
//   {
//     question: "How do i apply for an internship?",
//     answer: "You can apply through our careers portal by selecting the desired position and clicking 'Apply Now'.",
//   },
//   {
//     question: "Is the internship paid or unpaid?",
//     answer: "Yes, most internships at Hexadecimal are paid. Stipends may vary depending on the role and project.",
//   },
//   {
//     question: "What is the duration of the internship?",
//     answer: "The typical internship duration ranges from 2 to 6 months.",
//   },
//   {
//     question: "do i need prior experience to apply for an internship?",
//     answer: "No prior experience is necessary. We value enthusiasm, willingness to learn, and basic relevant knowledge.",
//   },
//   {
//     question: "Will i receive a certificate after completing the internship?",
//     answer: "Yes, interns receive a certificate of completion along with a performance report after successful completion.",
//   },
// ];

// export default function FaqSection() {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const toggleIndex = (index) =>
//     setActiveIndex(index === activeIndex ? null : index);

//   return (
//     <section className="bg-white py-16 px-4 max-w-5xl mx-auto">
//       <h2 className="text-3xl font-semibold text-center mb-10">
//         Checkout The FAQ’s
//       </h2>
//       <div className="space-y-4">
//         {faqs.map((faq, index) => (
//           <div
//             key={index}
//             className={`border rounded-lg overflow-hidden shadow-sm ${
//               activeIndex === index ? "bg-blue-50" : "bg-white"
//             }`}
//           >
//             <button
//               className="w-full text-left px-5 py-4 flex justify-between items-center font-medium text-gray-800"
//               onClick={() => toggleIndex(index)}
//             >
//               <span>
//                 {index + 1}. {faq.question}
//               </span>
//               {activeIndex === index ? (
//                 <FiMinusCircle className="text-xl text-gray-700" />
//               ) : (
//                 <FiPlusCircle className="text-xl text-gray-700" />
//               )}
//             </button>
//             {activeIndex === index && (
//               <div className="px-5 pb-5 text-gray-700 text-sm">
//                 {faq.answer}
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
