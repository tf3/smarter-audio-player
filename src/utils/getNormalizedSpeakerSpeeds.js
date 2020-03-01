import getSpeakerWordsPerMinute from './getSpeakerWordsPerMinute';

const round = x => Number(x.toFixed(1));

const getNormalizedSpeakerSpeeds = () => {
  const speakersWPM = getSpeakerWordsPerMinute();
  const speakers = Object.keys(speakersWPM);
  const baseRate = Object.values(speakersWPM)[0]; // the other speeds will be adjusted to match this WPM

  return speakers.reduce((normalizedSpeakerSpeeds, speaker) => ({
    ...normalizedSpeakerSpeeds,
    [speaker]: round(baseRate / speakersWPM[speaker])
  }), {});
};

export default getNormalizedSpeakerSpeeds;
