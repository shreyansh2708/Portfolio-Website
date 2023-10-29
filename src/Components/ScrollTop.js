import React from 'react'
import "./ScrollTop.css"
import { Icon } from '@iconify/react';
import { HashLink as Link } from 'react-router-hash-link'
function ScrollTop() {
  return (
    <Link to='#top' smooth>
    <div className='scroll-to-top'>
        <button><Icon icon="zondicons:arrow-up" /></button>
    </div>
    </Link>
  )
}

export default ScrollTop;