import React, { useRef, useState } from 'react';
import getSpeakerTimeIntervals from '../utils/getSpeakerTimeIntervals';
import getCurrentSpeaker from '../utils/getCurrentSpeaker';
import AudioPlayer from './AudioPlayer';
import Controls from './Controls';
import getParticipantsFromTimeIntervals from '../utils/getParticipantsFromTimeIntervals';
import getDefaultSpeakerSpeeds from '../utils/getDefaultSpeakerSpeeds';

const uri = '../69--Jeffrey-Ding-on-Chinas-AI-dream-Feb-6.mp3';
const speakerTimeIntervals = getSpeakerTimeIntervals();

const App = () => {
  const participants = getParticipantsFromTimeIntervals(speakerTimeIntervals);
  const [playtime, setPlaytime] = useState('');
  const [speakerSpeeds, setSpeakerSpeeds] = useState(getDefaultSpeakerSpeeds(participants));
  const setSingleSpeakerSpeed = (speaker, speed) => setSpeakerSpeeds({ ...speakerSpeeds, [speaker]: speed });
  const audioPlayerRef = useRef(null);
  const currentSpeaker = getCurrentSpeaker(speakerTimeIntervals, playtime);
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
        speakerSpeeds={speakerSpeeds}
        setSingleSpeakerSpeed={setSingleSpeakerSpeed}
        audioPlayerRef={audioPlayerRef}
        participants={participants}
      />
    </div>
  );
};

export default App;
