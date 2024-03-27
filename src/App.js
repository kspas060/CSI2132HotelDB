import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Homescreen from './screens/Homescreen';
import Room from './components/Rooms';



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router>
        <Routes>
        <Route path="/home" exact Component={Homescreen} />
        </Routes>
      </Router>

    <Room/>
    <Room/>
      
    </div>
  );
}

export default App;
