const getParticipantsFromTimeIntervals = timeIntervals => (
  timeIntervals.reduce((participants, { speaker_label }) => (
    participants.includes(speaker_label) ? participants : [...participants, speaker_label]
  ), []).sort()
);

export default getParticipantsFromTimeIntervals;
