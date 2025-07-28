import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import Image from "../components/Image";
import Aboutsection from "../components/aboutsection";
import WhatsAppButton from '../components/whatsapp';
import ChatWidget from '../components/ChatWidget';

function About() {
  return (
    <div>
        <Navbar />
        <Image />
        <Aboutsection />
      <WhatsAppButton/>
        <ChatWidget/>
      <Footer />
    </div>
  );
}

export default About;
