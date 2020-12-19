import React from 'react';
import PropTypes from 'prop-types';

const SpeedControl = ({ onClickAnywhere, participantName, speed, setSpeed }) => {
  const MAX_SPEED = 3;
  const MIN_SPEED = 0.5;
  const SPEED_INCREMENT = 0.1;
  const PRESET_SPEEDS = [0.5, 1, 1.5, 2, 2.5, 3];
  const formatNumber = n => Number(n.toFixed(1));

  const handlePlusClick = () => {
    if (speed < MAX_SPEED) {
      setSpeed(formatNumber(speed + SPEED_INCREMENT), participantName);
    }
  };

  const handleMinusClick = () => {
    if (speed > MIN_SPEED) {
      setSpeed(formatNumber(speed - SPEED_INCREMENT), participantName);
    }
  };

  const handleSpeedClick = () => {
    if (speed >= MAX_SPEED) {
      setSpeed(MIN_SPEED, participantName);
    } else {
      const newSpeed = PRESET_SPEEDS.find(presetSpeed => presetSpeed > speed);
      setSpeed(newSpeed, participantName);
    }
  };

  return (
    <div className="speedControl" onClick={onClickAnywhere}>
      <button type="button" onClick={handleMinusClick}>-</button>
      <span className="speedNumber" onClick={handleSpeedClick}>
        {speed}
        <span className="times">x</span>
      </span>
      <button type="button" onClick={handlePlusClick}>+</button>
    </div>
  );
};

SpeedControl.propTypes = {
  onClickAnywhere: PropTypes.func,
  participantName: PropTypes.string,
  speed: PropTypes.number.isRequired,
  setSpeed: PropTypes.func.isRequired
};

SpeedControl.defaultProps = {
  onClickAnywhere: () => {},
  participantName: ''
};

export default SpeedControl;
