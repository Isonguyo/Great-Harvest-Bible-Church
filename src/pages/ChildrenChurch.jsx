import React, { useState } from "react";
import "./ChildrenChurch.css";
import { HashLink as Link } from "react-router-hash-link";
import "./Header.css";
import Header from "./Header";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsappButton";
import BackToTop from "./BackToTop";
import TopBar from "./TopBar";

const ChildrenChurch = () => {
  const [showAll, setShowAll] = useState(false);
  const [lightboxImage, setLightboxImage] = useState(null);

  // Generate image paths
  const images = Array.from({ length: 54 }, (_, i) => `images/child${i + 1}.jpg`);
  const visibleImages = showAll ? images : images.slice(0, 5);

  // Open Lightbox
  const openLightbox = (img) => {
    setLightboxImage(img);
  };

  // Close Lightbox
  const closeLightbox = () => {
    setLightboxImage(null);
  };

  return (
    <section className="children-church">
      <TopBar />
      <Header />

      {/* Hero Section */}
      <div className="children-hero-section">
        <div className="children-overlay">
          <h1 className="children-title">Children's Church</h1>
          <p className="children-subtitle">
            Building a foundation of faith for the next generation.
          </p>
        </div>
      </div>

      {/* Main Container */}
      <div className="children-container">
        {/* About Section */}
        <div className="children-about fade-in">
          <h2 className="children-h2">About Children's Church</h2>
          <p>
            Our Children’s Church provides a safe, loving, and fun environment where kids learn about
            Jesus in ways they can understand. We believe in equipping the next generation with
            biblical principles through engaging activities and stories.
          </p>
        </div>

        {/* Age Groups */}
        <div className="section fade-in">
          <h2 className="children-h2">Age Groups & Classes</h2>
          <ul>
            <li><strong>Babies:</strong> 0 – 5 years</li>
            <li><strong>Soldiers:</strong> 6 – 11 years</li>
            <li><strong>Elders:</strong> 12 – 15 years</li>
          </ul>
        </div>

        {/* Service Schedule */}
        <div className="children-activities-section fade-in">
          <h2 className="children-h2">Service Schedule</h2>
          <p>
            Children’s Church runs every Sunday at <strong>9:00 AM</strong> during the main service.
          </p>
        </div>

        {/* Gallery Section */}
        <div className="gallery fade-in">
          <h2 className="children-h2">Gallery</h2>
          <div className="gallery-grid">
            {visibleImages.map((src, i) => (
              <div
                key={i}
                className="gallery-item"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <img
                  src={src}
                  alt={`Children activity ${i + 1}`}
                  loading="lazy"
                  onClick={() => openLightbox(src)}
                />
              </div>
            ))}
          </div>
          {/* View All Button */}
          {images.length > 5 && (
            <div className="view-all-container">
              <button
                className="btn-secondary"
                onClick={() => setShowAll((prev) => !prev)}
              >
                {showAll ? "Show Less" : "View All"}
              </button>
            </div>
          )}
        </div>

        {/* Lightbox */}
        {lightboxImage && (
          <div className="lightbox" onClick={closeLightbox}>
            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
              <img src={lightboxImage} alt="Preview" className="lightbox-img" />
              <a href={lightboxImage} download className="download-btn">
                Download Image
              </a>
              <button className="close-btn" onClick={closeLightbox}>
                ✕
              </button>
            </div>
          </div>
        )}

        {/* Contact Info */}
        <div className="section contact fade-in">
          <h2 className="children-h2">Contact</h2>
          <p><strong>Leader:</strong> Pastor Mrs Iton</p>
          <p><strong>Email:</strong> children@greatharvest.org</p>
          <p><strong>Phone:</strong> +234 803 123 4567</p>
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

export default ChildrenChurch;

