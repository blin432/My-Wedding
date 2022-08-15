import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Landing from './Components/Landing';
import Footer from './Components/Footer';
import EventDetails from './Components/EventDetails';
import WeddingParty from './Components/WeddingParty';
import Rsvp from './Components/Rsvp';
import Registry from './Components/Registry';
import Gallery from './Components/Gallery';
import Example from './Components/Example';
import { useState } from "react";
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";

import { Form } from "react-bootstrap";
import SitePasswordModal from './Components/SitePasswordModal';
import axios from 'axios';

function App() {

  const [show, setShow] = useState(true);

  const [password, setPasswordInput] = useState("");
  const [guestData, setguestData] = useState("");
 
  const handleClose = (e) =>{
    e.preventDefault();
    
    axios.get(`https://my-wedding-api-postgres.herokuapp.com/login/${password}`, password, {
      headers: {
           "Content-Type": "application/json",
           "Access-Control-Allow-Origin": "*",
           'Access-Control-Allow-Credentials': 'true'
           }
         }).then(res => {
          if (res.data.length > 0){
            setguestData(res.data[0]);
            setShow(false) ;
          }
           console.log('data',res.data);
         }).catch(err => {
           console.log(err);
         }); 
  };
   
  const textChangeHandler = (e) => setPasswordInput(e.target.value);

  return (
    <div className="App">
        <Navbar  guestData = {guestData} />
        <Landing />
        <EventDetails />
        <WeddingParty />
        <Gallery/>
        <Registry />
        <Footer/>
        <Modal  show={show} onHide={handleClose}  backdrop="static" className="my-modal"
        keyboard={false}>
         <Modal.Header>
           <Modal.Title>Please Enter Password</Modal.Title>
         </Modal.Header>
         <Modal.Body>
           <Form>
             <Form.Group
               className="mb-3"
               controlId="exampleForm.ControlTextarea1"
             >
               <Form.Label>Contact Ben if you don't know password!</Form.Label>
               <Form.Control value = {password} as="textarea" rows={3} onChange={textChangeHandler}/>
             </Form.Group>
           </Form>
         </Modal.Body>
         <Modal.Footer>
           <Button variant="primary" onClick={handleClose}>
             Save Changes
           </Button>
         </Modal.Footer>
       </Modal>
    </div>
  );
}

export default App;
