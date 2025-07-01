// // app/components/CollegeLogos.js
// import Image from 'next/image';

// const collegeLogos = [
//   { name: 'SRM', src: '/colleges/srm.png' },
//   { name: 'Galgotias University', src: '/colleges/galgotias.png' },
//   { name: 'Amity University', src: '/colleges/amity.png' },
//   { name: 'Mumbai University', src: '/colleges/mumbai.png' },
//   { name: 'IIMT', src: '/colleges/iimt.png' },
//   { name: 'AKTU', src: '/colleges/aktu.png' },
//   { name: 'DU', src: '/colleges/du.png' },
//   { name: 'KCC Institute', src: '/colleges/kcc.png' },
//   { name: 'Sharda University', src: '/colleges/sharda.png' },
//   { name: 'NIET', src: '/colleges/niet.png' },
// ];

// export default function CollegeLogos() {
//   return (
//     <section className="bg-white py-10">
//       <div className="max-w-6xl mx-auto text-center">
//         <h2 className="text-xl md:text-2xl font-medium mb-8">
//           Students from these top colleges have interned with us.
//         </h2>

//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center justify-center">
//           {collegeLogos.map((logo, index) => (
//             <div key={index} className="flex justify-center items-center">
//               <Image
//                 src={logo.src}
//                 alt={logo.name}
//                 width={100}
//                 height={100}
//                 className="object-contain"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
