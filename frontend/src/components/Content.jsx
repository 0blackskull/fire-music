import "../stylesheets/Content.css";
import trendIcon from "../assets/icons/flame.svg";
import personIcon from "../assets/icons/user.svg";
import searchIcon from "../assets/icons/search.svg";
import ArtistCard from "./ArtistCard";
import TrendingSong from "./TrendingSong";
import { memo } from "react";

export const Content = memo(function Content({ searchInputRef }) {
  const placeholderString = "Enter keywords to search";

  console.log('Content re rendered');

  return (
    <div className="main-content">
      <div className="search-bar">
        <input
          type="text"
          ref={searchInputRef}
          placeholder={placeholderString}
        />
        <img src={searchIcon} alt="magnifying-glass" />
      </div>
      <div className="content-container">
        <div className="trending-songs">
          <div className="main-content-headers">
            <div>
              Trending{"  "}
              <img src={trendIcon} alt="Flame" />
            </div>
          </div>
          <div className="trending-songs-list">
            <TrendingSong />
          </div>
        </div>
        <div className="top-artists">
          <div className="main-content-headers">
            <div>
              Top Artists{"  "}
              <img src={personIcon} alt="Artist" />
            </div>
          </div>
          <div className="top-artists-list">
            <ArtistCard />
            <ArtistCard />
            <ArtistCard />
            <ArtistCard />
          </div>
        </div>
      </div>
    </div>
  );
})
