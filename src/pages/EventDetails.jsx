import React from "react";
import "./EventDetails.css";
import Header from "./Header";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsappButton";

const EventDetails = () => {
  const flierURL = "/images/flierImage.jpg"; // public folder
  const eventURL = "https://yourdomain.com/event-details";

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = flierURL;
    link.download = "event-flier.jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Healing Convention",
          text: "Join me for the Healing Convention – 25th to 31st September, Morning & Evening sessions.",
          url: eventURL,
        });
        console.log("Shared successfully");
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      alert("Sharing not supported on this browser. Please copy the link to share.");
    }
  };

  return (
    <>
      <Header />
      <div className="event-details">
        <h2>Healing Convention</h2>
        <p><strong>Date:</strong> 25th–31st September</p>
        <p><strong>Time:</strong> Morning & Evening</p>

        <div className="flier-container">
          <img src={flierURL} alt="Event Flier" className="event-flier" />
        </div>

        <div className="event-actions">
          <button onClick={handleDownload}>Download Flier</button>
          <button onClick={handleShare}>📤 Share Event</button>
        </div>
      </div>
      <WhatsAppButton />
      <Footer />
    </>
  );
};

export default EventDetails;
