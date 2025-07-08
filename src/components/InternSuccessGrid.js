'use client'

import Image from 'next/image'

const interns = [
  {
    name: 'Faneesh Pradesh',
    role: 'From Intern to Full-Time! is now officially a Mobile App Developer after an impressive internship journey.',
    image: '/faneesh.jpg', // Replace with actual image path
  },
  // Repeat the same entry or update with unique data
  {
    name: 'Faneesh Pradesh',
    role: 'From Intern to Full-Time! is now officially a Mobile App Developer after an impressive internship journey.',
    image: '/faneesh.jpg',
  },
  {
    name: 'Faneesh Pradesh',
    role: 'From Intern to Full-Time! is now officially a Mobile App Developer after an impressive internship journey.',
    image: '/faneesh.jpg',
  },
  {
    name: 'Faneesh Pradesh',
    role: 'From Intern to Full-Time! is now officially a Mobile App Developer after an impressive internship journey.',
    image: '/faneesh.jpg',
  },
]

export default function InternSuccessGrid() {
  return (
    <div className="px-6 py-10 pl-20 bg-white ">
      <div className=" flex items-center justify-between flex-wrap gap-4 mb-6">
        <div>
          <h2 className="text-4xl  text-gray-900 mb-2">From Interns to Tech Rockstars</h2>
          <p className="text-lg text-gray-500">Our interns are now leading the way at Hexadecimal and beyond.</p>
        </div>
        <button className="bg-[#002E83] hover:bg-blue-800 text-white px-5 py-2 ">
          Let’s Connect Together
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {interns.map((intern, index) => (
          <div key={index} className="relative rounded overflow-hidden shadow-md">
            <Image
              src={"/image.svg"}
              alt={"image"}
              width={500}
              height={600}
              className="object-cover w-full h-full"
            />
            <div className="absolute bottom-0 w-full bg-gradient-to-t from-black via-transparent text-white p-4">
              <h3 className="text-sm font-semibold">{intern.name}</h3>
              <p className="text-xs">{intern.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
