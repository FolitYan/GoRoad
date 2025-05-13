import React from 'react';
import { Camera, MapPin, Tag, ArrowLeft } from 'lucide-react';
import "./style/CreatePost.css"

const CreatePost = () => {
  const locationTypes = [
    'достопримечательность', 'парк', 'ресторан', 'кафе', 'музей', 
    'пляж', 'горы', 'отель', 'другое'
  ];

  return (
    <div className="create-post-container">
      <div className="create-post-card">
        <div className="post-header">
          <button className="back-button">
            <ArrowLeft className="back-icon" />
          </button>
          <h1 className="post-title">Создать новый пост</h1>
        </div>

        <form className="post-form">
          {/* Image Upload */}
          <div className="form-section">
            <label className="section-label">Фотография</label>
            <div className="image-upload-container">
              <div className="image-preview">
                <img
                  src="https://images.unsplash.com/photo-1645745959238-decf9e8d4190"
                  alt="Upload preview"
                  className="preview-image"
                />
                <button
                  type="button"
                  className="remove-image-button"
                >
                  Удалить фото
                </button>
              </div>
            </div>
          </div>

          {/* Caption */}
          <div className="form-section">
            <label htmlFor="caption" className="section-label">Подпись</label>
            <textarea
              className="caption-input"
              placeholder="Напишите про ваше путешествие..."
            ></textarea>
          </div>

          {/* Hashtags */}
          <div className="form-section">
            <label htmlFor="hashtags" className="section-label">
              <Tag className="label-icon" />
              Теги
            </label>
            <input
              id="hashtags"
              type="text"
              className="hashtags-input"
              placeholder="Add hashtags (e.g. travel nature adventure)"
            />
          </div>

          {/* Location */}
          <div className="form-section">
            <label className="section-label">
              <MapPin className="label-icon" />
              Локация 
            </label>
            
            <div className="location-grid">
              <div className="location-field">
                <label htmlFor="locationName" className="field-label">Название</label>
                <input
                  id="locationName"
                  type="text"
                  className="location-input"
                  placeholder="Например Eiffel Tower"
                />
              </div>
              
              <div className="location-field">
                <label htmlFor="locationType" className="field-label">Тип</label>
                <select
                  id="locationType"
                  className="location-input"
                >
                  {locationTypes.map(type => (
                    <option key={type} value={type}>
                      {type.charAt(0).toUpperCase() + type.slice(1)}
                    </option>
                  ))}
                </select>
              </div>
              
              <div className="location-field">
                <label htmlFor="city" className="field-label">Город</label>
                <input
                  id="city"
                  type="text"
                  className="location-input"
                  placeholder="Например Paris"
                />
              </div>
              
              <div className="location-field">
                <label htmlFor="country" className="field-label">Страна</label>
                <input
                  id="country"
                  type="text"
                  className="location-input"
                  placeholder="Например France"
                />
              </div>
            </div>
          </div>

          {/* Rating */}
          <div className="form-section">
            <label className="section-label">Ваша оценка</label>
            <div className="rating-stars">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  className="star-button"
                >
                  <svg
                    className="star-icon"
                    viewBox="0 0 24 24"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                </button>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <div className="submit-section">
            <button
              type="submit"
              className="submit-button"
            >
              Опубликовать
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;