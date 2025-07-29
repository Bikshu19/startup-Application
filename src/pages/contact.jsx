import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import WhatsAppButton from '../components/whatsapp';
import ChatWidget from '../components/ChatWidget';
import Contacts from '../components/contacts';

function Contact() {
  return (
    <div>
      <Navbar />
      <Contacts />
      <WhatsAppButton />
      <ChatWidget />
      <Footer />
    </div>
  );
}

export default Contact;
