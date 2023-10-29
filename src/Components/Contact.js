import React from 'react'
import "./Contact.css"
import { Icon } from '@iconify/react';
function Contact() {
  return (
    <div id='contact' className='contact-top'>
        <Icon className="icon" icon="ic:outline-work" color="white" width="45" height="36"/>
        <h1 className='h1-hire'>Hire Me</h1>
        <div className='hire-box'>
        <div className='hire-input'>
            <div className='input'>
                <p className='input-name'>Name</p>
                <textarea className='input-box' placeholder="Your Name" rows="3" cols="25"></textarea>
            </div>
            <div className='input'>
                <p className='input-name'>E-mail</p>
                <textarea className='input-box' placeholder="john@yahoo.com" rows="3" cols="50"></textarea>
            </div>
            <div className='input'>
                <p className='input-name'>Message</p>
                <textarea  placeholder="Your Message" rows="6" cols="50"></textarea>
            </div>
            <div className='submit'>
            <a href="/response-page">
                <button>Submit</button>
            </a>
            </div>
        </div>       
        </div>
        
    </div>
  )
}

export default Contact