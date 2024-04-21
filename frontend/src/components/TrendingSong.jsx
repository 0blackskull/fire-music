import coverPic from "../assets/cover-pic-sample.png";
import heartIcon from "../assets/red-heart.svg";
import "../stylesheets/TrendingSong.css";

const songData = {
  id: 123,
  title: "Let It Happen",
  artist: "Tame Impala",
  year: "2023",
  duration: "05:33",
  numPlays: "23M",
};

export default function TrendingSong() {
  return (
    <div className="trending-song">
      <div className="cover-pic">
        <img src={coverPic} alt="cover-image" />
      </div>
      <div className="desc-container">
        <div className="desc">
          <div className="song-title">{songData.title}</div>
          <div className="song-info">
            {songData.artist}
            {" - "}
            {songData.numPlays}
          </div>
        </div>
        <div className="heart-icon">
          <img src={heartIcon} alt="cover-image" />
        </div>
      </div>
    </div>
  );
}
