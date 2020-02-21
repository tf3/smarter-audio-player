import React from 'react';

const Participant = ({ isSpeaking, name, speed, setSingleSpeakerSpeed }) => (
  <li className={isSpeaking ? 'speaking' : 'silent'}>
    <span role="img" aria-label="speaker">🔊</span>
    {name}
    {speed}
    <button onClick={() => setSingleSpeakerSpeed(name, 2)} value="More" />
  </li>
);

export default Participant;
