import { Link } from 'react-router-dom';
import { MapPin, Star } from 'lucide-react';
import "./style/WishlistPage.css";

const WishlistPage = () => {
  // Данные-заглушки
  const postsByCountry = {
    "Италия": [
      {
        id: "1",
        images: ["https://images.unsplash.com/photo-1533676802871-eca1ae998cd5"],
        location: {
          id: "101",
          name: "Колизей",
          city: "Рим",
          country: "Италия",
          rating: 4.8
        },
        caption: "Легендарный амфитеатр в центре Рима"
      },
      {
        id: "2",
        images: ["https://images.unsplash.com/photo-1515542622106-78bda8af0f66"],
        location: {
          id: "102",
          name: "Гранд-канал",
          city: "Венеция",
          country: "Италия",
          rating: 4.7
        },
        caption: "Главная водная артерия Венеции"
      }
    ],
    "Франция": [
      {
        id: "3",
        images: ["https://images.unsplash.com/photo-1431274172761-fca41d930114"],
        location: {
          id: "103",
          name: "Эйфелева башня",
          city: "Париж",
          country: "Франция",
          rating: 4.9
        },
        caption: "Символ Парижа и всей Франции"
      }
    ]
  };

  // Заглушка для обработчика
  const handleRemoveFromWishlist = () => {};

  return (
    <div className="wishlist-container">
      <h1 className="wishlist-title">Мой список желаний</h1>

      {Object.keys(postsByCountry).length > 0 ? (
        <div className="wishlist-content">
          {Object.entries(postsByCountry).map(([country, countryPosts]) => (
            <div key={country} className="country-section">
              <h2 className="country-title">
                <MapPin className="country-icon" />
                {country}
              </h2>
              
              <div className="posts-grid">
                {countryPosts.map(post => (
                  <div key={post.id} className="post-card">
                    <div className="post-image-container">
                      <Link to={`/post/${post.id}`}>
                        <img
                          src={post.images[0]}
                          alt={post.location.name}
                          className="post-image"
                        />
                      </Link>
                      <div className="post-rating">
                        <Star className="star-icon" />
                        <span>{post.location.rating.toFixed(1)}</span>
                      </div>
                      <button
                        onClick={handleRemoveFromWishlist}
                        className="remove-button"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <path d="M18 6 6 18"></path>
                          <path d="m6 6 12 12"></path>
                        </svg>
                      </button>
                    </div>
                    <div className="post-details">
                      <Link to={`/location/${post.location.id}`}>
                        <h3 className="post-title">{post.location.name}</h3>
                      </Link>
                      <div className="post-location">
                        <MapPin className="location-icon" />
                        <span>{post.location.city}</span>
                      </div>
                      <p className="post-caption">{post.caption}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="empty-wishlist">
          <p className="empty-message">Ваш список желаний пуст.</p>
          <p className="empty-hint">
            Сохраняйте места, которые хотите посетить, нажимая на иконку закладки.
          </p>
          <Link to="/explore" className="explore-button">
            Исследовать места
          </Link>
        </div>
      )}
    </div>
  );
};

export default WishlistPage;