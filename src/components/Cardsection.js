// import FeatureCard from "./Featurecard";
// import {
//   Briefcase,
//   UserRoundCheck,
//   Home,
//   ScrollText,
//   FileText,
//   Users,
// } from "lucide-react";

// function Cardsection(){
//  const features = [
//     {
//       icon: <Briefcase size={24} />,
//       title: "Real-World Projects",
//       description: "Work on live projects, like app features, that thousands use daily.",
//     },
//     {
//       icon: <UserRoundCheck size={24} />,
//       title: "1-on-1 Mentorship",
//       description: "Learn 1-on-1 from pros who guide you on tools like React.",
//     },
//     {
//       icon: <Home size={24} />,
//       title: "Remote Flexibility",
//       description: "Remote or on-site, stay connected with tools like Slack.",
//     },
//     {
//       icon: <ScrollText size={24} />,
//       title: "Certificate + PPO",
//       description: "Get a certificate and a chance at a full-time role Pre-Placement Offer.",
//     },
//     {
//       icon: <FileText size={24} />,
//       title: "Resume Boost",
//       description: "Build a portfolio with projects to impress top employers.",
//     },
//     {
//       icon: <Users size={24} />,
//       title: "Team Culture & Learning",
//       description: "Join a fun team for hackathons and learning together.",
//     },
//   ];

//     return(

//         <div className="py-12 bg-gray-100 w-[1536px] h-[8088px] top-[521px] gap-[50px] flow-vertical">

//             <div className="text-center">
//                 <h1 className="text-4xl  text-gray-900 tracking-tight mb-4">Why Hexadecimal is Your Ultimate Launchpad</h1>
//             </div>
//  <main className="min-h-screen bg-white p-6">
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {features.map((item, index) => (
//           <FeatureCard
//             key={index}
//             icon={item.icon}
//             title={item.title}
//             description={item.description}
//           />
//         ))}
//       </div>
//     </main>
//         </div>
//     )
// }

// export default Cardsection