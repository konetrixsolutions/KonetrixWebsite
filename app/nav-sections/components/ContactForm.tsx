import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ClipLoader } from "react-spinners";
import { toast } from "react-toastify";
import { FiUser, FiMail, FiMessageSquare } from "react-icons/fi";

const contactSchema = Yup.object({
  name: Yup.string()
    .trim()
    .matches(/^[A-Za-z\s.'-]+$/, "Please enter a valid name")
    .min(2, "Name must be at least 2 characters")
    .required("Name is required"),

  email: Yup.string()
    .trim()
    .matches(
      /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
      "Please enter a valid email address",
    )
    .required("Email is required"),

  subject: Yup.string()
    .trim()
    .matches(/^[A-Za-z0-9\s.,!?&()'":-]+$/, "Please enter a valid subject")
    .min(20, "Subject must be at least 20 characters")
    .max(1000, "Subject cannot exceed 1000 characters")
    .required("Subject is required"),

  message: Yup.string()
    .trim()
    .min(100, "Message must be at least 100 characters")
    .max(1000, "Message cannot exceed 1000 characters")
    .required("Message is required"),
});

export default function ContactForm() {
  const handleFormSubmit = async (
    values: {
      name: string;
      email: string;
      subject: string;
      message: string;
    },
    { resetForm }: any,
  ) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      toast.success("Message sent successfully!", {
        style: {
          fontSize: "16px",
          fontWeight: "600",
          color: "#16a34a",
        },
      });
      resetForm();
    } catch (error: any) {
      toast.error(error.message, {
        style: {
          fontSize: "14px",
          fontWeight: "500",
          color: "#dc2626",
        },
      });
    }
  };

  <Formik
    initialValues={{
      name: "",
      email: "",
      subject: "",
      message: "",
    }}
    validationSchema={contactSchema}
    onSubmit={handleFormSubmit}
    validateOnBlur={false}
    validateOnChange={false}
  ></Formik>;
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        subject: "",
        message: "",
      }}
      validationSchema={contactSchema}
      onSubmit={handleFormSubmit}
    >
      {({ isSubmitting, touched, errors, values }) => (
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100">
          <Form className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="relative">
                <div className="absolute left-4 top-4 text-gray-400">
                  <FiUser fill="" />
                </div>
                <Field
                  name="name"
                  type="text"
                  placeholder="Enter Your Full Name"
                  className={`w-full
pl-9
pr-5
py-3
rounded-xl
bg-gray-50
border
border-gray-200
outline-none
focus:outline-none
focus:border-primary-gold
focus:ring-4
focus:ring-primary-gold/20
transition-all
duration-300
${touched.name && errors.name ? "border-red-500" : "border-gray-200"}`}
                />

                <label
                  htmlFor="name"
                  className="
    absolute left-4 -top-2
    bg-white px-2
    text-xs font-semibold
    text-primary-gold
    uppercase tracking-wider
  "
                >
                  Name
                </label>

                <ErrorMessage
                  name="name"
                  component="p"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div className="relative">
                <div className="absolute left-4 top-5 text-gray-400">
                  <FiMail fill="" />
                </div>
                <Field
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  className={`w-full 
pl-9
pr-5
py-3
rounded-xl
bg-gray-50
border
border-gray-200
outline-none
focus:outline-none
focus:border-primary-gold
focus:ring-4
focus:ring-primary-gold/20
transition-all
duration-300
${touched.email && errors.email ? "border-red-500" : "border-gray-200"}`}
                />
                <label
                  htmlFor="email"
                  className="
    absolute left-4 -top-2
    bg-white px-2
    text-xs font-semibold
    text-primary-gold
    uppercase tracking-wider
  "
                >
                  Email
                </label>
                <ErrorMessage
                  name="email"
                  component="p"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
            </div>

            <div className="relative">
              <div className="absolute left-4 top-5 text-gray-400">
                <FiMessageSquare fill="" />
              </div>
              <Field
                name="subject"
                type="text"
                placeholder="Subject"
                className={`w-full
pl-9
pr-5
py-3
rounded-xl
bg-gray-50
border
border-gray-200
outline-none
focus:outline-none
focus:border-primary-gold
focus:ring-4
focus:ring-primary-gold/20
transition-all
duration-300
${touched.subject && errors.subject ? "border-red-500" : "border-gray-200"}`}
              />
              <label
                htmlFor="subject"
                className="
    absolute left-4 -top-2
    bg-white px-2
    text-xs font-semibold
    text-primary-gold
    uppercase tracking-wider
  "
              >
                Subject
              </label>
              <ErrorMessage
                name="subject"
                component="p"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div className="relative">
              <div className="absolute left-4 top-5 text-gray-400">
                <FiMessageSquare fill="" />
              </div>
              <Field
                as="textarea"
                name="message"
                rows={7}
                placeholder="Message"
                className={`w-full
pl-9
pr-5
py-3

rounded-xl
bg-gray-50
border
border-gray-200
outline-none
focus:outline-none
focus:border-primary-gold
focus:ring-4
focus:ring-primary-gold/20
transition-all
duration-300
${touched.message && errors.message ? "border-red-500" : "border-gray-200"}`}
              />
              <label
                htmlFor="message"
                className="
    absolute left-4 -top-2
    bg-white px-2
    text-xs font-semibold
    text-primary-gold
    uppercase tracking-wider
  "
              >
                Message
              </label>
              <ErrorMessage
                name="message"
                component="p"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <button
              type="submit"
              disabled={
                isSubmitting ||
                !values.name.trim() ||
                !values.email.trim() ||
                !values.subject.trim() ||
                !values.message.trim()
              }
              className="
w-full
bg-primary-gold
text-white
font-semibold
py-4
rounded-xl
shadow-lg
shadow-primary-gold/30
hover:-translate-y-1
hover:shadow-xl
hover:shadow-primary-gold/40
transition-all
duration-300
disabled:opacity-50
disabled:hover:translate-y-0
"
              // className="w-full bg-primary-gold text-white font-semibold py-3 rounded-lg hover:opacity-90 transition disabled:opacity-50"
            >
              {isSubmitting ? (
                <ClipLoader size={20} color="#fff" />
              ) : (
                "Send Message"
              )}{" "}
            </button>
          </Form>
        </div>
      )}
    </Formik>
  );
}
