import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Compass, PlusSquare, Search, Bookmark, LogOut, MapPin } from 'lucide-react';
import "./style/Header.css";

export default function Header(props) {
  const location = useLocation();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const logOut = async (e) =>{
    e.preventDefault();
    try {
      const response = await fetch("https://localhost:7190/Account/logout", {
        method: "GET",
        credentials: 'include',
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const text = await response.text();
      const result = text ? JSON.parse(text) : {};
      console.log("khbxkasbdk");
      
    } catch (error) {
      console.error("Ошибка при отправке данных:", error);
    }
  }

  return (
    <header className="header-container">
      <div className="header-inner">
        <Link to="/home" className="header-brand">
          <MapPin className="logo-symbol" />
          <span className="brand-text">GoRoad</span>
        </Link>

        {isSearchOpen ? (
          <div className="search-wrapper">
            <div className="search-container">
              <input
                type="text"
                placeholder="Поиск мест или хэштегов..."
                className="search-field"
                autoFocus
              />
              <Search className="search-icon-placeholder" />
              <button
                className="search-close-btn"
                onClick={() => setIsSearchOpen(false)}
              >
                Отмена
              </button>
            </div>
          </div>
        ) : (
          <nav className="menu-container">
            <Link to="/home" className={`menu-link ${location.pathname === '/home' ? 'active' : ''}`}>
              <Home className="menu-icon" />
            </Link>
            <Link to="/explore" className={`menu-link ${location.pathname === '/explore' ? 'active' : ''}`}>
              <Compass className="menu-icon" />
            </Link>
            <button onClick={() => setIsSearchOpen(true)} className="menu-link">
              <Search className="menu-icon" />
            </button>
            <Link to="/createpost" className={`menu-link ${location.pathname === '/createpost' ? 'active' : ''}`}>
              <PlusSquare className="menu-icon" />
            </Link>
            <Link to="/profile">
              <div className="profile-avatar">
                <img
                  src={props.user.avatar}
                  alt={props.user.username}
                />
              </div>
            </Link >
            <button className="exit-btn" onClick={logOut}> 
              <LogOut className="menu-icon" />
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
