import React, { useContext, useEffect, useRef, useState } from 'react';
import "../stylesheets/ControlBar.css"
import { SongContext } from '../App';

export default function ControlBar() {
  const [audioUrl, setaudioUrl] = useState(null);
  const { currentSongId } = useContext(SongContext);
  const rendered = useRef(false);

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

  return (
    <div className='control-bar'>
      <CreateAudio url={audioUrl} />
    </div>
  );
}
