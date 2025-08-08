import React, { useEffect, useState, useRef } from "react";
import "./SermonsPage.css";
import TopBar from "./TopBar";
import Header from "./Header";
import Footer from "./Footer";
import BackToTop from "./BackToTop";
import WhatsAppButton from "./WhatsappButton";

const allSermonsData = [
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
    text: "Deuteronomy 15:11",
    verse:
      "When you give to the poor, you lend to the Lord, and He will repay you.",
    duration: "9 min",
       img: "images/ghbc23.jpg",
    video: "videos/Giving-to-the-needy.mp4",
    audio: "audios/Giving-to-the-needy.mp3",
  },
  {
    date: "July 13, 2025",
    title: "How you can manage crisis",
    text: "John 21:1-14",
    verse: "In every crisis, trust God’s plan—He turns trials into testimonies",
    duration: "9 min",
    img: "images/ghbc25.jpg",
    video: "videos/Manage-Crisis.mp4",
    audio: "audios/Manage-Crisis.mp3",
  },
  {
    date: "July 6, 2025",
    title: "The Seventh Day",
    text: "Revelations 14:19-20",
    verse:
      "Apostle Elias Emmanuel emphasizes the day of completion and its importance...",
    duration: "10 min",
    img: "images/ghbc34.jpg",
    video: "videos/The-Seventh-Day.mp4",
    audio: "audios/The-Seventh-Day.mp3",
  },
  {
    date: "June 29, 2025",
    title: "The Great Invitation",
    text: "John 7:37-39",
    verse: "On the last and greatest day of the festival, Jesus stood and said...",
    duration: "7 min",
    img: "images/ghbc6.jpg",
    video: "videos/Great-Invitation.mp4",
    audio: "audios/Great-Invitation.mp3",
  },
];

const AllSermons = () => {
  const [query, setQuery] = useState("");
  const [filteredSermons, setFilteredSermons] = useState(allSermonsData);

  // Modal States
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mediaSrc, setMediaSrc] = useState("");
  const [mediaType, setMediaType] = useState("");
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const mediaRef = useRef(null);

  // Open Modal
  const openMediaModal = (src, type) => {
    setMediaSrc(src);
    setMediaType(type);
    setIsModalOpen(true);
  };

  // Close Modal
  const closeModal = () => {
    setIsModalOpen(false);
    setMediaSrc("");
    setMediaType("");
    setCurrentTime(0);
    setDuration(0);
  };

  // Handle Progress & Time
  useEffect(() => {
    if (isModalOpen && mediaRef.current) {
      const updateTime = () => {
        setCurrentTime(mediaRef.current.currentTime);
        setDuration(mediaRef.current.duration);
      };
      const media = mediaRef.current;
      media.addEventListener("timeupdate", updateTime);
      return () => media.removeEventListener("timeupdate", updateTime);
    }
  }, [isModalOpen]);

  const handleSeek = (e) => {
    const seekTime = (e.target.value / 100) * duration;
    mediaRef.current.currentTime = seekTime;
  };

  const formatTime = (time) => {
    if (!time || isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  const playPause = () => {
    if (mediaRef.current.paused) mediaRef.current.play();
    else mediaRef.current.pause();
  };

  const forward = () => {
    mediaRef.current.currentTime += 10;
  };

  const backward = () => {
    mediaRef.current.currentTime -= 10;
  };

  // Animations for cards
  useEffect(() => {
    const cards = document.querySelectorAll(".sermon-card");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("show");
            }, index * 150);
          }
        });
      },
      { threshold: 0.2 }
    );
    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, [filteredSermons]);

  // Filter sermons dynamically
  useEffect(() => {
    const result = allSermonsData.filter(
      (sermon) =>
        sermon.title.toLowerCase().includes(query.toLowerCase()) ||
        sermon.text.toLowerCase().includes(query.toLowerCase()) ||
        sermon.verse.toLowerCase().includes(query.toLowerCase()) ||
        sermon.date.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredSermons(result);
  }, [query]);

  return (
    <>
      <TopBar />
      <Header />
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          {/* Page Title */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-green-800 mb-4">
              All Sermons
            </h2>
            <div className="w-24 h-1 bg-yellow-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Browse through all our past sermons and stay inspired.
            </p>
          </div>

          {/* Search Bar */}
          <div className="mb-10 text-center">
            <input
              type="text"
              placeholder="Search sermons by title, verse, or date..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full md:w-1/2 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          {/* Sermon Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSermons.length > 0 ? (
              filteredSermons.map((sermon, index) => (
                <div
                  key={index}
                  className="sermon-card bg-white rounded-lg overflow-hidden shadow-sm"
                >
                  {/* Image with Overlay */}
                  <div className="relative">
                    <img
                      src={sermon.img}
                      alt={sermon.title}
                      className="w-full h-56 object-cover"
                    />
                    <div className="overlay"></div>
                    <div className="play-icon absolute inset-0 flex items-center justify-center">
                      <button
                        onClick={() =>
                          openMediaModal(sermon.video, "video")
                        }
                        className="bg-yellow-600 bg-opacity-90 rounded-full p-5"
                      >
                        <i className="fas fa-play text-white text-xl"></i>
                      </button>
                    </div>
                  </div>

                  {/* Sermon Info */}
                  <div className="p-6">
                    <span className="text-sm text-yellow-600">
                      {sermon.date}
                    </span>
                    <h3 className="text-xl font-bold mt-2 mb-3">
                      {sermon.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{sermon.verse}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">
                        <i className="fas fa-clock mr-1"></i> {sermon.duration}
                      </span>
                      <div className="flex space-x-2">
                        {sermon.audio && (
                          <button
                            onClick={() =>
                              openMediaModal(sermon.audio, "audio")
                            }
                            className="text-gray-500 hover:text-yellow-600"
                          >
                            <i className="fas fa-headphones"></i>
                          </button>
                        )}
                        <a
                          href={sermon.audio || sermon.video}
                          download
                          className="text-gray-500 hover:text-yellow-600"
                        >
                          <i className="fas fa-download"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center col-span-3 text-gray-500">
                No sermons found.
              </p>
            )}
          </div>
        </div>
      </section>
{/* Media Modal */}
{isModalOpen && (
  <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
    <div className="bg-white rounded-lg shadow-lg w-[90%] max-w-lg relative p-4">
      {/* Close Button */}
      <button
        onClick={closeModal}
        className="absolute top-2 right-3 text-gray-700 hover:text-red-600 text-2xl font-bold"
      >
        ×
      </button>

      {/* Media Player */}
      <div className="flex justify-center mb-4">
        {mediaType === "video" ? (
          <video
            ref={mediaRef}
            src={mediaSrc}
            autoPlay
            className="w-full max-h-[300px] rounded"
          />
        ) : (
          <audio
            ref={mediaRef}
            src={mediaSrc}
            autoPlay
            className="w-full"
          />
        )}
      </div>

      {/* Custom Controls */}
      <div className="flex flex-col space-y-3">
        <input
          type="range"
          value={duration ? (currentTime / duration) * 100 : 0}
          onChange={handleSeek}
          className="w-full accent-yellow-600"
        />
        <div className="flex justify-between text-sm text-gray-700">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
        <div className="flex justify-center space-x-4 mt-2">
          <button
            onClick={backward}
            className="bg-gray-200 px-3 py-2 rounded hover:bg-gray-300"
          >
            ⏪ 10s
          </button>
          <button
            onClick={playPause}
            className="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700"
          >
            ▶ / ⏸
          </button>
          <button
            onClick={forward}
            className="bg-gray-200 px-3 py-2 rounded hover:bg-gray-300"
          >
            ⏩ 10s
          </button>
          <a
            href={mediaSrc}
            download
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            ⬇
          </a>
        </div>
      </div>
    </div>
  </div>
)}


      <Footer />
      <BackToTop />
      <WhatsAppButton />
    </>
  );
};

export default AllSermons;
