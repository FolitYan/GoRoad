import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Mail, Lock, ArrowLeft, Camera } from 'lucide-react';
import "./style/SettingsPage.css";

const SettingsPage = () => {
  const navigate = useNavigate();
  
  // Данные-заглушки
  const [formData, setFormData] = useState({
    name: 'Иван Иванов',
    username: 'ivan_ivanov',
    email: 'ivan@example.com',
    bio: 'Люблю путешествовать и фотографировать',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg'
  });

  const [success, setSuccess] = useState(false);

  // Заглушки для обработчиков
  const handleChange = () => {};
  const handleSubmit = () => setSuccess(true);

  return (
    <div className="settings-container">
      <div className="settings-content">
        <div className="settings-header">
          <button onClick={() => navigate(-1)} className="back-button">
            <ArrowLeft className="icon" />
          </button>
          <h1>Редактировать профиль</h1>
        </div>
        
        {success && (
          <div className="success-message">
            Профиль успешно обновлен!
          </div>
        )}

        <div className="settings-card">
          <form onSubmit={handleSubmit} className="settings-form">
            {/* Аватар */}
            <div className="avatar-section">
              <div className="avatar-wrapper">
                <img
                  src={formData.avatar}
                  alt={formData.username}
                  className="avatar-image"
                />
                <button
                  type="button"
                  className="avatar-edit-button"
                >
                  <Camera className="icon" />
                </button>
              </div>
            </div>
            
            {/* Логин */}
            <div className="form-group">
              <label htmlFor="username">
                Логин
              </label>
              <input
                id="username"
                name="username"
                type="text"
                value={formData.username}
                onChange={handleChange}
              />
            </div>
            
            {/* Биография */}
            <div className="form-group">
              <label htmlFor="bio">
                О себе
              </label>
              <textarea
                id="bio"
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                rows={3}
                placeholder="Расскажите о себе..."
              ></textarea>
            </div>
            
            {/* Кнопка сохранения */}
            <div className="form-actions">
              <button
                type="submit"
                className="save-button"
              >
                Сохранить изменения
              </button>
            </div>
          </form>
          
          {/* Смена пароля */}
          <div className="password-section">
            <h2>Смена пароля</h2>
            <div className="form-group">
              <label htmlFor="currentPassword">
                Текущий пароль
              </label>
              <div className="input-with-icon">
                <Lock className="input-icon" />
                <input
                  id="currentPassword"
                  type="password"
                />
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="newPassword">
                Новый пароль
              </label>
              <input
                id="newPassword"
                type="password"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="confirmPassword">
                Подтвердите пароль
              </label>
              <input
                id="confirmPassword"
                type="password"
              />
            </div>
            
            <div className="form-actions">
              <button
                type="button"
                className="save-button"
              >
                Обновить пароль
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;