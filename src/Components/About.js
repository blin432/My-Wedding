import React, { Component } from 'react';


function About() {
  
    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"   alt="" />
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>bio</p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
						   <span>Benmjamin </span><br />
						   <span>123<br />
						       
                   </span><br />
						
					   </p>
               </div>
               <div className="columns download">
                  <p>
                     <a  className="button"><i className="fa fa-download"></i>Download Resume</a>
                  </p>
               </div>
            </div>
         </div>
      </div>

   </section>
    );
  
}

export default About;