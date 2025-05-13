import { useState } from "react"
import "./style/Authentication.css"
import { Link } from "react-router-dom";

export default function Authorization() {
  const [accountData, setAccountData] = useState({
    login: "",
    password: "",
  })

  const handleSetAccount = (dataTitle, data) => {
    setAccountData({
      ...accountData,
      [dataTitle]: data
    });
  }

  const sendDataToServer = async (e, data) => {
    e.preventDefault();

    try {
      const response = await fetch("https://localhost:7190/Account/authorization", {
        method: 'POST', 
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json', 
        },
        body: JSON.stringify(data), 
      });
      
      const result = await response.json(); 
      console.log(result);
    } catch (error) {
      console.error('Ошибка при отправке данных:', error);
    }

    setAccountData({
      login: "",
      password: "",
    }); 
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <form onSubmit={(e) => {sendDataToServer(e, accountData)}}>
          <h2 className="auth-title">Вход в аккаунт</h2>
          <div className="auth-input-field">
            <input 
              type="text" 
              required
              name="login"
              value={accountData.login}
              onChange={(e) => {handleSetAccount(e.target.name, e.target.value)}} 
            />
            <label className="auth-input-label">Введите логин</label>
          </div>
          <div className="auth-input-field">
            <input 
              type="password" 
              required 
              value={accountData.password}
              onChange={(e) => {handleSetAccount(e.target.name, e.target.value)}} 
              name="password"
            />
            <label className="auth-input-label">Введите пароль</label>
          </div>
          <button type="submit" className="auth-submit-btn">Подтвердить</button>
          <div className="auth-links">
            <p className="auth-link-text">Нет аккаунта? <Link to="/registration" className="auth-link">Регистрация</Link></p>
            <Link to="/home" className="auth-back-link">Назад</Link>
          </div>
        </form>
      </div>
    </div>
  ) 
}