import trendIcon from "../assets/icons/flame.svg";
import ArtistCard from "../components/ArtistCard";
import artistCardCover from "../assets/icons/artist-sample.png";

const artistsContract = [
  {
    imgUrl: artistCardCover,
    artistName: "Travis Scott",
    numPlays: "23M",
  },
  {
    imgUrl: artistCardCover,
    artistName: "Travis Scott",
    numPlays: "23M",
  },
  {
    imgUrl: artistCardCover,
    artistName: "Travis Scott",
    numPlays: "23M",
  },
  {
    imgUrl: artistCardCover,
    artistName: "Travis Scott",
    numPlays: "23M",
  },
];

export default function TrendsContent() {
  return (
    <div className="trends-container">
      <div className="trends-section">
        <div className="title">Trending {trendIcon}</div>
        <div className="cards-holder"></div>
      </div>
      <div className="top-artists">
        <div className="title">Trending {trendIcon}</div>
        <div className="cards-holder">
          {artistsContract.map((artistData, ind) => {
            return (
              <ArtistCard key={artistData.artistName + ind} {...artistData} />
            );
          })}
        </div>
      </div>
    </div>
  );
}
