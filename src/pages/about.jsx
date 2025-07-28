import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import Image from "../components/Image";
import Aboutsection from "../components/aboutsection";

function About() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Image />
      </div>
      <div>
        <Aboutsection />
      </div>
      <Footer />
    </div>
  );
}

export default About;
