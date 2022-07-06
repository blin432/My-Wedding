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
        {/* <div className="password-cover" show={show} onHide={handleClose}>
          123123123
          <div variant="primary" onClick={handleClose}>
              Save Changes
          </div>
        </div> */}
        <div className="site-password-modal-container"  data-backdrop="static" show={show} onHide={handleClose}>
          <div className ="site-password-modal">
                  <Form> 
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                  </Form.Group>
                </Form>
                <Button variant="primary" onClick={handleClose}>
                  Save Changes
                </Button>  
          </div>
        </div>
    </div>
  );
}

export default App;
