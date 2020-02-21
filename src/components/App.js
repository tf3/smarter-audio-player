import React, { useRef, useState } from 'react';
import getFormattedTranscript from '../utils/getFormattedTranscript';
import getCurrentSpeaker from '../utils/getCurrentSpeaker';
import AudioPlayer from './AudioPlayer';
import Controls from './Controls';

const uri = '../69--Jeffrey-Ding-on-Chinas-AI-dream-Feb-6.mp3';
const transcript = getFormattedTranscript();

const App = () => {
  const [playtime, setPlaytime] = useState('');
  const [speakerSpeeds, setSpeakerSpeeds] = useState({ spk_0: 0.5, spk_1: 2.5 });
  const audioPlayerRef = useRef(null);
  const currentSpeaker = getCurrentSpeaker(transcript, playtime);
  const currentSpeakerSpeed = speakerSpeeds[currentSpeaker];

  return (
    <div>
      <AudioPlayer
        uri={uri}
        setPlaytime={setPlaytime}
        audioPlayerRef={audioPlayerRef}
      />
      <Controls
        currentSpeaker={currentSpeaker}
        currentSpeakerSpeed={currentSpeakerSpeed}
        setSpeakerSpeeds={setSpeakerSpeeds}
        audioPlayerRef={audioPlayerRef}
      />
    </div>
  );
};

export default App;
