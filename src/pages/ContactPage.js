import React from "react";
import Hero from "../components/Hero";
import contactImage from "../images/contactBcg.jpeg";
import Contact from "../components/ContactPage/Contact";

export default function ContactPage() {
  return (
    <>
      <Hero img={contactImage} />
      <Contact />
    </>
  );
}
