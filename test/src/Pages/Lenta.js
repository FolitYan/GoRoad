import { useState } from 'react';
import { MapPin, Filter, Compass, Plane, Sun, Briefcase } from 'lucide-react';
import './style/Lenta.css';
import Post from './Components/Post';

const Lenta = ({posts}) => {
  const [filter, setFilter] = useState('all');

  return (
    <div className="home-container">

      <div className="filter-buttons">
        <button
          className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
        >
          Все записи
        </button>
        <button
          className={`filter-btn ${filter === 'following' ? 'active' : ''}`}
          onClick={() => setFilter('following')}
        >
          Подписки
        </button>
      </div>

      {/* Список постов */}
      <div className="posts-container">
        {posts.length > 0 ? (
          <div className="posts-grid">
            {
              posts.map((post => (
                <Post postData = {post} />
              )))
            }
          </div>
        ) : (
          <div className="empty-posts">
            <Filter className="empty-icon" />
            <p>Нет записей для отображения</p>
            {filter === 'following' && (
              <p>Подпишитесь на пользователей, чтобы видеть их записи</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Lenta;