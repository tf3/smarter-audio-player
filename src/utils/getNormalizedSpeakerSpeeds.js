import getSpeakerWordsPerMinute from './getSpeakerWordsPerMinute';

const round = x => Number(x.toFixed(1));

// declared outside to save the value between different calls to `getNormalizedSpeakerSpeeds`
let speakersWPM = null;

const getNormalizedSpeakerSpeeds = (multiplier = 1) => {
  speakersWPM = speakersWPM || getSpeakerWordsPerMinute(); // TODO: optimize this; it's currently too slow
  const speakers = Object.keys(speakersWPM);
  const baseRate = Object.values(speakersWPM)[0]; // the other speeds will be adjusted to match this WPM

  return speakers.reduce((normalizedSpeakerSpeeds, speaker) => ({
    ...normalizedSpeakerSpeeds,
    [speaker]: round((baseRate / speakersWPM[speaker]) * multiplier)
  }), {});
};

export default getNormalizedSpeakerSpeeds;
