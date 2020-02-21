import React, { useState }  from 'react';
import getFormattedTranscript from '../utils/getFormattedTranscript';
import AudioPlayer from './AudioPlayer';
import Controls from './Controls';

const uri = '../69--Jeffrey-Ding-on-Chinas-AI-dream-Feb-6.mp3';
const transcript = getFormattedTranscript();

const App = () => {
  const [playTime, setPlayTime] = useState('');

  console.log(playTime);

  return (
    <div>
      <AudioPlayer uri={uri} setPlayTime={setPlayTime} />
      <Controls />
    </div>
  );
};

export default App;
