const getTotalSpeakingTimesFromTimeIntervals = timeIntervals => (
  timeIntervals.reduce((speakingTimes, { speaker_label, start_time, end_time }) => (
    { ...speakingTimes,
      [speaker_label]: (speakingTimes[speaker_label] || 0) + Number(end_time) - Number(start_time) // speaking time in seconds
    }), {})
);

export default getTotalSpeakingTimesFromTimeIntervals;
