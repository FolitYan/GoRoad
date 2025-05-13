import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { MapPin, Lock, Edit, Trash, ArrowLeft, Grid, Plus } from 'lucide-react';
import "./style/CollectionDetail.css";

const CollectionDetail = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [collectionName, setCollectionName] = useState('Мои любимые места');
  const [isPrivate, setIsPrivate] = useState(false);

  // Данные-заглушки
  const collectionPosts = [
    {
      id: "1",
      images: ["https://images.unsplash.com/photo-1533676802871-eca1ae998cd5"],
      caption: "Прекрасный вид на город",
      location: {
        name: "Городская площадь",
        city: "Москва",
        country: "Россия"
      },
      hashtags: ["город", "архитектура", "путешествия"]
    },
    {
      id: "2",
      images: ["https://images.unsplash.com/photo-1515542622106-78bda8af0f66"],
      caption: "Отдых на природе",
      location: {
        name: "Лесное озеро",
        city: "Карелия",
        country: "Россия"
      },
      hashtags: ["природа", "отдых", "озеро"]
    }
  ];

  const isOwner = true; // Заглушка для проверки владельца

  return (
    <div className="collection-container">
      <button className="back-button">
        <ArrowLeft className="icon" />
        Назад
      </button>

      <div className="collection-header">
        <div className="collection-info">
          {isEditing ? (
            <div className="edit-title">
              <input
                type="text"
                value={collectionName}
                onChange={(e) => setCollectionName(e.target.value)}
                className="title-input"
              />
              {isPrivate && <Lock className="lock-icon" />}
            </div>
          ) : (
            <h1 className="collection-title">
              {collectionName}
              {isPrivate && <Lock className="lock-icon" />}
            </h1>
          )}
          <p className="collection-meta">
            <Link to="/profile/1" className="owner-link">
              Иван Иванов
            </Link>
            's коллекция • {collectionPosts.length} {collectionPosts.length === 1 ? 'пост' : 'постов'}
          </p>
        </div>
        
        {isOwner && (
          <div className="collection-actions">
            {isEditing ? (
              <>
                <div className="privacy-toggle">
                  <input
                    type="checkbox"
                    id="isPrivate"
                    checked={isPrivate}
                    onChange={(e) => setIsPrivate(e.target.checked)}
                  />
                  <label htmlFor="isPrivate">Приватная</label>
                </div>
                <button
                  onClick={() => setIsEditing(false)}
                  className="cancel-button"
                >
                  Отмена
                </button>
                <button
                  className="save-button"
                >
                  Сохранить
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => setIsEditing(true)}
                  className="edit-button"
                >
                  <Edit className="icon" />
                  Редактировать
                </button>
                <Link
                  to="/explore"
                  className="add-button"
                >
                  <Plus className="icon" />
                  Добавить
                </Link>
              </>
            )}
          </div>
        )}
      </div>

      {collectionPosts.length > 0 ? (
        <div className="posts-grid">
          {collectionPosts.map(post => (
            <Link 
              key={post.id} 
              to={`/post/${post.id}`}
              className="post-card"
            >
              <div className="post-image-container">
                <img
                  src={post.images[0]}
                  alt={post.caption}
                  className="post-image"
                />
                <div className="image-overlay"></div>
                <div className="post-location">
                  <h3>{post.location.name}</h3>
                  <div className="location-info">
                    <MapPin className="icon" />
                    <span>{post.location.city}, {post.location.country}</span>
                  </div>
                </div>
              </div>
              <div className="post-content">
                <p className="post-caption">{post.caption}</p>
                <div className="post-tags">
                  {post.hashtags.slice(0, 3).map(tag => (
                    <span key={tag} className="tag">#{tag}</span>
                  ))}
                  {post.hashtags.length > 3 && <span>...</span>}
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="empty-collection">
          <Grid className="empty-icon" />
          <h2>В этой коллекции пока нет постов</h2>
          <p>
            {isOwner 
              ? "Добавьте посты в коллекцию со страницы поиска." 
              : "Эта коллекция пока пуста."}
          </p>
          {isOwner && (
            <Link to="/explore" className="browse-button">
              Найти посты
            </Link>
          )}
        </div>
      )}
    </div>
  );
};

export default CollectionDetail;