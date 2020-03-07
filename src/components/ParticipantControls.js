import React from 'react';
import PropTypes from 'prop-types';
import Participant from './Participant';

const ParticipantControls = ({
  currentSpeaker,
  participants,
  setSingleSpeakerSpeed,
  speakerSpeeds
}) => {
  const participantIsSpeaking = participant => participant === currentSpeaker;

  return (
    <ul id="participants">
      {participants.map(participantName => (
        <Participant
          isSpeaking={participantIsSpeaking(participantName)}
          name={participantName}
          speed={speakerSpeeds[participantName]}
          setSingleSpeakerSpeed={setSingleSpeakerSpeed}
          key={participantName}
        />
      ))}
    </ul>
  );
};

ParticipantControls.propTypes = {
  currentSpeaker: PropTypes.string.isRequired,
  participants: PropTypes.arrayOf(PropTypes.string).isRequired,
  setSingleSpeakerSpeed: PropTypes.func.isRequired,
  speakerSpeeds: PropTypes.objectOf(PropTypes.number).isRequired
};

export default ParticipantControls;
