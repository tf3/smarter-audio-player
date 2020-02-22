import React from 'react';
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

const getColorForSpeaker = speaker => speaker.includes('1') ? '#ff6666' : '#6766ff';

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

export default SpeakerColorBar;
