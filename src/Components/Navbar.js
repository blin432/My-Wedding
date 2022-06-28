import React, { Component } from 'react';

function Navbar() {
   return (
      <nav id="nav-wrap">
         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#eventDetails">Event Details</a></li>
	         <li><a className="smoothscroll" href="#weddingParty">Wedding Party</a></li>
            <li><a className="smoothscroll" href="#gallery">Gallery</a></li>
            <li><a className="smoothscroll" href="#registry">Registry</a></li>
            <li><a className="smoothscroll" href="#rsvp">RSVP</a></li>
         </ul>
      </nav>
   );
}

export default Navbar;