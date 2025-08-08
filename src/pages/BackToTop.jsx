import React, { useEffect, useState } from "react";
import "./BackToTop.css";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`back-to-top ${isVisible ? "show" : ""}`}
      aria-label="Back to Top"
      role="button"
    >
      <i className="fas fa-arrow-up"></i>
    </button>
  );
};

export default BackToTop;
