import transcription from '../../placeholder-transcription.json';
import getSpeakerTimeIntervals from './getSpeakerTimeIntervals';

// TODO: move back into function
const speakerTimeIntervals = getSpeakerTimeIntervals();

const getSpeakerAtInterval = ({ start_time, end_time }) => {
  const [startTimeNumber, endTimeNumber] = [Number(start_time), Number(end_time)];

  const intervalWithinRange = speakerTimeIntervals.find(interval => (
    startTimeNumber >= Number(interval.start_time) && endTimeNumber <= Number(interval.end_time)
  ));

  if (!intervalWithinRange) return null;
  return intervalWithinRange.speaker_label;
};

const getSpeakerWordCounts = () => {
  const words = transcription.results.items;

  return words.reduce((wordCounts, { start_time, end_time }) => {
    const speaker = getSpeakerAtInterval({ start_time, end_time });
    if (!speaker) return wordCounts;

    return {
      ...wordCounts,
      [speaker]: (wordCounts[speaker] || 0) + 1
    };
  }, {});
};

export default getSpeakerWordCounts;
