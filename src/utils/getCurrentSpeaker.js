const getCurrentSpeaker = (transcript, playtime) => {
  const playtimeFallsWithinInterval = ({ start_time, end_time }) => {
    const startTimeNumber = Number(start_time);
    const endTimeNumber = Number(end_time);
    return playtime >= startTimeNumber && playtime <= endTimeNumber;
  };

  const currentInterval = transcript.find(playtimeFallsWithinInterval);

  if (!currentInterval) return '';
  return currentInterval.speaker_label;
};

export default getCurrentSpeaker;
