import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import WhatsAppButton from '../components/whatsapp';
import ChatWidget from '../components/ChatWidget';

function Aadhya() {
  return (
    <div>
        <Navbar/>
        <WhatsAppButton/>
        <ChatWidget/>
        <Footer/>
    </div>
  )
}

export default Aadhya