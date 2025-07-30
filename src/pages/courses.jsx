import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import WhatsAppButton from "../components/whatsapp";
import ChatWidget from "../components/ChatWidget";
import CoursesPage from "../components/CoursesPage";

function Courses() {
  return (
    <div>
      <Navbar />
      <CoursesPage />
      <WhatsAppButton />
      <ChatWidget />
      <Footer />
    </div>
  );
}

export default Courses;
