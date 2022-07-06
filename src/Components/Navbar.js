import React, { Component } from 'react';
import Example from './Example';
import { useState } from "react";
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";

import { Form } from "react-bootstrap";

function Navbar() {
   const [show, setShow] = useState(false);
 
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
 
   return (
      <div>
         <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
            <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

            <ul id="nav" >
               <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
               <li><a className="smoothscroll" href="#eventDetails">Event Details</a></li>
               <li><a className="smoothscroll" href="#weddingParty">Wedding Party</a></li>
               <li><a className="smoothscroll" href="#gallery">Gallery</a></li>
               <li><a className="smoothscroll" href="#registry">Registry</a></li>
               <li><a className="smoothscroll rsvp-button"  onClick={handleShow}>RSVP</a></li>
            </ul>

         </nav>

         <Modal  show={show} onHide={handleClose}>
            <Modal.Header closeButton>
               <Modal.Title>Hello Guest</Modal.Title>
             </Modal.Header>
            <Modal.Body>
               <p>Will I see you soon?</p>
               <div >
                  <div className="guest-rsvp">
                     <p>Guest 1</p>
                     <select name="guest1" id="guest1">
                        <option value="Yes">YES!</option>
                        <option value="No">NO</option>
                     </select>
                  </div>
                  <div className="guest-rsvp">  
                     <p>Guest 2</p>
                     <select name="guest2" id="guest2">
                        <option value="Yes">YES!</option>
                        <option value="No">NO</option>
                     </select>                    
                  </div>
               </div>
            </Modal.Body>
            <Modal.Footer>
               <Button variant="secondary" onClick={handleClose}>
                  Close
               </Button>
               <Button variant="primary" onClick={handleClose}>
                  Save Changes
               </Button>
            </Modal.Footer>
         </Modal>
      </div>
   );
}

export default Navbar;