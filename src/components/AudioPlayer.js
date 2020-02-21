import React, { useEffect, useRef } from 'react';

const AudioPlayer = ({ uri, setPlayTime }) => {
  const audioPlayerNode = useRef(null);

  const handleTimeUpdate = () => {
    const { current } = audioPlayerNode;
    if (!current) return false;

    return setPlayTime(current.currentTime);
  };

  useEffect(() => {
    const { current } = audioPlayerNode;

    if (current) {
      current.addEventListener('timeupdate', handleTimeUpdate);
    }

    return () => current.removeEventListener('timeupdate', handleTimeUpdate);
  }, [audioPlayerNode]);

  return (
    <div>
      <audio
        id="audioPlayer"
        controls
        src={uri}
        ref={audioPlayerNode}
      />
    </div>
  );
};

export default AudioPlayer;
