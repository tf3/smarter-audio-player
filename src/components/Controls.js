import React, { useEffect } from 'react';
import Participant from './Participant';

const Controls = ({ currentSpeaker, currentSpeakerSpeed, setSingleSpeakerSpeed, audioPlayerRef, participants, speakerSpeeds, normalizeSpeakerSpeeds, speedsAreNormalized }) => {
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
      <button type="button" onClick={normalizeSpeakerSpeeds} disabled={speedsAreNormalized}>
        {speedsAreNormalized ? 'Speeds normalized' : 'Normalize speeds'}
      </button>
    </div>
  );
};

export default Controls;
