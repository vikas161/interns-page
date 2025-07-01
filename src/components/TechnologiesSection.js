import {
  Smartphone,
  LayoutDashboard,
  Brain,
  Cloud,
  PenTool,
  CheckCircle,
  Code,
  Palette,
  TrendingUp,
  SatelliteDish,
  Shield,
  Database,
  Link,
} from "lucide-react";

const techData = [
  {
    icon: <Smartphone className="w-6 h-6 text-white" />,
    title: "Mobile App Development",
    tags: ["Android App Development", "Flutter App Development", "iOS App Development", "React Native App Development"],
  },
  {
    icon: <LayoutDashboard className="w-6 h-6 text-white" />,
    title: "Web App Development",
    tags: ["Progressive Web App", "Frontend Development", "Backend Development", "Website Development"],
  },
  {
    icon: <Brain className="w-6 h-6 text-white" />,
    title: "AI/ML",
    tags: ["Automation of Tasks", "Computer Vision", "Data-Driven Decisions", "NLP"],
  },
  {
    icon: <Cloud className="w-6 h-6 text-white" />,
    title: "Cloud Services",
    tags: ["DevOps", "AWS", "Google Clouds", "Azure", "CI/CD Pipelines"],
  },
  {
    icon: <PenTool className="w-6 h-6 text-white" />,
    title: "UI/UX Design",
    tags: ["User-Centered Design", "Seamless Navigation", "Visual & Interactive Design"],
  },
  {
    icon: <CheckCircle className="w-6 h-6 text-white" />,
    title: "Quality Assurance",
    tags: ["Manual Testing", "API Testing", "Web Testing", "Mobile App Testing", "Automation Testing"],
  },
  {
    icon: <Code className="w-6 h-6 text-white" />,
    title: "API Development",
    tags: ["RESTful & SOAP APIs", "Scalable", "Security & Authentication", "Testing"],
  },
  {
    icon: <Palette className="w-6 h-6 text-white" />,
    title: "Designing",
    tags: ["UI/UX Design", "Mobile App", "Web Designs", "Wireframe/Prototyping", "Design Systems"],
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-white" />,
    title: "Organic Reach",
    tags: ["SEO", "GMB SEO", "Competitor Research", "Technical SEO", "ASO", "Performance Analytics"],
  },
  {
    icon: <SatelliteDish className="w-6 h-6 text-white" />,
    title: "IOT",
    tags: [
      "Device Connectivity",
      "Automation & Remote Control",
      "Interconnectivity",
      "Applications in Various Fields",
      "Real-Time Data Monitoring",
      "Security & Privacy Challenges",
    ],
  },
  {
    icon: <Link className="w-6 h-6 text-white" />,
    title: "Blockchain",
    tags: ["Decentralized System", "Cryptocurrencies", "Secure and Immutable Records", "Smart Contracts"],
  },
  {
    icon: <Shield className="w-6 h-6 text-white" />,
    title: "Cybersecurity Solutions",
    tags: ["Threat Prevention", "Risk Assessment & Management", "Data Protection", "Incident Response", "Encryption"],
  },
  {
    icon: <Database className="w-6 h-6 text-white" />,
    title: "Data & Analytics",
    tags: ["Big Data Analytics", "Decision-Making", "Business Intelligence Analytics"],
  },
];

export default function TechnologiesSection() {
  return (
    
    <div className=" py-16 px-6 md:px-12 bg-[#E5EAF3] w-[1536px] h-[1295px]">
       
      <h2 className="text-4xl  text-center mb-12">Our Technologies</h2>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 ">
        {techData.map((tech, index) => (
          <div key={index} className="  shadow-sm p-6 bg-white hover:shadow-md transition-all duration-300">
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-blue-900 p-2 rounded-md">
                {tech.icon}
              </div>
              <h3 className="text-lg font-medium">{tech.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {tech.tags.map((tag, idx) => (
                <span key={idx} className="bg-gray-100 text-sm px-3 py-1 rounded-full text-gray-700">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
        ))}
      </div>
      </div>
      
    
  );
}
