import React, { useEffect, useState } from "react";
import "./TopBar.css";

const fullCalendar = [
  { month: "September", week: 28, title: "Healing Convention & Mission Confrence", date: "25th–31st", time: "Morning & Evening" },
  { month: "September", week: 30, title: "HATEM Prophetic School of Ministry", date: "", time: "" },
  { month: "October", week: 34, title: "Pastor’s Shower", date: "12th", time: "" },
  { month: "October", week: 35, title: "Women’s Week", date: "20th–25th", time: "" },
  { month: "November", week: 37, title: "Men’s Week", date: "3rd–9th", time: "" },
  { month: "December", week: 41, title: "Ministerial Council", date: "29th", time: "" },
  { month: "December", week: 42, title: "National Thanksgiving", date: "", time: "" },
  { month: "December", week: 43, title: "Carol", date: "14th", time: "" },
  { month: "December", week: 44, title: "Christmas Service", date: "25th", time: "" },
  { month: "December", week: 45, title: "Cross Over Night", date: "31st", time: "" },
];

const TopBar = () => {
  const [announcement, setAnnouncement] = useState("");
  const flierImage = "/images/healing-convention.jpg"; // your actual image path

  useEffect(() => {
    const today = new Date();
    const currentMonth = today.toLocaleString("en-US", { month: "long" });
    const currentDay = today.getDate();

    const upcomingEvent = fullCalendar.find((event) => {
      if (event.month === currentMonth) {
        const eventDay = parseInt(event.date); 
        return eventDay >= currentDay;
      }
      return false;
    });

    if (upcomingEvent) {
      setAnnouncement(
        `📢 Upcoming: ${upcomingEvent.title} on ${upcomingEvent.date} ${upcomingEvent.month}  ${upcomingEvent.time || "TBA"}`
      );
    } else {
      const nextEvent = fullCalendar.find((event) => event.month !== currentMonth);
      if (nextEvent) {
        setAnnouncement(
          `📢 Upcoming: ${nextEvent.title} on ${nextEvent.date} ${nextEvent.month}  ${nextEvent.time || "TBA"}`
        );
      }
    }
  }, []);

  const handleShare = async () => {
    try {
      if (navigator.canShare && navigator.canShare({ files: [] })) {
        const response = await fetch(flierImage);
        const blob = await response.blob();
        const file = new File([blob], "event-flier.jpg", { type: blob.type });

        await navigator.share({
          title: "Great Harvest Bible Church Event",
          text: announcement + "\nJoin us for this life-changing event!",
          files: [file],
        });
      } else {
        // Fallback: copy link to clipboard
        await navigator.clipboard.writeText(window.location.origin + "/event-details");
        alert("Sharing not supported on this device. Event link copied to clipboard!");
      }
    } catch (error) {
      console.error("Error sharing", error);
    }
  };

  return (
    <div className="top-bar">
      <div className="top-bar-container">
        <div className="announcement">
          <span>{announcement || "Stay tuned for upcoming events!"}</span>
        </div>
        <div className="event-button">
          <a href="/event-details" className="btn-view-event">View Event</a>
        </div>
       
      </div>
    </div>
  );
};

export default TopBar;      
