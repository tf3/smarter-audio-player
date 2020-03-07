import React from 'react';
import SpeedControl from './SpeedControl';

const formatParticipantName = label => label.replace('spk_', 'speaker_');

const Participant = ({ isSpeaking, name, speed, setSingleSpeakerSpeed }) => (
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

export default Participant;
