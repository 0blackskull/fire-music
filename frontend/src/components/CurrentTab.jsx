import soundIcon from "../assets/icons/sound.svg";
import coverPhoto from "../assets/icons/user.svg";
import { CurrentSong } from "./CurrentSong";
import SongCard from "./SongCard";
import "../stylesheets/CurrentTab.css";

const songs = [{
  id: 124,
  imgUrl: "/src/assets/test_image.png",
  // fileUrl: "../assets/test_song.mp3",
  title: "Blinding Lights",
  artist: "The Weeknd",
  year: "2020",
  duration: "05:33" // seconds
},{
  id: 125,
  imgUrl: "/src/assets/test_image.png",
  // fileUrl: "../assets/test_song.mp3",
  title: "Somebody Else",
  artist: "The 1975",
  year: "2016",
  duration: "05:33" // seconds
},
{
  id: 126,
  imgUrl: "/src/assets/test_image.png",
  // fileUrl: "../assets/test_song.mp3",
  title: "Midnight City",
  artist: "M83",
  year: "2011",
  duration: "05:33" // seconds
},
{
  id: 127,
  imgUrl: "/src/assets/test_image.png",
  title: "Some New Title",
  artist: "New Artist",
  year: "2022",
  duration: "04:20"
},
{
  id: 128,
  imgUrl: "/src/assets/test_image.png",
  title: "Another Title",
  artist: "Different Artist",
  year: "2023",
  duration: "03:45"
}
]


export default function CurrentTab() {

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
        {songs.map(song => <SongCard key={song.id} songData={song} />)}
      </div>
    </div>
  );
}
