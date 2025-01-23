"use client";

import React, { Ref, RefObject } from "react";
import ReactPlayer from "react-player";

interface VideoPlayerProps {
  url: string;
  playing: boolean;
  muted: boolean;
  onDuration: (duration: number) => void;
  onProgress: (state: {
    played: number;
    playedSeconds: number;
    loaded: number;
    loadedSeconds: number;
  }) => void;
  videoRef: RefObject<{ seekTo: (time: number) => void } | null>;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  url,
  playing,
  muted,
  onDuration,
  onProgress,
  videoRef,
}) => {
  return (
    <div className='relative h-0 pb-[56.25%]'>
      <ReactPlayer
        url={url}
        ref={videoRef as Ref<ReactPlayer>}
        playing={playing}
        muted={muted}
        onDuration={onDuration}
        onProgress={onProgress}
        width='100%'
        height='100%'
        className='absolute top-0 left-0 rounded-[10px]'
      />
    </div>
  );
};

export default VideoPlayer;
