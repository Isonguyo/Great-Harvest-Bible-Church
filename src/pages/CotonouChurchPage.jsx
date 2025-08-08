import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsappButton";
import TopBar from "./TopBar";
// import "./CotonouChurchPage.css"; // optional CSS file for styling

const CotonouChurchPage = () => {
  return (
    <>
        <TopBar />
      <Header />

      <section className="py-16 px-4 bg-white text-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-green-700 mb-6">GHBC Cotonou 🇧🇯</h2>
          
          {/* About Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-green-600 mb-4">About Our Cotonou Church</h3>
            <p className="text-md text-gray-700 leading-relaxed">
           Welcome to great harvest mission center, where God is real. Worship with us, stay and grow with us and
            be nurture into the stature of a full complete man in Christ Jesus,
            ready for every good works. The spirit and the bride Say come.
            </p>
          </div>

          {/* Gallery Section */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-green-600 mb-6">Church Gallery</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <img src="images/cotonou.jpg" alt="Church 1" className="rounded-xl shadow" />
              <img src="images/cotonou1.jpg" alt="Church 1" className="rounded-xl shadow" />
              <img src="images/cotonou2.jpg" alt="Church 2" className="rounded-xl shadow" />
              <img src="images/cotonou3.jpg" alt="Church 3" className="rounded-xl shadow" />
              <img src="images/cotonou4.jpg" alt="Church 4" className="rounded-xl shadow" />
              <img src="images/cotonou5.jpg" alt="Church 5" className="rounded-xl shadow" />
              {/* Add more images if needed */}
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default CotonouChurchPage;
