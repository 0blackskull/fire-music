import {
  createContext,
  memo,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import "./App.css";
import Sidebar from "./components/Sidebar.jsx";
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
  // previousSongId: null,
  currentSongData: null,
  setCurrentSongId: () => {},
});

// export const SongProvider = memo(function SongProvider(children) {
//   const [currentSongId, setCurrentSongId] = useState(firstSong.id);
//   // const [previousSongId, setPreviousSongId] = useState(null);
//   const [currentSongData, setCurrentSongData] = useState(firstSong);

//   const handleSetCurrentSongId = (id, songData) => {
//     if (id !== currentSongId) {
//       // setPreviousSongId(currentSongId);
//       setCurrentSongId(id);
//       setCurrentSongData(songData);
//     }
//   };

//   return (
//     <SongContext.Provider
//       value={{
//         currentSongId,
//         // previousSongId,
//         currentSongData,
//         setCurrentSongId: handleSetCurrentSongId,
//       }}
//     >
//       {children}
//     </SongContext.Provider>
//   );
// });

function App() {
  const [sidebarOption, setSidebarOption] = useState(TABS.TRENDS);
  const searchRef = useRef(null);

  const [currentSongData, setCurrentSongData] = useState(firstSong);

  // const handleSetCurrentSongId = (songData) => {
  //   if (songData.id !== currentSongData.id) {

  //     setCurrentSongData(songData);
  //   }
  // };

  const setCurrentSong = useCallback((songData) => {
    if (songData.id !== currentSongData.id) {

      setCurrentSongData(songData);
    }
  }, [currentSongData.id])

  const contextValue = useMemo(() => ({
    currentSongData,
    setCurrentSong,
  }), [currentSongData, setCurrentSong]);

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

/*
<div>Sidebar, Albums...
    Sidebar sections components (Library, Discover)
  </div>
  <div>Content Area
    <div>Search input</div>
    <div>Top component (can be populated for Top/trending, Top Artists)</div>
  </div>
  <div>Song list
    Current Song section
    Next songs list section
  </div>
  <div>playbar</div>
*/
