import "../stylesheets/CurrentSong.css";
import coverPhoto from "../assets/icons/user.svg";
import longSoundIcon from "../assets/icons/long-sound.svg";
import { memo, useContext } from "react";
import { SongContext } from "../App";

// const songData = {
//   id: 123,
//   imgUrl: coverPhoto,
//   title: "Let It Happen",
//   artist: "Tame Impala",
//   year: "2023",
//   duration: "05:33",
// };

export const CurrentSong = memo(function CurrentSong() {
  const { currentSongData } = useContext(SongContext);
  // console.log(window.location.pathname, coverPhoto);

  return (
    <div className="current-song-container-wrapper">
      <div className="current-song-container">
        <div className="cover-pic-preview">
          <img src= {currentSongData.imgUrl} alt="cover-image" />
        </div>
        <div className="cover-pic">
          <img src={longSoundIcon} alt="long sound bars" />
        </div>
        <div className="song-title">{currentSongData.title}</div>
        <div className="song-desc">
          <div>• {currentSongData.artist}</div>
          <div>• {currentSongData.year}</div>
        </div>
      </div>
    </div>
  );
})
