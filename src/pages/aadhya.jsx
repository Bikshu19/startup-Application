import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import WhatsAppButton from "../components/whatsapp";
import ChatWidget from "../components/ChatWidget";
import AadhyaImage from "../components/aadhyaimage";
import Aadhyatext from "../components/aadhyatext";
import Aadhyahey from "../components/aadhyahey";
import Aadhyaintern from '../components/aadhyaintern';
import Aadhyalive from '../components/aadhyaliveprojects';
import Aadhyadomain from '../components/aadhyadomain';
import Aadhyaexp from '../components/aadhyaexp';
import Keyachievements from '../components/keyachievements';
import Aadhyaclient from '../components/aadhyaclient';

function Aadhya() {
  return (
    <div>
      <Navbar />
      <AadhyaImage/>
      <Aadhyatext/>
      <Aadhyahey/>
      <Aadhyaintern/>
      <Aadhyalive/>
      <Aadhyadomain/>
      <Aadhyaexp/>
      <Keyachievements/>
      <Aadhyaclient/>
      <WhatsAppButton />
      <ChatWidget />
      <Footer />
    </div>
  );
}

export default Aadhya;
