import { ValuesAndTech } from "./components/ValuesandTech";

export const About = () => {
  return (
    <div className="min-h-screen mt-26  md:mt-32 px-5 ">
      <div className="flex flex-col md:flex-row gap-8 items-center md:px-10">
        <div className="w-full md:w-[60%] flex flex-col gap-5">
          <h1 className="text-2xl md:text-3xl font-bold text-primary-gold uppercase">
            About Us
          </h1>

          <h2 className="text-3xl md:text-5xl font-bold text-black">
            We Are Konetrix Solutions
          </h2>

          <img
            src="/about_img.png"
            alt="Konetrix Office"
            className="block md:hidden w-full rounded-2xl"
          />

          <p className="text-sm md:text-base text-text-dark-gray text-justify  leading-7">
            At Konetrix Solutions, we believe technology should be a catalyst
            for growth, innovation, and transformation. We are a
            technology-driven company focused on helping businesses turn ideas
            into scalable digital solutions. From software development and web
            applications to cloud solutions, AI-powered automation, and
            technology consulting, we work with organizations to build reliable
            and future-ready systems that deliver real business value. Our
            approach is centered on understanding business challenges,
            identifying opportunities, and delivering solutions that are
            practical, scalable, and impactful. We combine innovation,
            execution, and modern technology to help businesses adapt and grow
            in an increasingly digital world. Whether you're a startup building
            your first product or an established organization looking to
            accelerate digital transformation, Konetrix Solutions is committed
            to delivering solutions that drive meaningful results.
          </p>

          <p className="text-lg md:text-xl font-bold text-primary-gold">
            Build • Scale • Deliver
          </p>
        </div>

        <div className="hidden md:flex md:w-[40%]">
          <img
            src="/about_img.png"
            alt="Konetrix Office"
            className="w-full rounded-2xl object-cover"
          />
        </div>
      </div>

      <div className="bg-background-black py-2 px-5 md:px-10 mt-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            {
              value: "10+",
              label: "Projects Delivered",
            },
            {
              value: "13+",
              label: "Trusted Clients",
            },
            {
              value: "6+",
              label: "Core Team Members",
            },
            {
              value: "100%",
              label: "Client Success Focus",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="text-center rounded-xl border border-white/10 p-6 hover:border-primary-gold transition-all duration-300"
            >
              <h3 className="text-primary-gold text-3xl md:text-4xl font-bold">
                {item.value}
              </h3>

              <p className="text-white text-sm md:text-base mt-3">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <ValuesAndTech />
    </div>
  );
};
