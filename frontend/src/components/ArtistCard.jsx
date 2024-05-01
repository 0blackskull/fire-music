import "../stylesheets/ArtistCard.css";
import artistCardCover from "../assets/icons/artist-sample.png";

// const artistData = {
//   imgUrl: artistCardCover,
//   name: "Travis Scott",
//   plays: "23M",
// };

export default function ArtistCard({ artistData }) {
  return (
    <div className="artist-container">
      <img src={artistData.imgUrl} alt="" />
      <div className="artistName">{artistData.name}</div>
      <div className="numPlays">{artistData.plays}</div>
    </div>
  );
}
