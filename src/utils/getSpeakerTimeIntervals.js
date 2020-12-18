import getCurrentTranscription from './transcription';

const reduceSegments = segments => segments.reduce((reducedSegments, currentSegment) => {
  const { speaker_label, start_time, end_time } = currentSegment;
  const previousSegment = reducedSegments[reducedSegments.length - 1] || {};

  if (speaker_label === previousSegment.speaker_label) {
    return [
      ...reducedSegments.slice(0, reducedSegments.length - 1),
      { ...previousSegment, end_time }
    ];
  }

  return [...reducedSegments, { speaker_label, start_time, end_time }];
}, []);


const transcriptionNamesToTimeIntervals = {};

const getSpeakerTimeIntervals = () => {
  const transcription = getCurrentTranscription();
  const transcriptionName = transcription.jobName;

  if (!transcriptionNamesToTimeIntervals[transcriptionName]) {
    const { segments } = transcription.results.speaker_labels;
    transcriptionNamesToTimeIntervals[transcriptionName] = reduceSegments(segments);
  }
  return transcriptionNamesToTimeIntervals[transcriptionName];
};

export default getSpeakerTimeIntervals;
