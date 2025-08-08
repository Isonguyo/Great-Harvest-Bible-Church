import React, { useState } from "react";
import "./GivingSection.css";

const GivingSection = () => {
  const [copied, setCopied] = useState("");

  const handleCopy = (text, label) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(label);
      setTimeout(() => setCopied(""), 2000);
    });
  };

  const accounts = [
    {
      name: "GENERAL GIVING",
      bank: "Zenith Bank",
      number: "1012762968",
    },
    {
      name: "MISSIONS SUPPORT",
      bank: "UBA",
      number: "1018083344",
    },
  ];

  return (
    <section id="give" className="bank-giving-section">
      <div className="container">
        <h2 className="heading">Give via Bank Transfer</h2>
        <p className="subtext">
          You can support the ministry by sending your gift directly to our bank accounts.
        </p>

        <div className="account-cards">
          {accounts.map((acct, idx) => (
            <div className="account-card" key={idx}>
              <h4>{acct.name}</h4>

              <p>
                <strong>Bank:</strong> {acct.bank}
                <button
                  className="copy-btn"
                  onClick={() => handleCopy(acct.bank, `bank-${acct.name}`)}
                  title="Copy bank name"
                >
                  <i className="fas fa-clipboard"></i>
                </button>
              </p>
              {copied === `bank-${acct.name}` && (
                <div className="success-message">Bank name copied ✅</div>
              )}

              <p>
                <strong>Account Number:</strong>{" "}
                <span className="account-number">{acct.number}</span>
                <button
                  className="copy-btn"
                  onClick={() => handleCopy(acct.number, `acct-${acct.name}`)}
                  title="Copy account number"
                >
                  <i className="fas fa-clipboard"></i>
                </button>
              </p>
              {copied === `acct-${acct.name}` && (
                <div className="success-message">Account number copied ✅</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GivingSection;
