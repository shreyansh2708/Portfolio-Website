import React from 'react'
import Header from './Header'
import "./Home.css"
import Intro from './Intro'

function Home() {
  return (
    <div id = 'top' className='home'>
        <Header />
        <Intro />
    </div>
  )
}

export default Home