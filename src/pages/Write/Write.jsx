import React from 'react'
import "./write.css"

const Write = () => {
  return (
    <div className='write'>
            <img className='writeImg' src="https://images.unsplash.com/photo-1648719194801-6a146847fb1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />

        <form className="writeForm">
        <div className="writeFormGroup">
        <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
        </label>
            <input type="file" id="fileInput" style={{display:"none"}}/>
            <input type="text" placeholder='Title' className='writeInput' autoFocus={true} />
            <textarea placeholder="Tell your Story"
                type="text"
                className='writeInput writeText'
            
            ></textarea>

            <button  className='writeSubmit'>Publish</button>
        </div>
        </form>
    
    </div>
  )
}

export default Write