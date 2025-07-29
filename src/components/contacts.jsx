import React from "react";

function Contacts() {
  return (
    <div className="flex flex-col md:flex-row h-screen w-full">
      {/* Left Side - Image with overlay content */}
      <div className="relative w-full md:w-1/2 min-h-[500px]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/c2.jpg"
            alt="Contact Background"
            className="w-full h-full object-cover"
          />
          
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 text-white p-10 h-full flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-4">Contact us</h1>
          <h2 className="text-2xl font-bold mb-2">ADDRESS</h2>
          <p>2970 SW 50th Terrace</p>
          <p>Gainesville, Florida 32608</p>

          <a href="https://maps.google.com" className="underline mt-2">
            VIEW MAP
          </a>

          <p className="mt-4 font-semibold">PHONE</p>
          <p>+1 352-381-4400</p>

          <p className="mt-4 font-semibold">FAX</p>
          <p>+1 888-971-3916</p>

          <p className="mt-6 text-sm">OR</p>

          <button className="mt-4 border px-6 py-2 rounded-full hover:bg-white hover:text-black">
            VISIT PRODUCT SUPPORT →
          </button>
        </div>
      </div>

      {/* Right Side - Contact Form */}
      <div className="md:w-1/2 bg-gray-100 p-10 flex items-center justify-center">
        <form className="bg-white p-8 rounded shadow-lg w-full max-w-md space-y-4">
          <label className="block">
            <span className="text-sm font-medium">Email*</span>
            <input type="email" className="w-full border p-2 mt-1" required />
          </label>

          <div className="flex gap-2">
            <label className="w-1/2">
              <span className="text-sm font-medium">First Name*</span>
              <input type="text" className="w-full border p-2 mt-1" required />
            </label>
            <label className="w-1/2">
              <span className="text-sm font-medium">Last Name*</span>
              <input type="text" className="w-full border p-2 mt-1" required />
            </label>
          </div>

          <div className="flex gap-2">
            <label className="w-1/2">
              <span className="text-sm font-medium">Company Name</span>
              <input type="text" className="w-full border p-2 mt-1" />
            </label>
            <label className="w-1/2">
              <span className="text-sm font-medium">Job Title</span>
              <input type="text" className="w-full border p-2 mt-1" />
            </label>
          </div>

          <label>
            <span className="text-sm font-medium">How did you hear about us?*</span>
            <select className="w-full border p-2 mt-1" required>
              <option>Please Select</option>
              <option>Google</option>
              <option>Friend</option>
              <option>Social Media</option>
            </select>
          </label>

          <label>
            <span className="text-sm font-medium">What can we help you with?*</span>
            <select className="w-full border p-2 mt-1" required>
              <option>Please Select</option>
              <option>Technical Support</option>
              <option>Product Info</option>
              <option>Other</option>
            </select>
          </label>

          <p className="text-xs text-gray-600">
            Infotech needs the contact information you provide to us to contact you about our products and services.
            You may unsubscribe from these communications at any time. For information on how to unsubscribe, check out our
            <a href="#" className="text-blue-500 underline ml-1">Privacy Policy</a>.
          </p>

          <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contacts;
