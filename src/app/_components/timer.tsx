"use client";
import React, { useEffect, useState } from "react";

export const formatTime = (timeInSeconds: number) => {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = timeInSeconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
    2,
    "0"
  )}`;
};

const Clock = ({
  gamestart,
  gameend,
}: {
  gamestart: boolean;
  gameend: boolean;
}) => {
  const [timer, setCurrentTime] = useState(0);

  useEffect(() => {
    // console.log(st);
    if (gamestart) {
      const clockInterval = setInterval(updateCurrentTime, 1000);
      return () => clearInterval(clockInterval);
    }
  }, [gamestart]);

  const updateCurrentTime = () => {
    setCurrentTime((prev) => prev + 1);
  };
  return (
    <>
      <div className="bg-gray-100 p-4 rounded-md shadow-md text-center w-screen">
        <div className="text-sm text-gray-500 mb-2">Current Time:</div>
        <div className="text-lg font-bold">{formatTime(timer)}</div>
      </div>
      <div>
        {gameend && (
          <div className="bg-blue-500 p-8 rounded-lg text-center text-white">
            <h1 className="text-3xl font-bold mb-4">Game Over</h1>
            <div className="flex flex-col items-center">
              <h2 className="text-lg mb-2">Time Taken</h2>
              <h1 className="text-4xl font-bold">{formatTime(timer)}</h1>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Clock;
