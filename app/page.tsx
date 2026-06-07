"use client";

import { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
import { HomePage } from "./nav-sections/Home";
import { About } from "./nav-sections/About";
import { Services } from "./nav-sections/Services";
import { Careers } from "./nav-sections/Careers";
import { ContactUs } from "./nav-sections/Contactus";
import { Footer } from "./components/Footer";

export default function Page() {
  const [activeSection, setActiveSection] = useState("home");

  // useEffect(() => {
  //   const sections = document.querySelectorAll("section");

  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           setActiveSection(entry.target.id);
  //         }
  //       });
  //     },
  //     {
  //       threshold: 0.5,
  //     },
  //   );

  //   sections.forEach((section) => observer.observe(section));

  //   return () => observer.disconnect();
  // }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");

      sections.forEach((section) => {
        const top = section.offsetTop - 120;
        const height = section.clientHeight;
        const id = section.id;

        if (window.scrollY >= top && window.scrollY < top + height) {
          setActiveSection(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar activeSection={activeSection} />

      <section id="home">
        <HomePage activeSection={activeSection} />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="careers">
        <Careers />
      </section>

      <section id="contact">
        <ContactUs />
      </section>
      <Footer />
    </>
  );
}
