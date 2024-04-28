import "../stylesheets/Sidebar.css";
import { TABS } from "../utils/constants/options.js";
import trendIcon from "../assets/icons/flame.svg";
import storeIcon from "../assets/icons/store.svg";
import personIcon from "../assets/icons/user.svg";
import albumsIcon from "../assets/icons/album.svg";
import discIcon from "../assets/icons/disc.svg";
import likedIcon from "../assets/icons/heart.svg";
import browseIcon from "../assets/icons/songlist.svg";
import radioIcon from "../assets/icons/radio.svg";
import logo from "../assets/icons/logo.svg";
import { memo } from "react";

const sidebarOptions = [
  {
    title: "Library",
    options: [
      {
        val: TABS.TRENDS,
        icon: trendIcon,
      },
      {
        val: TABS.ARTISTS,
        icon: personIcon,
      },
      {
        val: TABS.ALBUMS,
        icon: albumsIcon,
      },
      {
        val: TABS.SONGS,
        icon: discIcon,
      },
    ],
  },
  {
    title: "Discover",
    options: [
      {
        val: TABS.STORE,
        icon: storeIcon,
      },
      {
        val: TABS.LIKE,
        icon: likedIcon,
      },
      {
        val: TABS.RADIO,
        icon: radioIcon,
      },
      {
        val: TABS.BROWSE,
        icon: browseIcon,
      },
    ],
  },
];

export const Sidebar = memo(function Sidebar({ sidebarOption, setSidebarOption }) {
  const handleOptionClick = (e, selectedOption) => {
    e.preventDefault();
    setSidebarOption(selectedOption);
  };

  console.log('sidebar')

  return (
    // <div className="sidebar-wrapper">
      <div className="sidebar">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        {sidebarOptions.map((sec) => {
          return (
            <div className="section" key={sec.title}>
              <div className="title">{sec.title}</div>
              {sec.options.map((op) => {
                return (
                  <button
                    className={`${
                      sidebarOption === op.val ? "selected-" : ""
                    }option`}
                    onClick={(e) => handleOptionClick(e, op.val)}
                    key={op.val}
                  >
                    <img src={op.icon} alt={op.val} />
                    <span>{op.val}</span>
                  </button>
                );
              })}
            </div>
          );
        })}
      </div>
    // </div>
  );
})
