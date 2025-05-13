// src/components/LocationPage/LocationPage.js
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Star, Globe, Info, Tag } from 'lucide-react';
import Post from './Components/Post';
import './style/LocationCard.css';

const LocationPage = () => {
  const { id } = useParams();
  const { posts, rateLocation } = usePost();
  const { currentUser } = useAuth();
  const [userRating, setUserRating] = useState(0);
  const [isRating, setIsRating] = useState(false);

  if (!id || !currentUser) return null;

  const locationPosts = posts.filter(post => post.location.id === id);
  if (locationPosts.length === 0) return <div className="lp-not-found">Location not found</div>;

  const location = locationPosts[0].location;

  const handleRateSubmit = () => {
    if (userRating > 0) {
      rateLocation(location.id, userRating);
      setIsRating(false);
    }
  };

  const similarLocations = posts
    .filter(post => 
      post.location.type === location.type && 
      post.location.id !== location.id
    )
    .slice(0, 4);

  return (
    <div className="lp-container">
      <div className="lp-main-card">
        {/* Hero Image */}
        <div className="lp-hero-section">
          <img
            src={locationPosts[0].images[0]}
            alt={location.name}
            className="lp-hero-image"
          />
          <div className="lp-hero-overlay"></div>
          <div className="lp-hero-content">
            <h1 className="lp-location-title">{location.name}</h1>
            <div className="lp-location-address">
              <MapPin className="lp-icon" />
              <span>{location.city}, {location.country}</span>
            </div>
            <div className="lp-rating-container">
              <Star className="lp-star-icon" />
              <span>{location.rating.toFixed(1)} ({location.ratingCount} ratings)</span>
              {!isRating && (
                <button 
                  onClick={() => setIsRating(true)}
                  className="lp-rate-btn"
                >
                  Rate
                </button>
              )}
            </div>
            
            {isRating && (
              <div className="lp-rating-form">
                <div className="lp-star-rating">
                  {[1, 2, 3, 4, 5].map(star => (
                    <button 
                      key={star}
                      onClick={() => setUserRating(star)}
                      className="lp-star-btn"
                    >
                      <Star 
                        className={`lp-star ${star <= userRating ? 'lp-filled' : ''}`} 
                      />
                    </button>
                  ))}
                </div>
                <button 
                  onClick={handleRateSubmit}
                  disabled={userRating === 0}
                  className="lp-submit-btn"
                >
                  Submit
                </button>
                <button 
                  onClick={() => setIsRating(false)}
                  className="lp-cancel-btn"
                >
                  Cancel
                </button>
              </div>
            )}
          </div>
        </div>
        
        {/* Location Info */}
        <div className="lp-info-section">
          <div className="lp-info-grid">
            <div className="lp-info-item">
              <Tag className="lp-info-icon" />
              <div>
                <div className="lp-info-label">Type</div>
                <div className="lp-info-value capitalize">{location.type}</div>
              </div>
            </div>
            <div className="lp-info-item">
              <MapPin className="lp-info-icon" />
              <div>
                <div className="lp-info-label">City</div>
                <div className="lp-info-value">{location.city}</div>
              </div>
            </div>
            <div className="lp-info-item">
              <Globe className="lp-info-icon" />
              <div>
                <div className="lp-info-label">Country</div>
                <div className="lp-info-value">{location.country}</div>
              </div>
            </div>
          </div>
          
          <div className="lp-about-section">
            <h2 className="lp-section-title">
              <Info className="lp-section-icon" />
              About
            </h2>
            <p className="lp-about-text">
              {location.name} is a popular {location.type} located in {location.city}, {location.country}. 
              Travelers from around the world visit this destination to experience its unique charm and beauty.
            </p>
          </div>
        </div>
      </div>

      {/* Posts from this location */}
      <h2 className="lp-posts-title">Posts from {location.name}</h2>
      <div className="lp-posts-container">
        {locationPosts.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>

      {/* Similar locations */}
      {similarLocations.length > 0 && (
        <div className="lp-similar-section">
          <h2 className="lp-similar-title">Similar {location.type}s</h2>
          <div className="lp-similar-grid">
            {similarLocations.map(post => (
              <Link 
                key={post.id} 
                to={`/location/${post.location.id}`}
                className="lp-similar-card"
              >
                <div className="lp-similar-img-container">
                  <img 
                    src={post.images[0]} 
                    alt={post.location.name}
                    className="lp-similar-img" 
                  />
                  <div className="lp-similar-overlay"></div>
                  <div className="lp-similar-content">
                    <h3 className="lp-similar-name">{post.location.name}</h3>
                    <div className="lp-similar-address">
                      <MapPin className="lp-small-icon" />
                      <span>{post.location.city}, {post.location.country}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LocationPage;