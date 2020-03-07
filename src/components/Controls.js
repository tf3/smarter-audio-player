import React, { useEffect } from 'react';
import Participant from './Participant';
import SpeedControl from './SpeedControl';

const Controls = ({ currentSpeaker, currentSpeakerSpeed, setSingleSpeakerSpeed, audioPlayerRef, participants, speakerSpeeds, speedsAreNormalized, setSpeedsAreNormalized, normalizeSpeakerSpeeds, setGlobalSpeed, globalSpeed }) => {
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

  const participantIsSpeaking = participant => participant === currentSpeaker;

  useEffect(() => {
    setSpeed(currentSpeakerSpeed);
  }, [currentSpeakerSpeed]);

  return (
    <div>
      {true && (
      <ul id="participants">
        {participants.map(participantName => (
          <Participant
            isSpeaking={participantIsSpeaking(participantName)}
            name={participantName}
            speed={speakerSpeeds[participantName]}
            setSingleSpeakerSpeed={setSingleSpeakerSpeed}
            key={participantName}
          />
        ))}
      </ul>
      )}
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
          participantName={null}
        />
      </form>
    </div>
  );
};

export default Controls;
