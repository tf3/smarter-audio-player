import React, { useEffect, useRef } from 'react';
import SpeakerColorBar from './SpeakerColorBar';

const AudioPlayer = ({ uri, setPlaytime, audioPlayerRef }) => {
  const handleTimeUpdate = () => {
    const { current } = audioPlayerRef;
    if (!current) return false;

    return setPlaytime(current.currentTime);
  };

  useEffect(() => {
    const { current } = audioPlayerRef;

    if (current) {
      current.addEventListener('timeupdate', handleTimeUpdate);
    }

    return () => current.removeEventListener('timeupdate', handleTimeUpdate);
  }, [audioPlayerRef]);

  const duration = audioPlayerRef?.current?.duration;

  return (
    <div>
      <SpeakerColorBar duration={duration} />
      <audio
        id="audioPlayer"
        preload="auto"
        controls
        src={uri}
        ref={audioPlayerRef}
      />
    </div>
  );
};

export default AudioPlayer;
