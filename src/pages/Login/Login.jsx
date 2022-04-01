import React from 'react'
import "./login.css"

const Login = () => {
  return (
    <div className='login'>
    <span className='loginTitle'>Login</span>
            <form className="loginForm">
                <label>Email</label>
                <input className='loginInput' type="text" placeholder='Enter Your Email...' />
                <label>Password</label>
                <input className='loginInput' type="password" placeholder='Enter Your Password...' />
                <button className='loginButton'>Login</button>
                <button className='loginRegisterButton'>Register</button>
            </form>
    </div>
  )
}

export default Login