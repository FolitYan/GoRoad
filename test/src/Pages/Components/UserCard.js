import { Link } from 'react-router-dom';
import { User as UserIcon } from 'lucide-react';
import "./style/UserCard.css";

const UserCard = ({ user = {}, showFollow = true }) => {
  // Устанавливаем значения по умолчанию для user
  const {
    id = '',
    username = 'Пользователь',
    name = '',
    avatar = null
  } = user || {};

  // Заглушки вместо реальных данных
  const currentUser = {
    id: "1",
    following: ["2"]
  };

  const isFollowing = currentUser.following.includes(id);
  const isCurrentUser = currentUser.id === id;

  // Заглушка для обработчика подписки
  const handleFollow = () => console.log(isFollowing ? 'Unfollow' : 'Follow');

  return (
    <div className="user-card">
      <Link to={`/profile/${id}`} className="user-info">
        {avatar ? (
          <img src={avatar} alt={username} className="user-avatar" />
        ) : (
          <div className="avatar-placeholder">
            <UserIcon className="placeholder-icon" />
          </div>
        )}
        <div className="user-details">
          <div className="username">{username}</div>
        </div>
      </Link>
      
      {showFollow && !isCurrentUser && (
        <button
          onClick={handleFollow}
          className={`follow-button ${isFollowing ? 'following' : ''}`}
        >
          {isFollowing ? 'Подписки' : 'Подписаться'}
        </button>
      )}
    </div>
  );
};

export default UserCard;