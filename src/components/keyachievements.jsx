import React from 'react'

function Rating() {
  return (
    <div>
        <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl title-font mb-4 text-[#320A6B] text-lg font-bold">
        Key Achievements
      </h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
        Our success is measured by the success of our students. With hundreds of successful placements, partnerships, and completed training programs, we take pride in being a trusted learning partner for aspiring professionals.
      </p>
    </div>
    <div className="flex flex-wrap -m-4 text-center">
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="text-[#320A6B] w-12 h-12 mb-3 inline-block"
            viewBox="0 0 24 24"
          >
            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
            <circle cx={9} cy={7} r={4} />
            <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75" />
          </svg>
          <h2 className="title-font font-medium text-3xl text-gray-900">
            2000+
          </h2>
          <p className="leading-relaxed">Active Students</p>
        </div>
      </div>
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
          <svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  strokeWidth={1.5}
  stroke="currentColor"
  className="w-12 h-12 text-[#320A6B] mb-3 inline-block"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M12 14l9-5-9-5-9 5 9 5z"
  />
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M12 14l6.16-3.422A12.083 12.083 0 0118 20.25H6a12.083 12.083 0 01-.16-9.672L12 14z"
  />
</svg>

          <h2 className="title-font font-medium text-3xl text-gray-900">
            1000+
          </h2>
          <p className="leading-relaxed">Graduates</p>
        </div>
      </div>
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
          <svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  strokeWidth={1.5}
  stroke="currentColor"
  className="w-12 h-12 text-[#320A6B] mb-3 inline-block"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M4.5 3.75h15M4.5 3.75v16.5M19.5 3.75v16.5M4.5 20.25h15"
  />
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M8.25 6.75h7.5M8.25 10.5h4.5"
  />
</svg>

          <h2 className="title-font font-medium text-3xl text-gray-900">300+</h2>
          <p className="leading-relaxed">Expert Instructor's</p>
        </div>
      </div>
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
<svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  strokeWidth={1.5}
  stroke="currentColor"
  className="w-12 h-12 text-[#320A6B] mb-3 inline-block"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M12 11l3.5-3.5m0 0l1.5 1.5a2 2 0 002.828 0l.672-.672a2 2 0 000-2.828l-1.5-1.5a2 2 0 00-2.828 0l-.672.672m0 0L12 5M6 19l3.5-3.5M6 19l-1.5-1.5a2 2 0 010-2.828l.672-.672a2 2 0 012.828 0l1.5 1.5M6 19l6-6"
  />
</svg>
          <h2 className="title-font font-medium text-3xl text-gray-900">150+</h2>
          <p className="leading-relaxed">Partners</p>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Rating