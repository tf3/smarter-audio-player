import React from 'react';
import getCurrentSpeaker from '../utils/getCurrentSpeaker';

const Controls = ({ playtime, transcript }) => (
  <p>{getCurrentSpeaker(transcript, playtime)}</p>
);

export default Controls;
