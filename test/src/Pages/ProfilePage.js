import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Bookmark, MapPin, Heart, Settings, Users, Edit } from 'lucide-react';
import CollectionCard from './Components/CollectionCard';
import Post from './Components/Post';
import './style/ProfilePage.css';

const ProfilePage = (user) => {
    user = {
    id: 'user123',
    username: 'Folit',
    avatar: 'https://p0.zoon.ru/2/5/5ebbce159012ae20b48e67dd_62c0117bbaf980.46565245.jpg',
    bio: 'qwery webfbfkj rkjvbaerkjbaekj krfvjrewbgvjoae krnfaebjkb jfnbowbfoiaw jbfbwoufbwao',
    following: ['user4', 'user5'],
    collections: [
      { id: 'col1', name: 'European Adventures', coverImage: 'https://avatars.mds.yandex.net/i?id=a51c3d3a415cc5ebbe255b4d64d4576f1e0e699f-4745534-images-thumbs&n=13', postCount: 12 },
      { id: 'col1', name: 'European Adventures', coverImage: 'https://avatars.mds.yandex.net/i?id=38c9a040e09790b2810b546c18fbd74983c19347-4098964-images-thumbs&n=13', postCount: 12 },
      { id: 'col1', name: 'European Adventures', coverImage: 'https://avatars.mds.yandex.net/i?id=6a72fbd7a76fb6f7fa36aefe74f42645ad1c006a-13214462-images-thumbs&n=13', postCount: 12 },
      { id: 'col1', name: 'European Adventures', coverImage: 'https://avatars.mds.yandex.net/i?id=ab22785dfefd93d31c74857ee62fdb1bad322931-5220648-images-thumbs&n=13', postCount: 12 },

    ],
    wishlist: ['post1', 'post2'],
    posts:[
  {
    username: "Алексей",
    avatar: "https://avatars.mds.yandex.net/i?id=f50af55a565357c56455f2fddb178d9b43935b26-5232815-images-thumbs&n=13",
    location: "Москва, Россия",
    locationLink: "/location/1",
    image: "https://avatars.mds.yandex.net/i?id=f50af55a565357c56455f2fddb178d9b43935b26-5232815-images-thumbs&n=13",
    caption: "Посетил Красную площадь, невероятно красиво!",
    rating: 4.8,
    likes: 56,
    hashtags: ["travel", "moscow"],
    comments: [
      { username: "Мария", text: "Потрясающее место!" },
      { username: "Иван", text: "Тоже хочу туда поехать!" }
    ]
  },
  {
    username: "Мария",
    avatar: "https://avatars.mds.yandex.net/i?id=f50af55a565357c56455f2fddb178d9b43935b26-5232815-images-thumbs&n=13",
    location: "Париж, Франция",
    locationLink: "/location/2",
    image: "https://avatars.mds.yandex.net/i?id=f50af55a565357c56455f2fddb178d9b43935b26-5232815-images-thumbs&n=13",
    caption: "Эйфелева башня особенно прекрасна ночью!",
    rating: 4.6,
    likes: 74,
    hashtags: ["paris", "citylife"],
    comments: [
      { username: "Иван", text: "Хочу туда попасть!" },
      { username: "Алексей", text: "Невероятный вид!" }
    ]
  },
  {
    username: "Иван",
    avatar: "https://avatars.mds.yandex.net/i?id=f50af55a565357c56455f2fddb178d9b43935b26-5232815-images-thumbs&n=13",
    location: "Бали, Индонезия",
    locationLink: "/location/3",
    image: "https://avatars.mds.yandex.net/i?id=b488467c51408dde3cf5f8e381d5af773e179e0e-11843429-images-thumbs&n=13",
    caption: "Лучший пляжный отдых, песок и солнце!",
    rating: 4.9,
    likes: 88,
    hashtags: ["beach", "bali"],
    comments: [
      { username: "Мария", text: "Обожаю пляжи!" },
      { username: "Андрей", text: "Выглядит потрясающе!" }
    ]
  },
  {
    username: "Ольга",
    avatar: "https://avatars.mds.yandex.net/i?id=f50af55a565357c56455f2fddb178d9b43935b26-5232815-images-thumbs&n=13",
    location: "Рим, Италия",
    locationLink: "/location/4",
    image: "https://avatars.mds.yandex.net/i?id=c7653024dbb806bb2cd84e7fe4f1b85b2a38d06f-4944743-images-thumbs&n=13",
    caption: "Колизей впечатляет своими размерами!",
    rating: 4.7,
    likes: 65,
    hashtags: ["rome", "history"],
    comments: [
      { username: "Алексей", text: "Вдохновляющая архитектура!" },
      { username: "Иван", text: "Историческое место!" }
    ]
  },
  {
    username: "Дмитрий",
    avatar: "https://avatars.mds.yandex.net/i?id=f50af55a565357c56455f2fddb178d9b43935b26-5232815-images-thumbs&n=13",
    location: "Нью-Йорк, США",
    locationLink: "/location/5",
    image: "https://avatars.mds.yandex.net/i?id=451adfa260c792fc2ddac886a2efa46f6ac340c7-10642623-images-thumbs&n=13",
    caption: "Таймс-сквер ночью — это волшебство!",
    rating: 4.5,
    likes: 59,
    hashtags: ["nyc", "citylife"],
    comments: [
      { username: "Мария", text: "Однажды побываю там!" },
      { username: "Ольга", text: "Город мечты!" }
    ]
  }
]
  };

  const isCurrentUser = true; // Для демонстрации
  const [activeTab, SetActiveTab] = useState('posts'); 

  return (
    <div className="profile-page">
      {/* Profile Banner */}
      <div className="profile-banner">
        <div className="banner-overlay"></div>
      </div>
      
      {/* Profile Header */}
      <div className="profile-header">
        <div className="profile-avatar-container">
          <img
            src={user.avatar}
            alt={user.username}
            className="profile-user-avatar"
          />
        </div>
        
        <div className="profile-info">
          <div className="profile-actions">
            <h1 className="username">{user.username}</h1>
            
            {isCurrentUser ? (
              <Link to="/settings" className="edit-profile-button">
                <Settings className="icon" />
                Изменить
              </Link>
            ) : (
              <button className="follow-button">
                Подписаться
              </button>
            )}
          </div>
          
          <div className="profile-stats">
            <div className="stat-item">
              <span className="stat-count">{user.posts.length}</span>
              <span className="stat-label">Воспоминаний</span>
            </div>
            <div className="stat-item">
              <span className="stat-count">{user.following.length}</span>
              <span className="stat-label">Подписчики</span>
            </div>
          </div>
          
          <div className="profile-details">
            {user.bio && <p className="user-bio">{user.bio}</p>}
          </div>
        </div>
      </div>

      {/* Profile Tabs */}
      <div className="profile-tabs">
        <button className={`tab-button ${activeTab === 'posts' ? 'active' : ''}`}  onClick={()=>{SetActiveTab('posts')}}>
          <Grid className="icon" />
          <span>Посты</span>
        </button>
        <button className={`tab-button ${activeTab === 'collections' ? 'active' : ''}`}  onClick={()=>SetActiveTab('collections')}>
          <Bookmark className="icon" />
          <span>Коллекции</span>
        </button>
        <button className={`tab-button ${activeTab === 'wishlist' ? 'active' : ''}`}  onClick={()=>SetActiveTab('wishlist')}>
          <Heart className="icon" />
          <span>Wishlist</span>
        </button>
      </div>

      {/* Posts Grid */}
      {activeTab === 'posts' && (
        <div className="profile-posts-container">
          {user.posts.length > 0 ? (
              user.posts.map(post => (
                <Post postData = {post} />
              ))
          ) : (
            <div className="empty-state">
              <Grid className="empty-icon" />
              <p className="empty-text">Пока нет воспоминаний</p>
              {isCurrentUser && (
                <Link to="/createpost" className="create-button">
                  <Edit className="icon" />
                  Создать новое воспоминание
                </Link>
              )}
            </div>
          )}
        </div>
      )}

      {/* Collections */}
      {activeTab === 'collections' && (
        <div className="collections-grid">
          {user.collections.length > 0 ? (
            <div className="grid-container">
              {user.collections.map(collection => (
                <CollectionCard collection={collection}
                />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <Bookmark className="empty-icon" />
              <p className="empty-text">Нет коллекций</p>
              {isCurrentUser && (
                <button className="create-button">
                  <Bookmark className="icon" />
                  Создать коллекцию
                </button>
              )}
            </div>
          )}
        </div>
      )} 

      {/* Wishlist */} 
      
      {/*
      {activeTab === 'wishlist' && (
        <div className="wishlist-grid">
          {user.wishlist.length > 0 ? (
            <div className="grid-container">
              {user.posts.filter(post => user.wishlist.includes(post.id)).map(post => (
                <Link key={post.id} to={`/post/${post.id}`} className="post-item">
                  <img
                    src={post.images[0]}
                    alt={post.caption}
                    className="post-image"
                  />
                  <div className="post-overlay">
                    <div className="post-info">
                      <div className="location-info">
                        <MapPin className="icon" />
                        <span>{post.location.name}</span>
                      </div>
                      <div className="wishlist-info">
                        <span>{post.location.city}, {post.location.country}</span>
                        <Heart className="icon filled" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <Heart className="empty-icon" />
              <p className="empty-text">No wishlist items yet.</p>
              <p className="empty-subtext">Save posts you want to visit by tapping the bookmark icon.</p>
            </div>
          )}
        </div>
      )}
        */}
    </div> 
    
  );
};

export default ProfilePage;
/*<Link key={post.id} to={`/post/${post.id}`} className="post-item">
                  <img
                    src={post.images[0]}
                    alt={post.caption}
                    className="post-image"
                  />
                  <div className="post-overlay">
                    <div className="post-info">
                      <div className="location-info">
                        <MapPin className="icon" />
                        <span>{post.location.name}</span>
                      </div>
                      <div className="post-stats">
                        <div className="stat">
                          <Heart className="icon" />
                          <span>{post.likes.length}</span>
                        </div>
                        <div className="stat">
                          <Bookmark className="icon" />
                          <span>Save</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
                */