import React, { useRef, useState } from 'react';
import getFormattedTranscript from '../utils/getFormattedTranscript';
import getCurrentSpeaker from '../utils/getCurrentSpeaker';
import AudioPlayer from './AudioPlayer';
import Controls from './Controls';
import getSpeakersFromTranscript from '../utils/getSpeakersFromTranscript';
import getDefaultSpeakerSpeeds from '../utils/getDefaultSpeakerSpeeds';

const uri = '../69--Jeffrey-Ding-on-Chinas-AI-dream-Feb-6.mp3';
const transcript = getFormattedTranscript();

const App = () => {
  const speakers = getSpeakersFromTranscript(transcript);
  const [playtime, setPlaytime] = useState('');
  const [speakerSpeeds, setSpeakerSpeeds] = useState(getDefaultSpeakerSpeeds(speakers));
  const audioPlayerRef = useRef(null);
  const currentSpeaker = getCurrentSpeaker(transcript, playtime);
  const currentSpeakerSpeed = speakerSpeeds[currentSpeaker];

  console.log(speakerSpeeds);

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
