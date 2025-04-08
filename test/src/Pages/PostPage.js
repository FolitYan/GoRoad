import React, { useState } from 'react';
import PostCard from './../Components/PostCard';
import { Search, Filter } from 'lucide-react';
import './style/PostsPageStyles.css'; // Подключение файла со стилями

const PostsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Заглушки для постов
  const posts = [
    {
      id: '1',
      image: 'https://via.placeholder.com/300x200',
      title: 'Удивительный закат',
      location: 'Москва, Россия',
      content: 'Это было самое красивое зрелище, которое я когда-либо видел.',
      author: 'Иван Иванов',
      date: '2023-04-01',
      likes: 15,
      comments: 3
    },
    {
      id: '2',
      image: 'https://via.placeholder.com/300x200',
      title: 'Прогулка по парку',
      location: 'Санкт-Петербург, Россия',
      content: 'Парк был полон зелени и удивительных видов.',
      author: 'Мария Смирнова',
      date: '2023-03-28',
      likes: 20,
      comments: 5
    },
    {
      id: '3',
      image: 'https://via.placeholder.com/300x200',
      title: 'Великолепные горы',
      location: 'Кавказ, Россия',
      content: 'Горы всегда вдохновляют своей мощью и красотой.',
      author: 'Анна Кузнецова',
      date: '2023-03-15',
      likes: 30,
      comments: 8
    }
  ];

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="posts-container">
      <div className="search-section">
        <h1 className="page-title">Все посты</h1>

        <div className="search-bar">
          <div className="search-input-wrapper">
            <Search className="search-icon" />
            <input
              type="text"
              placeholder="Поиск по названию, месту или содержанию..."
              className="search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <button className="filter-button">
            <Filter className="filter-icon" />
            <span>Фильтры</span>
          </button>
        </div>
      </div>

      <div className="posts-grid">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => <PostCard key={post.id} post={post} />)
        ) : (
          <div className="no-posts">
            <p>Постов не найдено. Попробуйте изменить условия поиска.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PostsPage;
