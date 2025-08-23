import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [copyMessage, setCopyMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_vc7s0ry", // Your Service ID
        "template_axbfijo", // Your Template ID
        form.current,
        "WpjVhJ0fIcHsc0dUQ" // Your Public Key
      )
      .then(
        () => {
          setLoading(false);
          form.current.reset();
          setCopyMessage("✅ Message sent successfully!");
          setTimeout(() => setCopyMessage(""), 3000);
        },
        (error) => {
          setLoading(false);
          setCopyMessage("❌ Failed to send message. Please check your network connection and try again.");
          console.error(error.text);
          setTimeout(() => setCopyMessage(""), 3000);
        }
      );
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopyMessage("✔ Copied to clipboard!");
    setTimeout(() => setCopyMessage(""), 2000);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="section-title">Get in Touch</h2>
        <p className="section-subtitle">
          We'd love to hear from you! Whether you have questions, prayer requests, or want to volunteer, reach out to us.
        </p>

        {copyMessage && <p className="copy-alert">{copyMessage}</p>}

        <div className="contact-grid">
          {/* Contact Info */}
          <div className="contact-info">
            <h3>Contact Information</h3>
            <p><strong>Address:</strong> 16, Duke Town Close, State Housing, Calabar, Cross River State</p>

            <div className="copy-box">
              <span>📧 ghbcmission@gmail.com</span>
              <button onClick={() => copyToClipboard("ghbcmission@gmail.com")}>
                <i className="fas fa-clipboard"></i>
              </button>
            </div>

            <div className="copy-box">
              <span>📞 +2348037136682</span>
              <button onClick={() => copyToClipboard("+2348037136682")}>
                <i className="fas fa-clipboard"></i>
              </button>
            </div>

            <div className="social-links">
              <a href="https://www.facebook.com/GHBCCalabar" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
              <a href="https://www.instagram.com/great_harvest_bible_church?igsh=anZieTViZGRmY3Rz" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
              <a href="https://www.tiktok.com/@great.harvest.bib?_t=ZM-8yZodmBcint&_r=1" target="_blank" rel="noopener noreferrer"><i className="fab fa-tiktok"></i></a>
              <a
                href="https://mail.google.com/mail/u/0/#chat/ghbcmission@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="email-link"
              >
                <i className="fas fa-envelope"></i> Chat via Gmail
              </a>


              {/* <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a> */}
            </div>
          </div>

          {/* Contact Form */}
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <input type="text" name="from_name" placeholder="Your Name" required />
            <input type="email" name="from_email" placeholder="Your Email" required />
            <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
            <button type="submit" className="btn-primary" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
