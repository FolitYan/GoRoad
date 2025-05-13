import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, MessageCircle, Bookmark, Share, MapPin, Star, ArrowLeft } from 'lucide-react';
import "./style/PostPage.css"

const PostPage = () => {
  // Заглушки данных для отображения
  const post = {
    id: '1',
    images: ['https://avatars.mds.yandex.net/i?id=c3a19d5e7bad3f31a7f632e741460753a63db354-9181220-images-thumbs&n=13'],
    caption: 'Beautiful view from the top!',
    likes: ['user1', 'user2'],
    comments: [
      {
        id: '1',
        user: 'user2',
        text: 'Amazing photo!',
        createdAt: '2023-05-01'
      }
    ],
    createdAt: '2023-05-01',
    hashtags: ['travel', 'view', 'vacation'],
    location: {
      id: 'loc1',
      name: 'Eiffel Tower',
      city: 'Paris',
      country: 'France',
      rating: 4.8,
      ratingCount: 1245,
      type: 'landmark'
    }
  };

  const user = {
    id: 'user1',
    username: 'traveler',
    avatar: 'https://placekitten.com/100/100'
  };

  const currentUser = {
    id: 'currentUser',
    username: 'me',
    avatar: 'https://placekitten.com/101/101'
  };

  const similarPosts = [
    {
      id: '2',
      images: ['https://placekitten.com/801/600'],
      location: {
        name: 'Notre Dame',
        city: 'Paris',
        country: 'France'
      }
    },
    {
      id: '3',
      images: ['https://placekitten.com/800/601'],
      location: {
        name: 'Louvre',
        city: 'Paris',
        country: 'France'
      }
    }
  ];

  return (
    <div className="post-page-container">
      <button className="back-button">
        <ArrowLeft className="back-icon" />
        Back
      </button>

      <div className="post-content">
        <div className="post-card">
          {/* Post Header */}
          <div className="post-header">
            <div className="user-info">
              <Link to={`/profile/${user.id}`}>
                <img src={user.avatar} alt={user.username} className="user-avatar" />
              </Link>
              <div>
                <Link to={`/profile/${user.id}`} className="username">
                  {user.username}
                </Link>
                <Link to={`/location/${post.location.id}`} className="location">
                  <MapPin className="location-icon" />
                  {post.location.name}, {post.location.city}
                </Link>
              </div>
            </div>
          </div>

          {/* Post Image */}
          <div className="post-image-container">
            <img src={post.images[0]} alt={post.caption} className="post-image" />
            <div className="rating-badge">
              <Star className="star-icon" />
              <span>{post.location.rating.toFixed(1)}</span>
            </div>
          </div>

          {/* Post Actions */}
          <div className="post-actions">
            <div className="action-buttons">
              <div className="left-actions">
                <button className="action-button">
                  <Heart className="like-icon" />
                  <span>{post.likes.length}</span>
                </button>
                <button className="action-button">
                  <MessageCircle className="comment-icon" />
                  <span>{post.comments.length}</span>
                </button>
                <button className="action-button">
                  <Share className="share-icon" />
                </button>
              </div>
              <button className="action-button">
                <Bookmark className="save-icon" />
              </button>
            </div>
          </div>

          {/* Post Content */}
          <div className="post-details">
            <div className="post-caption">
              <p>{post.caption}</p>
              <div className="hashtags">
                {post.hashtags.map((tag) => (
                  <Link key={tag} to={`/explore/tags/${tag}`} className="hashtag">
                    #{tag}
                  </Link>
                ))}
              </div>
              <div className="post-date">
                Posted on {new Date(post.createdAt).toLocaleDateString('en-US', { 
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
            </div>

            {/* Location */}
            <div className="location-card">
              <Link to={`/location/${post.location.id}`} className="location-link">
                <div className="location-icon-container">
                  <MapPin className="location-pin-icon" />
                </div>
                <div className="location-info">
                  <h3>{post.location.name}</h3>
                  <p>{post.location.city}, {post.location.country}</p>
                  <div className="location-rating">
                    <Star className="star-icon" />
                    <span>{post.location.rating.toFixed(1)} ({post.location.ratingCount} ratings)</span>
                  </div>
                </div>
              </Link>
            </div>

            {/* Comments */}
            <div className="comments-section">
              <h3>Comments</h3>
              {post.comments.length > 0 ? (
                <div className="comments-list">
                  {post.comments.map((comment) => (
                    <div key={comment.id} className="comment">
                      <Link to={`/profile/${comment.user}`}>
                        <img 
                          src="https://placekitten.com/102/102" 
                          alt="Commenter" 
                          className="commenter-avatar"
                        />
                      </Link>
                      <div className="comment-content">
                        <div className="comment-header">
                          <Link to={`/profile/${comment.user}`} className="commenter-name">
                            User{comment.user}
                          </Link>
                          <span className="comment-date">
                            {new Date(comment.createdAt).toLocaleDateString()}
                          </span>
                        </div>
                        <p>{comment.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="no-comments">No comments yet. Be the first to comment!</p>
              )}

              <form className="comment-form">
                <img
                  src={currentUser.avatar}
                  alt={currentUser.username}
                  className="current-user-avatar"
                />
                <input
                  type="text"
                  placeholder="Add a comment..."
                  className="comment-input"
                />
                <button
                  type="submit"
                  className="comment-submit"
                >
                  Post
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Similar Posts */}
        {similarPosts.length > 0 && (
          <div className="similar-posts">
            <h2>You might also like</h2>
            <div className="similar-posts-grid">
              {similarPosts.map(post => (
                <Link
                  key={post.id}
                  to={`/post/${post.id}`}
                  className="similar-post-card"
                >
                  <div className="similar-post-image-container">
                    <img
                      src={post.images[0]}
                      alt="Similar location"
                      className="similar-post-image"
                    />
                    <div className="similar-post-overlay"></div>
                    <div className="similar-post-info">
                      <h3>{post.location.name}</h3>
                      <div className="similar-post-location">
                        <MapPin className="location-icon" />
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
    </div>
  );
};

export default PostPage;