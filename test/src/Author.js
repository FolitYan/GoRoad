import React, { useState } from 'react';  
import "./style/Author.css"

export default function Author(props){
    return(
        <div class="user">
        <img src={props.userImage} alt="Ошибка загрузки" />
        <div class="user-info">
          <h2>{props.name}</h2>
          <small>{props.date}</small>
        </div>
      </div>
    )
}