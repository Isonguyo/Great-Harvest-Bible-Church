import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import TopBar from "./TopBar";

const fullCalendar = [
  { month: "January", week: 1, title: "New Year Service", date: "1st", time: "9:00 AM" },
  { month: "January", week: 1, title: "Miracle/Healing Service", date: "2nd", time: "5:00 PM" },
  { month: "January", week: 1, title: "Communion Service", date: "5th", time: "7:30 AM" },
  { month: "January", week: 1, title: "Consecration Begins", date: "6th", time: "6:00 AM" },
  { month: "February", week: 4, title: "Miracle/Healing Service", date: "30th", time: "5:00 PM" },
  { month: "February", week: 5, title: "Communion Service", date: "2nd", time: "7:30 AM" },
  { month: "February", week: 6, title: "Revival Meeting", date: "13–15", time: "5:00 PM" },
  { month: "February", week: 7, title: "Seminar for Singles", date: "21st–22nd", time: "5:00 PM" },
  { month: "February", week: 8, title: "Tarry Night", date: "28th", time: "10:00 PM" },
  { month: "March", week: 10, title: "Workers Workshop Training", date: "14th–15th", time: "5:00 PM" },
  { month: "March", week: 11, title: "Evangelism", date: "22nd", time: "8:00 AM" },
  { month: "March", week: 11, title: "Tarry Night", date: "28th", time: "10:00 PM" },
  { month: "April", week: 12, title: "Evangelism", date: "22nd", time: "8:00 AM" },
  { month: "April", week: 14, title: "Easter Conference", date: "17th–20th", time: "" },
  { month: "May", week: 16, title: "National Mission Conference", date: "9th–11th", time: "" },
  { month: "May", week: 17, title: "Children Week", date: "22nd–25th", time: "" },
  { month: "May", week: 18, title: "Tarry Night", date: "30th", time: "10:00 PM" },
  { month: "June", week: 19, title: "Ministerial Council", date: "7th", time: "10:00 AM" },
  { month: "June", week: 20, title: "Youth Week", date: "16th–22nd", time: "" },
  { month: "June", week: 21, title: "Tarry Night", date: "27th", time: "10:00 PM" },
  { month: "July", week: 23, title: "Tarry Night", date: "26th", time: "10:00 PM" },
  { month: "July", week: 24, title: "Outreach", date: "10th–12th", time: "" },
  { month: "July", week: 25, title: "Sunday School Week", date: "25th–26th", time: "" },
  { month: "September", week: 28, title: "Healing Convention", date: "25th–31st", time: "" },
  { month: "September", week: 30, title: "HATEM Prophetic School of Ministry", date: "", time: "" },
  { month: "September", week: 30, title: "Youth Week", date: "15th-21st", time: "as lead" },
  { month: "October", week: 34, title: "Pastor’s Shower", date: "12th", time: "" },
  { month: "October", week: 35, title: "Women’s Week", date: "20th–25th", time: "" },
  { month: "November", week: 37, title: "Men’s Week", date: "3rd–9th", time: "" },
  { month: "December", week: 41, title: "Ministerial Council", date: "29th", time: "" },
  { month: "December", week: 42, title: "National Thanksgiving", date: "", time: "" },
  { month: "December", week: 43, title: "Carol", date: "14th", time: "" },
  { month: "December", week: 44, title: "Christmas Service", date: "25th", time: "" },
  { month: "December", week: 45, title: "Cross Over Night", date: "31st", time: "" },
];

const FullCalendar = () => {
  return (
    <>
      <TopBar />
      <Header />
      <section id="calendar" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">2025 Church Calendar</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border border-gray-300">
            <thead>
              <tr className="bg-green-800 text-white">
                <th className="px-4 py-2">Month</th>
                <th className="px-4 py-2">Week</th>
                <th className="px-4 py-2">Event</th>
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2">Time</th>
              </tr>
            </thead>
            <tbody>
              {fullCalendar.map((event, index) => (
                <tr key={index} className="border-b">
                  <td className="px-4 py-2">{event.month}</td>
                  <td className="px-4 py-2">{event.week}</td>
                  <td className="px-4 py-2 font-medium">{event.title}</td>
                  <td className="px-4 py-2">{event.date}</td>
                  <td className="px-4 py-2">{event.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
    <Footer />
  </>
  );
};

export default FullCalendar;