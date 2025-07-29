<<<<<<< HEAD
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import WhatsAppButton from '../components/whatsapp';
import ChatWidget from '../components/ChatWidget';
import Contacts from '../components/ContactForm';

=======
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import WhatsAppButton from "../components/whatsapp";
import ChatWidget from "../components/ChatWidget";

import ContactPage from "../components/ContactForm";
import ContactCards from "../components/ContactCards";
import CustomerCare from "../components/CustomerCare";
>>>>>>> c450ec958f3f2e5c94f9d80324ab1a2ac8b7f437

function Contact() {
  return (
    <div>
      <Navbar />
<<<<<<< HEAD
      <Contacts/>
=======
      <ContactPage />
      <ContactCards />
      <CustomerCare />
>>>>>>> c450ec958f3f2e5c94f9d80324ab1a2ac8b7f437
      <WhatsAppButton />
      <ChatWidget />
      <Footer />
    </div>
  );
}

export default Contact;
