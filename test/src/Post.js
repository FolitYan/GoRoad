import React, { useState } from 'react';  
import "./style/Post.css"
import Author from './Author';

export default function Post(props){

  const { name, date, image, description, userImage,  } = props.postData || {
    name: "Гость",
    date: "Неизвестно",
    image: "https://school11angarsk.gosuslugi.ru/netcat_files/51/168/pustaya_kartinka_3.png",
    description: "Описание отсутствует",
    userImage: "https://sh-vmulebkinskaya-r82.gosweb.gosuslugi.ru/netcat_files/9/148/1_4.jpg",
  };

    return(
        <div className='post-body'>
          <div className='img-content'>
            <img src = {image} alt='Ошибка загрузки'/>
          </div>
          <div className='content'>
            <p>{description}</p>
          </div>
          <div className='button-content'>
        <div>
        <button >👍 </button>
        <button >👎 </button>
        </div>
          </div>
        </div>
    )
}

//<input type="file" id="fileInput" name="photo" accept="image/*" required />
