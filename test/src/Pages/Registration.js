import { useState } from "react";
import { Link } from "react-router-dom";
import "./style/Authentication.css";

export default function Registration() {
  const [accountData, setAccountData] = useState({
    login: "",
    password: "",
  });

  const [validPassword, setValidPassword] = useState("");
  const [validPasswordError, setValidPasswordError] = useState(false);
  const [passwordError, setPasswordError] = useState(false); 

  const handleSetAccount = (dataTitle, data) => {
    setAccountData({
      ...accountData,
      [dataTitle]: data,
    });

    if (dataTitle === "password") {
      if (data.length < 8) {
        setPasswordError(true);
      } else {
        setPasswordError(false);
      }
    }
  };

  const handleSetValid = (valid) => {
    setValidPassword(valid);
    setValidPasswordError(valid !== accountData.password);
  };

  const sendDataToServer = async (e, data) => {
    e.preventDefault();
    try {
      const response = await fetch("https://localhost:7190/Account/registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error("Ошибка при отправке данных:", error);
    }

    setAccountData({
      login: "",
      password: "",
    });
    setValidPassword("");
    setPasswordError(false); 
  };

  const validData = (e) => {
    if (!validPasswordError && !passwordError) {
      sendDataToServer(e, accountData); 
    } else {
      e.preventDefault(); 
    }
  }

  return (
    <div className="auth-page">
      <div className="auth-container">
        <form onSubmit={validData}>
          <h2 className="auth-title">Регистрация</h2>
          <div className="auth-input-field">
            <input
              type="text"
              required
              name="login"
              value={accountData.login}
              onChange={(e) => handleSetAccount(e.target.name, e.target.value)}
            />
            <label className="auth-input-label">Введите логин</label>
          </div>
          <div className={`auth-input-field ${passwordError ? "auth-input-error" : ""}`}>
            <input
              type="password"
              required
              name="password"
              value={accountData.password}
              onChange={(e) => handleSetAccount(e.target.name, e.target.value)}
            />
            <label className="auth-input-label">Введите пароль</label>
            {passwordError && <p className="auth-error-message">Пароль должен быть не менее 8 символов.</p>}
          </div>
          <div className={`auth-input-field ${validPasswordError ? "auth-input-error" : ""}`}>
            <input
              type="password"
              required
              value={validPassword}
              onChange={(e) => handleSetValid(e.target.value)}
              name="password"
            />
            <label className="auth-input-label">Введите пароль повторно</label>
            {validPasswordError && <p className="auth-error-message">Пароли не совпадают.</p>}
          </div>
          <button type="submit" className="auth-submit-btn">Подтвердить</button>
          <div className="auth-links">
            <p className="auth-link-text">Есть аккаунт? <Link to="/authorization" className="auth-link">Войти</Link></p>
            <Link to="/home" className="auth-back-link">Назад</Link>
          </div>
        </form>
      </div>
    </div>
  );
}