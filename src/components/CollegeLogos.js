// app/components/CollegeLogos.js
import Image from 'next/image';

const collegeLogos = [
  { name: 'SRM', src: '/college1.svg' },
  { name: 'Galgotias University', src: '/college2.svg' },
  { name: 'Amity University', src: '/college3.svg' },
  { name: 'Mumbai University', src: '/college4.svg' },
  { name: 'IIMT', src: '/college5.svg' },
  { name: 'AKTU', src: '/college6.svg' },
  { name: 'DU', src: '/college7.svg' },
  { name: 'KCC Institute', src: '/college8.svg' },
  { name: 'Sharda University', src: '/college9.svg' },
  
];

export default function CollegeLogos() {
  return (
    <div className="bg-[#E5EAF3] py-10 w-[1536px] h-[559px] ">
      <div className="max-w-6xl mx-auto text-center w-[1315px] h-[476px] gap-[45px]">
        <h2 className="text-4xl   mb-20">
          Students from these top colleges have interned with us.
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center justify-center">
          {collegeLogos.map((logo, index) => (
            <div key={index} className="flex justify-center items-center">
              <Image
                src={logo.src}
                alt={logo.name}
                width={129}
                height={126}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
