import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Ministries.css";

const ministries = [
  {
    name: "Children",
    image: "images/ghbc46.jpg",
    description:
      "Ages 0-15. A fun, safe place where kids learn about Jesus through stories, songs, and activities. Growing in faith while having fun—every Sunday!",
    link: "/children-church",
  },
  {
    name: "Youth",
    image: "images/ghbc13.jpg",
    description:
      "Empowering the next generation to live for Christ. Join us for fun, faith-filled gatherings, and real-life conversations.",
    link: "/Youth",
  },
  {
    name: "Adults",
    image: "images/ghbc1.jpg",
    description:
      "Growing in faith, walking in purpose. Connect with others through worship, the Word, and meaningful fellowship.",
    link: "/adult",
  },
  {
    name: "Worship",
    image: "images/ghbc30.jpg",
    description:
      "Lifting hearts through spirit-filled worship. Join the voices leading praise with passion and purpose.",
    link: "/worship",
  },
];

const Ministries = () => {
  useEffect(() => {
    const cards = document.querySelectorAll(".ministry-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="ministries" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="title-font text-3xl md:text-4xl font-bold text-green-800 mb-4">
            Our Ministries
          </h2>
          <div className="w-24 h-1 bg-yellow-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We have ministries for all ages and stages of life. Find your place
            to connect and grow.
          </p>
        </div>

        {/* Ministries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ministries.map((ministry, index) => (
            <div
              key={index}
              className="ministry-card bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition text-center p-6 opacity-0 translate-y-6"
            >
              <img
                src={ministry.image}
                alt={ministry.name}
                className="section-image"
              />
              <h3 className="text-xl font-bold mb-2">{ministry.name}</h3>
              <p className="text-gray-600 mb-4">{ministry.description}</p>
              <Link
                to={ministry.link}
                className="text-green-700 hover:underline font-medium"
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ministries;
