import React, { useEffect } from 'react';

const Controls = ({ currentSpeaker, currentSpeakerSpeed, audioPlayerRef, speakers }) => {
  const setSpeed = newSpeed => {
    const DEFAULT_SPEED = 1;
    const { current } = audioPlayerRef;

    if (current) {
      current.playbackRate = newSpeed || DEFAULT_SPEED;
    }
  };

  const speakerIsCurrent = speaker => speaker === currentSpeaker;

  useEffect(() => {
    setSpeed(currentSpeakerSpeed);
  }, [currentSpeakerSpeed]);

  return (
    <div>
      <p>{currentSpeaker} ({currentSpeakerSpeed})</p>
      <ul>
        {speakers.map(speaker => <li><span>{speakerIsCurrent(speaker) ? '🔊' : ''}</span>{speaker}</li>)}
      </ul>
    </div>
  );
};

export default Controls;
