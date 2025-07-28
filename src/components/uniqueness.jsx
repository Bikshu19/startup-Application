import React from "react";

function UniqueFeatures() {
  const features = [
  {
    "title": "Personalized Career Guidance",
    "description": "We provide one-on-one counseling to help you select the right career path based on your goals and background."
  },
  {
    "title": "Industry-Driven Curriculum",
    "description": "Courses are tailored to meet current industry standards with practical tools and frameworks."
  },
  {
    "title": "Live Projects & Hands-On Training",
    "description": "Gain real-world experience by working on live projects guided by experienced mentors."
  },
  {
    "title": "Placement Assistance",
    "description": "We support your job hunt with resume help, mock interviews, and interview referrals."
  },
  {
    "title": "Hybrid Learning Flexibility",
    "description": "Attend sessions online, offline, or in hybrid mode. Our flexible model fits your schedule without compromising quality."
  },
  {
    "title": "Lifetime Learning Support",
    "description": "Access course materials and expert guidance even after completion — because learning never stops."
  }
]
;

  return (
    <section className="text-gray-700 body-font bg-[#F4F5FA] py-12">
      <div className="container px-5 mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-[#320A6B] mb-4">Standout Features That Set Us Apart</h1>
          <p className="text-base text-[#320A6B]">
            What sets Aadhya Infotech apart from the rest.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-indigo-100 transition"
            >
              <h2 className="text-lg font-semibold text-blue-950 mb-2">
                {feature.title}
              </h2>
              <p className="text-[#320A6B] text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default UniqueFeatures;
