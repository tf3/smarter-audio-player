import React from 'react';
import PropTypes from 'prop-types';
import SpeedControl from './SpeedControl';

const NormalizeSpeedControls = ({
  globalSpeed,
  handleCheckboxChange,
  setGlobalSpeed,
  speedsAreNormalized
}) => (
  <form>
    <label htmlFor="normalizeSpeeds">
      <input
        type="checkbox"
        checked={speedsAreNormalized}
        onChange={handleCheckboxChange}
        id="normalizeSpeeds"
      />
      Normalize speaker speeds
    </label>
    <SpeedControl
      setSpeed={setGlobalSpeed}
      speed={globalSpeed}
    />
  </form>
);

NormalizeSpeedControls.propTypes = {
  globalSpeed: PropTypes.number.isRequired,
  handleCheckboxChange: PropTypes.func.isRequired,
  setGlobalSpeed: PropTypes.func.isRequired,
  speedsAreNormalized: PropTypes.bool.isRequired
};

export default NormalizeSpeedControls;