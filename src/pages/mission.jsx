import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsappButton";

const globalBranches = [
  {
    country: "Benin",
    city: "Cotonou",
    flag: "🇧🇯",
    description:
      "In 2020, we launched a vibrant congregation in COTONOU. Today, it’s a growing family committed to worship and service.",
    type: "foreign",
  },
  {
    country: "Nigeria",
    city: "Akpabuyo",
    flag: "🇳🇬",
    description:
      "Our Akpabuyo branch brings people together in worship and outreach, supporting both the diaspora and local communities through powerful services and charitable missions.",
    type: "local",
  },
  {
    country: "Nigeria",
    city: "Anantiga",
    flag: "🇳🇬",
    description:
      "Great Harvest Bible Church Anantiga is building a strong multicultural faith community, rooted in love, healing, and sound biblical teaching.",
    type: "local",
  },
  {
    country: "Nigeria",
    city: "Calabar, Marina",
    flag: "🇳🇬",
    description:
      "Great Harvest Bible Church Calabar, Marina is building a strong multicultural faith community, rooted in love, healing, and sound biblical teaching.",
    type: "local",
  },
];

const GlobalMissionSection = () => {
  const [showMessage, setShowMessage] = useState(false);

  const foreignBranches = globalBranches.filter(branch => branch.type === "foreign");
  const localBranches = globalBranches.filter(branch => branch.type === "local");

  return (
    <>
      <Header />
      <section id="mission" className="py-16 px-4 bg-white text-gray-800">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-green-700">Our Global Mission</h2>
          <p className="text-lg mb-10">
            Through God’s grace, we have expanded beyond borders to reach lives across the world.
            Our international branches continue to share the gospel and transform lives in diverse nations.
          </p>

          {/* Foreign Mission Section */}
          <h3 className="text-2xl font-bold text-green-600 mb-6">Foreign Mission</h3>
          <div className="grid md:grid-cols-1 gap-8 justify-center mb-16">
            {foreignBranches.map((branch, index) => (
              <div
                key={index}
                className="p-6 border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition"
              >
                <h4 className="text-xl font-semibold mb-2">
                  {branch.flag} {branch.city}, {branch.country}
                </h4>
                <p className="text-sm text-gray-600 mb-4">{branch.description}</p>
                <a
                  href="/cotonou"
                  className="inline-block mt-2 px-4 py-2 bg-green-700 text-white rounded-full hover:bg-green-800 transition"
                >
                  View Church
                </a>
              </div>
            ))}
          </div>

          {/* Local Missions Section */}
          <h3 className="text-2xl font-bold text-green-600 mb-6">Local Missions</h3>
          <div className="grid md:grid-cols-3 gap-8 justify-center">
            {localBranches.map((branch, index) => (
              <div
                key={index}
                className="p-6 border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition"
              >
                <h4 className="text-xl font-semibold mb-2">
                  {branch.flag} {branch.city}, {branch.country}
                </h4>
                <p className="text-sm text-gray-600">{branch.description}</p>
              </div>
            ))}
          </div>

          {/* Learn More Button */}
          <div className="mt-10">
            <button
              onClick={() => setShowMessage(true)}
              className="inline-block px-6 py-3 bg-green-700 text-white rounded-full hover:bg-green-800 transition"
            >
              Learn More About Our Mission
            </button>
            {showMessage && (
              <p className="mt-4 text-green-700 text-md font-medium">
                All our mission efforts are led by divine instruction through the Holy Spirit.
              </p>
            )}
          </div>
        </div>
      </section>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default GlobalMissionSection;
