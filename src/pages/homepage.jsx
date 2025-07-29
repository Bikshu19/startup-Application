import React from "react";
import Navbar from "../components/Navbar";
import Image from "../components/Image";
import Aboutsection from "../components/aboutsection";
import Courses from "../components/courses";
import Howeork from "../components/howwork";
import Uniqueness from "../components/uniqueness";
import Keyachievements from "../components/keyachievements";
import StarRating from "../components/hu.jsx";
import Accredited from "../components/accredited.jsx";
import Footer from "../components/footer.jsx";
import ChatWidget from "../components/ChatWidget";
import WhatsAppButton from "../components/whatsapp.jsx";

function Homepage() {
  return (
    <div>
      <Navbar />
      <Image />
      <Aboutsection />
      <Courses />
      <Howeork />
      <Uniqueness />
      <Keyachievements />
      <StarRating rating={4} />
      <Accredited />
      <Footer />
      <ChatWidget />
      <WhatsAppButton />
    </div>
  );
}

export default Homepage;
