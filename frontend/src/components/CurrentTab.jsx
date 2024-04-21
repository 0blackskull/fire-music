import soundIcon from "../assets/icons/sound.svg";
import coverPhoto from "../assets/icons/user.svg";
import CurrentSong from "./CurrentSong";
import SongCard from "./SongCard";
import "../stylesheets/CurrentTab.css";

const songData = {
  id: 1,
  imgUrl: coverPhoto,
  title: "Let It Happen",
  artist: "Tame Impala",
  year: "2023",
  duration: "05:33",
};

const songDatatwo = {
  id: 2,
  imgUrl: coverPhoto,
  title: "Let It Happen",
  artist: "Tame Impala",
  year: "2023",
  duration: "05:33",
};

const songDataThree = {
  id: 3,
  imgUrl: coverPhoto,
  title: "Let It Happen",
  artist: "Tame Impala",
  year: "2023",
  duration: "05:33",
};

const songDataFour = {
  id: 4,
  imgUrl: coverPhoto,
  title: "Let It Happen",
  artist: "Tame Impala",
  year: "2023",
  duration: "05:33",
};

const songDataFive = {
  id: 5,
  imgUrl: coverPhoto,
  title: "Let It Happen",
  artist: "Tame Impala",
  year: "2023",
  duration: "05:33",
};

export default function CurrentTab() {
  const sound = <img src={soundIcon} alt="Sound bars" />;

  return (
    <div className="current-tab-container">
      <div className="current-tab-header">
        Currently Playing <img src={soundIcon} alt="Sound bars" />
      </div>
      <CurrentSong />
      <div className="current-tab-header">
        Next Songs <img src={soundIcon} alt="Sound bars" />
      </div>
      <div className="next-songs">
        <SongCard songData={songData} />
        <SongCard songData={songDatatwo} />
        <SongCard songData={songDataThree} />
        <SongCard songData={songDataFour} />
        <SongCard songData={songDataFive} />
      </div>
    </div>
  );
}
