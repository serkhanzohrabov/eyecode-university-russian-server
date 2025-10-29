// components/Timer.js
"use client";

import React, { useState, useEffect } from "react";
import styled from '../style/style.module.css'

export default function Timer() {
  const targetDate = new Date("2025-10-31T23:59:59").getTime();
  const [timeLeft, setTimeLeft] = useState(null);

  function getTimeRemaining() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  useEffect(() => {
    setTimeLeft(getTimeRemaining()); // первый вызов только на клиенте
    const timer = setInterval(() => {
      setTimeLeft(getTimeRemaining());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) return null; // пока SSR → ничего не рендерим

  return (
    <div className={styled.timer}>
      {timeLeft.days}д {timeLeft.hours}ч {timeLeft.minutes}м {timeLeft.seconds}с
    </div>
  );
}
