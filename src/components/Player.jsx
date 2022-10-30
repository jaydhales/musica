import React, { useContext, useEffect, useState } from "react";
import AudioPlayer from "react-h5-audio-player";
import { MusicContext } from "../contexts/MusicContext";

import "react-h5-audio-player/lib/styles.css";
import "../styles/audio-player.css";

const Player = () => {
  const { audioQueue, trackIndex, setTrackIndex, addToRecent } =
    useContext(MusicContext);

  useEffect(() => {
    audioQueue && addToRecent(audioQueue);
  }, [audioQueue]);

  const handleClickPrevious = () => {
    setTrackIndex((currentTrack) =>
      currentTrack === 0 ? audioTracks.length - 1 : currentTrack - 1
    );
  };

  const handleClickNext = () => {
    setTrackIndex((currentTrack) =>
      currentTrack < audioTracks.length - 1 ? currentTrack + 1 : 0
    );
  };

  if (!audioQueue) return null;

  const { tracks } = audioQueue;

  const audioTracks = tracks.data;

  const currentTrack = audioTracks[trackIndex];

  return (
    <section className="audio-container">
      <div className="audio-details">
        <img src={currentTrack.album.cover_small} alt="" />
        <div>
          <h3>{currentTrack.title}</h3>
          <p>{currentTrack.artist.name}</p>
        </div>
      </div>

      <AudioPlayer
        src={currentTrack.preview}
        showSkipControls
        showJumpControls={false}
        autoPlay
        onClickPrevious={handleClickPrevious}
        onClickNext={handleClickNext}
        onEnded={handleClickNext}
        className="player"
      ></AudioPlayer>
    </section>
  );
};
``;
export default Player;
