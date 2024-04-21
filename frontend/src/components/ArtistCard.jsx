import "../stylesheets/ArtistCard.css";
import artistCardCover from "../assets/icons/artist-sample.png";

const artistData = {
  imgUrl: artistCardCover,
  artistName: "Travis Scott",
  numPlays: "23M",
};

export default function ArtistCard() {
  return (
    <div className="artist-container">
      <img src={artistData.imgUrl} alt="" />
      <div className="artistName">{artistData.artistName}</div>
      <div className="numPlays">{artistData.numPlays}</div>
    </div>
  );
}
