import React, { useState } from 'react';  
import "./style/Account.css"
import Post from './Post';

export default function Account(){
    return(
        <div className='main'>
           <div className='userPage'>

           </div>
           <div className = 'postsLenta'> 
            <Post />
            <Post />
           </div>

        </div>
    )
}