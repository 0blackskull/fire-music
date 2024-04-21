import { useContext, useEffect, useState } from "react";
import React from "react";
import "../stylesheets/SongCard.css";
import coverPhoto from "../assets/icons/user.svg";
import soundIcon from "../assets/icons/sound.svg";

import { SongContext } from "../App";

// Song data imgUrl is compressed of cover
const songData = {
  id: 123,
  imgUrl: coverPhoto,
  title: "Let It Happen",
  artist: "Tame Impala",
  year: "2023",
  duration: "05:33",
};

export default function SongCard({ songData }) {
  const [active, setActive] = useState(false);
  const { currentSongId, previousSongId, setCurrentSongId } =
    useContext(SongContext);

  const handleChange = (e) => {
    e.preventDefault();
    setActive(true);
    setCurrentSongId(songData.id);
    console.log(previousSongId, currentSongId);
  };

  useEffect(() => {
    setActive(false);
  }, [songData.id === previousSongId && songData.id !== currentSongId]);

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
            <img src={coverPhoto} alt="cover-image" />
          </div>
          <div className="description">
            <div className="title">Let It Happen</div>
            <div className="info">Tame Impala 2020</div>
          </div>
          <div className="duration">05:33</div>
        </button>
      </div>
    </div>
  );
}
