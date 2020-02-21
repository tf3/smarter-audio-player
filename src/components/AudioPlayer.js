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

  return (
    <div>
      <SpeakerColorBar />
      <audio
        id="audioPlayer"
        controls
        src={uri}
        ref={audioPlayerRef}
      />
    </div>
  );
};

export default AudioPlayer;
