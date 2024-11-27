import React, { useState, useEffect } from 'react';

const App = () => {
  const [hours, setHours] = useState('');
  const [minutes, setMinutes] = useState('');
  const [seconds, setSeconds] = useState('');
  const [timeLeft, setTimeLeft] = useState(null);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning && timeLeft > 0) {
      timer = setTimeout(() => setTimeLeft((prev) => prev - 1), 1000);
    } else if (timeLeft === 0) {
      setIsRunning(false);
    }
    return () => clearTimeout(timer);
  }, [isRunning, timeLeft]);

  const calculateTotalSeconds = () => {
    const h = parseInt(hours || 0, 10) * 3600;
    const m = parseInt(minutes || 0, 10) * 60;
    const s = parseInt(seconds || 0, 10);
    return h + m + s;
  };

  const handleStart = () => {
    const totalSeconds = calculateTotalSeconds();
    if (totalSeconds > 0) {
      setTimeLeft(totalSeconds);
      setIsRunning(true);
    }
  };

  const handleReset = () => {
    setTimeLeft(null);
    setHours('');
    setMinutes('');
    setSeconds('');
    setIsRunning(false);
  };

  const formatTime = (time) => {
    const h = Math.floor(time / 3600).toString().padStart(2, '0');
    const m = Math.floor((time % 3600) / 60).toString().padStart(2, '0');
    const s = (time % 60).toString().padStart(2, '0');
    return `${h}:${m}:${s}`;
  };

  const handleHoursChange = (value) => {
    const numericValue = parseInt(value, 10);
    if (numericValue > 24) {
      setHours(24); 
    } else if (numericValue >= 0) {
      setHours(numericValue);
    } else {
      setHours(''); 
    }
  };

  const handleMinutesChange = (value) => {
    const numericValue = parseInt(value, 10);
    if (numericValue >= 60) {
      const extraHours = Math.floor(numericValue / 60);
      setMinutes(numericValue % 60); 
      setHours((prev) => Math.min(24, (parseInt(prev, 10) || 0) + extraHours));
    } else if (numericValue >= 0) {
      setMinutes(numericValue);
    } else {
      setMinutes(''); 
    }
  };

  const handleSecondsChange = (value) => {
    const numericValue = parseInt(value, 10);
    if (numericValue >= 60) {
      const extraMinutes = Math.floor(numericValue / 60);
      setSeconds(numericValue % 60);
      setMinutes((prev) => {
        const newMinutes = (parseInt(prev, 10) || 0) + extraMinutes;
        if (newMinutes >= 60) {
          const extraHours = Math.floor(newMinutes / 60);
          setHours((prevHours) =>
            Math.min(24, (parseInt(prevHours, 10) || 0) + extraHours)
          );
          return newMinutes % 60;
        }
        return newMinutes;
      });
    } else if (numericValue >= 0) {
      setSeconds(numericValue);
    } else {
      setSeconds(''); 
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="w-full rounded-lg flex flex-col justify-center items-center">
        <p className="text-xl font-semibold text-center mb-8">Lets contribute and make more creative</p>
        {!isRunning ? (
          <div className="space-y-6 max-w-lg">
            <div className="flex justify-between space-x-4">
              <input
                type="number"
                value={hours}
                onChange={(e) => handleHoursChange(e.target.value)}
                placeholder="Hrs"
                className="w-1/3 px-4 py-3 bg-gray-600 text-center rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="number"
                value={minutes}
                onChange={(e) => handleMinutesChange(e.target.value)}
                placeholder="Mins"
                className="w-1/3 px-4 py-3 bg-gray-600 text-center rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="number"
                value={seconds}
                onChange={(e) => handleSecondsChange(e.target.value)}
                placeholder="Secs"
                className="w-1/3 px-4 py-3 bg-gray-600 text-center rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              onClick={handleStart}
              className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg font-semibold transition duration-200"
            >
              Start Timer
            </button>
          </div>
        ) : (
          <div className="text-center">
            <p className="text-[15vw] font-bold mb-6">{formatTime(timeLeft)}</p>
            <button
              onClick={handleReset}
              className="px-3 py-3 bg-red-600 hover:bg-red-500 rounded-lg font-semibold transition duration-200 absolute top-10 right-10"
            >
              Reset Timer
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
