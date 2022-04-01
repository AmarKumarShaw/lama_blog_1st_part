import React from 'react'
import "./topbar.css"
import { Link } from 'react-router-dom';

const TopBar = () => {
  const user = false;
  return (
    <div className="top">
      <div className="topLeft">
        <i className='topIcon fab fa-facebook-square'></i>
        <i className='topIcon fab fa-twitter-square'></i>
        <i className='topIcon fab fa-pinterest-square'></i>
        <i className='topIcon fab fa-instagram-square'></i>

      </div>
      <div className="topCenter">
        <div className="topList">
          <ul className="topList">
         
            <li className='topListItem'> <Link className="nav-link" to="/">HOME</Link></li>
            <li className='topListItem'> <Link className="nav-link" to="/about">ABOUT</Link></li>
            <li className='topListItem'> <Link className="nav-link" to="/">CONTACT</Link></li>
            <li className='topListItem'> <Link className="nav-link" to="/">WRITE</Link></li>
            <li className='topListItem'>{user && "LOGOUT"}</li>
          </ul>
        </div>
      </div>
      <div className="topRight">

        {
          user ? (<img className='topImg' src="" alt="" />) : (
            <ul className="topList">
         
         <li className='topListItem'> <Link className="nav-link" to="/login">LOGIN</Link></li>
         <li className='topListItem'> <Link className="nav-link" to="/register">REGISTER</Link></li>
         
       </ul>
          )

        }

        <i className='topSearchIcon fas fa-search'></i>
      </div>

    </div>
  )
}

export default TopBar