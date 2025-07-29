import React from 'react';

const BlogImg = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        {/* Image Section */}
        <div className="lg:max-w-xl lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img
            className="object-cover object-center rounded-lg shadow-lg"
            alt="Aadhaya Infotech"
            src="/1c.webp"
          />
        </div>

        {/* Text Section */}
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1
            style={{ textAlign: 'center', color: '#320A6B' }}
            className="text-4xl mb-7 font-bold"
          >
            Smart Solutions
            <br className="hidden lg:inline-block" />
            for Bold Businesses
          </h1>

          <p className="mb-8 leading-relaxed text-lg text-gray-700">
            At <strong>Aadhaya Infotech</strong>, we deliver reliable, scalable, and secure
            technology solutions tailored to modern business needs. From software
            development and IT consulting to digital transformation, we help your
            business stay ahead of the curve with smart innovation and cutting-edge tools.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BlogImg;
