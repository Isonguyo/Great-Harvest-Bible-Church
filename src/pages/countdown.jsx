import React, { useState, useEffect } from 'react';

const Countdown = () => {
  const calculateTimeLeft = () => {
    const target = new Date();
    target.setDate(target.getDate() + ((7 - target.getDay()) % 7)); // next Sunday
    target.setHours(9, 0, 0, 0); // 9:00 AM

    const now = new Date();
    const difference = target - now;

    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [time, setTime] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => setTime(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countdown">
      <p>Next Sunday Service in:</p>
      <div className="time-box">
        <span>{time.days.toString().padStart(2, '0')} Days</span>
        <span>{time.hours.toString().padStart(2, '0')} Hours</span>
        <span>{time.minutes.toString().padStart(2, '0')} Minutes</span>
        <span>{time.seconds.toString().padStart(2, '0')} Seconds</span>
      </div>
    </div>
  );
};

export default Countdown;
