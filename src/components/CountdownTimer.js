import React, { useState } from 'react';
import './style.css'

const CountdownTimer = () => {
  const [inputTime, setInputTime] = useState('');
  const [currentTime, setCurrentTime] = useState(0);
  const [countdownInterval, setCountdownInterval] = useState(null);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      const parsedTime = Math.floor(parseFloat(inputTime));
      if (!isNaN(parsedTime)) {
        startCountdown(parsedTime);
      } else {
        startCountdown(0);
      }
    }
  };

  const startCountdown = (initialTime) => {
    clearInterval(countdownInterval);
    setCurrentTime(initialTime);

    const interval = setInterval(() => {
      setCurrentTime((prevTime) => {
        if (prevTime === 0) {
          clearInterval(interval);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    setCountdownInterval(interval);
  };


  return (
    <div className='container'>
      <h3 className='heading'> CountdownTimer </h3>
      <input
        type="text"
        placeholder="Enter time (seconds)"
        value={inputTime}
        onChange={(e) => setInputTime(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <div id="current-time"> Countdowns :  {currentTime}</div>
    </div>
  );
}

export default CountdownTimer;
