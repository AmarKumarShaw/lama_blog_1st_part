import React from 'react'
import "./post.css"


const Post = () => {
  return (
    <div className='post'>
        <img src="https://images.unsplash.com/photo-1648614761888-c38cf4b7882b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" className="postImg" />
            <div className="postInfo">
                <div className="postCats">
                    <span className='postCat'>Music</span>
                    <span className='postCat'>Life</span>
                </div>
                <span className="postTitle">
                    Lorem ipsum dolor sit.
                </span>
                <hr />
                <span className='postDate'>1 hour ago</span>
            </div>
            <p className="postDesc">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam dicta possimus laboriosam dolore porro distinctio eveniet quaerat quisquam nobis ipsa, iste animi temporibus aliquam, dolor debitis laudantium mollitia illo, sunt repudiandae? Mollitia dolorem aut dicta?
            </p>
    </div> 
  )
}

export default Post