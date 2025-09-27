import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const events = [
  {
    date: "12th",
    month: "October",
    time: "09:00 AM",
    title: "Pastor’s Shower",
    description: "A special service to honor and appreciate our pastors.",
    location: "Main Auditorium",
    color: "bg-green-800",
  },
  {
    date: "20th - 25th",
    month: "October",
    time: "Varies",
    title: "Women’s Week",
    description:
      "A week dedicated to empowering, teaching, and celebrating our women in the church.",
    location: "Main Auditorium",
    color: "bg-yellow-600",
  },
  {
    date: "3rd - 9th",
    month: "November",
    time: "Varies",
    title: "Men’s Week",
    description:
      "A powerful week of programs, teachings, and activities for the men of the church.",
    location: "Main Auditorium",
    color: "bg-green-800",
  },
  {
    date: "14th",
    month: "December",
    time: "5:00 PM",
    title: "Carol Service",
    description:
      "A joyful evening of worship, songs, and celebration of the birth of Christ.",
    location: "Main Auditorium",
    color: "bg-yellow-600",
  },
];

const UpcomingEvents = () => {
  return (
    <section id="events" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="title-font text-3xl md:text-4xl font-bold text-green-800 mb-4">
            Upcoming Events
          </h2>
          <div className="w-24 h-1 bg-yellow-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Join us for these special gatherings and community events.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition flex flex-col md:flex-row"
            >
              {/* Left Date Box */}
              <div
                className={`${event.color} text-white flex flex-col items-center justify-center p-6 md:w-1/3`}
              >
                <span className="text-4xl font-bold">{event.date}</span>
                <span className="text-xl">{event.month}</span>
                <span className="mt-2">{event.time}</span>
              </div>

              {/* Event Details */}
              <div className="md:w-2/3 p-6">
                <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">
                    <i className="fas fa-map-marker-alt mr-1"></i> {event.location}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="text-center mt-12">
          <a
            href="/calendar"
            className="inline-block bg-green-800 hover:bg-green-700 text-white px-6 py-3 rounded-md font-medium transition"
          >
            View Full Calendar
          </a>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
