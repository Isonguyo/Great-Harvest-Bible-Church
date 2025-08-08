import React, { useEffect, useState } from "react";
import "./HeroSection.css";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });
  const [serviceStarted, setServiceStarted] = useState(false);

  // Auto-slide every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  // Countdown Logic
  useEffect(() => {
    const getNextSunday = () => {
      const now = new Date();
      const nextSunday = new Date();
      nextSunday.setDate(now.getDate() + ((7 - now.getDay()) % 7 || 7));
      nextSunday.setHours(9, 0, 0, 0);
      return nextSunday;
    };

    const targetDate = getNextSunday();
    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(timer);
        setTimeLeft({ days: "00", hours: "00", minutes: "00", seconds: "00" });
        setServiceStarted(true);
      } else {
        const days = String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, "0");
        const hours = String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, "0");
        const minutes = String(Math.floor((difference / 1000 / 60) % 60)).padStart(2, "0");
        const seconds = String(Math.floor((difference / 1000) % 60)).padStart(2, "0");

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % 3);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + 3) % 3);

  const slides = [
    {
      image: "images/hero2.avif",
      title: "Great Harvest Bible Church",
      text: "The harvest is great...",
      buttons: [
        { text: "Get Directions", link: "https://maps.app.goo.gl/fDJcLNDXz8Cxb88J6", primary: true },
        { text: "Watch Live", link: "#sermons", primary: false },
      ],
    },
    {
      image: "images/mission.avif",
      title: "Our Mission to the Nations",
      text: "We are passionate about reaching the lost and sharing Christ’s love through local and global missions..",
      buttons: [
        { text: "Explore Ministries", link: "#ministries", primary: true },
        { text: "View Our Mission", link: "/mission", primary: false },
      ],
    },
    {
      image: "images/worship-hero.avif",
      title: "Experience True Worship",
      text: "Come and encounter God's presence in worship.",
      buttons: [
        { text: "View Worship", link: "/worship", primary: true },
        // { text: "Contact Us", link: "#contact", primary: false },
      ],
    },
  ];

  return (
    <section id="home" className="hero-section">
      <div className="carousel-container">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`carousel-slide ${currentSlide === index ? "active" : ""}`}
            style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${slide.image})` }}
          >
            <div className="overlay">
              <div className="hero-content text-center">
                <h1 className="title-font text-4xl md:text-6xl font-bold mb-4">{slide.title}</h1>
                <p className="text-xl md:text-2xl mb-6">{slide.text}</p>

                {/* Countdown */}
                <h2 className="text-2xl font-semibold mb-4">Next Sunday Service in:</h2>
                {serviceStarted ? (
                  <p className="text-yellow-400 text-3xl mb-4 font-bold">Service Started!</p>
                ) : (
                  <div className="countdown-boxes">
                    <div className="countdown-box">{timeLeft.days} Days</div>
                    <div className="countdown-box">{timeLeft.hours} Hours</div>
                    <div className="countdown-box">{timeLeft.minutes} Minutes</div>
                    <div className="countdown-box">{timeLeft.seconds} Seconds</div>
                  </div>
                )}

                {/* Buttons */}
                <div className="hero-buttons">
                  {slide.buttons.map((btn, i) => (
                    <a
                      key={i}
                      href={btn.link}
                      className={`hero-btn ${btn.primary ? "primary" : "secondary"}`}
                    >
                      {btn.text}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation */}
        <button className="carousel-btn prev" onClick={prevSlide}>❮</button>
        <button className="carousel-btn next" onClick={nextSlide}>❯</button>

        {/* Dots */}
        <div className="carousel-dots">
          {slides.map((_, i) => (
            <span
              key={i}
              className={`dot ${currentSlide === i ? "active" : ""}`}
              onClick={() => setCurrentSlide(i)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
