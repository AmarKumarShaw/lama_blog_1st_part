import React from 'react';
import "./header.css"

const Header = () => {
  return (
    <div className='header'>
        <div className="headerTitles">
            <span className='headerTitleSm'>React & Node </span>
            <span className='headerTitleLg'>Blog</span>
        </div>
        <img className="headerImg" src="https://images.unsplash.com/photo-1648614761888-c38cf4b7882b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
    </div>
  )
}

export default Header