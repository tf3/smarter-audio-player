import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import SpeedControl from './SpeedControl';
import ParticipantControls from './ParticipantControls';

const Controls = ({
  audioPlayerRef,
  currentSpeaker,
  currentSpeakerSpeed,
  globalSpeed,
  normalizeSpeakerSpeeds,
  participants,
  setGlobalSpeed,
  setSingleSpeakerSpeed,
  speakerSpeeds
}) => {
  const [speedsAreNormalized, setSpeedsAreNormalized] = useState(false);

  const handleCheckboxChange = event => {
    const speedsShouldBeNormalized = event.target.checked;
    if (speedsShouldBeNormalized) normalizeSpeakerSpeeds();
    setSpeedsAreNormalized(speedsShouldBeNormalized);
  };

  const setSpeed = newSpeed => {
    const DEFAULT_SPEED = 1;
    const { current } = audioPlayerRef;

    if (current) {
      current.playbackRate = newSpeed || DEFAULT_SPEED;
    }
  };

  useEffect(() => {
    setSpeed(currentSpeakerSpeed);
  }, [currentSpeakerSpeed]);

  return (
    <div>
      <ParticipantControls
        currentSpeaker={currentSpeaker}
        participants={participants}
        setSingleSpeakerSpeed={setSingleSpeakerSpeed}
        speakerSpeeds={speakerSpeeds}
      />
      <form>
        <label>
          <input
            type="checkbox"
            checked={speedsAreNormalized}
            onChange={handleCheckboxChange}
          />
          Normalize speaker speeds
        </label>
        <SpeedControl
          setSpeed={setGlobalSpeed}
          speed={globalSpeed}
        />
      </form>
    </div>
  );
};

Controls.propTypes = {
  audioPlayerRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) })
  ]).isRequired,
  currentSpeaker: PropTypes.string.isRequired,
  currentSpeakerSpeed: PropTypes.number,
  globalSpeed: PropTypes.number.isRequired,
  normalizeSpeakerSpeeds: PropTypes.func.isRequired,
  participants: PropTypes.arrayOf(PropTypes.string).isRequired,
  setGlobalSpeed: PropTypes.func.isRequired,
  setSingleSpeakerSpeed: PropTypes.func.isRequired,
  speakerSpeeds: PropTypes.objectOf(PropTypes.number).isRequired
};

Controls.defaultProps = {
  currentSpeakerSpeed: null
};


export default Controls;
