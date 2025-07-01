// // src/components/FeatureCard.js
// export default function FeatureCard({ icon, title, description }) {
//   return (
//     <div className="bg-blue-50 p-5 rounded-lg shadow-sm flex gap-4">
//       <div className="text-blue-700 mt-1">{icon}</div>
//       <div>
//         <h3 className="text-md font-semibold text-gray-900">{title}</h3>
//         <p className="text-sm text-gray-700">{description}</p>
//       </div>
//     </div>
//   );
// }
// Reusable FeatureCard component
export default function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-[#E5EAF3] p-6  shadow-sm flex flex-col gap-2 w-[416px] h-[157]">
      <div className="text-2xl text-blue-900 w-[376px] h-[116px] top-[20px] gap-[12px]">{icon}</div>
      <h3 className="text-2xl  text-gray-900">{title}</h3>
      <p className="text-gray-700 ">{description}</p>
    </div>
  );
}
