import getSpeakerWordsCounts from './getSpeakerWordCounts';
import getTotalSpeakingTimesFromTimeIntervals from './getTotalSpeakingTimesFromTimeIntervals';
import getSpeakerTimeIntervals from './getSpeakerTimeIntervals';

const getSpeakerWordsPerMinute = () => {
  const timeIntervals = getSpeakerTimeIntervals();
  const totalSpeakingTime = getTotalSpeakingTimesFromTimeIntervals(timeIntervals); // seconds
  const wordCounts = getSpeakerWordsCounts();

  return Object.keys(totalSpeakingTime).sort().reduce((wordsPerMinute, speaker) => ({
    ...wordsPerMinute,
    [speaker]: wordCounts[speaker] / (totalSpeakingTime[speaker] / 60)
  }), {});
};

export default getSpeakerWordsPerMinute;
