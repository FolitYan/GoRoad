import React, { useState } from 'react';  
import "./../style/Post.css"

export default function Post(props){

  const { name, date, image, description, userImage, title  } = props.postData || {
    name: "Гость",
    date: "Неизвестно",
    image: "https://s7.hostingkartinok.com/uploads/images/2014/10/b81fb036b0db187cff393b237790e3e7.png",
    description: "",
    userImage: "https://sh-vmulebkinskaya-r82.gosweb.gosuslugi.ru/netcat_files/9/148/1_4.jpg",
    title: ""
  };

    return(
        <div className='post-body'>
            <img src = {image} alt='Ошибка загрузки'/>
          <div className='button-content'>
            <button >👍 </button>
            <button >👎 </button>
          </div>
        </div>
    )
}

//<input type="file" id="fileInput" name="photo" accept="image/*" required />
