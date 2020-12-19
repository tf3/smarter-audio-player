import React from 'react';
import PropTypes from 'prop-types';
import Line from './Line';
import getSpeakerTimeIntervals from '../utils/getSpeakerTimeIntervals';

const speakerTimeIntervals = getSpeakerTimeIntervals();

// `duration` is the length of the entire audio file, not the length of the
// given interval
const getLineCoordinatesForInterval = (duration, { speaker_label, start_time, end_time }) => {
  const x1 = (Number(start_time) / duration) * 100;
  const x2 = (Number(end_time) / duration) * 100;
  return { x1, x2, speaker_label };
};

const getColorForSpeaker = speaker => {
  if (speaker.includes('0')) {
    return '#6766ff';
  }
  if (speaker.includes('1')) {
    return '#ff6666';
  }
  if (speaker.includes('2')) {
    return '#ffa500';
  }
  if (speaker.includes('3')) {
    return '#007f00';
  }
  return '#fff';
};

const SpeakerColorBar = ({ duration }) => {
  if (!duration) return null;

  return (
    <svg height="2em" width="100%">
      {speakerTimeIntervals
        .map(getLineCoordinatesForInterval.bind(null, duration))
        .map(({ x1, x2, speaker_label }) => (
          <Line x1={`${x1}%`} x2={`${x2}%`} color={getColorForSpeaker(speaker_label)} key={x1} />
        ))}
    </svg>
  );
};

SpeakerColorBar.propTypes = {
  duration: PropTypes.number
};

SpeakerColorBar.defaultProps = {
  duration: null
};


export default SpeakerColorBar;
