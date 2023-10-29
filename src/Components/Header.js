import React from 'react'
import "./Header.css"

import { HashLink as Link } from 'react-router-hash-link'
function Header() {
  return (
    <div class="top">
        <div class="left-ele">
            <span className='name'>Shreyansh</span>
        </div>
        <div class="right-ele">
            <div class="items">
                <span>Home</span>
            </div>
            <Link className='link-style' to='#skills' smooth>
            <div class="items">
                <span>Skills</span>
            </div>
            </Link>
           
            <Link className='link-style' to='#projects' smooth>
            <div class="items">
                <span>Projects</span>
            </div>
            </Link> 
            <Link className='link-style' to='#contact' smooth>
            <div class="items">
                <span>Contact Me</span>
            </div>
            </Link>
        
        </div>
    </div>
  )
}

export default Header