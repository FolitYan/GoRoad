import { useState } from "react"
import "./style/Authentication.css"

export default function Registration(){

  const [page, setPage] = useState("Avtorization")

  const [accountData, setAccountData] = useState({
    login:"",
    password:"",
  })


  const handleSetAccount = (dataTitle, data) =>{
    setAccountData(
      {
        ...accountData,
        [dataTitle]:data
      }
    );
  }

  
  const sendDataToServer = async (data) => {
    try {
      const response = await fetch('https://localhost:7190/AccountRegistration', {
        method: 'POST', // HTTP метод (POST, GET, PUT, DELETE)
        headers: {
          'Content-Type': 'application/json', // Указываем, что данные в формате JSON
        },
        body: JSON.stringify(data), // Преобразуем объект в JSON-строку
      });
  
      if (!response.ok) {
        throw new Error(`Ошибка: ${response.status}`); // Проверяем успешность запроса
      }
  
      const result = await response.json(); // Обрабатываем ответ
      console.log('Ответ сервера:', result);
    } catch (error) {
      console.error('Ошибка при отправке данных:', error);
    }
  };

    return(
        <div className="AutinfBody">
        <div className="wrapper">
     <form onSubmit={
      (e)=>{e.preventDefault();
        sendDataToServer(accountData);
      }}>
      <h2>Log In</h2>
        <div className="input-field">
        <input 
        type="text" 
        required
        name="accountData.login"
        onChange={(e) => {handleSetAccount("login", e.target.value)}} 
        />
        <label>Enter your login</label>
      </div>
      <div className="input-field">
        <input 
        type="password" 
        required 
        onChange={(e) => {handleSetAccount("password", e.target.value)}} 
        name="accountData.password"
         />

        <label>Enter your password</label>
      </div>
      <button 
      type="submit">Log In</button>
      <div className="change-page">
        <p>Don't have an account? <a href="#">Register</a></p>
      </div>
    </form>
  </div>
  </div>
 
    ) 
}