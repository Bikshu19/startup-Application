import React from 'react';

function Footer() {
  return (
    <footer className="text-gray-600 body-font" style={{ backgroundColor: '#F4F5FA' }}>
      {/* Logo */}
      <div className="flex justify-center pt-10">
        <img src="./hey.png" alt="Raavi Aadhya Infotech" className="w-40" />
      </div>

      {/* Description */}
      <div className="text-center max-w-4xl mx-auto px-4">
        <h1 className="sm:text-3xl text-2xl font-bold title-font mb-3 text-[#320A6B]">Raavi Aadhya Infotech</h1>
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
        {/* Column */}
        {[
          {
            title: 'Courses',
            items: ['Data Science', 'Java Full Stack', 'Web Development', 'React.js'],
          },
          {
            title: 'Company',
            items: ['About Us', 'How We Work', 'Our Partners', 'Careers'],
          },
          {
            title: 'Support',
            items: ['Contact', 'FAQs', 'Help Center', 'Privacy Policy'],
          },
          {
            title: 'Connect',
            items: ['LinkedIn', 'Instagram', 'Facebook', 'YouTube'],
          },
        ].map((section, idx) => (
          <div key={idx}>
            <h2 className="title-font font-semibold text-gray-900 text-sm mb-4">{section.title}</h2>
            <ul className="space-y-2">
              {section.items.map((item, i) => (
                <li key={i}>
                  <a className="text-gray-600 hover:text-[#320A6B] transition duration-200 cursor-pointer">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Footer Bottom */}
      <div className="bg-gray-200">
        <div className="container mx-auto py-4 px-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600 text-center sm:text-left">
            © 2025 Raavi Aadhya Infotech — All rights reserved.
          </p>
          <div className="inline-flex space-x-4">
            {[
              { name: 'Facebook', href: '#', icon: 'M18 2h-3a5...' },
              { name: 'Twitter', href: '#', icon: 'M23 3a...' },
              { name: 'Instagram', href: '#', icon: 'M16 8a...' },
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
