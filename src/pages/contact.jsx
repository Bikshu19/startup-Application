<<<<<<< HEAD
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import WhatsAppButton from '../components/whatsapp';
import ChatWidget from '../components/ChatWidget';
import Contacts from '../components/contacts';
=======
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import WhatsAppButton from "../components/whatsapp";
import ChatWidget from "../components/ChatWidget";
import ContactForm from "../components/ContactForm";
import ContactPage from "../components/ContactForm";
>>>>>>> d46742fa5f4a4d25d149caba741c051e3b31cbbf

function Contact() {
  return (
    <div>
      <Navbar />
<<<<<<< HEAD
      <Contacts />
=======
      <ContactPage />
>>>>>>> d46742fa5f4a4d25d149caba741c051e3b31cbbf
      <WhatsAppButton />
      <ChatWidget />
      <Footer />
    </div>
  );
}

export default Contact;
