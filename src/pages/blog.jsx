import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import WhatsAppButton from "../components/whatsapp";
import ChatWidget from "../components/ChatWidget";
import BlogImg from "../components/BlogImg";
import BlogPage from "../components/BlogPage";

function Blog() {
  return (
    <div>
      <Navbar />
      <BlogImg />
      <BlogPage />
      <WhatsAppButton />
      <ChatWidget />
      <Footer />
    </div>
  );
}

export default Blog;
