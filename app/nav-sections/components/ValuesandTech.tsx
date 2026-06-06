import { Lightbulb, ShieldCheck, BadgeCheck, TrendingUp } from "lucide-react";

export const ValuesAndTech = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      desc: "We embrace new ideas and technologies.",
    },
    {
      icon: ShieldCheck,
      title: "Integrity",
      desc: "We believe in honesty, transparency and trust.",
    },
    {
      icon: BadgeCheck,
      title: "Quality",
      desc: "We deliver reliable and scalable solutions.",
    },
    {
      icon: TrendingUp,
      title: "Growth",
      desc: "We grow together with our clients.",
    },
  ];

  return (
    <section className="py-20 px-5 md:px-10 bg-white">
      <div className="text-center">
        <p className="text-primary-gold uppercase tracking-widest  text-sm font-bold">
          Our Values
        </p>

        <h2 className="mt-3 text-2xl md:text-3xl font-bold">
          The Principles That Drive Us
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mt-14">
        {values.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="text-center flex flex-col items-center"
            >
              <div className="w-12 h-12 rounded-full border border-primary-gold flex items-center justify-center">
                <Icon className="text-primary-gold" size={28} />
              </div>

              <h3 className="mt-5 text-xl font-bold">{item.title}</h3>

              <p className="mt-1 text-text-dark-gray font-medium text-sm leading-6">
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>

      <div className="border-t border-gray-200 my-10" />

      <div className="text-center">
        <p className="text-primary-gold uppercase tracking-widest  text-sm font-bold">
          Technologies We Work With
        </p>

        <div className="flex flex-wrap justify-center items-center gap-10 mt-10">
          <img src="/tech/react.png" alt="React" className="h-12" />

          <img src="/tech/next.png" alt="Next.js" className="h-12" />
          <img src="/tech/Angular.png" alt="angular" className="h-12" />

          <img src="/tech/node.png" alt="Node.js" className="h-12" />

          <img src="/tech/mongodb.png" alt="MongoDB" className="h-12" />

          <img src="/tech/aws.png" alt="AWS" className="h-12" />

          <img src="/tech/docker.png" alt="Docker" className="h-12" />

          <img src="/tech/figma.png" alt="Figma" className="h-12" />
          <img src="/tech/java.png" alt="java" className="h-12" />
          <img src="/tech/ror.png" alt="ror" className="h-12" />
          <img src="/tech/python.png" alt="python" className="h-12" />
        </div>
      </div>
    </section>
  );
};
