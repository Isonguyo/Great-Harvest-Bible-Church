import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Section */}
          <div>
            <h3 className="title-font text-xl font-bold mb-4">
              Great Harvest Bible Church
            </h3>
            <p className="mb-4">
              A place to belong, believe, and become who God created you to be.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/share/1CZ9Vj7ZqS/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-300"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.instagram.com/great_harvest_bible_church?igsh=anZieTViZGRmY3Rz" target="_blank" rel="noopener noreferrer"  className="hover:text-yellow-300"><i className="fab fa-instagram"></i></a>
              <a href="https://www.tiktok.com/@great.harvest.bib?_t=ZM-8yZodmBcint&_r=1" target="_blank" rel="noopener noreferrer"  className="hover:text-yellow-300"><i className="fab fa-tiktok"></i></a>
              <a
                href="https://mail.google.com/mail/u/0/#chat/ghbcmission@gmail.com"
                target="_blank"
                rel="noopener noreferrer"  className="hover:text-yellow-300"
            
              >
                <i className="fas fa-envelope"></i> Chat via Gmail
              </a>
          
            </div>
          </div>

          {/* ✅ Quick Links with Smooth Scroll */}
          <div>
            <h3 className="title-font text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link smooth to="/#home" className="hover:text-yellow-300 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link smooth to="/#about" className="hover:text-yellow-300 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link smooth to="/#sermons" className="hover:text-yellow-300 transition">
                  Sermons
                </Link>
              </li>
              <li>
                <Link smooth to="/#events" className="hover:text-yellow-300 transition">
                  Events
                </Link>
              </li>
              <li>
                <Link smooth to="/#ministries" className="hover:text-yellow-300 transition">
                  Ministries
                </Link>
              </li>
              <li>
                <Link smooth to="/#contact" className="hover:text-yellow-300 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Times */}
          <div>
            <h3 className="title-font text-xl font-bold mb-4">Service Times</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <i className="fas fa-cross mt-1 mr-2 text-yellow-300"></i>
                <div>
                  <p className="font-medium">Sunday Morning</p>
                  <p className="text-sm">9:00 AM</p>
                </div>
              </li>
              <li className="flex items-start">
                <i className="fas fa-cross mt-1 mr-2 text-yellow-300"></i>
                <div>
                  <p className="font-medium">Tuesday Evening</p>
                  <p className="text-sm">5:00 PM Bible Study</p>
                </div>
              </li>
              <li className="flex items-start">
                <i className="fas fa-cross mt-1 mr-2 text-yellow-300"></i>
                <div>
                  <p className="font-medium">Thursday Evening</p>
                  <p className="text-sm">5:00 PM Healing Service</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="title-font text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt mt-1 mr-2 text-yellow-300"></i>
                <p>16 Duke Town Close, State Housing Estate</p>
              </li>
              <li className="flex items-start">
                <i className="fas fa-phone-alt mt-1 mr-2 text-yellow-300"></i>
                <p>+2348037136682"</p>
              </li>
              <li className="flex items-start">
                <i className="fas fa-envelope mt-1 mr-2 text-yellow-300"></i>
                <p>ghbcmission@gmail.com</p>
              </li>
              <li className="flex items-start">
                <i className="fas fa-clock mt-1 mr-2 text-yellow-300"></i>
                <p>Office Hours: Open 24/7</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-green-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>
              &copy; {new Date().getFullYear()} Great Harvest Bible Church. All Rights Reserved.
            </p>
            {/* <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-yellow-300">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-yellow-300">
                Terms of Use
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
