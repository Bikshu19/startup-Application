import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="text-gray-600 body-font" style={{ backgroundColor: '#F4F5FA' }}>
      {/* Logo */}
      <div className="flex justify-center pt-10">
        <img src="./hey.png" alt="Raavi Aadhya Infotech" className="w-40" />
      </div>

      {/* Description */}
      <div className="text-center max-w-4xl mx-auto px-4 mt-4">
        <h1 className="sm:text-3xl text-2xl font-bold title-font mb-3 text-[#320A6B]">
          Raavi Aadhya Infotech
        </h1>
        <p className="text-sm text-gray-600">
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
      <div className="container px-5 py-12 mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {[
          {
            title: 'Courses',
            items: ['Data Science', 'Java Full Stack', 'Web Development', 'React.js'],
            link:'/courses'
          },
          {
            title: 'Company',
            items: ['About Us', 'How We Work', 'Our Partners', 'Careers'],
            link:'/about'
          },
          {
            title: 'Support',
            items: ['Contact', 'FAQs', 'Help Center', 'Privacy Policy'],
            link:'/contact'
          },
          {
            title: 'Connect',
            items: ['LinkedIn', 'Instagram', 'Facebook', 'YouTube'],
            link:'/contact'
          },
        ].map((section, idx) => (
          <div key={idx}>
            <h2 className="title-font font-semibold text-gray-900 text-sm mb-4 hover:cursor-pointer">
              {section.title}
            </h2>
            <ul className="space-y-2">
              {section.items.map((item, i) => (
                <li key={i}>
                  <Link to={section.link} className="text-gray-600 hover:text-[#320A6B] transition duration-200 cursor-pointer">{item}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Footer Bottom */}
      <div className="bg-gray-200">
        <div className="container mx-auto py-4 px-5 flex flex-col items-center justify-center gap-4">
          <p className="text-sm text-gray-600 text-center">
            © 2025 Raavi Aadhya Infotech — All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="inline-flex space-x-4">
            {[
              {
                name: 'Facebook',
                href: '#',
                icon: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z',
              },
              {
                name: 'Twitter',
                href: '#',
                icon:
                  'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z',
              },
              {
                name: 'Instagram',
                href: '#',
                icon:
                  'M16 8a6 6 0 11-12 0 6 6 0 0112 0zM2 12a10 10 0 1020 0 10 10 0 00-20 0z',
              },
            ].map((social, i) => (
              <a
                key={i}
                className="text-gray-500 hover:text-[#320A6B] transition-colors"
                href={social.href}
                aria-label={social.name}
              >
                <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d={social.icon}></path>
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
