import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-background-black border-t border-white/10 text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-12">
        <div className="grid grid-cols-1 gap-10 text-center md:grid-cols-4 md:text-left">
          {/* Logo */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center">
              <img
                src="/K-logo.png"
                alt="Konetrix Solutions"
                className="h-14 w-auto"
              />

              <div className="-ml-2 flex flex-col items-center">
                <h4 className="text-sm font-bold uppercase tracking-widest md:text-base">
                  Konetrix
                </h4>

                <span className="text-primary-gold text-[10px] uppercase tracking-widest md:text-xs">
                  Solutions
                </span>
              </div>
            </div>

            <div className="mt-4 space-y-2">
              <p className="text-primary-gold text-xs uppercase tracking-[0.35em]">
                Build • Scale • Deliver
              </p>
            </div>
          </div>

          {/*  Links */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">Quick Links</h3>

            <div className="flex flex-col gap-3 text-gray-400">
              <Link
                href="#home"
                className="transition-colors duration-300 hover:text-primary-gold"
              >
                Home
              </Link>

              <Link
                href="#about"
                className="transition-colors duration-300 hover:text-primary-gold"
              >
                About Us
              </Link>

              <Link
                href="#services"
                className="transition-colors duration-300 hover:text-primary-gold"
              >
                Services
              </Link>

              <Link
                href="#careers"
                className="transition-colors duration-300 hover:text-primary-gold"
              >
                Careers
              </Link>

              <Link
                href="#contact"
                className="transition-colors duration-300 hover:text-primary-gold"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">Services</h3>

            <div className="flex flex-col gap-3 text-gray-400">
              <p>Web & Mobile Applications</p>
              <p>Software Development</p>
              <p>Cloud Solutions</p>
              <p>API Integration</p>
              <p>Support & Maintenance</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">Contact</h3>

            <div className="space-y-3 text-gray-400">
              <p>📍 India | Remote</p>

              <p>📧 konetrixsolutions@gmail.com</p>

              <a
                href="https://www.linkedin.com/company/konetrix-solutions/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block transition-colors duration-300 hover:text-primary-gold"
              >
                🔗 LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-white/10 pt-6">
          <p className="text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Konetrix Solutions. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
