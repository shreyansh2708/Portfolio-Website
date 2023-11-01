import React from 'react'
import "./Projects.css";

function Projects() {
  return (
    <div id='projects' className='project-top'>
        <h1 className='h1-project'>Projects</h1>
        <div className='my-project'>
            <div className='project' >
                <p className='text'>E-Commerce Website</p>
               
                <img src="https://ecommerceguide.com/wp-content/uploads/2020/02/India-1Amazon.jpg" alt="" width="400px" height="250px"></img>
                
            </div>
            
            <div className='project'>
            <p className='text'>Appointment Management System</p>
                
                <img src="https://medishala.com/img/blog/2018-healthcare-tech.jpg" alt="" width="400px" height="250px"></img> 
                
            </div>

            <div className='project'>
            <p className='text'>Automate Web</p>
            
                <img src="https://www.testim.io/wp-content/uploads/2019/11/browser_automation_blog.jpg" alt="" width="400px" height="250px"></img>
            
            </div>
            <div className='project'>
            <p className='text'>Portfolio Website</p>
            
                <img src="https://www.investopedia.com/thmb/6wht1j1h_hJs0jlr31fKbXT0EJk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-932251156-44ba5ec903d547e695ec0489c9ab1624.jpg" alt="" width="400px" height="250px"></img>
            
            </div>
        </div>
    </div>
  );
}

export default Projects;