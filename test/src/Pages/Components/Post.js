import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, MessageCircle, Bookmark, Flag, Share, Star } from 'lucide-react';
import './style/Post.css';
import CommentCard from './CommentCard';

const Post = ({ postData }) => {
  const [showComments, setShowComments] = useState(false);
  const [comment, setComment] = useState('');

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
   
      setComment('');
    }
  };

  return (
    <div className="social-post-container">
      {/* Заголовок поста */}
      <div className="social-post-header">
        <Link to={`/profile/${postData.username}`} className="social-avatar-link">
          <div className="social-avatar-frame">
            <img src={postData.avatar} alt={postData.username} className="social-avatar-img" />
          </div>
        </Link>
        <div className="social-user-details">
          <Link to={`/profile/${postData.username}`} className="social-username-link">
            {postData.username}
          </Link>
          <Link to={postData.locationLink} className="social-location-link">
            <Flag className="social-location-icon" />
            {postData.location}
          </Link>
        </div>
      </div>

      {/* Изображение поста */}
      <div className="social-post-media">
        <img src={postData.image} alt={postData.caption} className="social-post-image" />
      </div>

      {/* Действия */}
      <div className="social-post-interactions">
        <div className="social-action-buttons">
          <div className="social-primary-actions">
            <button className="social-action-btn">
              <Heart className="social-like-icon" />
            </button>
            <button className="social-action-btn" onClick={() => setShowComments(!showComments)}>
              <MessageCircle className="social-comment-icon" />
            </button>
            <button className="social-action-btn">
              <Share className="social-share-icon" />
            </button>
          </div>
          <button className="social-action-btn">
            <Bookmark className="social-save-icon" />
          </button>
        </div>


        <div className="social-likes-counter">{postData.likes} likes</div>

        <div className="social-post-description">{postData.caption}</div>

        {/* Хэштеги */}
        <div className="social-tags-container">
          {postData.hashtags.map((tag) => (
            <Link key={tag} to={`/explore/tags/${tag}`} className="social-hashtag-link">
              #{tag}
            </Link>
          ))}
        </div>

        {/* Комментарии */}
        {showComments &&  
          <div className="social-comments-section">
            {postData.comments.map(user => (
              <CommentCard user={user} key={user.id} />
            ))}
            
            {/* Comment Form */}
           <form onSubmit={handleCommentSubmit} className="social-comment-form flex items-center">
              <input
                type="text"
                placeholder="Напишите комментарий..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="social-comment-input flex-grow"
              />
              <button
                type="submit"
                disabled={!comment.trim()}
                className="social-comment-submit"
              >
                Добавить
              </button>
            </form>
          </div>
        }
      </div>
    </div>
  );
};

export default Post;