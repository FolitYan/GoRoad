import React, { useState } from 'react';  
import "./style/Post.css"

export default function Post(){
    return(
        <div className='post-body'>
          <div className='title-content'>
            <p> здесь название поста <span>Геолокация</span></p>
          </div>
          <div className='img-content'>
            <a>здесь фото</a>
          </div>
          <div className='content'>
            <p>здесь описание для поста </p>
          </div>
          <div className='button-content'>
            <button>like</button>
            <button>dislike</button>
          </div>
        </div>
    )
}