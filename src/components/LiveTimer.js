import React, { useState, useEffect } from 'react';

const LiveTimer = () => {
  const [hours, setHours] = useState(9);
  const [minutes, setMinutes] = useState(11);
  const [seconds, setSeconds] = useState(7);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update seconds
      setSeconds((prevSeconds) => (prevSeconds === 59 ? 0 : prevSeconds + 1));

      // Update minutes and hours accordingly
      if (seconds === 59) {
        setMinutes((prevMinutes) => (prevMinutes === 59 ? 0 : prevMinutes + 1));

        if (minutes === 59) {
          setHours((prevHours) => (prevHours === 12 ? 1 : prevHours + 1));
        }
      }
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, [hours, minutes, seconds]);

  return (
    <h3 className="text-[22px] monument-ultra text-[#7843E8]">
      {`${hours.toString().padStart(2, '0')}H : ${minutes.toString().padStart(2, '0')}M : ${seconds.toString().padStart(2, '0')}s`}
    </h3>
  );
};

export default LiveTimer;
