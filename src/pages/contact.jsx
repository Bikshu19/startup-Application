import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import WhatsAppButton from '../components/whatsapp.jsx';
import ChatWidget from '../components/ChatWidget';

function Contact() {
  return (
    <div>
        <Navbar/>
        <WhatsAppButton/>
        <ChatWidget/>
        <Footer/>
    </div>
  )
}

export default Contact