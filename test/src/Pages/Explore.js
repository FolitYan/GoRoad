// src/components/Explore/Explore.js
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Users, Tag, Search, Filter, Globe, Plane } from 'lucide-react';
import LocationCard from './Components/LocationCard';
import UserCard from './Components/UserCard';
import './style/Explore.css';

// Mock data
const mockPosts = [
  {
    id: 'post1',
    images: ['https://images.unsplash.com/photo-1506929562872-bb421503ef21'],
    location: {
      id: 'loc1',
      name: 'Santorini',
      city: 'Oia',
      country: 'Greece',
      type: 'island',
      rating: 4.8,
      ratingCount: 1245
    },
    hashtags: ['greece', 'sunset', 'travel']
  },
  {
    id: 'post2',
    images: ['https://images.unsplash.com/photo-1520250497591-112f2f40a3f4'],
    location: {
      id: 'loc2',
      name: 'Shibuya Crossing',
      city: 'Tokyo',
      country: 'Japan',
      type: 'urban',
      rating: 4.6,
      ratingCount: 982
    },
    hashtags: ['japan', 'tokyo', 'city']
  },
  // Add more mock posts as needed
];

const mockUsers = [
  {
    id: 'user1',
    username: 'traveler123',
    name: 'Alex Johnson',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    bio: 'Digital nomad & travel photographer'
  },
  {
    id: 'user2',
    username: 'wanderlust',
    name: 'Sarah Miller',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    bio: 'Exploring the world one destination at a time'
  },
  // Add more mock users as needed
];

const Explore = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('locations');
  const [searchTerm, setSearchTerm] = useState('');

  const uniqueLocations = mockPosts.reduce((acc, post) => {
    if (!acc.some(loc => loc.id === post.location.id)) {
      acc.push(post.location);
    }
    return acc;
  }, []);

  const allHashtags = mockPosts.reduce((acc, post) => {
    post.hashtags.forEach(tag => {
      if (!acc[tag]) {
        acc[tag] = 0;
      }
      acc[tag] += 1;
    });
    return acc;
  }, {});

  const sortedHashtags = Object.entries(allHashtags)
    .sort((a, b) => b[1] - a[1])
    .map(([tag, count]) => ({ tag, count }));

  const filteredLocations = searchTerm
    ? uniqueLocations.filter(
        loc => 
          loc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          loc.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
          loc.country.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : uniqueLocations;

  const filteredUsers = searchTerm
    ? mockUsers.filter(
        user => 
          user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
          (user.name && user.name.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    : mockUsers;

  const filteredHashtags = searchTerm
    ? sortedHashtags.filter(
        ({ tag }) => tag.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : sortedHashtags;

  const handleHashtagClick = (tag) => {
    navigate(`/explore/tags/${tag}`);
  };

  // Continents section
  const continents = [
    { name: "Africa", image: "https://images.unsplash.com/photo-1523805009345-7448845a9e53", count: 156 },
    { name: "Asia", image: "https://images.unsplash.com/photo-1535139262971-c51845709a48", count: 278 },
    { name: "Europe", image: "https://images.unsplash.com/photo-1485081669829-bacb8c7bb1f3", count: 342 },
    { name: "North America", image: "https://images.unsplash.com/photo-1565357253897-79d691886a73", count: 214 },
    { name: "South America", image: "https://images.unsplash.com/photo-1476900164809-ff19b8ae5968", count: 95 },
    { name: "Oceania", image: "https://images.unsplash.com/photo-1496482475496-a91f31e0386c", count: 87 },
  ];

  return (
    <div className="expl-container">
      {/* Hero section */}
      <div className="expl-hero">
        <img 
          src="https://images.unsplash.com/photo-1630838789212-0f23a89fa995" 
          alt="Explore destinations" 
          className="expl-hero-image"
        />
        <div className="expl-hero-overlay"></div>
        <div className="expl-hero-content">
          <span className="expl-hero-badge">Исследуй мир</span>
          <h1 className="expl-hero-title">Исследуй нашу планету</h1>
          <p className="expl-hero-description">Исследуйте удивительные места, общайтесь с другими путешественниками и планируйте своё следующее приключение!</p>
        </div>
      </div>
    
      {/* Continents section */}
      <div className="expl-continents">
        <h2 className="expl-section-title">
          <Globe className="expl-section-icon" />
          Исследование континентов
        </h2>
        <div className="expl-continents-grid">
          {continents.map((continent, index) => (
            <div key={index} className="expl-continent-card">
              <img 
                src={continent.image} 
                alt={continent.name} 
                className="expl-continent-image"
              />
              <div className="expl-continent-overlay"></div>
              <div className="expl-continent-content">
                <h3 className="expl-continent-name">{continent.name}</h3>
                <p className="expl-continent-count">{continent.count} Мест </p>
              </div>
              <div className="expl-continent-hover">
                <button className="expl-continent-button">
                  <Plane className="expl-plane-icon" /> Перейти 
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
        <div className="expl-tabs">
          <button
            className={`expl-tab ${activeTab === 'locations' ? 'active' : ''}`}
            onClick={() => setActiveTab('locations')}
          >
            <MapPin className="expl-tab-icon" />
            Локации
          </button>
          <button
            className={`expl-tab ${activeTab === 'users' ? 'active' : ''}`}
            onClick={() => setActiveTab('users')}
          >
            <Users className="expl-tab-icon" />
            Пользователи
          </button>
          <button
            className={`expl-tab ${activeTab === 'hashtags' ? 'active' : ''}`}
            onClick={() => setActiveTab('hashtags')}
          >
            <Tag className="expl-tab-icon" />
            Теги
          </button>
      </div>

      {activeTab === 'locations' && (
        <div className="expl-locations-grid">
          {filteredLocations.length > 0 ? (
            filteredLocations.map((location) => {
              const locationPost = mockPosts.find(post => post.location.id === location.id);
              return (
                <LocationCard 
                  key={location.id} 
                  location={location} 
                  image={locationPost?.images[0]}
                />
              );
            })
          ) : (
            <div className="expl-empty-state">
              <Filter className="expl-empty-icon" />
              <p className="expl-empty-text">No locations found matching "{searchTerm}"</p>
              <p className="expl-empty-subtext">Try another search term</p>
            </div>
          )}
        </div>
      )}

      {activeTab === 'users' && (
        <div className="expl-users-container">
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user) => (
              <UserCard key={user.id} user={user} />
            ))
          ) : (
            <div className="expl-empty-state">
              <Users className="expl-empty-icon" />
              <p className="expl-empty-text">No users found matching "{searchTerm}"</p>
              <p className="expl-empty-subtext">Try another search term</p>
            </div>
          )}
        </div>
      )}

      {activeTab === 'hashtags' && (
        <div className="expl-hashtags-container">
          {filteredHashtags.length > 0 ? (
            <div className="expl-hashtags-grid">
              {filteredHashtags.map(({ tag, count }) => (
                <button
                  key={tag}
                  onClick={() => handleHashtagClick(tag)}
                  className="expl-hashtag-card"
                >
                  <div className="expl-hashtag-name">#{tag}</div>
                  <div className="expl-hashtag-count">{count} posts</div>
                </button>
              ))}
            </div>
          ) : (
            <div className="expl-empty-state">
              <Tag className="expl-empty-icon" />
              <p className="expl-empty-text">No hashtags found matching "{searchTerm}"</p>
              <p className="expl-empty-subtext">Try another search term</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Explore;