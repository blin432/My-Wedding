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

function App() {
  return (
    <div className="App">
        <Navbar />
        <Landing />
        <EventDetails />
        <WeddingParty />
        <Gallery/>
        <Registry />
        <Rsvp />
        <Footer/>
    </div>
  );
}

export default App;
