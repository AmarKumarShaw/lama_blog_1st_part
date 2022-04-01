import React from 'react'
import "./singlepost.css"

const SinglePost = () => {
  return (
    <div className='singlePost'>
            <div className="singlePostWrapper">
                <img src="https://images.unsplash.com/photo-1648614761888-c38cf4b7882b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" className='singlePostImg' />
            </div>
            <h1 className="singlePostTitle">Lorem ipsum dolor sit.
            <div className="singlePostEdit">
                <i className='singlePostIcon far fa-edit'></i>
                <i className='singlePostIcon far fa-trash-alt'></i>
            </div>
            </h1>
            <div className="singlePostInfo">
                <span className='singlePostAuthor'>Author : <b>Safak</b></span>
                <span className='singlePostDate'>1 hour ago</span>
            </div>
            <p className='singlePostDesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident itaque accusantium tempore facere quae vel quod ex perferendis, numquam modi exercitationem dolorem necessitatibus accusamus assumenda nostrum adipisci error beatae repellendus nam at praesentium rem! Repellendus cumque laudantium sint tempore doloremque beatae doloribus, quasi deserunt quaerat provident officiis exercitationem dolores aut, obcaecati voluptatem. Repellendus delectus harum cumque, consequatur deserunt mollitia soluta maxime sequi excepturi corporis nostrum unde debitis ullam iusto veritatis, animi alias atque modi aperiam! Blanditiis nulla eum beatae iure asperiores, eligendi incidunt ducimus, magni vitae dolorum officia porro vero!</p>
    </div>
  )
}

export default SinglePost