import React, { memo, useContext, useEffect, useRef, useState } from 'react';
import pauseIcon from "../assets/icons/pause.svg";
import "../stylesheets/ControlBar.css"
import { SongContext } from '../App';

export const ControlBar =  memo(function ControlBar() {
  const [audioUrl, setaudioUrl] = useState(null);
  
  const { currentSongId, currentSongData } = useContext(SongContext);
  const rendered = useRef(false);
  const audioRef = useRef(null);
  const volumeRef = useRef(null);
  const [duration, setDuration] = useState(0);

  const [currentTime, setCurrentTime] = useState(0);

  console.log('control bar');

  const CreateAudio = () => {
    return (<audio src={audioUrl} autoPlay={true} controls>Browser problem</audio>);
  }

  useEffect(() => {
    const playSong = async () => {
      console.log("current song: ", currentSongId);
      try {
        const response = await fetch(`http://localhost:3000/?songId=${currentSongId}`, {
          headers: {
            'Range': 'bytes=0-'
          },
        });
        const audioBlob = await response.blob(); // Extract Blob data from response
  
        const audioUrl = URL.createObjectURL(audioBlob);

        setaudioUrl(audioUrl);
      } catch (error) {
        console.error('Error playing song:', error);
      }
    };

    if (!rendered.current) {
      rendered.current = true;
      playSong();
    }

    // Clean up function to revoke the audio URL when the component unmounts
    return () => {
      if (audioUrl) {
        URL.revokeObjectURL(audioUrl);
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSongId, rendered]);

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
    if (audioRef.current) {
      if (Math.abs(audioRef.current.currentTime - currentTime) >= 1) {
        setCurrentTime(Math.floor(audioRef.current.currentTime));
      }
    }
  }

  const handleSeek = (e) => {
    e.preventDefault();
    if (Math.abs(audioRef.current.currentTime - e.target.value) >= 1) {
      audioRef.current.currentTime = e.target.value;
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
    console.log('Control bar re rendered');
  })

  return (
    <div className='control-bar'>
      <audio src={audioUrl} autoPlay={false} ref={audioRef} onTimeUpdate={handleTimeUpdate} onDurationChange={(e) => setDuration(e.currentTarget.duration)}>Browser problem</audio>
      <button onClick={handlePlayPause} role="switch" aria-checked="false">
          <img src={pauseIcon} alt="play/pause" />
      </button>
      <div className='timer'>{currentTime}{' / '}{currentSongData.duration}</div>
      <div><input type='range' value={currentTime} onChange={handleSeek} step={5} min="0" max={duration} /></div>
      <div><input type="range" ref={volumeRef} onChange={handleVolume} min="0" max="1" step={0.1} defaultValue={1} /></div>
      <div><button onClick={handleMute}>Mute</button></div>
    </div>
  );
})