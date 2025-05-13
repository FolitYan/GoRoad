import { Link } from 'react-router-dom';
import { MapPin, Star, Compass, Bookmark } from 'lucide-react';
import "./style/LocationCard.css";

const LocationCard = () => {
  // Данные-заглушки
  const location = {
    id: '1',
    name: 'Пляж Сансет',
    city: 'Майами',
    country: 'США',
    type: 'beach',
    rating: 4.7,
    ratingCount: 245
  };

  const isWishlisted = false; // Заглушка для избранного

  return (
    <Link to={`/location/${location.id}`} className="location-card">
      <div className="card-content">
        <div className="image-wrapper">
          <img
            src="https://images.unsplash.com/photo-1679420438050-67286b160e94"
            alt={location.name}
            className="location-image"
          />
          <div className="image-overlay"></div>
          
          {/* Декоративная иконка */}
          <div className="decorative-icon">
            <Compass className="icon-compass" />
          </div>
          
          {/* Основная информация о локации */}
          <div className="location-main-info">
            <h3>{location.name}</h3>
            <div className="location-meta">
              <MapPin className="icon-pin" />
              <span>{location.city}, {location.country}</span>
            </div>
          </div>
          
          {/* Блок с рейтингом */}
          <div className="rating-block">
            <Star className="icon-star" />
            <span className="rating-value">{location.rating.toFixed(1)}</span>
            <span className="rating-count">({location.ratingCount})</span>
          </div>
          
          {/* Кнопка избранного */}
          <button className={`wishlist-btn ${isWishlisted ? 'active' : ''}`}>
            <Bookmark className="icon-bookmark" />
          </button>
        </div>
        
        {/* Дополнительная информация */}
        <div className="location-footer">
          <span className={`location-type ${location.type}`}>
            {location.type === 'beach' && <Star className="type-icon" />}
            {location.type === 'mountain' && <MapPin className="type-icon" />}
            {location.type === 'landmark' && <Compass className="type-icon" />}
            {location.type}
          </span>
          <span className="view-details">Подробнее →</span>
        </div>
      </div>
    </Link>
  );
};

export default LocationCard;