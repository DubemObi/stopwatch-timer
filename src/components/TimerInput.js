import React, { useState } from "react";

const TimerInput = ({ setTimer }) => {
  const [inputTime, setInputTime] = useState("");

  const handleChange = (e) => {
    setInputTime(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const time = parseInt(inputTime, 10);
    if (!isNaN(time) && time > 0) {
      setTimer(time);
      setInputTime("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        value={inputTime}
        onChange={handleChange}
        placeholder="Enter seconds"
      />
      <button type="submit">Set Timer</button>
    </form>
  );
};

export default TimerInput;
