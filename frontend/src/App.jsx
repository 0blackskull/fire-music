import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import "./App.css";
import Sidebar from "./components/Sidebar.jsx";
import Content from "./components/Content.jsx";
import CurrentTab from "./components/CurrentTab.jsx";
import ControlBar from "./components/ControlBar.jsx";

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

export const SongContext = createContext({
  currentSongId: null,
  previousSongId: null,
  setCurrentSongId: () => {},
});

export const SongProvider = ({ children }) => {
  const [currentSongId, setCurrentSongId] = useState(null);
  const [previousSongId, setPreviousSongId] = useState(null);

  const handleSetCurrentSongId = (id) => {
    if (id !== currentSongId) {
      setPreviousSongId(currentSongId);
      setCurrentSongId(id);
    }
  };

  return (
    <SongContext.Provider
      value={{
        currentSongId,
        previousSongId,
        setCurrentSongId: handleSetCurrentSongId,
      }}
    >
      {children}
    </SongContext.Provider>
  );
};

function App() {
  const [sidebarOption, setSidebarOption] = useState(TABS.TRENDS);
  const [searchInput, setSearchInput] = useState("");

  return (
    <SongProvider>
      <Sidebar
        sidebarOption={sidebarOption}
        setSidebarOption={setSidebarOption}
      />
      <Content setSearchInput={setSearchInput} />
      <div className="border"></div>
      <CurrentTab />
      <ControlBar />
    </SongProvider>
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
