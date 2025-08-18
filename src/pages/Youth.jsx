import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./Youth.css";
import Header from "./Header";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsappButton";
import BackToTop from "./BackToTop";
import TopBar from "./TopBar";

const YouthChurch = () => {
  const [showAll, setShowAll] = useState(false);
  const [lightboxImage, setLightboxImage] = useState(null);

  // Sample images (adjust to your path)
  const images = Array.from({ length: 32 }, (_, i) => `images/youth${i + 1}.jpg`);
  const visibleImages = showAll ? images : images.slice(0, 6);

  const openLightbox = (img) => setLightboxImage(img);
  const closeLightbox = () => setLightboxImage(null);

  return (
    <section className="youth-church">
      <TopBar />
      <Header />

      {/* Hero Section */}
      <div className="youth-hero-section">
        <div className="hero-overlay">
          <h1 className="hero-title">Youth Church</h1>
          <p className="hero-subtitle">
            Empowering young hearts, renewing minds, and building the next generation of leaders.
          </p>
          {/* <button className="btn-primary">Join Our Youth Family</button> */}
        </div>
      </div>

      {/* Main Content */}
      <div className="youth-container">
        
        {/* About Section */}
        <div className="about-section fade-in">
          <h2 className="section-title">About Youth Church</h2>
          <p>
            Our Youth Church is a vibrant, dynamic community of young people passionate about Christ.
            We exist to raise Godly leaders through worship, word, fellowship, and impact-driven activities.
          </p>
        </div>

        {/* Programs */}
        <div className="programs-section fade-in">
          <h2 className="section-title">Programs & Activities</h2>
          <ul>
            <li><strong>Youth  Prayer:</strong> Every Sunday at 7 AM...before main service</li>
            <li><strong>Youth Choir:</strong> Every Friday at 4 PM</li>
            {/* <li><strong>Music & Creative Arts:</strong> Every Saturday</li>
            <li><strong>Community Outreach:</strong> Quarterly missions</li> */}
          </ul>
        </div>

        {/* Events */}
        <div className="events-section fade-in">
          <h2 className="section-title">Upcoming Events</h2>
          <p><strong>Youth Talent Hunt:</strong> Coming this September! Stay tuned.</p>
        </div>

        {/* Gallery */}
        <div className="gallery-section fade-in">
          <h2 className="section-title">Gallery</h2>
          <div className="gallery-grid">
            {visibleImages.map((src, i) => (
              <div key={i} className="gallery-item" style={{ animationDelay: `${i * 0.05}s` }}>
                <img src={src} alt={`Youth activity ${i + 1}`} loading="lazy" onClick={() => openLightbox(src)} />
              </div>
            ))}
          </div>
          {images.length > 6 && (
            <div className="view-all-container">
              <button className="btn-secondary" onClick={() => setShowAll((prev) => !prev)}>
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
              <a href={lightboxImage} download className="download-btn">Download Image</a>
              <button className="close-btn" onClick={closeLightbox}>✕</button>
            </div>
          </div>
        )}

        {/* Leadership Section */}
        <div className="leadership-section fade-in">
          <h2 className="section-title">Our Leaders</h2>
          <div className="leaders">
            <div className="leader-card">
              <img src="images/pastor-alex.jpg" alt="Leader" />
              <h3>Pastor Alex</h3>
              <p>Youth Pastor</p>
            </div>
            <div className="leader-card">
              <img src="images/ghbc35.jpg" alt="Leader" />
              <h3>Min. Jerry Effanga </h3>
              <p>Youth President</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="cta-buttons fade-in">
          <div className="give-btn">
                    <Link smooth to="/#give">Give Online</Link>
                  </div>
        </div>
      </div>

      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </section>
  );
};

export default YouthChurch;
