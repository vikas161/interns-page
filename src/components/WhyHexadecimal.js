import FeatureCard from "./Featurecard";
import { Briefcase, Users, Home, BadgeCheck, FileText, Smile } from "lucide-react";

export default function WhyHexadecimal() {
  const features = [
    {
      icon: <Briefcase />,
      title: "Real-World Projects",
      description: "Work on live projects, like app features, that thousands use daily.",
    },
    {
      icon: <Users />,
      title: "1-on-1 Mentorship",
      description: "Learn 1-on-1 from pros who guide you on tools like React.",
    },
    {
      icon: <Home />,
      title: "Remote Flexibility",
      description: "Remote or on-site, stay connected with tools like Slack.",
    },
    {
      icon: <BadgeCheck />,
      title: "Certificate + PPO",
      description: "Get a certificate and a chance at a full-time role Pre-Placement Offer.",
    },
    {
      icon: <FileText />,
      title: "Resume Boost",
      description: "Build a portfolio with projects to impress top employers.",
    },
    {
      icon: <Smile />,
      title: "Team Culture & Learning",
      description: "Join a fun team for hackathons and learning together.",
    },
  ];

  return (
    <div className="  mx-auto text-center w-[1280px] h-[414px] gap-[32px] mb-20">
      <h2 className="text-4xl mb-10">
        Why Hexadecimal is Your Ultimate Launchpad
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3  text-left w-[1280px] h-[338px] gap-[16px]">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
}
