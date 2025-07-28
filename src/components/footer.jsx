import React from 'react';

function Footer() {
  return (
    <footer className="text-gray-600 body-font" style={{'backgroundColor': '#F4F5FA'}}>
      {/* Logo at the Top Center */}
      <div className="flex justify-center pt-10">
        <img
          src="./hey.png"
          alt="Raavi Aadhya Infotech"
          className="w-40"
        />
      </div>

      {/* Company Description */}
      <div className="text-center max-w-4xl mx-auto px-4  z-20">
        <h1 className="sm:text-3xl text-2xl font-bold title-font mb-3 text-[#320A6B]">
        Raavi Aadhya Infotech
      </h1>
        <p className="text-sm text-gray-600 ">
          Raavi Aadhya Infotech provides a platform for aspiring professionals through
          high-quality internships, live projects, and hands-on experience in IT,
          Engineering, Management, Digital Marketing, Data Science, and more.
        </p>
        <p className="text-sm text-gray-600 mt-2">
          We collaborate with industry experts, startups, and companies to equip students
          with practical skills, industry insights, and confidence to thrive in their careers.
        </p>
      </div>

      {/* Footer Links */}
      <div className="container px-5 py-12 mx-auto flex flex-wrap justify-center text-center md:text-left md:justify-between ">
        {/* Courses */}
        <div className="w-1/2 sm:w-1/4 px-4 mb-6 ">
          <h2 className="title-font font-semibold text-gray-900 text-sm mb-3 ">Courses</h2>
          <ul className="space-y-2 hover:cursor-pointer">
            <li><a className="hover:text-[#320A6B]">Data Science</a></li>
            <li><a className="hover:text-[#320A6B]">Java Full Stack</a></li>
            <li><a className="hover:text-[#320A6B]">Web Development</a></li>
            <li><a className="hover:text-[#320A6B]">React.js</a></li>
          </ul>
        </div>

        {/* Company */}
        <div className="w-1/2 sm:w-1/4 px-4 mb-6 ">
          <h2 className="title-font font-semibold text-gray-900 text-sm mb-3">Company</h2>
          <ul className="space-y-2 hover:cursor-pointer">
            <li><a className="hover:text-[#320A6B]">About Us</a></li>
            <li><a className="hover:text-[#320A6B]">How We Work</a></li>
            <li><a className="hover:text-[#320A6B]">Our Partners</a></li>
            <li><a className="hover:text-[#320A6B]">Careers</a></li>
          </ul>
        </div>

        {/* Support */}
        <div className="w-1/2 sm:w-1/4 px-4 mb-6 ">
          <h2 className="title-font font-semibold text-gray-900 text-sm mb-3">Support</h2>
          <ul className="space-y-2 hover:cursor-pointer">
            <li><a className="hover:text-[#320A6B]">Contact</a></li>
            <li><a className="hover:text-[#320A6B]">FAQs</a></li>
            <li><a className="hover:text-[#320A6B]">Help Center</a></li>
            <li><a className="hover:text-[#320A6B]">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Connect */}
        <div className="w-1/2 sm:w-1/4 px-4 mb-6 ">
          <h2 className="title-font font-semibold text-gray-900 text-sm mb-3">Connect</h2>
          <ul className="space-y-2 hover:cursor-pointer">
            <li><a className="hover:text-[#320A6B]">LinkedIn</a></li>
            <li><a className="hover:text-[#320A6B]">Instagram</a></li>
            <li><a className="hover:text-[#320A6B]">Facebook</a></li>
            <li><a className="hover:text-[#320A6B]">YouTube</a></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-gray-200">
        <div className="container mx-auto py-4 px-5 flex flex-col sm:flex-row items-center justify-center gap-4">
          <p className="text-sm text-gray-600 text-center">
            © 2025 Raavi Aadhya Infotech — All rights reserved.
          </p>
          <div className="inline-flex space-x-4">
            <a className="text-gray-500 hover:text-[#320A6B]" href="#"><svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24"><path d="M18 2h-3a5..."></path></svg></a>
            <a className="text-gray-500 hover:text-[#320A6B]" href="#"><svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24"><path d="M23 3a..."></path></svg></a>
            <a className="text-gray-500 hover:text-[#320A6B]" href="#"><svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24"><path d="M16 8a..."></path></svg></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
