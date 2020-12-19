import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
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

AudioPlayer.propTypes = {
  uri: PropTypes.string.isRequired,
  setPlaytime: PropTypes.func.isRequired,
  audioPlayerRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) })
  ]).isRequired
};

export default AudioPlayer;
