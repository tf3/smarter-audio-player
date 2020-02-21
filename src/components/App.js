import React, { useRef, useState } from 'react';
import getFormattedTranscript from '../utils/getFormattedTranscript';
import AudioPlayer from './AudioPlayer';
import Controls from './Controls';

const uri = '../69--Jeffrey-Ding-on-Chinas-AI-dream-Feb-6.mp3';
const transcript = getFormattedTranscript();

const App = () => {
  const [playtime, setPlaytime] = useState('');
  const audioPlayerRef = useRef(null);

  return (
    <div>
      <AudioPlayer uri={uri} setPlaytime={setPlaytime} audioPlayerRef={audioPlayerRef} />
      <Controls transcript={transcript} playtime={playtime} audioPlayerRef={audioPlayerRef} />
    </div>
  );
};

export default App;
