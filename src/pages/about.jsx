import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import WhatsAppButton from "../components/whatsapp";
import ChatWidget from "../components/ChatWidget";
import AboutPageImage from "../components/AboutPageImage";

function About() {
  return (
    <div>
      <Navbar />
      <AboutPageImage />

      <WhatsAppButton />
      <ChatWidget />
      <Footer />
    </div>
  );
}

export default About;
