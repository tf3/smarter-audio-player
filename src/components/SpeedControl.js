import React from 'react';

const SpeedControl = ({ participantName, speed, setSingleSpeakerSpeed }) => {
  const MAX_SPEED = 3;
  const MIN_SPEED = 0.5;
  const SPEED_INCREMENT = 0.2;

  const handlePlusClick = () => {
    if (speed < MAX_SPEED) {
      setSingleSpeakerSpeed(participantName, speed + SPEED_INCREMENT);
    }
  };

  const handleMinusClick = () => {
    if (speed > MIN_SPEED) {
      setSingleSpeakerSpeed(participantName, speed - SPEED_INCREMENT);
    }
  };

  const handleSpeedClick = () => {
    if (speed === MAX_SPEED) {
      setSingleSpeakerSpeed(participantName, MIN_SPEED);
    } else {
      handlePlusClick();
    }
  };

  return (
    <div id="speedControl">
      <button type="button" onClick={handleMinusClick}>-</button>
      <span onClick={handleSpeedClick}>{speed}</span>
      <button type="button" onClick={handlePlusClick}>+</button>
    </div>
  );
};

export default SpeedControl;
