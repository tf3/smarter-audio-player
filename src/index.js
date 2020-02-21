import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import getFormattedTranscript from './utils/getFormattedTranscript';

console.log(getFormattedTranscript());

render(<App />, document.getElementById('app'));
