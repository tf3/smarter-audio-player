import React from 'react';

const SpeedControl = ({ participantName, speed, setSingleSpeakerSpeed }) => {
  const MAX_SPEED = 3;
  const MIN_SPEED = 0.5;
  const SPEED_INCREMENT = 0.1;
  const PRESET_SPEEDS = [0.5, 1, 1.5, 2, 2.5, 3];
  const formatNumber = n => Number(n.toFixed(1));

  const handlePlusClick = () => {
    if (speed < MAX_SPEED) {
      setSingleSpeakerSpeed(participantName, formatNumber(speed + SPEED_INCREMENT));
    }
  };

  const handleMinusClick = () => {
    if (speed > MIN_SPEED) {
      setSingleSpeakerSpeed(participantName, formatNumber(speed - SPEED_INCREMENT));
    }
  };

  const handleSpeedClick = () => {
    if (speed === MAX_SPEED) {
      setSingleSpeakerSpeed(participantName, MIN_SPEED);
    } else {
      const newSpeed = PRESET_SPEEDS.find(presetSpeed => presetSpeed > speed);
      setSingleSpeakerSpeed(participantName, newSpeed);
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
