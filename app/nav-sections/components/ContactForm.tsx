import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ClipLoader } from "react-spinners";
import { toast } from "react-toastify";

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
    .min(300, "Message must be at least 300 characters")
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
        <Form className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="relative">
              <Field
                name="name"
                type="text"
                placeholder="Enter Your Full Name"
                className={` w-full rounded-lg px-5  py-3 outline-none focus:border-primary-gold bg-white ${
                  touched.name && errors.name
                    ? "border border-red-500"
                    : "border border-gray-300"
                }`}
              />

              <label
                htmlFor="name"
                className="absolute left-4 -top-3 text-sm bg-white px-1 text-primary-gold font-semibold "
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
              <Field
                name="email"
                type="email"
                placeholder="Your Email"
                className={`w-full rounded-lg px-5 py-3 outline-none focus:border-primary-gold ${
                  touched.email && errors.email
                    ? "border border-red-500"
                    : "border border-gray-200"
                }`}
              />
              <label
                htmlFor="email"
                className="absolute left-4 -top-3 text-sm bg-white px-1 text-primary-gold font-semibold "
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
            <Field
              name="subject"
              type="text"
              placeholder="Subject"
              className={`w-full rounded-lg px-5 py-3 outline-none focus:border-primary-gold ${
                touched.subject && errors.subject
                  ? "border border-red-500"
                  : "border border-gray-200"
              }`}
            />
            <label
              htmlFor="subject"
              className="absolute left-4 -top-3 text-sm bg-white px-1 text-primary-gold font-semibold "
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
            <Field
              as="textarea"
              name="message"
              rows={7}
              placeholder="Message"
              className={`w-full rounded-lg px-5 py-3 outline-none focus:border-primary-gold ${
                touched.message && errors.message
                  ? "border border-red-500"
                  : "border border-gray-200"
              }`}
            />
            <label
              htmlFor="name"
              className="absolute left-4 -top-3 text-sm bg-white px-1 text-primary-gold font-semibold "
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
            className="w-full bg-primary-gold text-white font-semibold py-3 rounded-lg hover:opacity-90 transition disabled:opacity-50"
          >
            {isSubmitting ? (
              <ClipLoader size={20} color="#fff" />
            ) : (
              "Send Message"
            )}{" "}
          </button>
        </Form>
      )}
    </Formik>
  );
}
