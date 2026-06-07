export const Careers = () => {
  const opportunities = [
    {
      title: "Frontend Developer",
      skills: "React, Next.js, TypeScript",
    },
    {
      title: "Backend Developer",
      skills: "Node.js, Express, MongoDB",
    },
    {
      title: "UI/UX Designer",
      skills: "Figma, User Research, Prototyping",
    },
    {
      title: "DevOps Engineer",
      skills: "AWS, Docker, CI/CD",
    },
  ];

  const benefits = [
    {
      title: "Remote First",
      desc: "Work from anywhere",
      icon: "☁️",
    },
    {
      title: "Growth Opportunities",
      desc: "Learn and grow with us",
      icon: "📈",
    },
    {
      title: "Great Culture",
      desc: "Collaborative & friendly",
      icon: "🤝",
    },
    {
      title: "Work-Life Balance",
      desc: "We value your time",
      icon: "⚖️",
    },
  ];

  return (
    <div className="min-h-screen mt-26  md:mt-32 px-9 ">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row items-center gap-10">
        <div className="w-full lg:w-1/2">
          <p className="text-primary-gold uppercase tracking-wider  text-3xl font-bold">
            Careers
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">Join Our Team</h2>

          <p className="text-text-dark-gray mt-5 leading-7">
            We're always looking to connect with passionate developers,
            designers, and innovators. While we don't have active openings at
            the moment, we'd love to hear from talented individuals who share
            our vision.
          </p>
        </div>

        <div className="w-full lg:w-1/2">
          <img
            src="/team_discus.png"
            alt="Team Discussion"
            className="w-full rounded-2xl object-cover"
          />
        </div>
      </div>

      {/* No Openings Message */}
      <div className="mt-14 bg-primary-gold/10 border border-primary-gold rounded-xl p-5">
        <p className="text-center text-sm md:text-base">
          We may not have active openings right now, but we're always looking to
          connect with passionate developers, designers, and innovators. Share
          your resume at <b>konetrixsolutions@gmail.com</b>, and we'll get in
          touch when a role matching your skills becomes available.
        </p>
      </div>

      {/* Future Opportunities */}
      {/* <div className="mt-14">
        <h3 className="text-2xl font-bold uppercase">Future Opportunities</h3>

        <div className="space-y-4 mt-8">
          {opportunities.map((role) => (
            <div
              key={role.title}
              className="border border-gray-200 rounded-xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-5"
            >
              <div>
                <h4 className="font-semibold text-lg">{role.title}</h4>

                <p className="text-text-dark-gray text-sm mt-1">
                  {role.skills}
                </p>
              </div>

              <a
                href="mailto:konetrixsolutions@gmail.com?subject=Resume Submission"
                className="border border-primary-gold text-primary-gold px-5 py-2 rounded-lg text-center hover:bg-primary-gold hover:text-white transition"
              >
                Submit Resume
              </a>
            </div>
          ))}
        </div>
      </div> */}

      {/* Why Work With Us */}
      <div className="bg-background-black text-white rounded-2xl mt-16 py-10 px-6">
        <h3 className="text-center text-2xl font-bold mb-10">
          Why You'll Love Working With Us
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {benefits.map((item) => (
            <div key={item.title} className="text-center">
              <div className="text-4xl mb-4">{item.icon}</div>

              <h4 className="font-semibold">{item.title}</h4>

              <p className="text-gray-400 text-sm mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
