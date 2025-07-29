import React from 'react'

function Abotpage() {
  return (
    <div>
        <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-col">
    <div className="lg:w-4/6 mx-auto">
      <div className="rounded-lg h-64 overflow-hidden">
        <img
          alt="content"
          className="object-cover object-center h-full w-full"
          src="./abotimage.webp"
        />
      </div>
      <div className="flex flex-col sm:flex-row mt-10">
        <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
         <div className="w-20 h-20 rounded-full overflow-hidden inline-flex items-center justify-center bg-gray-200">
  <img
    src="./download.webp" // replace with your image path or URL
    alt="Profile"
    className="w-full h-full object-cover"
  />
</div>

          <div className="flex flex-col items-center text-center justify-center">
            <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
              Founder & CTO, Aadhya Infotech
            </h2>
            <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4" />
            <p className="text-base">
              <strong>Name: Rahul Mehta</strong>
            </p>
          </div>
        </div>
        <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
          <p className="leading-relaxed text-lg mb-4">
            Rahul Mehta is the driving force behind Aadhya Infotech. With over a decade of experience in IT services and enterprise solutions, he founded the company to help businesses harness the power of technology for smarter operations and digital growth. Rahul specializes in building secure, scalable systems and leads a passionate team focused on delivering reliable, future-ready solutions.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Abotpage;