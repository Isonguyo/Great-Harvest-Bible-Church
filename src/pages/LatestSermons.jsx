import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./LatestSermons.css";

const sermons = [
     {
    date: "August 17, 2025",
    title: "Prepare Ye The Way Of The Lord",
    text: "Isiah 40:1-5",
    verse: "Always be prepared.",
    duration: "10 min",
    img: "images/ghbc68.jpg",
    video: "videos/Prepare.mp4",
    audio: "audios/Prepare.mp3"
     },
  {
    date: "August 3, 2025",
    title: "Heart Of Wisdom",
    text: "Psalms 90:1-12",
    verse: "Be Wise as Serpents but harmless as Doves.",
    duration: "9 min",
    img: "images/ghbc64.jpg",
    video: "videos/Heart-of-wisdom.mp4",
    audio: "audios/Heart-of-wisdom.mp3"
  },
  {
    date: "July 20, 2025",
    title: "Giving to the needy",
    text: "Dueteronomy 15:11",
    verse: "When you give to the poor, you lend to the Lord, and He will repay you.",
    duration: "9 min",
    img: "images/ghbc23.jpg",
    video: "videos/Giving-to-the-needy.mp4",
    audio: "audios/Giving-to-the-needy.mp3"
  },

];

const LatestSermons = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentMedia, setCurrentMedia] = useState(null); // { type: 'video' | 'audio', src: string }
  const mediaRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState("0:00");
  const [currentTime, setCurrentTime] = useState("0:00");

  useEffect(() => {
    const cards = document.querySelectorAll(".sermon-card");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("show");
            }, index * 200);
          }
        });
      },
      { threshold: 0.2 }
    );
    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  const openModal = (type, src) => {
    setCurrentMedia({ type, src });
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    if (mediaRef.current) mediaRef.current.pause();
    setProgress(0);
  };

  const handlePlayPause = () => {
    if (mediaRef.current.paused) {
      mediaRef.current.play();
    } else {
      mediaRef.current.pause();
    }
  };

  const handleForward = () => {
    mediaRef.current.currentTime += 10;
  };

  const handleBackward = () => {
    mediaRef.current.currentTime -= 10;
  };

  const handleTimeUpdate = () => {
    const current = mediaRef.current.currentTime;
    const total = mediaRef.current.duration;
    setProgress((current / total) * 100);
    setCurrentTime(formatTime(current));
    setDuration(formatTime(total));
  };

  const formatTime = (time) => {
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = currentMedia.src;
    link.download = currentMedia.src.split("/").pop();
    link.click();
  };

  return (
    <section id="sermons" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="title-font text-3xl md:text-4xl font-bold text-green-800 mb-4">
            Latest Sermons
          </h2>
          <div className="w-24 h-1 bg-yellow-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Watch or listen to our latest messages. All sermons are also
            available on our Facebook page.
          </p>
        </div>

        {/* Sermon Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sermons.map((sermon, index) => (
            <div
              key={index}
              className="sermon-card bg-white rounded-lg overflow-hidden shadow-sm"
            >
              {/* Image with Overlay & Play Icon */}
              <div className="relative">
                <img
                  src={sermon.img}
                  alt={sermon.title}
                  loading="lazy"
                  className="w-full h-48 object-cover"
                />
                <div className="overlay"></div>
                <div className="play-icon absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={() => openModal("video", sermon.video)}
                    className="bg-yellow-600 bg-opacity-90 rounded-full p-4"
                  >
                    <i className="fas fa-play text-white text-xl"></i>
                  </button>
                </div>
              </div>

              {/* Sermon Details */}
              <div className="p-6">
                <span className="text-sm text-yellow-600">{sermon.date}</span>
                <h3 className="text-xl font-bold mt-2 mb-3">{sermon.title}</h3>
                <p className="text-gray-600 mb-4">{sermon.verse}</p>
                 <p className="text-gray-600 mb-4">{sermon.text}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">
                    <i className="fas fa-clock mr-1"></i> {sermon.duration}
                  </span>
                  <div className="flex space-x-3">
                    <button
                      onClick={() => openModal("video", sermon.video)}
                      className="text-gray-500 hover:text-yellow-600"
                    >
                      <i className="fas fa-play-circle"></i>
                    </button>
                    {sermon.audio && (
                      <button
                        onClick={() => openModal("audio", sermon.audio)}
                        className="text-gray-500 hover:text-yellow-600"
                      >
                        <i className="fas fa-headphones"></i>
                      </button>
                    )}
                    <button onClick={handleDownload} className="text-gray-500 hover:text-yellow-600">
                      <i className="fas fa-download"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            to="/sermons"
            className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-md font-medium transition"
          >
            View All Sermons
          </Link>
        </div>
      </div>

      {/* Modal for Video/Audio */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full p-4 relative">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-black text-2xl"
              onClick={closeModal}
            >
              &times;
            </button>

            {currentMedia.type === "video" ? (
              <video
                src={currentMedia.src}
                ref={mediaRef}
                controls={false}
                autoPlay
                className="w-full max-h-96 rounded-lg"
                onTimeUpdate={handleTimeUpdate}
              ></video>
            ) : (
              <audio
                src={currentMedia.src}
                ref={mediaRef}
                controls={false}
                autoPlay
                className="w-full"
                onTimeUpdate={handleTimeUpdate}
              ></audio>
            )}

            {/* Custom Controls */}
            <div className="mt-4 flex flex-col items-center">
              <div className="w-full bg-gray-300 h-2 rounded">
                <div
                  style={{ width: `${progress}%` }}
                  className="h-2 bg-yellow-600 rounded"
                ></div>
              </div>
              <div className="flex justify-between w-full text-sm mt-1">
                <span>{currentTime}</span>
                <span>{duration}</span>
              </div>
              <div className="flex justify-center mt-4 space-x-4">
                <button onClick={handleBackward} className="p-2 bg-gray-200 rounded-full">
                  <i className="fas fa-backward"></i>
                </button>
                <button onClick={handlePlayPause} className="p-2 bg-yellow-600 text-white rounded-full">
                  <i className="fas fa-play"></i> / <i className="fas fa-pause"></i>
                </button>
                <button onClick={handleForward} className="p-2 bg-gray-200 rounded-full">
                  <i className="fas fa-forward"></i>
                </button>
                <button onClick={handleDownload} className="p-2 bg-gray-200 rounded-full">
                  <i className="fas fa-download"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default LatestSermons;

