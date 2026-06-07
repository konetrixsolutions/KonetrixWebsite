import { Code2, PencilRuler } from "lucide-react";
import { FiUploadCloud } from "react-icons/fi";
import { GiSmartphone } from "react-icons/gi";
import { FaDatabase } from "react-icons/fa6";

export const Services = () => {
  const services = [
    {
      icon: Code2,
      title: "Web Development",
      points: [
        "Custom Websites",
        "E-commerce Solutions",
        "CRM Development",
        "Web Applications",
      ],
    },
    {
      icon: PencilRuler,
      title: "UI/UX Design",
      points: ["User Research", "Wireframing", "Prototyping", "UI Design"],
    },
    {
      icon: FaDatabase,
      title: "Backend Development",
      points: [
        "API Development",
        "Database Design",
        "Server Management",
        "Scalable Architecture",
      ],
    },
    {
      icon: FiUploadCloud,
      title: "DevOps & Cloud",
      points: [
        "AWS / Cloud Setup",
        "CI/CD Pipelines",
        "Docker & Kubernetes",
        "Monitoring",
      ],
    },
    {
      icon: GiSmartphone,
      title: "Mobile Development",
      points: [
        "React Native Apps",
        "Cross Platform",
        "Performance Optimized",
        "App Maintenance",
      ],
    },
  ];

  return (
    <div className="min-h-screen mt-26  md:mt-32 px-5 ">
      <div className="text-center">
        <p className="text-2xl md:text-3xl font-bold text-primary-gold uppercase">
          Our Services
        </p>

        <h2 className="text-3xl md:text-3xl mt-2 font-semibold text-black">
          End-to-End Solutions for Your Business
        </h2>

        <p className="mt-5 text-text-dark-gray max-w-2xl mx-auto">
          We provide a wide range of services to help startups and businesses
          bring their ideas to life.
        </p>
      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
        {services.slice(0, 3).map((service) => {
          const Icon = service.icon;

          return (
            <div
              key={service.title}
              className="border border-gray-200 rounded-xl items-center flex flex-col   p-8 hover:shadow-lg transition-all duration-300 "
            >
              <Icon size={36} className="text-primary-gold mb-6" />

              <h3 className="text-xl font-bold mb-5">{service.title}</h3>

              <ul className="space-y-3  font-semibold text-text-dark-gray">
                {service.points.map((point) => (
                  <li key={point}>• {point}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      {/* Second Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 max-w-4xl mx-auto">
        {services.slice(3).map((service) => {
          const Icon = service.icon;

          return (
            <div
              key={service.title}
              className="border border-gray-200 rounded-xl p-8 flex flex-col items-center  hover:shadow-lg transition-all duration-300"
            >
              <Icon size={36} className="text-primary-gold mb-6" />

              <h3 className="text-xl font-bold mb-5">{service.title}</h3>

              <ul className="space-y-3  font-semibold text-text-dark-gray">
                {service.points.map((point) => (
                  <li key={point}>• {point}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      <div className="mt-14 border border-gray-200 rounded-xl p-8 flex flex-col w-[80%] mx-auto  md:flex-row justify-between items-center gap-6">
        <div>
          <h3 className="text-2xl font-bold text-black">
            Have a project in mind?
          </h3>

          <p className="text-text-dark-gray font-medium mt-2">
            Let's discuss how we can help you.
          </p>
        </div>

        <button className="bg-primary-gold text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition">
          Get In Touch
        </button>
      </div>
    </div>
  );
};
