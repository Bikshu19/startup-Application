import React from 'react';
import {Link} from 'react-router-dom'

function Aboutimage() {
  return (
    <div>
<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    
    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
      {/*rey ekkada chudu cursor pointer add chesam*/}
        <div className="rounded-lg h-64 overflow-hidden hover:cursor-pointer ">
         <Link to='/aadhya'> <img
            alt="content"
            className="object-cover object-center h-full w-full"
            src="./1d.jpg"
          /></Link>
        </div>
        <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
          Career Guidance & Mentorship
        </h2>
        <p className="text-base leading-relaxed mt-2">
          Personalized counseling for career planning.<br/>
Resume building, interview preparation, and portfolio review.
        </p>
      </div>
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <Link to='/aadhya'><div className="rounded-lg h-64 overflow-hidden hover:cursor-pointer">
          <img
            alt="content"
            className="object-cover object-center h-full w-full"
            src="1a.webp"
          />
        </div></Link>
        <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
          Expert Faculty
        </h2>
        <p className="text-base leading-relaxed mt-2">
          Trainers with industry experience.<br/>
Hands-on teaching approach with real-time project exposure.
        </p>
      </div>
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div className="rounded-lg h-64 overflow-hidden hover:cursor-pointer">
          <Link to='/aadhya'><img
            alt="content"
            className="object-cover object-center h-full w-full"
            src="1b.jpg"
          /></Link>
        </div>
        <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
        Industry-Relevant Curriculum
        </h2>
        <p className="text-base leading-relaxed mt-2">
          Courses designed as per current market trends and employer demands.<br/>
Includes technologies like Java, Web Development..,
        </p>
      </div>
    </div>
  </div>
</section>


    </div>
  )
}

export default Aboutimage