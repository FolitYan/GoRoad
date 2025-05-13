import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Compass, PlusSquare, Search, Bookmark, LogOut, MapPin } from 'lucide-react';
import "./style/Header.css";

export default function Header(props) {
  const location = useLocation();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="header-container">
      <div className="header-inner">
        <Link to="/" className="header-brand">
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
            <Link to="/" className={`menu-link ${location.pathname === '/' ? 'active' : ''}`}>
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
            </Link>
            <button className="exit-btn" onClick={() => props.setAuth({ rez: false, path: "/home" })}>
              <LogOut className="menu-icon" />
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
