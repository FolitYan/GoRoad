import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Compass, Plane, Sun, Briefcase } from 'lucide-react';
import './style/Home.css';

const Home = () => {
  const destinations = [
    { img: "https://images.unsplash.com/photo-1496482475496-a91f31e0386c", alt: "Побережье Австралии", name: "Австралийское побережье", location: "Большая океанская дорога" },
    { img: "https://images.unsplash.com/photo-1679420437432-80cfbf88986c", alt: "Скалистый берег", name: "Скалистый пейзаж", location: "Тихоокеанское побережье" },
    { img: "https://images.unsplash.com/photo-1727206842138-e0027c5e83ec", alt: "Церковь в Исландии", name: "Живописная Исландия", location: "Черный пляж" }
  ];

  return (
    <div className="home-page">
      <section className="home-hero">
        <img src="https://images.unsplash.com/photo-1489914169085-9b54fdd8f2a2" alt="Красивые места для путешествий" className="home-hero__image" />
        <div className="home-hero__overlay"></div>
        <div className="home-hero__content">
          <span className="home-hero__badge">Исследуйте мир</span>
          <h1 className="home-hero__title">Откройте для себя удивительные места</h1>
          <p className="home-hero__description">
            Делитесь своими путешествиями и находите вдохновение для следующих поездок
          </p>
          <div className="home-hero__buttons">
            <Link to="/registration" className="home-btn home-btn--primary">
              <Compass className="home-btn__icon" /> Регистрация
            </Link>
            <Link to="/authorization" className="home-btn home-btn--secondary">
              <Plane className="home-btn__icon" /> Авторизация
            </Link>
          </div>
        </div>
        <div className="home-hero__floating-icon home-hero__floating-icon--1">
          <MapPin className="home-icon" />
        </div>
        <div className="home-hero__floating-icon home-hero__floating-icon--2">
          <Compass className="home-icon" />
        </div>
      </section>

      <section className="home-categories">
        <h2 className="home-section-title">Идеи для путешествий</h2>
        <div className="home-categories__grid">
          <div className="home-category-card">
            <div className="home-category-card__icon"><Sun className="home-icon home-icon--sun" /></div>
            <span>Пляжный отдых</span>
          </div>
          <div className="home-category-card">
            <div className="home-category-card__icon"><MapPin className="home-icon home-icon--map" /></div>
            <span>Горные походы</span>
          </div>
          <div className="home-category-card">
            <div className="home-category-card__icon"><Compass className="home-icon home-icon--compass" /></div>
            <span>Приключения</span>
          </div>
          <div className="home-category-card">
            <div className="home-category-card__icon"><Briefcase className="home-icon home-icon--briefcase" /></div>
            <span>Городские туры</span>
          </div>
        </div>
      </section>

      <section className="home-destinations">
        <h2 className="home-section-title">Популярные направления</h2>
        <div className="home-destinations__grid">
          {destinations.map((destination, index) => (
            <div key={index} className="home-destination-card">
              <img src={destination.img} alt={destination.alt} className="home-destination-card__image" />
              <div className="home-destination-card__info">
                <h3>{destination.name}</h3>
                <div className="home-destination-card__location">
                  <MapPin className="home-destination-card__location-icon" />
                  <span>{destination.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;