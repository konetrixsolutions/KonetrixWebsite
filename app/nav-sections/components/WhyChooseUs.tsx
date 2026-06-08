import { FaPuzzlePiece, FaCode, FaBolt, FaUsers } from "react-icons/fa";

export const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaPuzzlePiece />,
      title: "Scalable Solutions",
      desc: "We build solutions that grow with your business.",
    },
    {
      icon: <FaCode />,
      title: "Modern Technologies",
      desc: "We use the latest tools and frameworks.",
    },
    {
      icon: <FaBolt />,
      title: "Agile & Fast Delivery",
      desc: "We follow agile practices to deliver on time.",
    },
    {
      icon: <FaUsers />,
      title: "Client-Centric Approach",
      desc: "Your success is our top priority.",
    },
  ];
  const processSteps = [
    {
      number: "01",
      title: "Discover",
      desc: "Understand your goals and challenges.",
    },
    {
      number: "02",
      title: "Plan",
      desc: "Strategy, roadmap & solution architecture.",
    },
    {
      number: "03",
      title: "Build",
      desc: "Development with quality & performance.",
    },
    {
      number: "04",
      title: "Deliver",
      desc: "Testing, deployment & continuous support.",
    },
  ];

  return (
    <div>
      <section className="py-20 px-5 md:px-10">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-primary-gold uppercase tracking-[0.3em] text-base font-bold">
            WHY CHOOSE KONETRIX
          </p>

          <h2 className="text-3xl font-bold mt-4">
            We Don't Just Build.
            <span className="text-primary-gold"> We Solve.</span>
          </h2>

          <p className="text-text-dark-gray mt-5">
            We combine modern technology, agile execution, and business-first
            thinking to deliver scalable digital solutions.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
          {features.map((item) => (
            <div
              key={item.title}
              className="group flex flex-col items-center text-center p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-full border border-primary-gold flex items-center justify-center text-primary-gold text-2xl group-hover:bg-primary-gold group-hover:text-white transition-all duration-300">
                {item.icon}
              </div>

              <h3 className="font-bold text-xl mt-5">{item.title}</h3>

              <p className="text-text-dark-gray text-sm mt-3 leading-6">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
      <section className="pt-10 px-5 md:px-10 border-t border-gray-200">
        <div className="text-center">
          <p className="text-primary-gold uppercase tracking-[0.25em] text-base font-bold">
            Our Process
          </p>

          <h2 className="text-3xl  font-bold mt-4">
            Simple, Transparent & Effective
          </h2>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {processSteps.map((step) => (
            <div
              key={step.number}
              className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-4xl font-black text-primary-gold">
                {step.number}
              </div>

              <h3 className="font-bold text-xl mt-5">{step.title}</h3>

              <p className="text-text-dark-gray text-sm mt-3 leading-6">
                {step.desc}
              </p>

              <div className="w-12 h-1 bg-primary-gold mt-6 rounded-full" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
