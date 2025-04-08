import { Link } from 'react-router-dom';
import { Camera, User } from 'lucide-react';
import './style/Header.css';

export default function Header() {
  return (
    <header>
      <div className="header-container">
        <div className="logo-container">
          <Link to="/" className="flex items-center space-x-2">
            <Camera className="icon camera-icon" />
            <span className="logo">GoRoad</span>
          </Link>
        </div>

        <nav className="navigation">
          <Link to="/" className="nav-link">Главная</Link>
          <Link to="/lents" className="nav-link">Лента</Link>
          <Link to="/popular" className="nav-link">Популярное</Link>
        </nav>

        <div className="profile-container">
          <Link to="/authentication" className="profile-link">
            <User className="icon user-icon" />
          </Link>
        </div>
      </div>
    </header>
  );
}
