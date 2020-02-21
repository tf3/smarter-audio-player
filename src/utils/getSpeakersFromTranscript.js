const getSpeakersFromTranscript = transcript => (
  transcript.reduce((speakers, { speaker_label }) => (
    speakers.includes(speaker_label) ? speakers : [...speakers, speaker_label]
  ), [])
);

export default getSpeakersFromTranscript;
