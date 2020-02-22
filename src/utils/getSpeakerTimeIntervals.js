import transcription from '../../transcription-02.json';

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

const getSpeakerTimeIntervals = () => {
  const { segments } = transcription.results.speaker_labels;
  return reduceSegments(segments);
};

export default getSpeakerTimeIntervals;
