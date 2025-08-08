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
const shareVerseImage = async () => {
  try {
    const imageUrl = "/images/verseImage.jpg"; // replace with your image path
    const response = await fetch(imageUrl);
    const blob = await response.blob();
    const file = new File([blob], "verse.jpg", { type: blob.type });

    if (navigator.canShare && navigator.canShare({ files: [file] })) {
      await navigator.share({
        files: [file],
        title: "Daily Bible Verse"
      });
    } else {
      alert("Sharing images is not supported on this device/browser.");
    }
  } catch (err) {
    console.error("Error sharing image:", err);
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
         <button onClick={shareVerseImage}>Share</button>

        </div>
      </div>
      <WhatsAppButton />
      <Footer />
    </>
  );
};

export default EventDetails;
