"use client";

import { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
import { HomePage } from "./nav-sections/Home";
import { About } from "./nav-sections/About";
import { Services } from "./nav-sections/Services";
import { Careers } from "./nav-sections/Careers";
import { ContactUs } from "./nav-sections/Contactus";

export default function Page() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar activeSection={activeSection} />

      <section id="home">
        <HomePage />
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
    </>
  );
}
