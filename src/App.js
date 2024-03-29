import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Homescreen from './screens/Homescreen';
import Room from './components/Rooms';
import { BookingPage } from './screens/BookingPage';
import BookingConfirmation from './screens/BookingConfirmation';



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router>
        <Routes>
          <Route path="/" exact Component={Homescreen} />
        </Routes>
        <Routes>
          <Route path="/booking" exact Component={BookingPage} />
        </Routes>
        <Routes>
          <Route path="/bookingConfirmation" exact Component={BookingConfirmation} />
        </Routes>

      </Router>


      
    </div>
  );
}

export default App;
