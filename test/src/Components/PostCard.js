import { Link } from 'react-router-dom';
import { Heart, MessageSquare, MapPin } from 'lucide-react';
import './style/PostCard.css'; // Подключение файла со стилями

const PostCard = ({ post = defaultPost }) => {
  return (
    <div className="post-card">
      <img 
        src={post.image} 
        alt={post.title} 
        className="post-image"
      />
      <div className="post-content">
        <div className="post-location">
          <MapPin className="icon" />
          <span>{post.location}</span>
        </div>
        <h3 className="post-title">{post.title}</h3>
        <p className="post-description">{post.content}</p>
        <div className="post-meta">
          <div className="post-author">
            {post.author} • {post.date}
          </div>
          <div className="post-actions">
            <div className="like">
              <Heart className="icon" />
              <span>{post.likes}</span>
            </div>
            <div className="comments">
              <MessageSquare className="icon" />
              <span>{post.comments}</span>
            </div>
          </div>
        </div>
        <Link 
          to={`/posts/${post.id}`} 
          className="read-more"
        >
          Читать дальше
        </Link>
      </div>
    </div>
  );
};

const defaultPost = {
  id: "default",
  image: "https://via.placeholder.com/150", // Заглушка для изображения
  title: "Заголовок поста",                  // Заглушка для заголовка
  location: "Неизвестное местоположение",    // Заглушка для локации
  content: "Описание отсутствует.",         // Заглушка для контента
  author: "Гость",                          // Заглушка для автора
  date: "Неизвестная дата",                 // Заглушка для даты
  likes: 0,                                 // Заглушка для лайков
  comments: 0                               // Заглушка для комментариев
};

export default PostCard;
