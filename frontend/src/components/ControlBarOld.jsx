// import "../stylesheets/ControlBar.css";

// import lastSongIcon from "../assets/icons/prev.svg";
// import pauseIcon from "../assets/icons/pause.svg";
// import nextIcon from "../assets/icons/next.svg";
// import repeatIcon from "../assets/icons/repeat.svg";
// import shuffleIcon from "../assets/icons/shuffle.svg";
// import volumeIcon from "../assets/icons/volume.svg";
// import { useEffect, useMemo, useRef, useState } from "react";

// import sampleMusic from "../assets/sample-music.mp3";

// const BASE_URL = "http://localhost:3000/";
// const chunkSize = 1024 * 1024;

// export default function ControlBar() {
//   const AudioContext = window.AudioContext || window.webkitAudioContext;
//   const audioElement = useRef(null);
//   const audioContext = useRef(null);
//   const [rendered, setRendered] = useState(false);
//   const track = useRef(null);
//   const gainNode = useRef(null);
//   const currentPosition = useRef(null);

//   const mediaSource = useRef(new MediaSource());
//   const sourceBuffer = useRef(null);

//   const [isPlaying, setIsPlaying] = useState(false);

//   const buttonCreator = (icon, altText) => {
//     return (
//       <button>
//         <img src={icon} alt={altText} />
//       </button>
//     );
//   };

//   const fetchChunks = async (sourceBuffer) => {    
//     try {
//       let position = 0;

//       while (mediaSource.current.readyState === 'open') {
//         if (!sourceBuffer.current.updating) {
//           const response = await fetch(BASE_URL, {
//             headers: {
//               'Range': `bytes=${0}-${chunkSize}`
//             }
//           });
//           const data = await response.arrayBuffer();
//           sourceBuffer.current.appendBuffer(data);
  
//           // Listen for when the buffer has finished updating
//           sourceBuffer.current.addEventListener('updateend', () => {
//             if (mediaSource.current.readyState === 'ended') {
//               mediaSource.current.endOfStream();
//             }
//           }, { once: true });
//         }
//       }

//     } catch(err) {
//       console.error('Error in fetch request: ', err);
//     }
  
//   };

//   const handleSourceOpen = () => {
//     sourceBuffer.current = mediaSource.current.addSourceBuffer('audio/mp3');
//     fetchChunks();
//   }

//   useEffect(() => {
//     if (!rendered && audioContext.current) {
//       gainNode.current = audioContext.current.createGain();
//       track.current = audioContext.current.createMediaElementSource(
//         audioElement.current
//       );
//       track.current
//         .connect(gainNode.current)
//         .connect(audioContext.current.destination);
//       setRendered(true);
//     }
//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [audioContext.current]);


//   const handlePlayPause = async (e) => {
//     e.preventDefault();

//     if (!audioContext.current) {
//       audioContext.current = new AudioContext();
//     }

//     if (audioContext.current.state === "suspended") {
//       audioContext.current.resume();
//     }

//     // Play or pause track depending on state
//     if (!isPlaying) {
//       audioElement.current.play();
//       setIsPlaying(true);
//     } else if (isPlaying) {
//       audioElement.current.pause();
//       setIsPlaying(false);
//     }

//     console.log(audioElement);
//   };

//   const handleVolume = (e) => {
//     if (gainNode.current) {
//       gainNode.current.gain.value = e.target.value;
//     }
//   };

//   const handleSeek = async (e) => {
//     e.preventDefault();
//     const seek = e.target.value;
//     const start = (seek * 4268199) / 100;
//     const end = start + 1024 * 1000; // 1 MB

//     // const audioBuffer = await getSongChunk(start, end);

//     console.log(audioElement.current.src);

//     // continue
//   }

//   return (
//     <div className="control-bar">
//       <div className="song-nav">
//         {buttonCreator(lastSongIcon, "back")}
//         <button onClick={handlePlayPause} role="switch" aria-checked="false">
//           <img src={pauseIcon} alt="play/pause" />
//           {isPlaying ? "Pause" : "Play"}
//         </button>
//         {buttonCreator(nextIcon, "back")}
//       </div>
//       <audio src={sampleMusic} ref={audioElement}>
//         Browser Not Supported
//       </audio>
//       <audio src={} ref={audioElement}>
//         Browser Not Supported
//   </audio>
//       {/* <input type="range" id="seek" min="0" max="100" onChange={handleSeek} step="5" ref={currentPosition} /> */}
//       {buttonCreator(repeatIcon, "back")}
//       {buttonCreator(shuffleIcon, "back")}
//       {buttonCreator(volumeIcon, "back")}
//       {/* <input
//         type="range"
//         id="volume"
//         min="0"
//         max="2"
//         step="0.01"
//         onChange={handleVolume}
//       /> */}
//     </div>
//   );
// }
