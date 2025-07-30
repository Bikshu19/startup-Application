import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import CoursesExpert from "./aadhyaexp";
import { FaStar } from "react-icons/fa";

const coursesData = [
  {
    title: "Web Development",
    description: "HTML, CSS, JavaScript, React, Bootstrap",
    image: "/web.webp",
  },
  {
    title: "Java Full Stack",
    description: "Core Java, Spring Boot, SQL, APIs",
    image: "/java.jpg",
  },
  {
    title: "Data Science",
    description: "Python, ML, Pandas, NumPy",
    image: "/data.jpg",
  },
];

const faqData = [
  {
    question: "What is the duration of each course?",
    answer: "Each course ranges from 6 to 12 weeks depending on complexity.",
  },
  {
    question: "Do I get a certificate after course completion?",
    answer: "Yes, you will receive a verified certificate of completion.",
  },
  {
    question: "Can I access the course offline?",
    answer: "You can download materials and access them anytime offline.",
  },
  {
    question: "Do you provide real-time projects?",
    answer: "Yes, we provide capstone and real-time projects for practice.",
  },
];

const testimonials = [
  {
    name: "Ananya Sharma",
    feedback: "Thanks to this course, I landed a job as a frontend developer!",
    image: "/cust1.webp",
  },
  {
    name: "Ravi Teja",
    feedback: "The mentors are very friendly and helped clear all my doubts.",
    image: "/customer.jpg",
  },
  {
    name: "Neha Kapoor",
    feedback: "Project-based learning helped me build confidence!",
    image: "/cust2.jpg",
  },
  {
    name: "Elon Musk",
    feedback: "The mentors are very friendly and helped clear all my doubts.",
    image: "/Elon.jpg",
  },
];

const CoursesPage = () => {
  const [launched, setLaunched] = useState(false);
  const [countdown, setCountdown] = useState("");

  useEffect(() => {
    const deadline = new Date("2025-07-30T15:40:22");
    const timer = setInterval(() => {
      const now = new Date();
      const diff = deadline - now;

      if (diff <= 0) {
        clearInterval(timer);
        setCountdown("Offer expired");
      } else {
        const hours = String(
          Math.floor((diff / (1000 * 60 * 60)) % 24)
        ).padStart(2, "0");
        const minutes = String(Math.floor((diff / 1000 / 60) % 60)).padStart(
          2,
          "0"
        );
        const seconds = String(Math.floor((diff / 1000) % 60)).padStart(2, "0");
        setCountdown(`${hours}:${minutes}:${seconds}`);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleLaunch = () => {
    confetti({ particleCount: 200, spread: 100, origin: { y: 0.6 } });
    setLaunched(true);
  };

  return (
    <div className="bg-gray-50">
      {/* Banner */}
      <div className="relative w-full h-[60vh] overflow-hidden">
        <img
          src="/online1.png"
          alt="Banner"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 flex flex-col justify-between items-center text-center px-4 py-6 bg-gradient-to-b from-black/30 to-transparent">
          <div className="flex-1 flex justify-center items-center">
            <h1 className="text-white text-4xl md:text-5xl font-bold"></h1>
          </div>
          <div className="mb-6">
            <button
              onClick={handleLaunch}
              style={{ backgroundColor: "#320A6B" }}
              className="hover:opacity-90 text-white font-semibold px-6 py-3 rounded-full transition"
            >
              🚀 Launch Courses
            </button>
          </div>
        </div>
      </div>

      {/* Countdown Banner */}
      <div className="bg-red-100 text-red-800 text-center py-3 font-semibold text-lg">
        🎉 50% OFF ends in {countdown}
      </div>

      {/* Courses */}
      <AnimatePresence>
        {launched && (
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="container mx-auto px-4 py-10 grid md:grid-cols-3 gap-8"
          >
            {coursesData.map((course, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition text-center"
              >
                <img
                  src={course.image}
                  alt={course.title}
                  className="rounded-md w-full h-40 object-cover mb-4"
                />
                <h2
                  style={{ color: "#320A6B" }}
                  className="text-xl font-bold mb-2"
                >
                  {course.title}
                </h2>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  style={{ backgroundColor: "#320A6B" }}
                  className="text-white px-5 py-2 rounded-full"
                >
                  Enroll Now
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto py-10 px-4">
        <h2
          style={{ color: "#320A6B" }}
          className="text-3xl font-bold mb-6 text-center"
        >
          📌 Frequently Asked Questions
        </h2>
        {faqData.map((faq, idx) => (
          <details
            key={idx}
            className="mb-4 border rounded-lg p-4 bg-white shadow-sm cursor-pointer"
          >
            <summary className="font-semibold text-lg">{faq.question}</summary>
            <p className="mt-2 text-gray-600">{faq.answer}</p>
          </details>
        ))}
      </div>

      {/* Testimonials */}
      <div className="bg-white py-12">
        <h2
          style={{ color: "#320A6B" }}
          className="text-center text-3xl font-bold mb-6"
        >
          🎓 Student Success Stories
        </h2>
        <div className="flex overflow-x-auto space-x-6 px-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="min-w-[250px] bg-gray-100 rounded-xl p-6 shadow-md text-center flex-shrink-0"
            >
              <img
                src={t.image}
                alt={t.name}
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
              />
              <h4 className="text-xl font-semibold">{t.name}</h4>
              <p className="text-sm text-gray-600 mt-2">{t.feedback}</p>
              <div className="text-yellow-400 mt-2 flex justify-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certificates */}
      <div className="py-12 bg-gray-100 text-center px-4">
        <h2 style={{ color: "#320A6B" }} className="text-3xl font-bold mb-4">
          📜 What You’ll Get
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div>
            <img
              src="/course.png"
              alt="Course Certificate"
              className="mx-auto w-72 rounded shadow"
            />
            <p className="mt-2 font-medium">Course Completion Certificate</p>
          </div>
          <div>
            <img
              src="/project.jpg"
              alt="Project Certificate"
              className="mx-auto w-72 rounded shadow"
            />
            <p className="mt-2 font-medium">Project-Based Certificate</p>
          </div>
        </div>
      </div>

      {/* Course Experts Section */}
      <div className="mt-10">
        <CoursesExpert />
      </div>

      {/* Back to Top */}
      <div className="text-center py-6">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{ backgroundColor: "#320A6B" }}
          className="text-white px-5 py-2 rounded-full"
        >
          ⬆️ Back to Top
        </button>
      </div>
    </div>
  );
};

export default CoursesPage;
