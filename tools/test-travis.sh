#!/bin/bash

# Stop on error
set -e

# Install dependencies

echo travis_fold:start:Dependencies

wget https://johnvansickle.com/ffmpeg/builds/ffmpeg-git-amd64-static.tar.xz
tar xf ffmpeg-git-amd64-static.tar.xz

mkdir -p $HOME/bin
cp ffmpeg-git-*-static/{ffmpeg,ffprobe} $HOME/bin
cp ffmpeg-git-*-static/{ffmpeg,ffprobe} $(pwd)

export PATH=$(pwd)/bin:$PATH
export ALT_FFMPEG_PATH=$(pwd)/ffmpeg
export ALT_FFPROBE_PATH=$(pwd)/ffprobe

echo travis_fold:end:Dependencies

# Run tests
npm test
