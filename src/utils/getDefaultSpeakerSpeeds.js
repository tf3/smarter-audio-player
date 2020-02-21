const getDefaultSpeakerSpeeds = speakers => speakers.reduce((speakerSpeeds, speaker) => (
  { ...speakerSpeeds, [speaker]: 1 }
), {});

export default getDefaultSpeakerSpeeds;
