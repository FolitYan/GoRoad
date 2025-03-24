import { useState } from "react"
import "./style/Authentication.css"

export default function Registration(){


  const [page, setPage] = useState("Autentification")

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

  const handleSetPage = (e) =>{
    e.preventDefault();
    if(page === "Autentification"){
      setPage("Registration");
    }else{
      setPage("Autentification")
    }
  }

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
      <h2>
      {page==="Autentification" && "Log In"}
      {page==="Registration" && "Registration"}
      </h2>
        <div className="input-field">
        <input 
        type="text" 
        required
        name="login"
        value={accountData.login}
        onChange={(e) => {handleSetAccount(e.target.name, e.target.value)}} 
        />
        <label>Enter your login</label>
      </div>
      <div className="input-field">
        <input 
        type="password" 
        required 
        value={accountData.password}
        onChange={(e) => {handleSetAccount(e.target.name, e.target.value)}} 
        name="password"
        />

        <label>Enter your password</label>
      </div>
      <button 
      type="submit">
        {page==="Autentification" && "Log In"}
        {page==="Registration" && "Registration"}
      </button>
      <div className="change-page">
        <p>
        {page==="Autentification" && "Don't have an account? "}
        {page==="Registration" && "Already have an account?"}
          <span onClick={(e) => handleSetPage(e)}>
          {page==="Autentification" && "Registration"}
          {page==="Registration" && "Log In"}
            </span></p>
      </div>
    </form>
  </div>
  </div>
 
    ) 
}