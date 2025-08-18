import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./Worship.css";
import Header from "./Header";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsappButton";
import BackToTop from "./BackToTop";
import TopBar from "./TopBar";

const Worship = () => {
  const [showAll, setShowAll] = useState(false);
  const [lightboxImage, setLightboxImage] = useState(null);

  // Worship images
  const images = Array.from({ length: 26 }, (_, i) => `images/worship${i + 1}.jpg`);
  const visibleImages = showAll ? images : images.slice(0, 5);

  return (
    <section className="worship-page">
      <TopBar />
      <Header />

      {/* Hero Section */}
      <div className="worship-hero-section">
        <div className="worship-overlay">
          <h1 className="worship-title">Worship Ministry</h1>
          <p className="worship-subtitle">
            Leading hearts into God's presence through worship and praise.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="worship-container">
        {/* About */}
        <div className="section worship-about">
          <h2 className="section-title">About Worship Ministry</h2>
          <p>
            The Worship Ministry is dedicated to creating an atmosphere where people can encounter
            God through heartfelt worship. Our team is passionate about leading the congregation
            into the presence of God with excellence, humility, and a spirit of service.
          </p>
        </div>

        {/* Programs */}
        <div className="section">
          <h2 className="section-title">Programs & Activities</h2>
          <ul>
            <li>🎶 Worship Team Rehearsals</li>
            <li>📖 Worship Nights & Praise Concerts</li>
            <li>🎹 Music Training & Voice Coaching</li>
            <li>🙏 Prayer & Devotion Sessions</li>
          </ul>
        </div>

        {/* Service Schedule */}
        <div className="section">
          <h2 className="section-title">Service Schedule</h2>
          <p>
            Worship sessions take place during every Sunday Service at <strong>9:00 AM</strong>, and
            at all special events and programs throughout the year.
          </p>
        </div>

        {/* Gallery */}
        <div className="section worship-gallery">
          <h2 className="section-title">Gallery</h2>
          <div className="gallery-grid">
            {visibleImages.map((src, i) => (
              <div
                key={i}
                className="gallery-item"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <img
                  src={src}
                  alt={`Worship activity ${i + 1}`}
                  loading="lazy"
                  onClick={() => setLightboxImage(src)}
                />
              </div>
            ))}
          </div>

          {images.length > 5 && (
            <div className="view-all-container">
              <button className="btn-secondary" onClick={() => setShowAll((prev) => !prev)}>
                {showAll ? "Show Less" : "View All"}
              </button>
            </div>
          )}
        </div>

        {/* Lightbox */}
        {lightboxImage && (
          <div className="lightbox" onClick={() => setLightboxImage(null)}>
            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
              <img src={lightboxImage} alt="Preview" className="lightbox-img" />
              <a href={lightboxImage} download className="download-btn">
                Download Image
              </a>
              <button className="close-btn" onClick={() => setLightboxImage(null)}>✕</button>
            </div>
          </div>
        )}

        {/* Contact */}
        <div className="section">
          <h2 className="section-title">Contact Us</h2>
          <p><strong>Leader:</strong> Minister Jerry Effanga</p>
          {/* <p><strong>Email:</strong> worship@greatharvest.org</p> */}
          <p><strong>Phone:</strong> +2348175281728 </p>
        </div>

        {/* Call to Action */}
           <div className="give-btn">
                  <Link smooth to="/#give">Give Online</Link>
                </div>
      </div>

      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </section>
  );
};

export default Worship;

