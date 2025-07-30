import React from 'react';
import {Link} from 'react-router-dom';

function Courses() {
  return (
    <div style={{'backgroundColor': '#F4F5FA'}}>
        <section className="body-font" style={{'padding':'10px'}}>
  <div className="container px-5 py-1 mx-auto">
    <div className="flex flex-col text-center w-full mb-10 px-4 sm:px-6 lg:px-8">
  <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-[#320A6B] hover:cursor-default">
    Courses Offered
  </h1>
  <p className="lg:w-2/3 mx-auto leading-relaxed text-base hover:cursor-default">
    At Aadhya Infotech, we offer a wide range of industry-relevant IT training programs designed to equip students and professionals with the skills needed to succeed in today’s digital landscape. Our courses are structured to be practical, job-oriented, and beginner-friendly, with a strong focus on hands-on learning and real-world applications.
  </p>
 <div className="text-center">
  <Link
  to="/courses"
    className="text-indigo-500 inline-flex items-center mt-3 hover:cursor-pointer"
  >
    View More
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      className="w-4 h-4 ml-2"
      viewBox="0 0 24 24"
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  </Link>
</div>

</div>
    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/3 sm:w-1/2 p-4 hover:cursor-pointer">
        <div className="flex relative">
          <img
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center rounded-lg"
            src="./courses/dl.jpg"
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-2 hover:opacity-100 ">
            <h2 className="tracking-widest title-font font-medium text-[#320A6B]  text-lg mb-1">
              DEEP LEARNING
            </h2>
            <h1 className="title-font text-lg font-medium text-[#320A6B] mb-3">
              Master AI with Neural Networks
            </h1>
            <p className="leading-relaxed">
              Learn the fundamentals of deep learning and neural networks using real-world projects.
            </p>
            <Link className="text-indigo-500 inline-flex items-center mt-3 " to='/courses'>Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </Link>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4 hover:cursor-pointer">
        <div className="flex relative">
          <img
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center rounded-lg"
            src="./courses/genai.webp"
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest title-font font-medium text-[#320A6B] text-lg mb-1">
              GENERATIVE AI ESSENTIALS
            </h2>
            <h1 className="title-font text-lg font-medium text-[#320A6B] mb-3">
             Create with the Power of AI
            </h1>
            <p className="leading-relaxed">
              Learn to build AI systems that generate text, images, and more using cutting-edge tools.
            </p>
            <Link className="text-indigo-500 inline-flex items-center mt-3" to='/courses'>Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </Link>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4 hover:cursor-pointer">
        <div className="flex relative">
          <img
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center rounded-lg"
            src="./courses/ml.jpg"
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest title-font font-medium text-[#320A6B] text-lg mb-1">
              MACHINE LEARNING MASTERY
            </h2>
            <h1 className="title-font text-lg font-medium text-[#320A6B] mb-3">
              Learn to Predict with Data
            </h1>
            <p className="leading-relaxed">
            hands-on experience in building intelligent systems using supervised, unsupervised...
            </p>
            <Link className="text-indigo-500 inline-flex items-center mt-3" to='/courses'>Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </Link>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4 hover:cursor-pointer">
        <div className="flex relative">
          <img
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center rounded-lg"
            src="./courses/jaava.png"
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest title-font font-medium text-[#320A6B] text-lg mb-1">
              JAVA PROGRAMMING
            </h2>
            <h1 className="title-font text-lg font-medium text-[#320A6B] mb-3">
              Build Powerful Applications with Java
            </h1>
            <p className="leading-relaxed">
             Learn object-oriented programming, data handling, and application development
            </p>
            <Link className="text-indigo-500 inline-flex items-center mt-3" to='/courses'>Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </Link>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4 hover:cursor-pointer">
        <div className="flex relative">
          <img
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center rounded-lg"
            src="./courses/weeb.jpg"
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest  title-font font-medium text-[#320A6B] text-lg mb-1">
              FULL STACK WEB
            </h2>
            <h1 className="title-font text-lg font-medium text-[#320A6B] mb-3">
             Build Modern Websites from Scratch
            </h1>
            <p className="leading-relaxed">
              Learn to design and develop responsive, dynamic websites.help very much and faster.
            </p>
            <Link className="text-indigo-500 inline-flex items-center mt-3" to='/courses'>Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </Link>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4 hover:cursor-pointer">
        <div className="flex relative">
          <img
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center rounded-lg"
            src="./courses/react.png"
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest title-font font-medium text-[#320A6B] text-lg mb-1">
              REACT.JS DEVELOPMENT
            </h2>
            <h1 className="title-font text-lg font-medium text-[#320A6B] mb-3">
              Build Fast and Dynamic Web Interfaces
            </h1>
            <p className="leading-relaxed">
              Learn how to build modern, component-based web applications using React.js
            </p>
            <Link className="text-indigo-500 inline-flex items-center mt-3" to='/courses'>Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Courses