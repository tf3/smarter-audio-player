import React from 'react';
import SpeedControl from './SpeedControl';

const Participant = ({ isSpeaking, name, speed, setSingleSpeakerSpeed }) => (
  <li className={isSpeaking ? 'speaking' : 'silent'}>
    <span className="speaker" role="img" aria-label="speaker">🔊</span>
    {name}
    <SpeedControl
      participantName={name}
      speed={speed}
      setSingleSpeakerSpeed={setSingleSpeakerSpeed}
    />
  </li>
);

export default Participant;
