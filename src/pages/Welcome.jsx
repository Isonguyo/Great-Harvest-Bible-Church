import React, { useEffect } from "react";
import "./welcome.css"; // We'll add styles here

const WelcomeSection = () => {
  useEffect(() => {
    const cards = document.querySelectorAll(".card-animate");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 } // Trigger when 20% visible
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="welcome" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="title-font text-3xl md:text-4xl font-bold text-green-800 mb-4">
            Welcome to Our Church
          </h2>
          <div className="w-24 h-1 bg-yellow-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We are a community of believers committed to loving God and loving
            people. Our mission is to lead people into a growing relationship
            with Jesus Christ.
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="card-animate bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition text-center">
            <div className="text-yellow-600 text-4xl mb-4">
              <i className="fas fa-hands-helping"></i>
            </div>
            <h3 className="text-xl font-bold mb-3">Our Mission</h3>
            <p className="text-gray-600">
              Preparing the Bride for the Groom
            </p>
          </div>

          {/* Card 2 */}
          <div className="card-animate bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition text-center">
            <div className="text-yellow-600 text-4xl mb-4">
              <i className="fas fa-church"></i>
            </div>
            <h3 className="text-xl font-bold mb-3">Service Times</h3>
            <p className="text-gray-600 mb-2">Sunday School: 7:30 AM</p>
            <p className="text-gray-600 mb-2">Sunday Service: 9:00 AM</p>
            <p className="text-gray-600">Monday Discipleship class: 5:00 PM</p>
            <p className="text-gray-600">Tuesday Bible Study: 5:00 PM</p>
            <p className="text-gray-600">Thursday Healing Service: 5:00 PM</p>
          </div>

          {/* Card 3 */}
          <div className="card-animate bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition text-center">
            <div className="text-yellow-600 text-4xl mb-4">
              <i className="fas fa-map-marked-alt"></i>
            </div>
            <h3 className="text-xl font-bold mb-3">Location</h3>
            <p className="text-gray-600">
              16 Duke Town Close, State Housing Estate, Calabar, Cross River
              State.
            </p>
            <a
              href="https://maps.app.goo.gl/fDJcLNDXz8Cxb88J6"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-700 hover:underline mt-2 inline-block"
            >
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;

