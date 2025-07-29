import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import WhatsAppButton from "../components/whatsapp";
import ChatWidget from "../components/ChatWidget";

function Courses() {
  return (
    <div>
      <Navbar />
      <h1>ALL courses</h1>
      <WhatsAppButton />
      <ChatWidget/>
      <Footer />
    </div>
  );
}

export default Courses;
