import { useState } from "react"
import "./../style/Authentication.css"

export default function Authentication(){

  const [accountData, setAccountData] = useState({
    login:"",
    password:"",
  })

  const [page, setPage] = useState("Authorization")

  const handleSetAccount = (dataTitle, data) =>{
    setAccountData(
      {
        ...accountData,
        [dataTitle]:data
      }
    );
  }

  const handleSetPage = (e) =>{
    e.preventDefault();
    if(page === "Authorization"){
      setPage("Registration");
    }else{
      setPage("Authorization")
    }
  }

  const sendDataToServer = async (e,data) => {
    e.preventDefault();

    let path;
    if(page === "Registration")
    {
      path = "https://localhost:7190/Account/registration";
    }
    else{
      path = "https://localhost:7190/Account/authorization";
    }
    try {
      const response = await fetch(path, {
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
     <form onSubmit={(e)=>{sendDataToServer(e,accountData)}}>
       <h2>
        {page === "Authorization" && "Вход в аккаунт"}
        {page === "Registration" && "Регистрация"}
        </h2>
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
      <button type="submit">Подтвердить</button>
      <p>{}</p>
      <div className="change-page">
        {page === "Authorization" && <p>Нет аккаунта?  <a onClick={(e) => handleSetPage(e)}>Зарегистироваться</a></p>}
        {page === "Registration" && <p>Аккаунт уже есть?  <a onClick={(e) => handleSetPage(e)}>Войти</a></p>}
      </div>
    </form>
  </div>
  </div>
 
    ) 
}