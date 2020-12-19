# Smarter Audio Player

## Overview

This audio player lets you control the payback rate on a speaker-by-speaker basis, lets you automatically normalize speaker speeds so everyone speaks at the same rate, and displays information about who is speaking over which intervals of the audio file. It requires a transcription of the audio file that is being played.

A [demo](https://thomasfoerster.ca/demos/audio-player/) is available.

This is just a proof of concept. It's very rough around the edges, and is missing about a billion features that you would want in an audio player.

## Setup

```
npm install
npm run build
```

You can then run the app by opening `dist/index.html`. It's pre-loaded with example audio file.

## Getting transcriptions

The given transcription is expected to match the format of transcriptions produced by [AWS Transcribe](https://aws.amazon.com/transcribe/).

When creating a transcription with AWS Transcribe you should:
- set `ShowSpeakerLabels` to `true`
- set `MaxSpeakerLabels` to the total number of speakers in the audio file (you can set it higher, but doing so produces worse results)

Read the [API reference](https://docs.aws.amazon.com/transcribe/latest/dg/API_Reference.html) for all of its options.

There's an example transcription in the `examples` folder.
