import React from 'react';
import PropTypes from 'prop-types';
import SpeedControl from './SpeedControl';

const formatParticipantName = label => label.replace('spk_', 'speaker_');

const Participant = ({ isSpeaking, name, setSingleSpeakerSpeed, speed }) => (
  <li className={isSpeaking ? 'speaking' : 'silent'}>
    <span className="voiceIndicator" role="img" aria-label="speaker">🔊</span>
    <span className="speakerName">{formatParticipantName(name)}</span>
    <SpeedControl
      participantName={name}
      speed={speed}
      setSpeed={setSingleSpeakerSpeed}
    />
  </li>
);

Participant.propTypes = {
  isSpeaking: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  setSingleSpeakerSpeed: PropTypes.func.isRequired,
  speed: PropTypes.number.isRequired
};

export default Participant;
