import getSpeakerTimeIntervals from './getSpeakerTimeIntervals';
import getCurrentTranscription from './transcription';

const getSpeakerAtInterval = ({ start_time, end_time }) => {
  const speakerTimeIntervals = getSpeakerTimeIntervals();
  const [startTimeNumber, endTimeNumber] = [Number(start_time), Number(end_time)];

  const intervalWithinRange = speakerTimeIntervals.find(interval => (
    startTimeNumber >= Number(interval.start_time) && endTimeNumber <= Number(interval.end_time)
  ));

  if (!intervalWithinRange) return null;
  return intervalWithinRange.speaker_label;
};

const getSpeakerWordCounts = () => {
  const transcription = getCurrentTranscription();
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
