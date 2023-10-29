import React from 'react'
import "./Intro.css"
import { HashLink as Link } from 'react-router-hash-link'
function Intro() {
  return (
    <div className='intro-top'>
        <div className='intro-left'>
            <div className='line_one'>
                <span>Hello, I'm</span>
            </div>
            <div className='line_two'>
                <span>Shreyansh Saxena</span>
            </div>
            <div className='line_three'>
                <span>MERN Stack Developer</span>
            </div>
            <div className='line_four'>
                <p>With knowledge in development and design, I offer</p>
                <p>the best projects resulting in quality work</p>
            </div>
            <Link className='link-style' to='#contact' smooth>
            <div className='line_five'>
                <button>Hire Me</button>
            </div>
            </Link>
            
        </div>

    </div>
  )
}

export default Intro