import React, { useEffect } from 'react';

const Controls = ({ currentSpeaker, currentSpeakerSpeed, audioPlayerRef }) => {
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
    <p>{currentSpeaker} ({currentSpeakerSpeed})</p>
  );
};

export default Controls;
