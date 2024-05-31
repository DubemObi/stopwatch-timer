import React, { useState, useRef } from "react";
import TimerInput from "./components/TimerInput";
import TimerDisplay from "./components/TimerDisplay";
import TimerControls from "./components/TimerControls";
import "./App.css";

const App = () => {
  const [initialTime, setInitialTime] = useState(0);
  const [remainingTime, setRemainingTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef(null);

  const setTimer = (time) => {
    setInitialTime(time);
    setRemainingTime(time);
    setIsRunning(false);
    if (timerRef.current) clearInterval(timerRef.current);
  };

  const startTimer = () => {
    if (remainingTime > 0) {
      setIsRunning(true);
      timerRef.current = setInterval(() => {
        setRemainingTime((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(timerRef.current);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    }
  };

  const pauseTimer = () => {
    setIsRunning(false);
    if (timerRef.current) clearInterval(timerRef.current);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setRemainingTime(initialTime);
    if (timerRef.current) clearInterval(timerRef.current);
  };

  return (
    <div className="App">
      <h1>Stopwatch Timer</h1>
      <TimerInput setTimer={setTimer} />
      <TimerDisplay remainingTime={remainingTime} />
      <TimerControls
        isRunning={isRunning}
        startTimer={startTimer}
        pauseTimer={pauseTimer}
        resetTimer={resetTimer}
      />
    </div>
  );
};

export default App;
