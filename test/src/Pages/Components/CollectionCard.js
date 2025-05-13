import { Link } from 'react-router-dom';
import { Lock, Image } from 'lucide-react';
import './style/CollectionCard.css';

const CollectionCard = ({ collection }) => {
  return (
    <Link to={`/collections`} className="card-link">
      <div className="card">
        {collection.coverImage ? (
          <img
            src={collection.coverImage}
            alt={collection.name}
            className="card-image"
          />
        ) : (
          <div className="empty-card">
            <Image className="empty-icon" />
          </div>
        )}
        <div className="card-overlay"></div>
        <div className="card-info">
          <div className="card-header">
            <h3 className="card-title">{collection.name}</h3>
            {collection.isPrivate && <Lock className="private-icon" />}
          </div>
          <div className="card-meta">
            <span className="item-count">
              {collection.postCount} {collection.postCount === 1 ? 'post' : 'posts'}
            </span>
            <span className="view-link">
              Показать коллекции
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CollectionCard;