import React, { useState } from "react";
import {Link} from 'react-router-dom';

const blogCategories = [
  {
    title: "🔧 Technical Articles",
    posts: [
      {
        id: 1,
        title: "How We Built a Scalable Microservices Architecture",
        description: "Discover our architectural approach using Docker, Kubernetes, and message queues.",
        image: "/micro.webp",
        author: "Tech Team",
        date: "July 10, 2025"
      },
      {
        id: 2,
        title: "Top 10 Frontend Optimization Tips for React Developers",
        description: "From lazy loading to memoization – speed up your apps the right way.",
        image: "/react1.webp",
        author: "Frontend Team",
        date: "July 15, 2025"
      },
      {
        id: 3,
        title: "Securing REST APIs with Spring Security: A Complete Guide",
        description: "JWT, RBAC, CORS — everything you need to lock down your APIs.",
        image: "/springboot.webp",
        author: "Backend Team",
        date: "July 18, 2025"
      }
    ]
  },
  {
    title: "💼 Company Culture & Insights",
    posts: [
      {
        id: 4,
        title: "Inside Aadhaya Infotech: Our Work Culture & Values",
        description: "We believe in innovation, inclusion, and integrity in everything we do.",
        image: "/culture.webp",
        author: "HR Team",
        date: "July 21, 2025"
      },
      {
        id: 5,
        title: "Aadhaya’s Journey: From Startup to Tech Solution Partner",
        description: "Explore our evolution as a technology powerhouse since inception.",
        image: "/startup.webp",
        author: "Founder’s Desk",
        date: "July 22, 2025"
      },
      {
        id: 6,
        title: "Celebrating 5 Years of Aadhaya Infotech",
        description: "From a 3-person garage team to a 50+ member powerhouse — here's our story of passion, growth, and gratitude.",
        image: "/celebrating.webp",
        author: "Founding Team",
        date: "August 2, 2025"
      }
    ]
  },
  {
    title: "🧠 Educational",
    posts: [
      {
        id: 7,
        title: "React vs Angular: Which One Should You Choose in 2025?",
        description: "A head-to-head comparison of frontend giants with real use cases.",
        image: "/a vs r.webp",
        author: "Dev Insights",
        date: "July 24, 2025"
      },
      {
        id: 8,
        title: "What is DevOps and Why It Matters for Your Business?",
        description: "DevOps = Faster Delivery + Reliability. Here's how we do it at Aadhaya.",
        image: "/devoops.webp",
        author: "DevOps Team",
        date: "July 25, 2025"
      },
      {
        id: 9,
        title: "Mastering Git & GitHub: A Developer’s Must-Have Skill",
        description: "Learn how to efficiently manage code, collaborate in teams, and contribute to open source using Git and GitHub.",
        image: "/git.webp",
        author: "Training Team",
        date: "July 30, 2025"
      }
    ]
  },
  {
    title: "📰 News & Updates",
    posts: [
      {
        id: 10,
        title: "Aadhaya Launches Smart Traffic Clearance IoT System",
        description: "Game-changing tech that helps ambulances reach faster using IoT.",
        image: "/iot.webp",
        author: "IoT Division",
        date: "July 27, 2025"
      },
      {
        id: 11,
        title: "We’re Hiring: Join Our Tech-Driven Team",
        description: "Explore open positions and work on innovative projects with us.",
        image: "/team.webp",
        author: "Talent Team",
        date: "July 29, 2025"
      },
      {
        id: 12,
        title: "Aadhaya Opens New Innovation Lab in Hyderabad",
        description: "Our latest facility aims to accelerate AI, IoT, and Cloud-native R&D for next-gen tech solutions.",
        image: "/lab.webp",
        author: "Corporate Communications",
        date: "August 1, 2025"
      }
    ]
  }
];

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filterPosts = (posts) =>
    posts.filter(
      (post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div className="bg-gray-50 min-h-screen px-4 md:px-10 py-12">
      {/* Scrollbar Hiding Styles */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl mb-5" style={{ color: "#320A6B" }}>
          <strong>Aadhaya Infotech Blog</strong>
        </h1>
        <p className="text-lg max-w-xl mx-auto" style={{ color: "#320A6B" }}>
          Explore our technical insights, innovations, culture, and latest company updates.
        </p>
      </div>

      {/* Search Bar */}
      <div className="flex justify-center mb-12 relative">
        <span className="absolute left-6 top-3 text-xl pointer-events-none"></span>
        <input
          type="text"
          placeholder="✨ Search awesome blog posts... ✨"
          className="w-full md:w-1/2 pl-12 pr-4 py-3 rounded-full border shadow-sm focus:outline-none focus:ring-2 focus:ring-[#320A6B] text-[#320A6B] placeholder-[#320A6B] font-medium"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Blog Sections */}
      {blogCategories.map((section, index) => {
        const filtered = filterPosts(section.posts);
        if (filtered.length === 0) return null;

        return (
          <div key={index} className="mb-16">
            <h2 className="text-2xl font-bold mb-4" style={{ color: "#320A6B" }}>
              {section.title}
            </h2>
            <div className="flex overflow-x-auto scrollbar-hide space-x-4 -mx-2 px-2">
              {filtered.map((post) => (
                <div
                  key={post.id}
                  className="flex-shrink-0 w-full sm:w-[90%] md:w-[48%] lg:w-[31%] bg-white rounded-lg shadow hover:shadow-lg transition duration-300"
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-52 object-cover rounded-t-lg"
                  />
                  <div className="p-5">
                    <h3 className="text-lg font-bold mb-2" style={{ color: "#320A6B" }}>
                      {post.title}
                    </h3>
                    <p className="text-sm" style={{ color: "#320A6B" }}>{post.description}</p>
                    <div className="text-xs mt-3" style={{ color: "#320A6B" }}>
                      By <strong>{post.author}</strong> | {post.date}
                    </div>
                    <a
                      href="#"
                      className="text-sm font-medium mt-2 inline-block"
                      style={{ color: "#320A6B" }}
                    >
                      Read More →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}

      {/* CTA */}
      <div className="text-white text-center py-12 rounded-lg mt-20" style={{ backgroundColor: "#320A6B" }}>
        <h2 className="text-3xl font-bold mb-3">Let's Build the Future Together</h2>
        <p className="mb-5 text-lg">Partner with Aadhaya for innovative, reliable software solutions.</p>
        <Link
          to="/contact"
          className="bg-white text-[#320A6B] font-semibold px-6 py-2 rounded-full hover:bg-gray-100 transition inline-block"
        >
          📞 Contact Us
        </Link>
      </div>
    </div>
  );
};

export default BlogPage;
