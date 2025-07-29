import React from "react";

const testimonials = [
  {
    name: "Elizabeth Senter",
    username: "@Elizabeth Senter",
    time: "3 years ago",
    rating: 5,
    image: "/a1.jpg",
    review:
      "Infotech Solution Point delivered exactly what we needed. Excellent service and clear communication throughout our web development project",
  },
  {
    name: "Anna Lobastova",
    username: "@Anna Lobastova",
    time: "3 months ago",
    rating: 5,
    image: "https://i.pravatar.cc/150?img=2",
    review:
      "The team was knowledgeable, fast, and highly professional. They understood our requirements perfectly and executed everything with precision.",
  },
  {
    name: "Arkopal Choudhury",
    username: "@Arkopal Choudhury",
    time: "3 years ago",
    rating: 5,
    image: "https://i.pravatar.cc/150?img=3",
    review:
      "Impressive backend development skills and support. Slight delay in UI updates but overall, a great experience..",
  },
  {
    name: "Janice Taylor",
    username: "@Janice Taylor",
    time: "1 year ago",
    rating: 3,
    image: "https://i.pravatar.cc/150?img=4",
    review:
      "Excellent response time, and the chatbot integration they built for us works flawlessly. Highly recommended!",
  },
  {
    name: "Elon Musk",
    username: "@Elon Musk",
    time: "1 year ago",
    rating: 4,
    image: "/Elon.jpg",
    review:
      "From hosting setup to deployment, they handled everything with efficiency. Perfect for startups looking for end-to-end tech support.",
  },
  {
    name: "Ratan Tata ",
    username: "@Ratan Tata",
    time: "2 year ago",
    rating: 5,
    image: "/ratan-tata.webp",
    review:
      "Infotech Solution Point was a game-changer for our online store. Smooth experience, and their SEO advice was a bonus!",
  },
];

const ContactCards = () => {
  const stars = (count) => "⭐".repeat(count);

  return (
    <div style={styles.wrapper}>
      <h2
        style={{ textAlign: "center", color: "#320A6B" }}
        className="text-4xl mb-7"
      >
        <strong>Valued Voices of Our Clients</strong>
      </h2>
      <div style={styles.marquee}>
        <div style={styles.track}>
          {[...testimonials, ...testimonials].map((t, i) => (
            <div key={i} style={styles.card}>
              <div style={styles.stars}>{stars(t.rating)}</div>
              <img src={t.image} alt={t.name} style={styles.avatar} />
              <h5 style={{ margin: "0.5rem 0" }}>{t.name}</h5>
              <small style={{ color: "#777" }}>
                {t.username} • {t.time}
              </small>
              <p style={{ fontSize: 14, color: "#555", marginTop: 10 }}>
                {t.review}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Updated styles
const styles = {
  wrapper: {
    width: "100%",
    overflow: "hidden",
    padding: "4rem 2rem 2rem", // more top padding to move down
    background: "linear-gradient(to bottom, #F4F5FA, #F4F5FA)",
  },
  marquee: {
    overflow: "hidden",
    width: "100%",
    position: "relative",
  },
  track: {
    display: "flex",
    gap: "2rem",
    animation: "scroll 60s linear infinite",
    width: "max-content",
  },
  card: {
    flex: "0 0 300px",
    padding: "1rem",
    background: "#fff",
    borderRadius: "10px",
    boxShadow: "0 0 10px #ddd",
    textAlign: "center",
  },
  avatar: {
    width: 60,
    height: 60,
    objectFit: "cover",
    borderRadius: "50%",
    margin: "10px auto",
  },
  stars: {
    fontSize: 18,
    color: "gold",
  },
};

// Animation
const styleSheet = `
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
`;

if (typeof document !== "undefined") {
  const styleTag = document.createElement("style");
  styleTag.innerHTML = styleSheet;
  document.head.appendChild(styleTag);
}

export default ContactCards;
