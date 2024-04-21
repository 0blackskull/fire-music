import "../stylesheets/ControlBar.css";

import lastSongIcon from "../assets/icons/prev.svg";
import pauseIcon from "../assets/icons/pause.svg";
import nextIcon from "../assets/icons/next.svg";
import repeatIcon from "../assets/icons/repeat.svg";
import shuffleIcon from "../assets/icons/shuffle.svg";
import volumeIcon from "../assets/icons/volume.svg";
import { useEffect, useMemo, useRef, useState } from "react";

import sampleMusic from "../assets/sample-music.mp3";

const getSongChunk = async (start = 0, end = 1000) => {
  const headers = new Headers();

  headers.append("range", `bytes=${Math.floor(start)}-${Math.floor(end)}`);

  const req = new Request("http://localhost:3000/", {
    method: "GET",
    headers,
    mode: "cors"
  });

  const res = await fetch(req);

  console.log(res);

  return res.arrayBuffer();

};

export default function ControlBar() {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  const audioElement = useRef(null);
  const audioContext = useRef(null);
  const [rendered, setRendered] = useState(false);
  const track = useRef(null);
  const gainNode = useRef(null);
  const currentPosition = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);

  const buttonCreator = (icon, altText) => {
    return (
      <button>
        <img src={icon} alt={altText} />
      </button>
    );
  };

  useEffect(() => {
    if (!rendered && audioContext.current) {
      gainNode.current = audioContext.current.createGain();
      track.current = audioContext.current.createMediaElementSource(
        audioElement.current
      );
      track.current
        .connect(gainNode.current)
        .connect(audioContext.current.destination);
      setRendered(true);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [audioContext.current]);


  const handlePlayPause = async (e) => {
    e.preventDefault();

    if (!audioContext.current) {
      audioContext.current = new AudioContext();
    }

    if (audioContext.current.state === "suspended") {
      audioContext.current.resume();
    }

    // Play or pause track depending on state
    if (!isPlaying) {
      audioElement.current.play();
      setIsPlaying(true);
    } else if (isPlaying) {
      audioElement.current.pause();
      setIsPlaying(false);
    }

    console.log(audioElement);
  };

  const handleVolume = (e) => {
    if (gainNode.current) {
      gainNode.current.gain.value = e.target.value;
    }
  };

  const handleSeek = async (e) => {
    e.preventDefault();
    const seek = e.target.value;
    const start = (seek * 4268199) / 100;
    const end = start + 1024 * 1000; // 1 MB

    const audioBuffer = await getSongChunk(start, end);

    // continue
  }

  return (
    <div className="control-bar">
      <div className="song-nav">
        {buttonCreator(lastSongIcon, "back")}
        <button onClick={handlePlayPause} role="switch" aria-checked="false">
          <img src={pauseIcon} alt="play/pause" />
          {isPlaying ? "Pause" : "Play"}
        </button>
        {buttonCreator(nextIcon, "back")}
      </div>
      <audio src={sampleMusic} ref={audioElement}>
        Browser Not Supported
      </audio>
      {/* <audio src={} ref={audioElement}>
        Browser Not Supported
  </audio> */}
      <input type="range" id="seek" min="0" max="100" onChange={handleSeek} step="5" ref={currentPosition} />
      {buttonCreator(repeatIcon, "back")}
      {buttonCreator(shuffleIcon, "back")}
      {buttonCreator(volumeIcon, "back")}
      <input
        type="range"
        id="volume"
        min="0"
        max="2"
        step="0.01"
        onChange={handleVolume}
      />
    </div>
  );
}
