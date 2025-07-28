import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import Image from "../components/Image";
import Aboutsection from "../components/aboutsection";
<<<<<<< HEAD
import WhatsAppButton from '../components/whatsapp';
import ChatWidget from '../components/ChatWidget';
=======
import AboutPageImage from "../components/AboutPageImage";
>>>>>>> 2dfff553740fb9f2a209de654fad83bd39e7a1bf

function About() {
  return (
    <div>
        <Navbar />
<<<<<<< HEAD
        <Image />
=======
      </div>
      <div>
        <AboutPageImage />
      </div>
      <div>
>>>>>>> 2dfff553740fb9f2a209de654fad83bd39e7a1bf
        <Aboutsection />
      <WhatsAppButton/>
        <ChatWidget/>
      <Footer />
    </div>
  );
}

export default About;
