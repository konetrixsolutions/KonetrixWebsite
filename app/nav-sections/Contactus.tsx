import ContactForm from "./components/ContactForm";
import { ToastContainer, toast } from "react-toastify";
import { MdEmail } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

export const ContactUs = () => {
  return (
    <div className=" mt-26  md:mt-32 px-5 mb-14 md:mb-5 lg:mb-10 ">
      <ToastContainer />

      <div className="flex flex-col md:flex-row gap-12">
        {/* Left Section */}
        <div className="w-full lg:w-[45%] md:pl-10">
          <p className="text-primary-gold uppercase tracking-wider  text-3xl font-bold">
            Contact Us
          </p>

          <h2 className="text-4xl md:text-4xl font-semibold mt-4 leading-tight">
            Let's Build Something
            <br />
            Amazing Together
          </h2>

          <p className="text-text-dark-gray mt-4 leading-7">
            Have a project in mind or want to work with us?
            <br />
            We'd love to hear from you.
          </p>

          {/* Contact Details */}
          <div className="flex items-start gap-4 mt-4">
            <MdEmail className="text-primary-gold text-xl mt-1 shrink-0" />

            <div>
              <h4 className="font-semibold">Email</h4>
              <a
                className="text-text-dark-gray"
                href="mailto:contact@konetrixsolutions.in"
              >
                contact@konetrixsolutions.in
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4 mt-3">
            <MdLocationOn className="text-primary-gold text-xl mt-1 shrink-0" />

            <div>
              <h4 className="font-semibold">Location</h4>
              <p className="text-text-dark-gray">India | Remote</p>
            </div>
          </div>

          <div className="flex items-start gap-4 mt-3">
            <FaLinkedin className="text-primary-gold text-xl mt-1 shrink-0" />

            <div>
              <h4 className="font-semibold">Connect</h4>
              <a
                href="https://www.linkedin.com/company/konetrix-solutions/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-dark-gray hover:text-primary-gold transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-[55%]">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};
