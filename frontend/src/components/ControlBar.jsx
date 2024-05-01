import React, { createContext, memo, useContext, useEffect, useRef, useState } from 'react';
import pauseIcon from "../assets/icons/pause.svg";
import prevIcon from "../assets/icons/prev.svg";
import nextIcon from "../assets/icons/next.svg";
import volumeIcon from "../assets/icons/volume.svg"
import "../stylesheets/ControlBar.css"
import { SongContext } from '../App';
import { secondsToTimeTag } from '../utils/conversionUtils';
import SongService from '../services/SongService';

const CacheContext = createContext({
  audioFileMap: new Map()
})

const AudioBar = ({ audioRef, duration, currentTimeDivRef, seekInputRef }) => {

  const handleSeek = (e) => {
    e.preventDefault();
    if (currentTimeDivRef && audioRef && Math.abs(audioRef.current.currentTime - e.target.value) >= 1) {
      audioRef.current.currentTime = e.target.value;
      currentTimeDivRef.current.textContent = secondsToTimeTag(e.target.value);
    }
  }

  return (
    <div className='timer-track'>
      <div className='timer' ref={currentTimeDivRef}>0:00</div>
      <input id='track' ref={seekInputRef} type='range' defaultValue={0}
        onChange={handleSeek} step={1} min="0" max={duration} />
        <div className='timer'>{secondsToTimeTag(duration)}</div>
    </div>
  )
}

const SongNav = memo(function SongNav({ handlePlayPause, handlePlayback }) {
  const { songQueue, setCurrentSong } = useContext(SongContext);

  const handleLast = (e) => {
    e.preventDefault();
    console.log(songQueue.items[songQueue.frontIndex].title,
       songQueue.items[songQueue.playIndex].title),
    setCurrentSong(songQueue.last());

    handlePlayback();
  }

  const handleNext = (e) => {
    e.preventDefault();

    setCurrentSong(songQueue.next());

    handlePlayback();
  }
 
  return (
    <div className='song-nav'>
      <button onClick={handleLast}>
        <img src={prevIcon} alt="Last song" />
      </button>
      <button onClick={handlePlayPause} role="switch" aria-checked="false">
        <img src={pauseIcon} alt="play/pause" />
      </button>
      <button onClick={handleNext}>
        <img src={nextIcon} alt="Next song" />
      </button>
    </div>
  )
})

const CreateAudio = memo(function CreateAudio({
  audioUrl,
  handleTimeUpdate,
  setDuration,
  audioRef
}) {
  return (
    <audio src={audioUrl} autoPlay={true} ref={audioRef} onTimeUpdate={(e) => handleTimeUpdate(e)}
      onDurationChange={(e) => setDuration(e.currentTarget.duration)}>
      Browser problem
    </audio>
  );
})

export const ControlBar = memo(function ControlBar() {

  const { currentSongData, songQueue } = useContext(SongContext);
  const audioRef = useRef(null);
  const volumeRef = useRef(null);
  const [duration, setDuration] = useState(0);

  const currentTimeDivRef = useRef(null);
  const seekInputRef = useRef(null);

  const [audioUrl, setaudioUrl] = useState(null);

  const playSong = async () => {
    if (audioRef  && !audioRef.current.paused) {
      audioRef.current.pause();
    }

    try {
      const songId = songQueue.play();

      const { file } =  await SongService.getSongFile(songId);

      const audioUrlString = "data:audio/mp3;base64," + file;

      setaudioUrl(audioUrlString);
    } catch (error) {
      console.error('Error playing song:', error);
    }
  };

  useEffect(() => {

    playSong();

    // Clean up function to revoke the audio URL when the component unmounts
    return () => {
      if (audioUrl) {
        URL.revokeObjectURL(audioUrl);
      }
    };
    
  }, [currentSongData, songQueue, audioUrl]);

  const handlePlayPause = (e) => {
    e.preventDefault();

    if (audioRef.current.paused === true) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }

  const handleTimeUpdate = (e) => {
    e.preventDefault();

    if (Math.abs(audioRef.current.currentTime - seekInputRef.current.value) > 1) {
      const updatedTime = Math.floor(audioRef.current.currentTime);
      seekInputRef.current.value = updatedTime;
      currentTimeDivRef.current.textContent = secondsToTimeTag(updatedTime);
    }
  }

  const handleVolume = (e) => {
    e.preventDefault();
    audioRef.current.volume = e.target.value;
  };

  const handleMute = (e) => {
    e.preventDefault();

    if (volumeRef.current.value > 0) {
      volumeRef.current.value = 0
    } else {
      volumeRef.current.value = 0.5;
    }

    audioRef.current.volume = volumeRef.current.value;
  }

  useEffect(() => {
    console.log('Control bar re rendered', currentSongData.id);
  })

  return (
    <CacheContext.Provider>
    <div className='control-bar'>
      <CreateAudio
        audioUrl={audioUrl}
        handleTimeUpdate={handleTimeUpdate}
        setDuration={setDuration}
        audioRef={audioRef}
      />
      <SongNav 
        handlePlayPause={handlePlayPause} 
        handlePlayback={playSong} 
      />
      <AudioBar 
        audioRef={audioRef} 
        duration={duration} 
        seekInputRef={seekInputRef} 
        currentTimeDivRef={currentTimeDivRef} 
      />
      <button id='mute-btn' onClick={handleMute}>
        <img src={volumeIcon} alt="Mute/sound" />
      </button>
      <input id='volume' type="range" ref={volumeRef} onChange={handleVolume} min="0" max="1" step={0.1} defaultValue={1} />
    </div>
    </CacheContext.Provider>
  );
})