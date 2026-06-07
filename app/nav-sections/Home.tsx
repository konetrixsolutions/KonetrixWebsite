export const HomePage = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-background-black  -mt-6 px-5 text-white min-h-screen flex items-center relative overflow-hidden">
      {/* Background Gradient Effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -bottom-32 left-0 w-full h-96 bg-linear-to-r from-transparent via-primary-gold/20 to-transparent blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full px-5 md:px-10 py-20">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <p className="text-gray-300 text-lg font-medium">
              Build. Scale. Deliver.
            </p>

            <h1 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
              We Build Digital Solutions
              <br />
              That <span className="text-primary-gold">Drive Real Growth</span>
            </h1>

            <p className="mt-6 text-gray-400 text-base md:text-lg leading-8 max-w-xl mx-auto lg:mx-0">
              From idea to deployment, we build scalable, high-performance
              digital products that help businesses grow and succeed.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center lg:justify-start">
              <button
                onClick={() => scrollToSection("services")}
                className="bg-primary-gold text-white px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition"
              >
                Explore Services
              </button>

              <button
                onClick={() => scrollToSection("contact")}
                className="border border-primary-gold px-8 py-4 rounded-lg font-semibold hover:bg-primary-gold hover:text-white transition"
              >
                Let's Talk
              </button>
            </div>
          </div>

          {/* Right Logo Section */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="text-center">
              <img
                src="/K-logo.png"
                alt="Konetrix Solutions"
                className="w-48 md:w-64 lg:w-80 mx-auto"
              />
              <div className="flex flex-col items-center">
                <h2 className="mt-6 text-3xl md:text-5xl tracking-[0.2em] font-light">
                  KONETRIX
                </h2>

                <p className="text-primary-gold text-lg md:text-2xl tracking-[0.4em] ">
                  SOLUTIONS
                </p>
              </div>

              <p className="mt-6 text-primary-gold tracking-[0.3em] uppercase font-semibold text-sm md:text-base">
                Innovate. Build. Grow.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
