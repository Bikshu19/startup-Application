import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import WhatsAppButton from "../components/whatsapp";
import ChatWidget from "../components/ChatWidget";
import Abotpage from "../components/abotpage";
import Abot1 from "../components/abot1";
import Abotbackground from "../components/abotbackground";
import Howeork from "../components/howwork";
import Keyachievements from '../components/keyachievements';
import Rating from "../components/hu";

function About() {
  return (
    <div>
      <Navbar />
      <Abotpage/>
      <Abot1/>
      <Abotbackground/>
      <Howeork/>
      <Keyachievements/>
      <Rating/>
      <WhatsAppButton />
      <ChatWidget />
      <Footer />
    </div>
  );
}

export default About;
