import React, { useRef, useState } from 'react';
import getSpeakerTimeIntervals from '../utils/getSpeakerTimeIntervals';
import getCurrentSpeaker from '../utils/getCurrentSpeaker';
import AudioPlayer from './AudioPlayer';
import Controls from './Controls';
import getParticipantsFromTimeIntervals from '../utils/getParticipantsFromTimeIntervals';
import getDefaultSpeakerSpeeds from '../utils/getDefaultSpeakerSpeeds';
import getNormalizedSpeakerSpeeds from '../utils/getNormalizedSpeakerSpeeds';

const uri = '../69--Jeffrey-Ding-on-Chinas-AI-dream-Feb-6.mp3';
const speakerTimeIntervals = getSpeakerTimeIntervals();

const App = () => {
  const participants = getParticipantsFromTimeIntervals(speakerTimeIntervals);
  const [playtime, setPlaytime] = useState('');
  const [speakerSpeeds, setSpeakerSpeeds] = useState(getDefaultSpeakerSpeeds(participants));
  const audioPlayerRef = useRef(null);
  const currentSpeaker = getCurrentSpeaker(speakerTimeIntervals, playtime);
  const currentSpeakerSpeed = speakerSpeeds[currentSpeaker];
  const [speedsAreNormalized, setSpeedsAreNormalized] = useState(false);
  const [globalMultiplier, setGlobalMultiplier] = useState(1);

  const normalizeSpeakerSpeeds = (speed = globalMultiplier) => {
    const normalizedSpeakerSpeeds = getNormalizedSpeakerSpeeds(speed);
    setSpeakerSpeeds(normalizedSpeakerSpeeds);
  };

  const setSingleSpeakerSpeed = (speed, speaker) => setSpeakerSpeeds({ ...speakerSpeeds, [speaker]: speed });

  const setGlobalSpeed = speed => {
    setGlobalMultiplier(speed);
    normalizeSpeakerSpeeds(speed);
  };

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
        setSpeedsAreNormalized={setSpeedsAreNormalized}
        speedsAreNormalized={speedsAreNormalized}
        normalizeSpeakerSpeeds={normalizeSpeakerSpeeds}
        globalSpeed={globalMultiplier}
        setGlobalSpeed={setGlobalSpeed}
      />
    </div>
  );
};

export default App;
