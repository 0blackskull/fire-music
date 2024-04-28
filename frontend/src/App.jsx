import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import "./App.css";
import { Sidebar } from "./components/Sidebar.jsx";
import { Content } from "./components/Content.jsx";
import { CurrentTab } from "./components/CurrentTab.jsx";
import { ControlBar } from "./components/ControlBar.jsx";

const TABS = {
  TRENDS: "Trends",
  ARTISTS: "Artists",
  ALBUMS: "Albums",
  SONGS: "Songs",
  STORE: "Store",
  LIKE: "Like",
  RADIO: "Radio",
  BROWSE: "Browse",
};

const firstSong = {
  id: 125,
  imgUrl: "/src/assets/test_image.png",
  // fileUrl: "../assets/test_song.mp3",
  title: "Somebody Else",
  artist: "The 1975",
  year: "2016",
  duration: "05:33" // seconds
}

export const SongContext = createContext({
  currentSongId: null,
  currentSongData: null,
  setCurrentSongId: () => {},
});


function App() {
  const [sidebarOption, setSidebarOption] = useState(TABS.TRENDS);
  const [nextSongs, setNextSongs] = useState([]);
  const searchRef = useRef(null);

  const [currentSongData, setCurrentSongData] = useState(firstSong);

  const setCurrentSong = useCallback((songData) => {
    if (songData.id !== currentSongData.id) {

      setCurrentSongData(songData);
    }
  }, [currentSongData.id])

  const contextValue = useMemo(() => ({
    currentSongData,
    setCurrentSong,
  }), [currentSongData, setCurrentSong]);


  useEffect(async () => {
    const nextSongsList = await getNextSongs();

    setNextSongs()
  }, []);

  return (
    <SongContext.Provider value={contextValue}>
      <Sidebar
        sidebarOption={sidebarOption}
        setSidebarOption={setSidebarOption}
      />
      <div className="border"></div>
      <Content searchInputRef={searchRef} />
      <div className="border"></div>
      <CurrentTab />
      <ControlBar />
    </SongContext.Provider>
  );
}

export default App;
