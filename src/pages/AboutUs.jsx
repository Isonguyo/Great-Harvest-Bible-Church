import React, { useState } from "react";
import "./AboutUs.css";
import { HashLink as Link } from "react-router-hash-link";
import Header from "./Header";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsappButton";
import TopBar from "./TopBar";

const AboutUs = () => {
  const [showAll, setShowAll] = useState(false);

  const otherLeaders = [
    { name: "Deacon Andrew Brown", role: "Men's President", img: "images/ghbc9.jpg" },
    { name: "Deaconess Queeneth Obasse", role: "Women's President", img: "images/women-president.jpg" },
    { name: "Pastor Mrs Aniefiok Iton", role: "Children's Pastor", img: "images/child53.jpg" },
    { name: "Brother Jerry Effanga", role: "Youth President/Choir Director", img: "images/ghbc35.jpg" },
    { name: "Pastor Felix Bocco", role: "Prayer Coordinator", img: "images/Prayer-Leader.jpg" },
    { name: "Pastor Alex", role: "Youth Pastor", img: "images/pastor-alex.jpg" },
  ];

  return (
    <>
      <TopBar />
      <Header />
      <section id="about" className="about-section">
        {/* ✅ Hero Section */}
        <div className="about-hero">
          <div className="overlay">
            <h1>About Us</h1>
            <p>Discover who we are, what we believe, and why we serve.</p>
          </div>
        </div>

        <div className="container about-content">
          {/* ✅ Mission & Vision */}
          <div className="mission-vision">
            <div className="card glass-card">
              <h2>Our Mission</h2>
              <p>
                "Preparing the Bride for the Groom" To spread the Gospel of Christ, nurture believers, and make a
                positive impact in our community through love and service.
              </p>
            </div>
            <div className="card glass-card">
              <h2>Our Vision</h2>
              <p>
                A Christ-centered church where every soul experiences the love
                and power of God, living in faith and serving others with
                excellence.
              </p>
            </div>
          </div>

          {/* ✅ History */}
          <div className="history">
            <h2>Our Story</h2>
            <p>
              Great Harvest Bible Church began with a vision to transform lives
              through the power of the Gospel. From a small group of believers,
              we have grown into a vibrant community impacting lives globally.
            </p>
          </div>

          {/* ✅ Leadership Section */}
          <div className="leadership">
            <h2 className="section-title">Our Leaders</h2>

            <div className="featured-leaders">
              {/* General Overseer Spotlight */}
              <div className="leader-spotlight">
                <img src="images/image.png" alt="General Overseer" />
                <div className="info">
                  <h3>Apostle and Pst Mrs. Marry Elias Emmanuel</h3>
                  <p>General Overseer</p>
                </div>
              </div>

              {/* Resident Pastor */}
              <div className="leader-secondary">
                <img src="images/ghbc38.jpg" alt="Resident Pastor" />
                <div className="info">
                  <h3>Pastor Peter Adima</h3>
                  <p>Resident Pastor</p>
                </div>
              </div>
            </div>

            {/* View All Leaders Button */}
            <div className="text-center mt-6">
              <button
                className="view-btn"
                onClick={() => setShowAll(!showAll)}
              >
                {showAll ? "Hide Leaders" : "View All Leaders"}
              </button>
            </div>

            {/* Additional Leaders */}
            {showAll && (
              <div className="leaders-grid">
                {otherLeaders.map((leader, index) => (
                  <div key={index} className="leader-card small-card">
                    <img src={leader.img} alt={leader.name} />
                    <h3>{leader.name}</h3>
                    <p>{leader.role}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* ✅ Core Beliefs */}
          <div className="beliefs">
            <h2>What We Believe</h2>
            <ul>
              <li>The Bible is the inspired Word of God.</li>
              <li>Salvation comes by grace through faith in Jesus Christ.</li>
              <li>The Holy Spirit empowers believers for service.</li>
              <li>We are called to love God and love people.</li>
            </ul>
          </div>

          {/* ✅ Call to Action */}
          <div className="cta-section">
            <h2>Join Our Family</h2>
            <p>
              Be a part of a loving community growing in faith and impacting
              the world for Christ.
            </p>
            <Link smooth to="/#contact" className="cta-btn">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
      <WhatsAppButton />
      <Footer />
    </>
  );
};

export default AboutUs;
