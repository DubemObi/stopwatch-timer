import React from "react";

const TimerDisplay = ({ remainingTime }) => {
  return (
    <div>
      <h2>Remaining Time: {remainingTime} seconds</h2>
    </div>
  );
};

export default TimerDisplay;
