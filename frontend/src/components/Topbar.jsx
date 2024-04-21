import "../stylesheets/Topbar.css";
import bellIcon from "../assets/icons/bell.svg";

// User profile pic needed for top corner display

export default function Topbar({ searchInput, setSearchInput }) {
  return (
    <div className="topbar">
      <div>
        <input type="text" />
      </div>
      <div className="topbar-options">
        <div className="topbar-button-wrapper">
          <button>
            <img src={bellIcon} alt="Notification-Icon" />
          </button>
        </div>
        <div className="topbar-button-wrapper">
          <button>
            <img src={bellIcon} alt="Notification-Icon" />
          </button>
        </div>
      </div>
    </div>
  );
}
