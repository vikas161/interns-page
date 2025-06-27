// 'use client'
// import React, { useState } from "react";
// import { HoveredLink, Menu, MenuItem, ProductItem } from "./navbar-menu";
//  import Link from "next/link";


// function  Navbar({ className }){
//      const [active, setActive] = useState(null);

//     return (
//         <div
//         className="   w-full  ">
//             <div className="p-4 flex overflow-hidden">
//                 <img 
  
//     src="/Logo.png" 
//     alt="Internship Banner" 
//     className=" w-50 max-w-md rounded-xl shadow-md object-contain"
//     priority
//   />
//             </div>
//            <Menu setActive={setActive}>
//             <Link href="/">
//             <MenuItem setActive={setActive} active={active} item="Aboutus">
               
//             </MenuItem>
//             </Link>
//             <MenuItem setActive={setActive} active={active} item="Services">
//                         <div className="flex flex-col space-y-4 text-sm">
//                             <HoveredLink href="/web-dev">Web App Development</HoveredLink>
//                             <HoveredLink href="/web-dev">Cloud Services</HoveredLink>
//                             <HoveredLink href="/web-dev">Design</HoveredLink>
//                             <HoveredLink href="/web-dev">Mobile App Development</HoveredLink>
//                             <HoveredLink href="/web-dev">Data and Anal</HoveredLink>

//                             </div>

//             </MenuItem>
//              <MenuItem setActive={setActive} active={active} item="Hire Developers">
//                <div className="flex flex-col space-y-4 text-sm">
//                             <HoveredLink href="/web-dev">Frontend</HoveredLink>
//                             <HoveredLink href="/web-dev">Cloud</HoveredLink>
//                             <HoveredLink href="/web-dev">Design</HoveredLink>
//                             <HoveredLink href="/web-dev">Backend</HoveredLink>
//                             <HoveredLink href="/web-dev">Mobile App Developer</HoveredLink>

//                             </div>
//             </MenuItem>
            
//              <Link href="/portfolio">
//             <MenuItem setActive={setActive} active={active} item="Portfolio">
               
//             </MenuItem>
//             </Link>

//              <Link href="/blogs">
//             <MenuItem setActive={setActive} active={active} item="Blogs">
               
//             </MenuItem>
//             </Link>

//             <Link href="/carrers">
//             <MenuItem setActive={setActive} active={active} item="Carrers">
               
//             </MenuItem>
//             </Link>

//             <Link href="/contact">
//             <MenuItem setActive={setActive} active={active} item="Contact with us">
               
//             </MenuItem>
//             </Link>
//            </Menu>
//             </div>
//     );
// }


// export default Navbar;