import { Link } from 'react-router-dom';
import { User as UserIcon } from 'lucide-react';
import "./style/CommentCard.css";

const CommentCard = ({ user }) => {
  
  const {
    id = '',
    username = 'Пользователь',
    text = 'raeilvahvhabvhabakbjnqwertyuiop;lkjhgfdsazxcvbnm,.;lkjhgfdsaqwertyuiop[;lkjhgfdsazxcvbnm,',
    avatar = null
  } = user || {};

  return (
    <div className="comment-card">
      <Link to={`/profile/${id}`} className="comment-info">
        {avatar ? (
          <img src={avatar} alt={username} className="comment-avatar" />
        ) : (
          <div className="comment-avatar-placeholder">
            <UserIcon className="comment-placeholder-icon" />
          </div>
        )}
        <div className="comment-details">
          <div className="comment-username">{username}</div>
          <div className="comment-text">{text}</div>
        </div>
      </Link>
    </div>
  );
};

export default CommentCard;