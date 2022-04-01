import React from 'react'
import "./home.css"
import Sidebar from '../../components/Sidebar/Sidebar'
import Posts from '../../components/Posts/Posts'
import Header from "../../components/Header/Header"

const Home = () => {
  return (
    <>
        <Header />
        <div className="home">
        <Posts/>
        <Sidebar />
        </div>

    </>
  )
}

export default Home