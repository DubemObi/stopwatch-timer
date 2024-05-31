import React from "react";

const TimerControls = ({ isRunning, startTimer, pauseTimer, resetTimer }) => {
  return (
    <div className="timer-controls">
      <button onClick={startTimer} disabled={isRunning}>
        Start
      </button>
      <button onClick={pauseTimer} disabled={!isRunning}>
        Pause
      </button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
};

export default TimerControls;
