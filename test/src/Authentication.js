import { useState } from "react"
import "./style/Authentication.css"

export default function Authentication(){

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

  /*const handleSetPage = (e) =>{
    e.preventDefault();
    if(page === "Autentification"){
      setPage("Registration");
    }else{
      setPage("Autentification")
    }
  }*/

  const sendDataToServer = async (e,data) => {
    e.preventDefault();
    try {
      const response = await fetch('https://localhost:7190/AccountRegistration', {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json', 
        },
        body: JSON.stringify(data), 
      });
      setAccountData({
        login: "",
        password: "",
      });
      const result = await response.json(); 
      console.log(result);

    } catch (error) {
      console.error('Ошибка при отправке данных:', error);
    }
  };

    return(
        <div className="AutinfBody">
        <div className="wrapper">
     <form onSubmit={
      (e)=>{sendDataToServer(e,accountData)}}>
      <h2>Вход</h2>
        <div className="input-field">
        <input 
        type="text" 
        required
        name="login"
        value={accountData.login}
        onChange={(e) => {handleSetAccount(e.target.name, e.target.value)}} 
        />
        <label>Введите логин</label>
      </div>
      <div className="input-field">
        <input 
        type="password" 
        required 
        value={accountData.password}
        onChange={(e) => {handleSetAccount(e.target.name, e.target.value)}} 
        name="password"
        />

        <label>Введите пароль</label>
      </div>
      <button 
      type="submit">Подтвердить</button>
      <div className="change-page">
        <p>Нет аккаунта? <span /*</p>onClick={(e) => handleSetPage(e)}*/>Зарегистироваться</span></p>
      </div>
    </form>
  </div>
  </div>
 
    ) 
}