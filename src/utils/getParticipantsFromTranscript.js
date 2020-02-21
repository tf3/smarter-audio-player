const getParticipantsFromTranscript = transcript => (
  transcript.reduce((participants, { speaker_label }) => (
    participants.includes(speaker_label) ? participants : [...participants, speaker_label]
  ), [])
);

export default getParticipantsFromTranscript;
