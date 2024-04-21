import "../stylesheets/CurrentSong.css";
import coverPhoto from "../assets/icons/user.svg";
import longSoundIcon from "../assets/icons/long-sound.svg";

const songData = {
  id: 123,
  imgUrl: coverPhoto,
  title: "Let It Happen",
  artist: "Tame Impala",
  year: "2023",
  duration: "05:33",
};

export default function CurrentSong() {
  return (
    <div className="current-song-container-wrapper">
      <div className="current-song-container">
        <div className="cover-pic-preview">
          <img src={coverPhoto} alt="cover-image" />
        </div>
        <div className="cover-pic">
          <img src={longSoundIcon} alt="long sound bars" />
        </div>
        <div className="song-title">{songData.title}</div>
        <div className="song-desc">
          <div>• {songData.artist}</div>
          <div>• {songData.year}</div>
        </div>
      </div>
    </div>
  );
}
