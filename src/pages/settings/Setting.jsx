import React from 'react'
import "./setting.css"
import Sidebar from './../../components/Sidebar/Sidebar';


const Setting = () => {
    return (
        <div className='settings'>
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">
                        Update Your Account
                    </span>
                    <span className='settingsDeleteTitle'>Delete</span>
                </div>
                <form className="settingsForm">
                    <label>Profile Picture</label>
                    <div className="settingsPP">
                        <img src="https://images.unsplash.com/photo-1648719194801-6a146847fb1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
                    <label htmlFor="fileInput">
                        <i className='settingsPPIcon far fa-user-circle'></i>
                    </label>
                    <input type="file" id="fileInput" style={{display:"none"}} />
                    </div>
                    <label >Username</label>
                    <input type="text" placeholder="Safak" />
                    <label >Email</label>
                    <input type="text" placeholder="Safak@gmail.com" />
                    <label >Password</label>
                    <input type="password" placeholder="Safak" />
                    <button     className='settingsSubmit'>Update</button>
                </form>
            </div>


            <Sidebar />
        </div>
    )
}

export default Setting