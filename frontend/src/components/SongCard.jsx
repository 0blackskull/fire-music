import { useContext, useEffect, useState } from "react";
import React from "react";
import "../stylesheets/SongCard.css";
// import coverPhoto from "../assets/icons/user.svg";
import soundIcon from "../assets/icons/sound.svg";

import { SongContext } from "../App";

export default function SongCard({ songData }) {
  const [active, setActive] = useState(false);
  const { currentSongData, setCurrentSong } =
    useContext(SongContext);

  const handleChange = (e) => {
    e.preventDefault();
    setActive(true);
    setCurrentSong(songData);
    // console.log(`${songData.title} activated`);
  };

  useEffect(() => {
    setActive(false);
    // console.log(`${songData.title} is listening. Current song is ${currentSongData.id}`);
  }, [currentSongData?.id !== songData.id && active === true]);

  useEffect(() => {
    if (!active) {
      setActive(true);
    }
  }, [currentSongData?.id === songData.id])

  return (
    <div className="song-card">
      {
        <div className={`${active ? "active" : "inactive"}-sound`}>
          <img src={soundIcon} alt="Sound bars" />
        </div>
      }
      <div className={`song-card-wrapper${active ? "-active" : ""}`}>
        <button
          onClick={handleChange}
          className={`song-card-container${active ? "-active" : ""}`}
        >
          <div className="cover-pic-preview">
            <img src={songData.cardImg} alt="cover-image" />
          </div>
          <div className="description">
            <div className="title">{songData.title}</div>
            <div className="info">{songData.artist}{' • '}{songData.year}</div>
          </div>
          <div className="duration">{songData.duration}</div>
        </button>
      </div>
    </div>
  );
}
