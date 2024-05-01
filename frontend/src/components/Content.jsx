import "../stylesheets/Content.css";
import trendIcon from "../assets/icons/flame.svg";
import personIcon from "../assets/icons/user.svg";
import searchIcon from "../assets/icons/search.svg";
import ArtistCard from "./ArtistCard";
import TrendingSong from "./TrendingSong";
import { memo, useEffect, useState } from "react";
import ArtistService from "../services/ArtistService";
import SongService from "../services/SongService";

export const Content = memo(function Content({ searchInputRef }) {
  const placeholderString = "Enter keywords to search";

  const [artists, setArtists] = useState([]);
  const [trendingSongs, setTrendingSongs] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const artistList = await ArtistService.getAllArtists();
      const trendingSongData = await SongService.getTrendingSong();
      // console.log(artistList);
      setArtists(artistList || []);
      setTrendingSongs(trendingSongData || []);
    }

    fetchData();
  }, []);

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
            {trendingSongs.map(trend => {
              return (
                <TrendingSong key={trend.id} trendingSongData={trend} />
              )
            })}
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
            {artists.map(artist => {
              return (
                <ArtistCard key={artist.id} artistData={artist} />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  );
})
