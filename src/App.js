import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Homescreen from './screens/Homescreen';
import Room from './components/Rooms';
import { BookingPage } from './screens/BookingPage';
import BookingConfirmation from './screens/BookingConfirmation';
import Login from './screens/LoginScreen';
import Register from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';



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
        <Routes>
          <Route path="/login" exact Component={LoginScreen} />
        </Routes>
        <Routes>
          <Route path="/register" exact Component={RegisterScreen} />
        </Routes>


      </Router>


      
    </div>
  );
}

export default App;
