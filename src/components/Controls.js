import React, { useEffect } from 'react';

const Controls = ({ currentSpeaker, currentSpeakerSpeed, audioPlayerRef, participants }) => {
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
      <p>{currentSpeaker} ({currentSpeakerSpeed})</p>
      <ul>
        {participants.map(participant => <li><span>{participantIsSpeaking(participant) ? '🔊' : ''}</span>{participant}</li>)}
      </ul>
    </div>
  );
};

export default Controls;
