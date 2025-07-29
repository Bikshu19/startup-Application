import React from "react";

const projectData = {
  title: "Live Projects with Real-time Tech Stack",
  subtitle:
    "Get hands-on experience by building real-world applications with guidance from industry experts. Learn by doing, not just watching.",
  features: [
  {
    title: "Web Development",
    description:
      "Design and build real-world websites using HTML, CSS, JavaScript, React, and powerful backend technologies like Node.js or Spring Boot.",
    image: "/images/webdev.jpg",
    linkText: "Learn More",
  },
  {
    title: "AI/ML Projects",
    description:
      "Develop smart applications using Python, machine learning algorithms, and real-world datasets with expert mentorship.",
    image: "/images/ai.jpg",
    linkText: "Learn More",
  },
  {
  title: "Product Management",
  description:
    "Learn how to define product vision, write user stories, manage backlogs, and collaborate with cross-functional teams using agile methodologies.",
  image: "/images/product.jpg",
  linkText: "Learn More",
},
  {
    title: "Mobile App Development",
    description:
      "Build Android and iOS apps using Flutter, React Native, or Kotlin, and learn how to publish them on the Play Store.",
    image: "/images/mobile.jpg",
    linkText: "Learn More",
  },
  {
    title: "UI/UX Design",
    description:
      "Master design thinking, wireframing, and prototyping using tools like Figma and Adobe XD to create intuitive user experiences.",
    image: "/images/uiux.jpg",
    linkText: "Learn More",
  },
  {
    title: "Data Science",
    description:
      "Analyze data, create visualizations, and build predictive models using Python, Pandas, Matplotlib, and Scikit-learn.",
    image: "/images/datascience.jpg",
    linkText: "Learn More",
  },
  {
    title: "Cloud & DevOps",
    description:
      "Deploy and manage applications on cloud platforms like AWS, Azure, or GCP using Docker, Kubernetes, and CI/CD pipelines.",
    image: "/images/cloud.jpg",
    linkText: "Learn More",
  },
  {
    title: "Cybersecurity",
    description:
      "Understand ethical hacking, penetration testing, and network security to protect applications from real-world threats.",
    image: "/images/cybersecurity.jpg",
    linkText: "Learn More",
  },
  {
    title: "Digital Marketing",
    description:
      "Plan and execute campaigns using SEO, social media, Google Ads, and analytics tools to grow brand visibility and engagement.",
    image: "/images/marketing.jpg",
    linkText: "Learn More",
  }
  ],
};

const LiveProjectsSection = () => {
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        {/* Heading */}
        <div className="text-center mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
            {projectData.title}
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500">
            {projectData.subtitle}
          </p>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex" />
          </div>
        </div>

        {/* Features Grid */}
        <div className="flex flex-wrap -mx-4">
          {projectData.features.map((item, index) => (
            <div
              key={index}
              className="w-full md:w-1/3 px-4 mb-10 flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 mb-5">
                <img
                  src={item.image}
                  alt={item.title}
                  className="rounded-full object-cover w-full h-full border border-indigo-200"
                />
              </div>
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                {item.title}
              </h2>
              <p className="leading-relaxed text-base">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Optional CTA Button */}
        <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Explore More Projects
        </button>
      </div>
    </section>
  );
};

export default LiveProjectsSection;