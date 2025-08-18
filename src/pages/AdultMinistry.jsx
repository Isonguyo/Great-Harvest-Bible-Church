import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./AdultMinistry.css";
import Header from "./Header";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsappButton";
import BackToTop from "./BackToTop";
import TopBar from "./TopBar";

const AdultMinistry = () => {
  const [showAll, setShowAll] = useState(false);
  const [lightboxImage, setLightboxImage] = useState(null);

  const images = Array.from({ length: 68 }, (_, i) => `images/ghbc${i + 1}.jpg`);
  const visibleImages = showAll ? images : images.slice(0, 5);

  return (
    <section className="adults-page">
      <TopBar />
      <Header />

      {/* Hero Section */}
      <div className="adults-hero-section">
        <div className="adults-overlay">
          <h1 className="adults-title">Adults Ministry</h1>
          <p className="adults-subtitle">
            Empowering lives with faith, fellowship, and purpose.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="adults-container">
        {/* About */}
        <div className="adults-about section">
          <h2 className="section-title">About Adults Ministry</h2>
          <p>
            Our Adults Ministry provides a space for spiritual growth, fellowship,
            and service. We aim to nurture and strengthen your walk with God
            through prayer, Bible study, and impactful programs that inspire
            transformation.
          </p>
        </div>

        {/* Programs */}
        <div className="section">
          <h2 className="section-title">Programs & Activities</h2>
          <ul>
            <li>Bible Study and Prayer Meetings</li>
            <li>Community Service and Outreach</li>
            <li>Couples and Family Fellowships</li>
            <li>Career & Leadership Development</li>
          </ul>
        </div>

        {/* Service Schedule */}
        <div className="section">
          <h2 className="section-title">Service Schedule</h2>
          <p>
            Join us every Sunday at <strong>9:00 AM</strong> and during our mid-week
            Bible study on <strong>Wednesdays at 6:00 PM</strong>.
          </p>
        </div>

        {/* Gallery */}
        <div id="main-gallery" className="section adults-gallery">
          <h2 className="section-title">Gallery</h2>
          <div className="gallery-grid">
            {visibleImages.map((src, i) => (
              <div key={i} className="gallery-item" style={{ animationDelay: `${i * 0.05}s` }}>
                <img
                  src={src}
                  alt={`Adult ministry ${i + 1}`}
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

            {/* Leadership Section */}
        <div className="leadership-section fade-in">
          <h2 className="section-title">Our Leaders</h2>
          <div className="leaders">
            <div className="leader-card">
              <img src="images/ghbc9.jpg" alt="Leader" />
              <h3>Deacon Andrew Brown</h3>
              <p>Men's President</p>
            </div>
            <div className="leader-card">
              <img src="images/women-president.jpg" alt="Leader" />
              <h3>Deaconess Queeneth Obasse </h3>
              <p>Women's President</p>
            </div>
          </div>
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

export default AdultMinistry;
