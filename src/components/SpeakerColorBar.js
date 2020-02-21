import React from 'react';

const SpeakerColorBar = () => (
  <svg height="10" width="100%">
    <line x1="0" y1="0" x2="10%" y2="0" style={{stroke: 'red', strokeWidth: 10}} />
    <line x1="10%" y1="0" x2="20%" y2="0" style={{stroke: 'green', strokeWidth:10}} />
  </svg>
);

export default SpeakerColorBar;
