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
function App() {
  const [show, setShow] = useState(true);
 
  const handleClose = () => setShow(false);

  return (
    <div className="App">
        <Navbar />
        <Landing />
        <EventDetails />
        <WeddingParty />
        <Gallery/>
        <Registry />
        <Footer/>
        <Modal  show={show} onHide={handleClose}  backdrop="static"
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
               <Form.Control as="textarea" rows={3} />
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
